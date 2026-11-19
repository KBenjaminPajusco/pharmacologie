/* Convertit la base du site de révision (data.js) en molecules.js pour les jeux.
   Usage : node tools/build-molecules.js <chemin vers data.js du site> [sortie]
   Le fichier du site est lu comme du texte et parsé en JSON : il n'est jamais exécuté.
   Le contenu (classes, mécanismes, indications, notes, pages) vient du site, donc du cours.
   Ce script ajoute seulement : le regroupement en classes jouables, des noms courts,
   des affixes repères, des images mentales (tip) et les groupes du jeu des 7 familles. */
const fs = require('fs');
const path = require('path');
const src = process.argv[2];
const out = process.argv[3] || path.join(__dirname, '..', 'molecules.js');
if (!src) { console.error('Usage : node tools/build-molecules.js <data.js> [sortie]'); process.exit(1); }

function extractJSON(text, marker) {
  const s = text.indexOf(marker); if (s < 0) throw new Error('Introuvable : ' + marker);
  const i = Math.min(...['[', '{'].map(c => { const k = text.indexOf(c, s); return k < 0 ? Infinity : k; }));
  const open = text[i], close = open === '[' ? ']' : '}';
  let d = 0, inStr = false, esc = false, j = i;
  for (; j < text.length; j++) {
    const ch = text[j];
    if (inStr) { if (esc) esc = false; else if (ch === '\\') esc = true; else if (ch === '"') inStr = false; continue; }
    if (ch === '"') inStr = true; else if (ch === open) d++; else if (ch === close) { d--; if (!d) break; }
  }
  return JSON.parse(text.slice(i, j + 1));
}
const text = fs.readFileSync(src, 'utf8');
const courses = extractJSON(text, 'const courses=');
const raw = extractJSON(text, 'const molecules=');

/* ---------- Quartiers = cours ---------- */
const DISTRICT_STYLE = {
  C7:  { name: 'Sérotonine-Ville',  color: '#ff7a6b', blurb: 'Cours 6 · transmission sérotoninergique (5-HT).' },
  C8:  { name: 'Quartier GABA',     color: '#7f8cff', blurb: 'Cours 7 · GABA, glutamate et glycine.' },
  C9:  { name: 'Port des Peptides', color: '#c38bff', blurb: 'Cours 8 · transmission peptidergique.' },
  C10: { name: 'Île du NO',         color: '#5ef0c0', blurb: 'Cours 4 · monoxyde d’azote.' },
  C11: { name: 'Purine-Heights',    color: '#ffc94a', blurb: 'Cours 4 · bases puriques.' }
};
const districts = courses.map(([id, title]) => ({ id, title, ...(DISTRICT_STYLE[id] || { name: title, color: '#9fb4c7', blurb: '' }) }));

/* ---------- Classes jouables ----------
   match : valeurs du champ « classe » du site rattachées à cette classe. */
const CLASSES = [
  // C7 · Sérotonine
  { id: 'triptan', district: 'C7', name: 'Triptans et ditans', short: 'Triptan', affix: '-triptan', affixKind: 'suffixe', color: '#ff8a7a',
    match: ['Triptan', 'Ditan'], target: 'Récepteurs 5-HT1B/1D (5-HT1F pour le ditan)', signature: 'Crise migraineuse',
    tip: 'Le triptan resserre les vaisseaux de la méninge : la migraine s’arrête.' },
  { id: 'isrs', district: 'C7', name: 'ISRS', short: 'ISRS', affix: null, affixKind: null, color: '#ff6b81',
    match: ['ISRS'], target: 'Transporteur de la sérotonine (SERT)', signature: 'Dépression',
    tip: 'Sélectif : seul SERT est bloqué, la 5-HT reste dans la synapse.' },
  { id: 'irsna', district: 'C7', name: 'IRSNA', short: 'IRSNA', affix: null, affixKind: null, color: '#ff9f6b',
    match: ['IRSNA'], target: 'Transporteurs SERT et NET', signature: 'Dépression',
    tip: 'Double barrage : sérotonine ET noradrénaline restent dehors.' },
  { id: 'tricyclique', district: 'C7', name: 'Antidépresseurs tricycliques', short: 'Tricycl.', affix: '-ipramine', affixKind: 'suffixe', color: '#e8705a',
    match: ['Antidépresseur tricyclique'], target: 'Recapture des monoamines', signature: 'Dépression',
    tip: 'Trois cycles, et toutes les monoamines bloquées à la recapture.' },
  { id: 'alpha2', district: 'C7', name: 'Antidépresseurs antagonistes α2', short: 'Anti-α2', affix: null, affixKind: null, color: '#f0807a',
    match: ['Antidépresseur antagoniste α2'], target: 'Récepteurs α2 présynaptiques', signature: 'Dépression',
    tip: 'On retire le frein α2 : les monoamines sont libérées plus librement.' },
  { id: 'imao', district: 'C7', name: 'IMAO', short: 'IMAO', affix: null, affixKind: null, color: '#d9625a',
    match: ['IMAO non sélectif irréversible', 'IMAO-A réversible'], target: 'Monoamine oxydases (MAO-A ± MAO-B)', signature: 'Dépression',
    tip: 'On désarme l’enzyme qui détruit les monoamines.' },
  { id: 'melato', district: 'C7', name: 'Mélatoninergiques', short: 'Mélato', affix: null, affixKind: null, color: '#ffb199',
    match: ['Agoniste mélatoninergique', 'Antidépresseur mélatoninergique'], target: 'Récepteurs MT1 / MT2', signature: 'Rythme veille–sommeil, dépression',
    tip: 'MT1/MT2 : l’horloge de la nuit.' },
  { id: 'antipsy', district: 'C7', name: 'Antipsychotiques atypiques', short: 'Antipsy.', affix: null, affixKind: null, color: '#ff7aa8',
    match: ['Antipsychotique atypique'], target: 'Récepteurs 5-HT et D2', signature: 'Psychoses',
    tip: 'Atypique = une touche de sérotonine en plus du blocage dopaminergique.' },
  { id: 'setron', district: 'C7', name: 'Sétrons', short: 'Sétron', affix: '-sétron', affixKind: 'suffixe', color: '#ffa07a',
    match: ['Sétron'], target: 'Récepteurs 5-HT3', signature: 'Nausées et vomissements',
    tip: 'SÉTRON : il éteint le récepteur 5-HT3, le seul canal ionique de la famille.' },
  { id: 'sero_autres', district: 'C7', name: 'Autres récepteurs 5-HT', short: '5-HT div.', affix: null, affixKind: null, color: '#ffc2a8',
    match: ['Anxiolytique sérotoninergique', 'Agoniste sérotoninergique prokinétique', 'Antagoniste sérotoninergique et antihistaminique'],
    target: 'Un récepteur 5-HT par molécule (1A, 4, 2A)', signature: 'Anxiété, constipation, allergie',
    tip: 'Un récepteur, une indication : 1A anxiété, 4 intestin, 2A + H1 allergie.' },
  { id: 'liberateur', district: 'C7', name: 'Libérateurs et repères 5-HT', short: 'Repères', affix: null, affixKind: null, color: '#e6a08f',
    match: ['Exemple historique de modulation sérotoninergique', 'Famille de psychostimulants', 'Précurseur dopaminergique cité par comparaison'],
    target: 'Stockage et libération des monoamines', signature: 'Exemples du cours',
    tip: 'Ils vident les vésicules : libération massive de monoamines.' },

  // C8 · GABA, glutamate, glycine
  { id: 'bzd', district: 'C8', name: 'Benzodiazépines', short: 'BZD', affix: '-azépam / -azolam', affixKind: 'suffixe', color: '#7f8cff',
    match: ['Benzodiazépine'], target: 'Site BZD du récepteur GABA-A', signature: 'Anxiolyse, sédation, anticonvulsivant',
    tip: 'Elles augmentent la FRÉQUENCE d’ouverture du canal chlorure, en présence de GABA.' },
  { id: 'zdrug', district: 'C8', name: 'Hypnotiques apparentés (Z)', short: 'Z-drug', affix: 'z-', affixKind: 'préfixe', color: '#5c7cfa',
    match: ['Hypnotique apparenté aux benzodiazépines'], target: 'GABA-A, préférence sous-unité α1', signature: 'Insomnie',
    tip: 'Z comme zzz : site BZD, préférence α1, juste pour dormir.' },
  { id: 'gaba_pot', district: 'C8', name: 'Potentialisateurs du GABA-A', short: 'Pot. GABA', affix: null, affixKind: null, color: '#748ffc',
    match: ['Barbiturique', 'Anesthésique général volatil', 'Anesthésique général injectable', 'Modulateur GABA-A'],
    target: 'Récepteur GABA-A (hors site BZD)', signature: 'Anesthésie, épilepsie',
    tip: 'Barbituriques : DURÉE d’ouverture ↑ (BZD = fréquence). Anesthésiques : canal grand ouvert.' },
  { id: 'gaba_ligand', district: 'C8', name: 'Ligands du GABA-A (outils et antidote)', short: 'GABA-A', affix: null, affixKind: null, color: '#91a7ff',
    match: ['Agoniste GABA-A orthostérique', 'Antagoniste GABA-A orthostérique', 'Bloqueur du canal GABA-A', 'Modulateurs allostériques négatifs GABA-A', 'Antagoniste du site des benzodiazépines'],
    target: 'Récepteur GABA-A : site GABA, pore ou site BZD', signature: 'Outils pharmacologiques ; flumazénil = antidote',
    tip: 'Trois portes : site GABA (muscimol / bicuculline), pore (picrotoxine), site BZD (flumazénil, β-carbolines).' },
  { id: 'gaba_meta', district: 'C8', name: 'Synthèse, dégradation et recapture du GABA', short: 'Méta GABA', affix: null, affixKind: null, color: '#4c6ef5',
    match: ['Antiépileptique et thymorégulateur', 'Antiépileptique inhibiteur de GABA-T', 'Antiépileptique inhibiteur de recapture du GABA'],
    target: 'GABA-T, transporteurs GAT, synthèse du GABA', signature: 'Épilepsie',
    tip: 'VIGAbatrine bloque la GABA-T, TIAgabine bloque GAT : plus de GABA disponible.' },
  { id: 'gabab', district: 'C8', name: 'Agonistes GABA-B', short: 'GABA-B', affix: null, affixKind: null, color: '#5f3dc4',
    match: ['Agoniste GABA-B', 'Agoniste GABA-B cité dans le cours'], target: 'Récepteur GABA-B (couplé Gi/o)', signature: 'Spasticité, narcolepsie',
    tip: 'GABA-B = métabotropique, Gi/o : le frein lent de la moelle.' },
  { id: 'nmda', district: 'C8', name: 'Antagonistes NMDA', short: 'NMDA', affix: null, affixKind: null, color: '#3b5bdb',
    match: ['Antagoniste NMDA', 'Antagoniste NMDA cité dans le cours', 'Antagoniste NMDA expérimental cité', 'Antagoniste NMDA non compétitif', 'Antagoniste NMDA compétitif', 'Bloqueur expérimental du canal NMDA'],
    target: 'Récepteur-canal NMDA du glutamate', signature: 'Anesthésie, dépression, Alzheimer, Parkinson',
    tip: 'Compétitif = site du glutamate (AP5, AP7). Non compétitif = dans le canal (kétamine, PCP, MK-801).' },
  { id: 'glu_lib', district: 'C8', name: 'Inhibiteurs de la libération du glutamate', short: 'Anti-Glu', affix: null, affixKind: null, color: '#4263eb',
    match: ['Antiépileptique inhibant la libération de glutamate', 'Modulateur de la transmission glutamatergique'],
    target: 'Libération présynaptique de glutamate', signature: 'Épilepsie, SLA',
    tip: 'Moins de glutamate libéré, moins d’excitation.' },
  { id: 'glycine', district: 'C8', name: 'Glycine et toxines', short: 'Glycine', affix: null, affixKind: null, color: '#364fc7',
    match: ['Antagoniste des récepteurs de la glycine', 'Toxine bloquant la libération de médiateurs inhibiteurs', 'Toxine cholinergique citée pour comparaison', 'Décontractant musculaire cité dans le cours'],
    target: 'Inhibition médullaire (récepteur glycine, libération des médiateurs)', signature: 'Convulsions, spasmes',
    tip: 'On coupe le frein de la moelle : convulsions (strychnine, tétanos).' },

  // C9 · Peptides
  { id: 'opioide', district: 'C9', name: 'Opioïdes', short: 'Opioïde', affix: null, affixKind: null, color: '#c38bff',
    match: ['Antalgique opioïde · palier III', 'Antalgique opioïde · palier II', 'Opioïde cité en contexte de dépendance', 'Antagoniste des récepteurs opioïdes'],
    target: 'Récepteurs opioïdes', signature: 'Douleur (paliers II et III) ; naloxone = antidote',
    tip: 'Palier II : codéine, tramadol. Palier III : morphine et compagnie. Naloxone : l’antidote.' },
  { id: 'opio_dig', district: 'C9', name: 'Antidiarrhéiques', short: 'Antidiarr.', affix: null, affixKind: null, color: '#b197fc',
    match: ['Antidiarrhéique opioïde périphérique', 'Antidiarrhéique antisécrétoire'], target: 'Récepteurs μ intestinaux / enképhalinase', signature: 'Diarrhée',
    tip: 'Lopéramide ralentit le transit, racécadotril réduit les sécrétions.' },
  { id: 'palier1', district: 'C9', name: 'Antalgiques non opioïdes (palier I)', short: 'Palier I', affix: null, affixKind: null, color: '#d0bfff',
    match: ['Antalgique non opioïde · palier I', 'Famille d’antalgiques non opioïdes'], target: 'Non détaillé dans ce chapitre', signature: 'Douleur · palier I',
    tip: 'Palier I : on commence par là, sans opioïde.' },
  { id: 'ara2', district: 'C9', name: 'ARA-II (sartans)', short: 'ARA-II', affix: '-sartan', affixKind: 'suffixe', color: '#9775fa',
    match: ['ARA-II · sartan'], target: 'Récepteur AT1 de l’angiotensine II', signature: 'HTA, insuffisance cardiaque',
    tip: '-SARTAN : on bloque AT1. Ne pas confondre avec -SENTAN (endothéline).' },
  { id: 'iec', district: 'C9', name: 'IEC', short: 'IEC', affix: '-pril', affixKind: 'suffixe', color: '#845ef7',
    match: ['Inhibiteur de l’enzyme de conversion · IEC'], target: 'Enzyme de conversion de l’angiotensine (ECA)', signature: 'HTA, insuffisance cardiaque, néphroprotection',
    tip: '-PRIL : l’ECA en prison, plus d’angiotensine II.' },
  { id: 'sentan', district: 'C9', name: 'Antagonistes de l’endothéline (sentans)', short: 'Sentan', affix: '-sentan', affixKind: 'suffixe', color: '#7048e8',
    match: ['Antagoniste des récepteurs de l’endothéline · sentan'], target: 'Récepteurs de l’endothéline (ETA ± ETB)', signature: 'HTAP',
    tip: '-SENTAN : poumon (HTAP). -SARTAN : tension.' },
  { id: 'nk1_cgrp', district: 'C9', name: 'Anti-NK1 et anti-CGRP', short: 'NK1/CGRP', affix: null, affixKind: null, color: '#e599f7',
    match: ['Antagoniste NK1', 'Anticorps de la voie CGRP'], target: 'Récepteur NK1 (substance P) / voie du CGRP', signature: 'Vomissements chimio-induits, migraine',
    tip: 'Aprépitant bloque NK1 ; les -mab visent la voie du CGRP.' },
  { id: 'peptide_endo', district: 'C9', name: 'Peptides endogènes', short: 'Endogène', affix: null, affixKind: null, color: '#da77f2',
    match: ['Tachykinine endogène', 'Neuropeptide endogène', 'Peptides opioïdes endogènes', 'Peptide opioïde endogène', 'Peptide du SRAA', 'Peptide vasculaire endogène'],
    target: 'Récepteurs couplés aux protéines G', signature: 'Ligands naturels du cours',
    tip: 'Les ligands maison : chacun a son récepteur et son couplage G.' },
  { id: 'psychoactif', district: 'C9', name: 'Substances psychoactives', short: 'Psychoact.', affix: null, affixKind: null, color: '#be4bdb',
    match: ['Substance psychoactive'], target: 'Systèmes opioïdes endogènes (circuit de récompense)', signature: 'Circuit de récompense',
    tip: 'Elles allument le circuit de la récompense via les opioïdes endogènes.' },

  // C10 · NO
  { id: 'nitre', district: 'C10', name: 'Dérivés nitrés et apparentés', short: 'Nitrés', affix: null, affixKind: null, color: '#5ef0c0',
    match: ['Dérivé nitré vasodilatateur', 'Vasodilatateur apparenté aux donneurs de NO'], target: 'Voie NO → guanylate cyclase soluble → GMPc', signature: 'Angor',
    tip: 'NITR- dans le nom : ils livrent du NO, GMPc ↑, le muscle lisse vasculaire se relâche.' },
  { id: 'no_nos', district: 'C10', name: 'NO et inhibiteurs de NOS', short: 'NO / NOS', affix: null, affixKind: null, color: '#20c997',
    match: ['Gaz médiateur vasodilatateur', 'Inhibiteur expérimental de NO-synthase'], target: 'Guanylate cyclase soluble / NO-synthases', signature: 'Vasodilatation ; outils expérimentaux',
    tip: 'L-NAME et L-NMMA miment l’arginine pour bloquer la NOS.' },

  // C11 · Purines
  { id: 'adenosine', district: 'C11', name: 'Adénosine et ATP', short: 'Adénos.', affix: null, affixKind: null, color: '#ffc94a',
    match: ['Agoniste purinergique endogène', 'Nucléotide purinergique utilisé en thérapeutique'], target: 'Récepteurs A1 du nœud auriculoventriculaire', signature: 'Tachycardie jonctionnelle',
    tip: 'A1 au nœud AV : on ralentit la conduction et la tachycardie s’arrête.' },
  { id: 'xanthine', district: 'C11', name: 'Méthylxanthines', short: 'Xanthine', affix: null, affixKind: null, color: '#fab005',
    match: ['Méthylxanthine bronchodilatatrice', 'Méthylxanthine psychoexcitante'], target: 'Récepteurs de l’adénosine (antagonisme) ± phosphodiestérases', signature: 'Asthme (ancien), éveil',
    tip: 'Le café bloque l’adénosine, la molécule de la fatigue.' },
  { id: 'p2y12', district: 'C11', name: 'Antagonistes P2Y12', short: 'P2Y12', affix: '-grel', affixKind: 'suffixe', color: '#f59f00',
    match: ['Thiénopyridine antiagrégante', 'Antiagrégant antagoniste P2Y12 réversible'], target: 'Récepteur plaquettaire P2Y12 (ADP)', signature: 'Prévention des thromboses artérielles',
    tip: 'Thiénopyridines = prodrogues irréversibles. Ticagrélor = actif et réversible.' },
  { id: 'purine_autres', district: 'C11', name: 'Autres leviers purinergiques', short: 'Purin. div.', affix: null, affixKind: null, color: '#ffd43b',
    match: ['Antiagrégant plaquettaire', 'Antiagrégant par inhibition de COX-1', 'Antagoniste P2X3 cité dans le tableau'], target: 'Adénosine / PDE, COX-1, P2X3 selon la molécule', signature: 'Antiagrégation ; P2X3 (tableau)',
    tip: 'Dipyridamole : plus d’adénosine. Aspirine : COX-1. Géfapixant : P2X3.' }
];

/* Doublons de nom dans le site : on garde une seule fiche par molécule. */
const PREFER = { 'Éthanol': 'C8', 'Acide acétylsalicylique (aspirine)': 'C11' };

/* Groupes pour le jeu des 7 familles (au moins 4 cartes chacun). */
const GROUPS = [
  { id: 'g_migraine', name: 'Antimigraineux', classes: ['triptan', 'nk1_cgrp'] },
  { id: 'g_isrs', name: 'ISRS', classes: ['isrs'] },
  { id: 'g_ad', name: 'Autres antidépresseurs', classes: ['irsna', 'tricyclique', 'alpha2', 'imao'] },
  { id: 'g_5ht', name: 'Récepteurs 5-HT variés', classes: ['setron', 'sero_autres', 'melato'] },
  { id: 'g_antipsy', name: 'Antipsychotiques et libérateurs', classes: ['antipsy', 'liberateur'] },
  { id: 'g_bzd', name: 'Benzodiazépines', classes: ['bzd'] },
  { id: 'g_hypno', name: 'Hypnotiques et anesthésiques', classes: ['zdrug', 'gaba_pot'] },
  { id: 'g_gabaa', name: 'Ligands du GABA-A', classes: ['gaba_ligand'] },
  { id: 'g_gabameta', name: 'GABA : métabolisme et GABA-B', classes: ['gaba_meta', 'gabab'] },
  { id: 'g_nmda', name: 'Antagonistes NMDA', classes: ['nmda'] },
  { id: 'g_gluglY', name: 'Glutamate et glycine', classes: ['glu_lib', 'glycine'] },
  { id: 'g_opio', name: 'Opioïdes', classes: ['opioide'] },
  { id: 'g_douleur', name: 'Douleur et digestif', classes: ['palier1', 'opio_dig', 'psychoactif'] },
  { id: 'g_sraa', name: 'SRAA et endothéline', classes: ['ara2', 'iec', 'sentan'] },
  { id: 'g_peptides', name: 'Peptides endogènes', classes: ['peptide_endo'] },
  { id: 'g_no', name: 'Voie du NO', classes: ['nitre', 'no_nos'] },
  { id: 'g_p2y12', name: 'Antiagrégants P2Y12', classes: ['p2y12'] },
  { id: 'g_adeno', name: 'Adénosine et compagnie', classes: ['adenosine', 'xanthine', 'purine_autres'] }
];

/* ---------- Construction ---------- */
const byMatch = new Map();
CLASSES.forEach(c => c.match.forEach(m => byMatch.set(m, c.id)));
const classMap = new Map(CLASSES.map(c => [c.id, { ...c, molecules: [] }]));
const seen = new Set(), problems = [];
const norm = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
function affixOk(name, affix, kind) {
  if (!affix) return true;
  const n = norm(name.split(' (')[0]);
  return affix.split('/').map(a => norm(a.trim())).some(a => kind === 'préfixe' ? n.startsWith(a.replace(/-$/, '')) : n.endsWith(a.replace(/^-/, '')));
}
for (const m of raw) {
  if (PREFER[m.dci] && PREFER[m.dci] !== m.course) continue;
  if (seen.has(m.dci)) { problems.push('Doublon ignoré : ' + m.dci); continue; }
  const cid = byMatch.get(m.classe);
  if (!cid) { problems.push('Classe non rattachée : ' + m.classe + ' (' + m.dci + ')'); continue; }
  seen.add(m.dci);
  const c = classMap.get(cid);
  c.molecules.push({
    n: m.dci,
    note: m.classe !== c.name ? m.classe : '',
    trap: !affixOk(m.dci, c.affix, c.affixKind) || undefined,
    kind: m.kind,
    mecanisme: m.mechanisme || '',
    indication: m.indication || '',
    remarque: m.note || '',
    source: m.source || '',
    pages: m.pages || ''
  });
}
const classes = [...classMap.values()].filter(c => c.molecules.length).map(c => {
  const first = c.molecules[0];
  const mechs = [...new Set(c.molecules.map(x => x.mecanisme))];
  const { match, ...rest } = c;
  return { ...rest, mechanism: mechs.length === 1 ? mechs[0] : c.target, ei: [], ci: [], interactions: [] };
});
for (const c of classes) for (const m of c.molecules) if (m.trap === undefined) delete m.trap;

const header = `/* =====================================================================
   Base de molécules du CC2 de pharmacologie, partagée par tous les jeux.
   GÉNÉRÉ par tools/build-molecules.js à partir de la base du site de révision
   (contenu issu des cours, avec la page source de chaque molécule).
   Ne pas modifier à la main : relancer le script si le site change.

   Ajouts du script (pas dans le cours) : regroupement en classes jouables,
   noms courts, affixes repères, images mentales (tip), groupes des 7 familles.
   Le cours ne liste pas d'effets indésirables ni de contre-indications :
   ei, ci et interactions sont vides. « signature » = indication principale.

   Classe : id, name, short, district (= cours), affix, affixKind, target,
     mechanism, signature, tip, color, ei[], ci[], interactions[],
     molecules: [{ n, note, trap?, kind, mecanisme, indication, remarque, source, pages }]
     kind : DCI | Famille | Repère | Réactif | Toxine | Recherche
   ===================================================================== */
`;
const data = { districts, classes, groups: GROUPS };
const js = header + 'window.PHARMA = ' + JSON.stringify(data, null, 1) + ';\n\n' +
  '/* Index pratique : liste plate des molécules avec leur classe. */\n' +
  'window.PHARMA.all = window.PHARMA.classes.flatMap(c => c.molecules.map(m => ({ ...m, cls: c })));\n';
fs.writeFileSync(out, js);

const total = classes.reduce((s, c) => s + c.molecules.length, 0);
console.log(`${total} molécules, ${classes.length} classes, ${districts.length} quartiers, ${GROUPS.length} groupes → ${out}`);
GROUPS.forEach(g => { const n = g.classes.reduce((s, id) => s + (classes.find(c => c.id === id)?.molecules.length || 0), 0); console.log((n < 4 ? '!! ' : '   ') + g.name + ' : ' + n); });
classes.forEach(c => console.log('   ' + c.district + ' ' + c.short.padEnd(11) + c.molecules.length + '  ' + c.molecules.map(m => m.n + (m.trap ? '*' : '')).join(', ')));
problems.forEach(p => console.log('!! ' + p));
