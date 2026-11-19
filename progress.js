/* =====================================================================
   Progression partagée entre les jeux (même dossier = même origine
   = même localStorage). Charger après molecules.js.
   API :
     Progress.getXP()              -> { xp, lvl, need }   (xp dans le niveau courant)
     Progress.addXP(n)             -> { leveledUp, lvl }
     Progress.record(nom, ok)      -> enregistre une réponse sur une molécule
     Progress.mastery(nom)         -> 0..1 (décroît si pas revue depuis longtemps)
     Progress.stats(nom)           -> { seen, ok, streak, last } ou null
     Progress.due(n)               -> n noms de molécules à revoir en priorité
     Progress.get(cle, defaut) / Progress.set(cle, valeur)  -> stockage libre par jeu
     Progress.on(fn)               -> fn(evenement) à chaque changement ('xp' | 'record')
   Tout est protégé par try/catch : le jeu marche même sans stockage.
   ===================================================================== */
(function () {
  const PREFIX = 'pharma:';
  const mem = {};
  function get(k, d) {
    try { const v = localStorage.getItem(PREFIX + k); return v == null ? (k in mem ? mem[k] : d) : JSON.parse(v); }
    catch (e) { return k in mem ? mem[k] : d; }
  }
  function set(k, v) { mem[k] = v; try { localStorage.setItem(PREFIX + k, JSON.stringify(v)); } catch (e) {} }

  const listeners = [];
  const emit = (type) => listeners.forEach(fn => { try { fn(type); } catch (e) {} });
  const need = (l) => 80 + l * 40;

  function getXP() { const s = get('xp', { xp: 0, lvl: 1 }); return { xp: s.xp, lvl: s.lvl, need: need(s.lvl) }; }
  function addXP(n) {
    const s = get('xp', { xp: 0, lvl: 1 }); let up = false;
    s.xp += Math.max(0, Math.round(n));
    while (s.xp >= need(s.lvl)) { s.xp -= need(s.lvl); s.lvl++; up = true; }
    set('xp', s); emit('xp'); return { leveledUp: up, lvl: s.lvl };
  }

  function all() { return get('mastery', {}); }
  function record(name, ok) {
    const m = all(); const r = m[name] || { seen: 0, ok: 0, streak: 0, last: 0 };
    r.seen++; if (ok) { r.ok++; r.streak++; } else { r.streak = 0; }
    r.last = Date.now(); m[name] = r; set('mastery', m); emit('record');
  }
  function stats(name) { return all()[name] || null; }
  function mastery(name) {
    const r = all()[name]; if (!r || !r.seen) return 0;
    const acc = r.ok / r.seen;                              // précision
    const streak = Math.min(1, r.streak / 5);               // 5 bonnes d'affilée = max
    const days = (Date.now() - r.last) / 864e5;
    const halfLife = 1 + r.streak * 1.5;                    // oubli plus lent si série longue
    const decay = Math.pow(0.5, days / halfLife);
    return Math.max(0, Math.min(1, (0.5 * acc + 0.5 * streak) * decay));
  }
  function due(n) {
    const names = (window.PHARMA ? window.PHARMA.all.map(m => m.n) : Object.keys(all()));
    return names.map(nm => ({ nm, s: mastery(nm) + Math.random() * 0.15 }))
      .sort((a, b) => a.s - b.s).slice(0, n).map(x => x.nm);
  }

  window.Progress = { getXP, addXP, record, mastery, stats, due, get, set, on: fn => listeners.push(fn) };
})();
