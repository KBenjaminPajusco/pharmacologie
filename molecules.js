/* =====================================================================
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
window.PHARMA = {
 "districts": [
  {
   "id": "C7",
   "title": "Sérotonine · 5-HT",
   "name": "Sérotonine-Ville",
   "color": "#ff7a6b",
   "blurb": "Cours 6 · transmission sérotoninergique (5-HT)."
  },
  {
   "id": "C8",
   "title": "GABA, glutamate et glycine",
   "name": "Quartier GABA",
   "color": "#7f8cff",
   "blurb": "Cours 7 · GABA, glutamate et glycine."
  },
  {
   "id": "C9",
   "title": "Peptides",
   "name": "Port des Peptides",
   "color": "#c38bff",
   "blurb": "Cours 8 · transmission peptidergique."
  },
  {
   "id": "C10",
   "title": "Monoxyde d’azote · NO",
   "name": "Île du NO",
   "color": "#5ef0c0",
   "blurb": "Cours 4 · monoxyde d’azote."
  },
  {
   "id": "C11",
   "title": "Bases puriques",
   "name": "Purine-Heights",
   "color": "#ffc94a",
   "blurb": "Cours 4 · bases puriques."
  }
 ],
 "classes": [
  {
   "id": "triptan",
   "district": "C7",
   "name": "Triptans et ditans",
   "short": "Triptan",
   "affix": "-triptan",
   "affixKind": "suffixe",
   "color": "#ff8a7a",
   "target": "Récepteurs 5-HT1B/1D (5-HT1F pour le ditan)",
   "signature": "Crise migraineuse",
   "tip": "Le triptan resserre les vaisseaux de la méninge : la migraine s’arrête.",
   "molecules": [
    {
     "n": "Sumatriptan",
     "note": "Triptan",
     "kind": "DCI",
     "mecanisme": "Agoniste 5-HT1B/1D : vasoconstriction méningée et réduction de la libération de peptides algogènes",
     "indication": "Crise migraineuse",
     "remarque": "",
     "source": "Cours 6 · transmission sérotoninergique · p. 14",
     "pages": "14"
    },
    {
     "n": "Rizatriptan",
     "note": "Triptan",
     "kind": "DCI",
     "mecanisme": "Agoniste 5-HT1B/1D : vasoconstriction méningée et réduction de la libération de peptides algogènes",
     "indication": "Crise migraineuse",
     "remarque": "",
     "source": "Cours 6 · transmission sérotoninergique · p. 14",
     "pages": "14"
    },
    {
     "n": "Zolmitriptan",
     "note": "Triptan",
     "kind": "DCI",
     "mecanisme": "Agoniste 5-HT1B/1D : vasoconstriction méningée et réduction de la libération de peptides algogènes",
     "indication": "Crise migraineuse",
     "remarque": "",
     "source": "Cours 6 · transmission sérotoninergique · p. 14",
     "pages": "14"
    },
    {
     "n": "Lasmiditan",
     "note": "Ditan",
     "trap": true,
     "kind": "DCI",
     "mecanisme": "Agoniste 5-HT1F",
     "indication": "Crise migraineuse : exemple de ditan dans le cours",
     "remarque": "Le statut de commercialisation cité dans le poly est un repère daté, non évalué ici.",
     "source": "Cours 6 · transmission sérotoninergique · p. 14",
     "pages": "14"
    }
   ],
   "mechanism": "Récepteurs 5-HT1B/1D (5-HT1F pour le ditan)",
   "ei": [],
   "ci": [],
   "interactions": []
  },
  {
   "id": "isrs",
   "district": "C7",
   "name": "ISRS",
   "short": "ISRS",
   "affix": null,
   "affixKind": null,
   "color": "#ff6b81",
   "target": "Transporteur de la sérotonine (SERT)",
   "signature": "Dépression",
   "tip": "Sélectif : seul SERT est bloqué, la 5-HT reste dans la synapse.",
   "molecules": [
    {
     "n": "Fluoxétine",
     "note": "",
     "kind": "DCI",
     "mecanisme": "Inhibe sélectivement la recapture de sérotonine via SERT",
     "indication": "Dépression",
     "remarque": "DCI relevée dans la figure des structures chimiques, en haut de la page 16.",
     "source": "Cours 6 · transmission sérotoninergique · p. 16",
     "pages": "16"
    },
    {
     "n": "Paroxétine",
     "note": "",
     "kind": "DCI",
     "mecanisme": "Inhibe sélectivement la recapture de sérotonine via SERT",
     "indication": "Dépression",
     "remarque": "DCI relevée dans la figure des structures chimiques, en haut de la page 16.",
     "source": "Cours 6 · transmission sérotoninergique · p. 16",
     "pages": "16"
    },
    {
     "n": "Citalopram",
     "note": "",
     "kind": "DCI",
     "mecanisme": "Inhibe sélectivement la recapture de sérotonine via SERT",
     "indication": "Dépression",
     "remarque": "DCI relevée dans la figure des structures chimiques, en haut de la page 16.",
     "source": "Cours 6 · transmission sérotoninergique · p. 16",
     "pages": "16"
    },
    {
     "n": "Fluvoxamine",
     "note": "",
     "kind": "DCI",
     "mecanisme": "Inhibe sélectivement la recapture de sérotonine via SERT",
     "indication": "Dépression",
     "remarque": "DCI relevée dans la figure des structures chimiques, en haut de la page 16.",
     "source": "Cours 6 · transmission sérotoninergique · p. 16",
     "pages": "16"
    },
    {
     "n": "Sertraline",
     "note": "",
     "kind": "DCI",
     "mecanisme": "Inhibe sélectivement la recapture de sérotonine via SERT",
     "indication": "Dépression",
     "remarque": "DCI relevée dans la figure des structures chimiques, en haut de la page 16.",
     "source": "Cours 6 · transmission sérotoninergique · p. 16",
     "pages": "16"
    }
   ],
   "mechanism": "Inhibe sélectivement la recapture de sérotonine via SERT",
   "ei": [],
   "ci": [],
   "interactions": []
  },
  {
   "id": "irsna",
   "district": "C7",
   "name": "IRSNA",
   "short": "IRSNA",
   "affix": null,
   "affixKind": null,
   "color": "#ff9f6b",
   "target": "Transporteurs SERT et NET",
   "signature": "Dépression",
   "tip": "Double barrage : sérotonine ET noradrénaline restent dehors.",
   "molecules": [
    {
     "n": "Venlafaxine",
     "note": "",
     "kind": "DCI",
     "mecanisme": "Inhibe la recapture de sérotonine et de noradrénaline",
     "indication": "Dépression",
     "remarque": "",
     "source": "Cours 6 · transmission sérotoninergique · p. 15",
     "pages": "15"
    },
    {
     "n": "Duloxétine",
     "note": "",
     "kind": "DCI",
     "mecanisme": "Inhibe la recapture de sérotonine et de noradrénaline",
     "indication": "Dépression",
     "remarque": "",
     "source": "Cours 6 · transmission sérotoninergique · p. 15",
     "pages": "15"
    },
    {
     "n": "Milnacipran",
     "note": "",
     "kind": "DCI",
     "mecanisme": "Inhibe la recapture de sérotonine et de noradrénaline",
     "indication": "Dépression",
     "remarque": "",
     "source": "Cours 6 · transmission sérotoninergique · p. 15",
     "pages": "15"
    }
   ],
   "mechanism": "Inhibe la recapture de sérotonine et de noradrénaline",
   "ei": [],
   "ci": [],
   "interactions": []
  },
  {
   "id": "tricyclique",
   "district": "C7",
   "name": "Antidépresseurs tricycliques",
   "short": "Tricycl.",
   "affix": "-ipramine",
   "affixKind": "suffixe",
   "color": "#e8705a",
   "target": "Recapture des monoamines",
   "signature": "Dépression",
   "tip": "Trois cycles, et toutes les monoamines bloquées à la recapture.",
   "molecules": [
    {
     "n": "Clomipramine",
     "note": "Antidépresseur tricyclique",
     "kind": "DCI",
     "mecanisme": "Inhibition de la recapture des monoamines, décrite dans le chapitre des agonistes indirects",
     "indication": "Dépression",
     "remarque": "Le classement chimique et la sélectivité fine sont présentés de façon ambiguë dans le poly : ils ne sont pas testés dans les QCM de cet espace.",
     "source": "Cours 6 · transmission sérotoninergique · p. 15",
     "pages": "15"
    },
    {
     "n": "Désipramine",
     "note": "Antidépresseur tricyclique",
     "kind": "DCI",
     "mecanisme": "Inhibition de la recapture des monoamines, décrite dans le chapitre des agonistes indirects",
     "indication": "Dépression",
     "remarque": "Le classement chimique et la sélectivité fine sont présentés de façon ambiguë dans le poly : ils ne sont pas testés dans les QCM de cet espace.",
     "source": "Cours 6 · transmission sérotoninergique · p. 15",
     "pages": "15"
    },
    {
     "n": "Amitriptyline",
     "note": "Antidépresseur tricyclique",
     "trap": true,
     "kind": "DCI",
     "mecanisme": "Inhibition de la recapture des monoamines, décrite dans le chapitre des agonistes indirects",
     "indication": "Dépression",
     "remarque": "Le classement chimique et la sélectivité fine sont présentés de façon ambiguë dans le poly : ils ne sont pas testés dans les QCM de cet espace.",
     "source": "Cours 6 · transmission sérotoninergique · p. 15",
     "pages": "15"
    }
   ],
   "mechanism": "Inhibition de la recapture des monoamines, décrite dans le chapitre des agonistes indirects",
   "ei": [],
   "ci": [],
   "interactions": []
  },
  {
   "id": "alpha2",
   "district": "C7",
   "name": "Antidépresseurs antagonistes α2",
   "short": "Anti-α2",
   "affix": null,
   "affixKind": null,
   "color": "#f0807a",
   "target": "Récepteurs α2 présynaptiques",
   "signature": "Dépression",
   "tip": "On retire le frein α2 : les monoamines sont libérées plus librement.",
   "molecules": [
    {
     "n": "Miansérine",
     "note": "Antidépresseur antagoniste α2",
     "kind": "DCI",
     "mecanisme": "Antagonisme α2 présynaptique : levée du frein sur les transmissions monoaminergiques ; antagonisme sérotoninergique associé",
     "indication": "Dépression",
     "remarque": "",
     "source": "Cours 6 · transmission sérotoninergique · p. 16–17",
     "pages": "16–17"
    },
    {
     "n": "Mirtazapine",
     "note": "Antidépresseur antagoniste α2",
     "kind": "DCI",
     "mecanisme": "Antagonisme α2 présynaptique : levée du frein sur les transmissions monoaminergiques ; antagonisme sérotoninergique associé",
     "indication": "Dépression",
     "remarque": "",
     "source": "Cours 6 · transmission sérotoninergique · p. 16–17",
     "pages": "16–17"
    }
   ],
   "mechanism": "Antagonisme α2 présynaptique : levée du frein sur les transmissions monoaminergiques ; antagonisme sérotoninergique associé",
   "ei": [],
   "ci": [],
   "interactions": []
  },
  {
   "id": "imao",
   "district": "C7",
   "name": "IMAO",
   "short": "IMAO",
   "affix": null,
   "affixKind": null,
   "color": "#d9625a",
   "target": "Monoamine oxydases (MAO-A ± MAO-B)",
   "signature": "Dépression",
   "tip": "On désarme l’enzyme qui détruit les monoamines.",
   "molecules": [
    {
     "n": "Iproniazide",
     "note": "IMAO non sélectif irréversible",
     "kind": "DCI",
     "mecanisme": "Inhibe la MAO-A et la MAO-B de manière irréversible",
     "indication": "Dépression",
     "remarque": "Exemple historique du cours ; interactions et intolérance à la tyramine à comprendre.",
     "source": "Cours 6 · transmission sérotoninergique · p. 16",
     "pages": "16"
    },
    {
     "n": "Moclobémide",
     "note": "IMAO-A réversible",
     "kind": "DCI",
     "mecanisme": "Inhibe sélectivement et réversiblement la MAO-A",
     "indication": "Dépression",
     "remarque": "",
     "source": "Cours 6 · transmission sérotoninergique · p. 16",
     "pages": "16"
    }
   ],
   "mechanism": "Monoamine oxydases (MAO-A ± MAO-B)",
   "ei": [],
   "ci": [],
   "interactions": []
  },
  {
   "id": "melato",
   "district": "C7",
   "name": "Mélatoninergiques",
   "short": "Mélato",
   "affix": null,
   "affixKind": null,
   "color": "#ffb199",
   "target": "Récepteurs MT1 / MT2",
   "signature": "Rythme veille–sommeil, dépression",
   "tip": "MT1/MT2 : l’horloge de la nuit.",
   "molecules": [
    {
     "n": "Mélatonine",
     "note": "Agoniste mélatoninergique",
     "kind": "DCI",
     "mecanisme": "Active les récepteurs MT1 et MT2",
     "indication": "Troubles du rythme veille–sommeil évoqués dans le cours",
     "remarque": "Médiateur endogène également utilisé en thérapeutique ; ne pas confondre avec la sérotonine.",
     "source": "Cours 6 · transmission sérotoninergique · p. 8",
     "pages": "8"
    },
    {
     "n": "Agomélatine",
     "note": "Antidépresseur mélatoninergique",
     "kind": "DCI",
     "mecanisme": "Agoniste MT1/MT2 et antagoniste 5-HT2C",
     "indication": "Dépression",
     "remarque": "",
     "source": "Cours 6 · transmission sérotoninergique · p. 8",
     "pages": "8"
    }
   ],
   "mechanism": "Récepteurs MT1 / MT2",
   "ei": [],
   "ci": [],
   "interactions": []
  },
  {
   "id": "antipsy",
   "district": "C7",
   "name": "Antipsychotiques atypiques",
   "short": "Antipsy.",
   "affix": null,
   "affixKind": null,
   "color": "#ff7aa8",
   "target": "Récepteurs 5-HT et D2",
   "signature": "Psychoses",
   "tip": "Atypique = une touche de sérotonine en plus du blocage dopaminergique.",
   "molecules": [
    {
     "n": "Clozapine",
     "note": "Antipsychotique atypique",
     "kind": "DCI",
     "mecanisme": "Composante sérotoninergique associée à une action dopaminergique : exemple cité dans le cours",
     "indication": "Psychoses",
     "remarque": "Le poly regroupe ces molécules dans une phrase ambiguë sur les agonistes dopaminergiques. Ne pas apprendre qu’elles ont toutes le même mécanisme dopaminergique.",
     "source": "Cours 6 · transmission sérotoninergique · p. 17",
     "pages": "17"
    },
    {
     "n": "Olanzapine",
     "note": "Antipsychotique atypique",
     "kind": "DCI",
     "mecanisme": "Composante sérotoninergique associée à une action dopaminergique : exemple cité dans le cours",
     "indication": "Psychoses",
     "remarque": "Le poly regroupe ces molécules dans une phrase ambiguë sur les agonistes dopaminergiques. Ne pas apprendre qu’elles ont toutes le même mécanisme dopaminergique.",
     "source": "Cours 6 · transmission sérotoninergique · p. 17",
     "pages": "17"
    },
    {
     "n": "Rispéridone",
     "note": "Antipsychotique atypique",
     "kind": "DCI",
     "mecanisme": "Composante sérotoninergique associée à une action dopaminergique : exemple cité dans le cours",
     "indication": "Psychoses",
     "remarque": "Le poly regroupe ces molécules dans une phrase ambiguë sur les agonistes dopaminergiques. Ne pas apprendre qu’elles ont toutes le même mécanisme dopaminergique.",
     "source": "Cours 6 · transmission sérotoninergique · p. 17",
     "pages": "17"
    },
    {
     "n": "Aripiprazole",
     "note": "Antipsychotique atypique",
     "kind": "DCI",
     "mecanisme": "Composante sérotoninergique associée à une action dopaminergique : exemple cité dans le cours",
     "indication": "Psychoses",
     "remarque": "Le poly regroupe ces molécules dans une phrase ambiguë sur les agonistes dopaminergiques. Ne pas apprendre qu’elles ont toutes le même mécanisme dopaminergique.",
     "source": "Cours 6 · transmission sérotoninergique · p. 17",
     "pages": "17"
    }
   ],
   "mechanism": "Composante sérotoninergique associée à une action dopaminergique : exemple cité dans le cours",
   "ei": [],
   "ci": [],
   "interactions": []
  },
  {
   "id": "setron",
   "district": "C7",
   "name": "Sétrons",
   "short": "Sétron",
   "affix": "-sétron",
   "affixKind": "suffixe",
   "color": "#ffa07a",
   "target": "Récepteurs 5-HT3",
   "signature": "Nausées et vomissements",
   "tip": "SÉTRON : il éteint le récepteur 5-HT3, le seul canal ionique de la famille.",
   "molecules": [
    {
     "n": "Granisétron",
     "note": "Sétron",
     "kind": "DCI",
     "mecanisme": "Antagoniste des récepteurs 5-HT3",
     "indication": "Prévention des nausées et vomissements",
     "remarque": "",
     "source": "Cours 6 · transmission sérotoninergique · p. 17",
     "pages": "17"
    },
    {
     "n": "Ondansétron",
     "note": "Sétron",
     "kind": "DCI",
     "mecanisme": "Antagoniste des récepteurs 5-HT3",
     "indication": "Prévention des nausées et vomissements",
     "remarque": "",
     "source": "Cours 6 · transmission sérotoninergique · p. 17",
     "pages": "17"
    }
   ],
   "mechanism": "Antagoniste des récepteurs 5-HT3",
   "ei": [],
   "ci": [],
   "interactions": []
  },
  {
   "id": "sero_autres",
   "district": "C7",
   "name": "Autres récepteurs 5-HT",
   "short": "5-HT div.",
   "affix": null,
   "affixKind": null,
   "color": "#ffc2a8",
   "target": "Un récepteur 5-HT par molécule (1A, 4, 2A)",
   "signature": "Anxiété, constipation, allergie",
   "tip": "Un récepteur, une indication : 1A anxiété, 4 intestin, 2A + H1 allergie.",
   "molecules": [
    {
     "n": "Buspirone",
     "note": "Anxiolytique sérotoninergique",
     "kind": "DCI",
     "mecanisme": "Agoniste des récepteurs 5-HT1A",
     "indication": "Anxiété généralisée",
     "remarque": "Le cours insiste sur une action lente, avec délai de 2 à 4 semaines.",
     "source": "Cours 6 · transmission sérotoninergique · p. 14",
     "pages": "14"
    },
    {
     "n": "Prucalopride",
     "note": "Agoniste sérotoninergique prokinétique",
     "kind": "DCI",
     "mecanisme": "Stimule les récepteurs 5-HT4 et la motricité intestinale",
     "indication": "Constipation",
     "remarque": "Le paragraphe du cours associe les agonistes 5-HT4 à la motricité digestive ; pas de question sur le RGO pour cette DCI.",
     "source": "Cours 6 · transmission sérotoninergique · p. 15",
     "pages": "15"
    },
    {
     "n": "Cyproheptadine",
     "note": "Antagoniste sérotoninergique et antihistaminique",
     "kind": "DCI",
     "mecanisme": "Antagonisme 5-HT2A et H1 ; propriétés antimuscariniques",
     "indication": "Antiallergique ; exemple du cours dans le syndrome sérotoninergique",
     "remarque": "Le cours cite aussi les effets sur l’appétit et le mésusage. Pas de conseil d’utilisation.",
     "source": "Cours 6 · transmission sérotoninergique · p. 17",
     "pages": "17"
    }
   ],
   "mechanism": "Un récepteur 5-HT par molécule (1A, 4, 2A)",
   "ei": [],
   "ci": [],
   "interactions": []
  },
  {
   "id": "liberateur",
   "district": "C7",
   "name": "Libérateurs et repères 5-HT",
   "short": "Repères",
   "affix": null,
   "affixKind": null,
   "color": "#e6a08f",
   "target": "Stockage et libération des monoamines",
   "signature": "Exemples du cours",
   "tip": "Ils vident les vésicules : libération massive de monoamines.",
   "molecules": [
    {
     "n": "Fenfluramine",
     "note": "Exemple historique de modulation sérotoninergique",
     "kind": "DCI",
     "mecanisme": "Effets sérotoninergiques évoqués avec le risque de valvulopathies",
     "indication": "Ancien exemple d’anorexigène dans le cours",
     "remarque": "L’association de marques dans ce passage est ambiguë : aucune correspondance avec Mediator n’est apprise ni testée.",
     "source": "Cours 6 · transmission sérotoninergique · p. 13",
     "pages": "13"
    },
    {
     "n": "Amphétamines",
     "note": "Famille de psychostimulants",
     "kind": "Famille",
     "mecanisme": "Augmentent la disponibilité des monoamines et modifient le stockage vésiculaire",
     "indication": "Exemple de libération massive de monoamines",
     "remarque": "",
     "source": "Cours 6 · transmission sérotoninergique · p. 16",
     "pages": "16"
    },
    {
     "n": "Lévodopa (L-DOPA)",
     "note": "Précurseur dopaminergique cité par comparaison",
     "kind": "Repère",
     "mecanisme": "Substrat de la décarboxylase des acides aminés aromatiques, également impliquée dans la synthèse de 5-HT",
     "indication": "Indication non développée dans cette partie du chapitre sérotonine",
     "remarque": "Citée page 7 pour expliquer que la DOPA-décarboxylase agit aussi sur le 5-hydroxytryptophane ; pas de révision du chapitre dopamine.",
     "source": "Cours 6 · transmission sérotoninergique · p. 7",
     "pages": "7"
    }
   ],
   "mechanism": "Stockage et libération des monoamines",
   "ei": [],
   "ci": [],
   "interactions": []
  },
  {
   "id": "bzd",
   "district": "C8",
   "name": "Benzodiazépines",
   "short": "BZD",
   "affix": "-azépam / -azolam",
   "affixKind": "suffixe",
   "color": "#7f8cff",
   "target": "Site BZD du récepteur GABA-A",
   "signature": "Anxiolyse, sédation, anticonvulsivant",
   "tip": "Elles augmentent la FRÉQUENCE d’ouverture du canal chlorure, en présence de GABA.",
   "molecules": [
    {
     "n": "Bromazépam",
     "note": "Benzodiazépine",
     "kind": "DCI",
     "mecanisme": "Module positivement GABA-A au site BZD et augmente la fréquence d’ouverture du canal en présence de GABA",
     "indication": "Anxiolyse",
     "remarque": "",
     "source": "Copie de Cours 7 · transmission par les acides aminés · p. 5",
     "pages": "5"
    },
    {
     "n": "Alprazolam",
     "note": "Benzodiazépine",
     "kind": "DCI",
     "mecanisme": "Module positivement GABA-A au site BZD et augmente la fréquence d’ouverture du canal en présence de GABA",
     "indication": "Anxiolyse",
     "remarque": "",
     "source": "Copie de Cours 7 · transmission par les acides aminés · p. 5",
     "pages": "5"
    },
    {
     "n": "Clorazépate",
     "note": "Benzodiazépine",
     "trap": true,
     "kind": "DCI",
     "mecanisme": "Module positivement GABA-A au site BZD et augmente la fréquence d’ouverture du canal en présence de GABA",
     "indication": "Anxiolyse",
     "remarque": "Le poly écrit « chlorazépate » ; orthographe normalisée : clorazépate.",
     "source": "Copie de Cours 7 · transmission par les acides aminés · p. 5",
     "pages": "5"
    },
    {
     "n": "Diazépam",
     "note": "Benzodiazépine",
     "kind": "DCI",
     "mecanisme": "Module positivement GABA-A au site BZD et augmente la fréquence d’ouverture du canal en présence de GABA",
     "indication": "Anticonvulsivant ; myorelaxant ; anxiolytique",
     "remarque": "",
     "source": "Copie de Cours 7 · transmission par les acides aminés · p. 5",
     "pages": "5"
    },
    {
     "n": "Clonazépam",
     "note": "Benzodiazépine",
     "kind": "DCI",
     "mecanisme": "Module positivement GABA-A au site BZD et augmente la fréquence d’ouverture du canal en présence de GABA",
     "indication": "Effet anticonvulsivant",
     "remarque": "",
     "source": "Copie de Cours 7 · transmission par les acides aminés · p. 5",
     "pages": "5"
    },
    {
     "n": "Clobazam",
     "note": "Benzodiazépine",
     "trap": true,
     "kind": "DCI",
     "mecanisme": "Module positivement GABA-A au site BZD et augmente la fréquence d’ouverture du canal en présence de GABA",
     "indication": "Effet anticonvulsivant",
     "remarque": "",
     "source": "Copie de Cours 7 · transmission par les acides aminés · p. 5",
     "pages": "5"
    },
    {
     "n": "Lormétazépam",
     "note": "Benzodiazépine",
     "kind": "DCI",
     "mecanisme": "Module positivement GABA-A au site BZD et augmente la fréquence d’ouverture du canal en présence de GABA",
     "indication": "Hypnose ou sédation",
     "remarque": "",
     "source": "Copie de Cours 7 · transmission par les acides aminés · p. 5",
     "pages": "5"
    },
    {
     "n": "Nitrazépam",
     "note": "Benzodiazépine",
     "kind": "DCI",
     "mecanisme": "Module positivement GABA-A au site BZD et augmente la fréquence d’ouverture du canal en présence de GABA",
     "indication": "Hypnose ou sédation",
     "remarque": "",
     "source": "Copie de Cours 7 · transmission par les acides aminés · p. 5",
     "pages": "5"
    },
    {
     "n": "Midazolam",
     "note": "Benzodiazépine",
     "kind": "DCI",
     "mecanisme": "Module positivement GABA-A au site BZD et augmente la fréquence d’ouverture du canal en présence de GABA",
     "indication": "Hypnose ou sédation",
     "remarque": "",
     "source": "Copie de Cours 7 · transmission par les acides aminés · p. 5",
     "pages": "5"
    },
    {
     "n": "Tétrazépam",
     "note": "Benzodiazépine",
     "kind": "DCI",
     "mecanisme": "Module positivement GABA-A au site BZD et augmente la fréquence d’ouverture du canal en présence de GABA",
     "indication": "Ancien myorelaxant ; retrait cité en 2013",
     "remarque": "À reconnaître comme molécule retirée, pas comme traitement à utiliser.",
     "source": "Copie de Cours 7 · transmission par les acides aminés · p. 5",
     "pages": "5"
    }
   ],
   "mechanism": "Module positivement GABA-A au site BZD et augmente la fréquence d’ouverture du canal en présence de GABA",
   "ei": [],
   "ci": [],
   "interactions": []
  },
  {
   "id": "zdrug",
   "district": "C8",
   "name": "Hypnotiques apparentés (Z)",
   "short": "Z-drug",
   "affix": "z-",
   "affixKind": "préfixe",
   "color": "#5c7cfa",
   "target": "GABA-A, préférence sous-unité α1",
   "signature": "Insomnie",
   "tip": "Z comme zzz : site BZD, préférence α1, juste pour dormir.",
   "molecules": [
    {
     "n": "Zopiclone",
     "note": "Hypnotique apparenté aux benzodiazépines",
     "kind": "DCI",
     "mecanisme": "Module GABA-A au site BZD avec une préférence pour α1",
     "indication": "Insomnie",
     "remarque": "",
     "source": "Copie de Cours 7 · transmission par les acides aminés · p. 5",
     "pages": "5"
    },
    {
     "n": "Zolpidem",
     "note": "Hypnotique apparenté aux benzodiazépines",
     "kind": "DCI",
     "mecanisme": "Module GABA-A au site BZD avec une préférence pour α1",
     "indication": "Insomnie",
     "remarque": "",
     "source": "Copie de Cours 7 · transmission par les acides aminés · p. 5",
     "pages": "5"
    }
   ],
   "mechanism": "Module GABA-A au site BZD avec une préférence pour α1",
   "ei": [],
   "ci": [],
   "interactions": []
  },
  {
   "id": "gaba_pot",
   "district": "C8",
   "name": "Potentialisateurs du GABA-A",
   "short": "Pot. GABA",
   "affix": null,
   "affixKind": null,
   "color": "#748ffc",
   "target": "Récepteur GABA-A (hors site BZD)",
   "signature": "Anesthésie, épilepsie",
   "tip": "Barbituriques : DURÉE d’ouverture ↑ (BZD = fréquence). Anesthésiques : canal grand ouvert.",
   "molecules": [
    {
     "n": "Phénobarbital",
     "note": "Barbiturique",
     "kind": "DCI",
     "mecanisme": "Augmente la durée d’ouverture du canal GABA-A ; peut agir sans GABA à forte concentration",
     "indication": "Épilepsie",
     "remarque": "Inducteur enzymatique ; marge thérapeutique étroite ; à distinguer des BZD.",
     "source": "Copie de Cours 7 · transmission par les acides aminés · p. 5–6",
     "pages": "5–6"
    },
    {
     "n": "Halothane",
     "note": "Anesthésique général volatil",
     "kind": "DCI",
     "mecanisme": "Potentialise GABA-A : augmentation de l’ouverture du canal chlorure",
     "indication": "Anesthésie générale",
     "remarque": "",
     "source": "Copie de Cours 7 · transmission par les acides aminés · p. 5",
     "pages": "5"
    },
    {
     "n": "Desflurane",
     "note": "Anesthésique général volatil",
     "kind": "DCI",
     "mecanisme": "Potentialise GABA-A : augmentation de l’ouverture du canal chlorure",
     "indication": "Anesthésie générale",
     "remarque": "",
     "source": "Copie de Cours 7 · transmission par les acides aminés · p. 5",
     "pages": "5"
    },
    {
     "n": "Isoflurane",
     "note": "Anesthésique général volatil",
     "kind": "DCI",
     "mecanisme": "Potentialise GABA-A : augmentation de l’ouverture du canal chlorure",
     "indication": "Anesthésie générale",
     "remarque": "",
     "source": "Copie de Cours 7 · transmission par les acides aminés · p. 5",
     "pages": "5"
    },
    {
     "n": "Propofol",
     "note": "Anesthésique général injectable",
     "kind": "DCI",
     "mecanisme": "Potentialise la transmission GABA-A",
     "indication": "Anesthésie générale",
     "remarque": "",
     "source": "Copie de Cours 7 · transmission par les acides aminés · p. 5",
     "pages": "5"
    },
    {
     "n": "Étomidate",
     "note": "Anesthésique général injectable",
     "kind": "DCI",
     "mecanisme": "Potentialise la transmission GABA-A",
     "indication": "Anesthésie générale",
     "remarque": "",
     "source": "Copie de Cours 7 · transmission par les acides aminés · p. 5",
     "pages": "5"
    },
    {
     "n": "Éthanol",
     "note": "Modulateur GABA-A",
     "kind": "Repère",
     "mecanisme": "Potentialise GABA-A en aigu ; adaptation et désensibilisation en chronique",
     "indication": "Exemple de modulation de l’inhibition",
     "remarque": "",
     "source": "Copie de Cours 7 · transmission par les acides aminés · p. 5",
     "pages": "5"
    }
   ],
   "mechanism": "Récepteur GABA-A (hors site BZD)",
   "ei": [],
   "ci": [],
   "interactions": []
  },
  {
   "id": "gaba_ligand",
   "district": "C8",
   "name": "Ligands du GABA-A (outils et antidote)",
   "short": "GABA-A",
   "affix": null,
   "affixKind": null,
   "color": "#91a7ff",
   "target": "Récepteur GABA-A : site GABA, pore ou site BZD",
   "signature": "Outils pharmacologiques ; flumazénil = antidote",
   "tip": "Trois portes : site GABA (muscimol / bicuculline), pore (picrotoxine), site BZD (flumazénil, β-carbolines).",
   "molecules": [
    {
     "n": "Gaboxadol",
     "note": "Agoniste GABA-A orthostérique",
     "kind": "Recherche",
     "mecanisme": "Agoniste à préférence pour les récepteurs comportant la sous-unité δ",
     "indication": "Hypnotique étudié en recherche ; non utilisé selon le cours",
     "remarque": "Cité dans le cours ; distinguer d’un médicament couramment utilisé.",
     "source": "Copie de Cours 7 · transmission par les acides aminés · p. 4",
     "pages": "4"
    },
    {
     "n": "Flumazénil",
     "note": "Antagoniste du site des benzodiazépines",
     "kind": "DCI",
     "mecanisme": "Antagonisme compétitif au site BZD de GABA-A",
     "indication": "Antidote des benzodiazépines",
     "remarque": "À distinguer de la bicuculline, qui antagonise le site orthostérique du GABA.",
     "source": "Copie de Cours 7 · transmission par les acides aminés · p. 6",
     "pages": "6"
    },
    {
     "n": "Muscimol",
     "note": "Agoniste GABA-A orthostérique",
     "kind": "Toxine",
     "mecanisme": "Se fixe au site du GABA",
     "indication": "Alcaloïde d’amanite : outil pharmacologique, pas d’indication thérapeutique",
     "remarque": "",
     "source": "Copie de Cours 7 · transmission par les acides aminés · p. 4",
     "pages": "4"
    },
    {
     "n": "Bicuculline",
     "note": "Antagoniste GABA-A orthostérique",
     "kind": "Réactif",
     "mecanisme": "Bloque le site de fixation du GABA",
     "indication": "Réactif proconvulsivant ; pas d’indication thérapeutique",
     "remarque": "",
     "source": "Copie de Cours 7 · transmission par les acides aminés · p. 6",
     "pages": "6"
    },
    {
     "n": "Picrotoxine",
     "note": "Bloqueur du canal GABA-A",
     "kind": "Toxine",
     "mecanisme": "Bloque le pore du canal chlorure",
     "indication": "Toxine proconvulsivante ; pas d’indication thérapeutique",
     "remarque": "",
     "source": "Copie de Cours 7 · transmission par les acides aminés · p. 6",
     "pages": "6"
    },
    {
     "n": "β-carbolines",
     "note": "Modulateurs allostériques négatifs GABA-A",
     "kind": "Famille",
     "mecanisme": "Diminuent la fréquence d’ouverture du canal via le site BZD",
     "indication": "Anxiogènes et convulsivants dans le cours",
     "remarque": "",
     "source": "Copie de Cours 7 · transmission par les acides aminés · p. 6",
     "pages": "6"
    }
   ],
   "mechanism": "Récepteur GABA-A : site GABA, pore ou site BZD",
   "ei": [],
   "ci": [],
   "interactions": []
  },
  {
   "id": "gaba_meta",
   "district": "C8",
   "name": "Synthèse, dégradation et recapture du GABA",
   "short": "Méta GABA",
   "affix": null,
   "affixKind": null,
   "color": "#4c6ef5",
   "target": "GABA-T, transporteurs GAT, synthèse du GABA",
   "signature": "Épilepsie",
   "tip": "VIGAbatrine bloque la GABA-T, TIAgabine bloque GAT : plus de GABA disponible.",
   "molecules": [
    {
     "n": "Valproate de sodium",
     "note": "Antiépileptique et thymorégulateur",
     "kind": "DCI",
     "mecanisme": "Augmente la disponibilité du GABA par action sur sa synthèse et sa dégradation ; action sur les canaux sodiques",
     "indication": "Épilepsie ; stabilisation de l’humeur",
     "remarque": "",
     "source": "Copie de Cours 7 · transmission par les acides aminés · p. 4",
     "pages": "4"
    },
    {
     "n": "Vigabatrine",
     "note": "Antiépileptique inhibiteur de GABA-T",
     "kind": "DCI",
     "mecanisme": "Inhibe irréversiblement la GABA-transaminase",
     "indication": "Épilepsie",
     "remarque": "",
     "source": "Copie de Cours 7 · transmission par les acides aminés · p. 4",
     "pages": "4"
    },
    {
     "n": "Tiagabine",
     "note": "Antiépileptique inhibiteur de recapture du GABA",
     "kind": "DCI",
     "mecanisme": "Inhibe les transporteurs GAT",
     "indication": "Épilepsie",
     "remarque": "",
     "source": "Copie de Cours 7 · transmission par les acides aminés · p. 4",
     "pages": "4"
    }
   ],
   "mechanism": "GABA-T, transporteurs GAT, synthèse du GABA",
   "ei": [],
   "ci": [],
   "interactions": []
  },
  {
   "id": "gabab",
   "district": "C8",
   "name": "Agonistes GABA-B",
   "short": "GABA-B",
   "affix": null,
   "affixKind": null,
   "color": "#5f3dc4",
   "target": "Récepteur GABA-B (couplé Gi/o)",
   "signature": "Spasticité, narcolepsie",
   "tip": "GABA-B = métabotropique, Gi/o : le frein lent de la moelle.",
   "molecules": [
    {
     "n": "Baclofène",
     "note": "Agoniste GABA-B",
     "kind": "DCI",
     "mecanisme": "Active les récepteurs GABA-B couplés à Gi/o ; effet inhibiteur médullaire",
     "indication": "Spasticité et contractures intenses",
     "remarque": "Le cours évoque aussi l’alcoolodépendance ; aucun QCM sur ses modalités cliniques.",
     "source": "Copie de Cours 7 · transmission par les acides aminés · p. 6",
     "pages": "6"
    },
    {
     "n": "Oxybate de sodium",
     "note": "Agoniste GABA-B cité dans le cours",
     "kind": "DCI",
     "mecanisme": "Renforce la transmission inhibitrice ; GHB",
     "indication": "Narcolepsie ; anesthésie évoquée dans le cours",
     "remarque": "GHB = repère de dénomination ; ne pas confondre avec une benzodiazépine.",
     "source": "Copie de Cours 7 · transmission par les acides aminés · p. 6",
     "pages": "6"
    }
   ],
   "mechanism": "Récepteur GABA-B (couplé Gi/o)",
   "ei": [],
   "ci": [],
   "interactions": []
  },
  {
   "id": "nmda",
   "district": "C8",
   "name": "Antagonistes NMDA",
   "short": "NMDA",
   "affix": null,
   "affixKind": null,
   "color": "#3b5bdb",
   "target": "Récepteur-canal NMDA du glutamate",
   "signature": "Anesthésie, dépression, Alzheimer, Parkinson",
   "tip": "Compétitif = site du glutamate (AP5, AP7). Non compétitif = dans le canal (kétamine, PCP, MK-801).",
   "molecules": [
    {
     "n": "Kétamine",
     "note": "Antagoniste NMDA",
     "kind": "DCI",
     "mecanisme": "Bloque le récepteur-canal NMDA de manière non compétitive",
     "indication": "Anesthésie dissociative",
     "remarque": "",
     "source": "Copie de Cours 7 · transmission par les acides aminés · p. 9",
     "pages": "9"
    },
    {
     "n": "Eskétamine",
     "note": "Antagoniste NMDA",
     "kind": "DCI",
     "mecanisme": "Antagonisme NMDA ; forme évoquée en spray nasal",
     "indication": "Dépression résistante",
     "remarque": "",
     "source": "Copie de Cours 7 · transmission par les acides aminés · p. 9",
     "pages": "9"
    },
    {
     "n": "Amantadine",
     "note": "Antagoniste NMDA cité dans le cours",
     "kind": "DCI",
     "mecanisme": "Antagonisme non compétitif NMDA parmi ses propriétés",
     "indication": "Maladie de Parkinson",
     "remarque": "",
     "source": "Copie de Cours 7 · transmission par les acides aminés · p. 9",
     "pages": "9"
    },
    {
     "n": "Mémantine",
     "note": "Antagoniste NMDA",
     "kind": "DCI",
     "mecanisme": "Réduit les flux calciques liés à l’activation de NMDA",
     "indication": "Maladie d’Alzheimer",
     "remarque": "",
     "source": "Copie de Cours 7 · transmission par les acides aminés · p. 9",
     "pages": "9"
    },
    {
     "n": "Ifenprodil",
     "note": "Antagoniste NMDA expérimental cité",
     "kind": "Réactif",
     "mecanisme": "Agit sur la sous-unité GluN2B (NR2B)",
     "indication": "Réactif / modulation expérimentale de NMDA",
     "remarque": "",
     "source": "Copie de Cours 7 · transmission par les acides aminés · p. 9",
     "pages": "9"
    },
    {
     "n": "Phencyclidine (PCP)",
     "note": "Antagoniste NMDA non compétitif",
     "kind": "Réactif",
     "mecanisme": "Bloque le canal NMDA",
     "indication": "Substance hallucinogène ; pas de thérapeutique dans le cours",
     "remarque": "",
     "source": "Copie de Cours 7 · transmission par les acides aminés · p. 9",
     "pages": "9"
    },
    {
     "n": "AP5",
     "note": "Antagoniste NMDA compétitif",
     "kind": "Réactif",
     "mecanisme": "Antagonisme compétitif utilisé en expérimentation",
     "indication": "Réactif pharmacologique ; pas de thérapeutique",
     "remarque": "",
     "source": "Copie de Cours 7 · transmission par les acides aminés · p. 9",
     "pages": "9"
    },
    {
     "n": "AP7",
     "note": "Antagoniste NMDA compétitif",
     "kind": "Réactif",
     "mecanisme": "Antagonisme compétitif utilisé en expérimentation",
     "indication": "Réactif pharmacologique ; pas de thérapeutique",
     "remarque": "",
     "source": "Copie de Cours 7 · transmission par les acides aminés · p. 9",
     "pages": "9"
    },
    {
     "n": "MK-801",
     "note": "Bloqueur expérimental du canal NMDA",
     "kind": "Réactif",
     "mecanisme": "Antagonisme non compétitif NMDA",
     "indication": "Réactif expérimental",
     "remarque": "",
     "source": "Copie de Cours 7 · transmission par les acides aminés · p. 9",
     "pages": "9"
    }
   ],
   "mechanism": "Récepteur-canal NMDA du glutamate",
   "ei": [],
   "ci": [],
   "interactions": []
  },
  {
   "id": "glu_lib",
   "district": "C8",
   "name": "Inhibiteurs de la libération du glutamate",
   "short": "Anti-Glu",
   "affix": null,
   "affixKind": null,
   "color": "#4263eb",
   "target": "Libération présynaptique de glutamate",
   "signature": "Épilepsie, SLA",
   "tip": "Moins de glutamate libéré, moins d’excitation.",
   "molecules": [
    {
     "n": "Lamotrigine",
     "note": "Antiépileptique inhibant la libération de glutamate",
     "kind": "DCI",
     "mecanisme": "Réduit la libération présynaptique de glutamate",
     "indication": "Épilepsie",
     "remarque": "",
     "source": "Copie de Cours 7 · transmission par les acides aminés · p. 9",
     "pages": "9"
    },
    {
     "n": "Riluzole",
     "note": "Modulateur de la transmission glutamatergique",
     "kind": "DCI",
     "mecanisme": "Inhibe la libération de glutamate",
     "indication": "Sclérose latérale amyotrophique",
     "remarque": "",
     "source": "Copie de Cours 7 · transmission par les acides aminés · p. 9",
     "pages": "9"
    }
   ],
   "mechanism": "Libération présynaptique de glutamate",
   "ei": [],
   "ci": [],
   "interactions": []
  },
  {
   "id": "glycine",
   "district": "C8",
   "name": "Glycine et toxines",
   "short": "Glycine",
   "affix": null,
   "affixKind": null,
   "color": "#364fc7",
   "target": "Inhibition médullaire (récepteur glycine, libération des médiateurs)",
   "signature": "Convulsions, spasmes",
   "tip": "On coupe le frein de la moelle : convulsions (strychnine, tétanos).",
   "molecules": [
    {
     "n": "Méphénésine",
     "note": "Décontractant musculaire cité dans le cours",
     "kind": "DCI",
     "mecanisme": "Réduction de l’hyperactivité des circuits médullaires",
     "indication": "Présentée comme antidote de la strychnine dans le poly",
     "remarque": "Repère pédagogique du poly ; ne pas utiliser comme conduite à tenir clinique.",
     "source": "Copie de Cours 7 · transmission par les acides aminés · p. 9",
     "pages": "9"
    },
    {
     "n": "Strychnine",
     "note": "Antagoniste des récepteurs de la glycine",
     "kind": "Toxine",
     "mecanisme": "Supprime une inhibition médullaire en bloquant les récepteurs de la glycine",
     "indication": "Toxine provoquant des convulsions",
     "remarque": "",
     "source": "Copie de Cours 7 · transmission par les acides aminés · p. 9",
     "pages": "9"
    },
    {
     "n": "Toxine tétanique",
     "note": "Toxine bloquant la libération de médiateurs inhibiteurs",
     "kind": "Toxine",
     "mecanisme": "Empêche la libération de GABA et de glycine dans les circuits inhibiteurs",
     "indication": "Spasmes du tétanos ; pas d’indication thérapeutique",
     "remarque": "",
     "source": "Copie de Cours 7 · transmission par les acides aminés · p. 9",
     "pages": "9"
    },
    {
     "n": "Toxine botulique",
     "note": "Toxine cholinergique citée pour comparaison",
     "kind": "Toxine",
     "mecanisme": "Empêche la libération d’acétylcholine",
     "indication": "Comparaison avec la toxine tétanique ; indications non développées ici",
     "remarque": "",
     "source": "Copie de Cours 7 · transmission par les acides aminés · p. 9",
     "pages": "9"
    }
   ],
   "mechanism": "Inhibition médullaire (récepteur glycine, libération des médiateurs)",
   "ei": [],
   "ci": [],
   "interactions": []
  },
  {
   "id": "opioide",
   "district": "C9",
   "name": "Opioïdes",
   "short": "Opioïde",
   "affix": null,
   "affixKind": null,
   "color": "#c38bff",
   "target": "Récepteurs opioïdes",
   "signature": "Douleur (paliers II et III) ; naloxone = antidote",
   "tip": "Palier II : codéine, tramadol. Palier III : morphine et compagnie. Naloxone : l’antidote.",
   "molecules": [
    {
     "n": "Morphine",
     "note": "Antalgique opioïde · palier III",
     "kind": "DCI",
     "mecanisme": "Action sur les récepteurs opioïdes ; détails individuels non développés dans ce chapitre",
     "indication": "Douleur · palier III",
     "remarque": "Le cours présente la classe et le palier, sans détailler le profil récepteur propre à cette DCI.",
     "source": "Cours 8 · transmission peptidergique · p. 10",
     "pages": "10"
    },
    {
     "n": "Codéine",
     "note": "Antalgique opioïde · palier II",
     "kind": "DCI",
     "mecanisme": "Action sur les récepteurs opioïdes ; détails individuels non développés dans ce chapitre",
     "indication": "Douleur · palier II",
     "remarque": "Le cours présente la classe et le palier, sans détailler le profil récepteur propre à cette DCI.",
     "source": "Cours 8 · transmission peptidergique · p. 10",
     "pages": "10"
    },
    {
     "n": "Fentanyl",
     "note": "Antalgique opioïde · palier III",
     "kind": "DCI",
     "mecanisme": "Action sur les récepteurs opioïdes ; détails individuels non développés dans ce chapitre",
     "indication": "Douleur · palier III",
     "remarque": "Le cours présente la classe et le palier, sans détailler le profil récepteur propre à cette DCI.",
     "source": "Cours 8 · transmission peptidergique · p. 10",
     "pages": "10"
    },
    {
     "n": "Oxycodone",
     "note": "Antalgique opioïde · palier III",
     "kind": "DCI",
     "mecanisme": "Action sur les récepteurs opioïdes ; détails individuels non développés dans ce chapitre",
     "indication": "Douleur · palier III",
     "remarque": "Le cours présente la classe et le palier, sans détailler le profil récepteur propre à cette DCI.",
     "source": "Cours 8 · transmission peptidergique · p. 10",
     "pages": "10"
    },
    {
     "n": "Tramadol",
     "note": "Antalgique opioïde · palier II",
     "kind": "DCI",
     "mecanisme": "Action sur les récepteurs opioïdes ; détails individuels non développés dans ce chapitre",
     "indication": "Douleur · palier II",
     "remarque": "Le cours présente la classe et le palier, sans détailler le profil récepteur propre à cette DCI.",
     "source": "Cours 8 · transmission peptidergique · p. 10",
     "pages": "10"
    },
    {
     "n": "Buprénorphine",
     "note": "Antalgique opioïde · palier III",
     "kind": "DCI",
     "mecanisme": "Action sur les récepteurs opioïdes ; détails individuels non développés dans ce chapitre",
     "indication": "Douleur · palier III ; substitution aux opiacés",
     "remarque": "Le cours présente la classe et le palier, sans détailler le profil récepteur propre à cette DCI.",
     "source": "Cours 8 · transmission peptidergique · p. 10",
     "pages": "10"
    },
    {
     "n": "Naloxone",
     "note": "Antagoniste des récepteurs opioïdes",
     "kind": "DCI",
     "mecanisme": "Antagoniste pur et compétitif des récepteurs opioïdes",
     "indication": "Antidote du surdosage aigu en opioïdes",
     "remarque": "",
     "source": "Cours 8 · transmission peptidergique · p. 10",
     "pages": "10"
    },
    {
     "n": "Héroïne",
     "note": "Opioïde cité en contexte de dépendance",
     "kind": "Repère",
     "mecanisme": "Non détaillé dans ce chapitre",
     "indication": "Contexte du sevrage et de la substitution",
     "remarque": "",
     "source": "Cours 8 · transmission peptidergique · p. 10",
     "pages": "10"
    }
   ],
   "mechanism": "Récepteurs opioïdes",
   "ei": [],
   "ci": [],
   "interactions": []
  },
  {
   "id": "opio_dig",
   "district": "C9",
   "name": "Antidiarrhéiques",
   "short": "Antidiarr.",
   "affix": null,
   "affixKind": null,
   "color": "#b197fc",
   "target": "Récepteurs μ intestinaux / enképhalinase",
   "signature": "Diarrhée",
   "tip": "Lopéramide ralentit le transit, racécadotril réduit les sécrétions.",
   "molecules": [
    {
     "n": "Lopéramide",
     "note": "Antidiarrhéique opioïde périphérique",
     "kind": "DCI",
     "mecanisme": "Agoniste μ périphérique : freine la motricité propulsive et les sécrétions intestinales",
     "indication": "Traitement symptomatique de la diarrhée",
     "remarque": "Faible passage central dans les conditions usuelles ; ne pas apprendre une absence absolue de risque central.",
     "source": "Cours 8 · transmission peptidergique · p. 15–16",
     "pages": "15–16"
    },
    {
     "n": "Racécadotril",
     "note": "Antidiarrhéique antisécrétoire",
     "kind": "DCI",
     "mecanisme": "Prodrogue dont le métabolite actif inhibe l’enképhalinase périphérique ; prolonge l’action des enképhalines",
     "indication": "Diarrhée : réduction des sécrétions intestinales",
     "remarque": "À distinguer du ralentissement du transit par le lopéramide.",
     "source": "Cours 8 · transmission peptidergique · p. 16",
     "pages": "16"
    }
   ],
   "mechanism": "Récepteurs μ intestinaux / enképhalinase",
   "ei": [],
   "ci": [],
   "interactions": []
  },
  {
   "id": "palier1",
   "district": "C9",
   "name": "Antalgiques non opioïdes (palier I)",
   "short": "Palier I",
   "affix": null,
   "affixKind": null,
   "color": "#d0bfff",
   "target": "Non détaillé dans ce chapitre",
   "signature": "Douleur · palier I",
   "tip": "Palier I : on commence par là, sans opioïde.",
   "molecules": [
    {
     "n": "Paracétamol",
     "note": "Antalgique non opioïde · palier I",
     "kind": "DCI",
     "mecanisme": "Mécanisme non détaillé dans ce chapitre",
     "indication": "Douleur · palier I",
     "remarque": "",
     "source": "Cours 8 · transmission peptidergique · p. 10",
     "pages": "10"
    },
    {
     "n": "AINS",
     "note": "Famille d’antalgiques non opioïdes",
     "kind": "Famille",
     "mecanisme": "Mécanisme non détaillé dans ce chapitre",
     "indication": "Douleur · palier I",
     "remarque": "",
     "source": "Cours 8 · transmission peptidergique · p. 10",
     "pages": "10"
    }
   ],
   "mechanism": "Mécanisme non détaillé dans ce chapitre",
   "ei": [],
   "ci": [],
   "interactions": []
  },
  {
   "id": "ara2",
   "district": "C9",
   "name": "ARA-II (sartans)",
   "short": "ARA-II",
   "affix": "-sartan",
   "affixKind": "suffixe",
   "color": "#9775fa",
   "target": "Récepteur AT1 de l’angiotensine II",
   "signature": "HTA, insuffisance cardiaque",
   "tip": "-SARTAN : on bloque AT1. Ne pas confondre avec -SENTAN (endothéline).",
   "molecules": [
    {
     "n": "Losartan",
     "note": "ARA-II · sartan",
     "kind": "DCI",
     "mecanisme": "Antagoniste des récepteurs AT1 de l’angiotensine II",
     "indication": "HTA, insuffisance cardiaque et contexte rénal cités dans le cours",
     "remarque": "",
     "source": "Cours 8 · transmission peptidergique · p. 12",
     "pages": "12"
    },
    {
     "n": "Valsartan",
     "note": "ARA-II · sartan",
     "kind": "DCI",
     "mecanisme": "Antagoniste des récepteurs AT1 de l’angiotensine II",
     "indication": "HTA, insuffisance cardiaque et contexte rénal cités dans le cours",
     "remarque": "",
     "source": "Cours 8 · transmission peptidergique · p. 12",
     "pages": "12"
    }
   ],
   "mechanism": "Antagoniste des récepteurs AT1 de l’angiotensine II",
   "ei": [],
   "ci": [],
   "interactions": []
  },
  {
   "id": "iec",
   "district": "C9",
   "name": "IEC",
   "short": "IEC",
   "affix": "-pril",
   "affixKind": "suffixe",
   "color": "#845ef7",
   "target": "Enzyme de conversion de l’angiotensine (ECA)",
   "signature": "HTA, insuffisance cardiaque, néphroprotection",
   "tip": "-PRIL : l’ECA en prison, plus d’angiotensine II.",
   "molecules": [
    {
     "n": "Captopril",
     "note": "Inhibiteur de l’enzyme de conversion · IEC",
     "kind": "DCI",
     "mecanisme": "Inhibe l’ECA et diminue la formation d’angiotensine II",
     "indication": "HTA, insuffisance cardiaque et néphroprotection citées dans le cours",
     "remarque": "",
     "source": "Cours 8 · transmission peptidergique · p. 12",
     "pages": "12"
    },
    {
     "n": "Lisinopril",
     "note": "Inhibiteur de l’enzyme de conversion · IEC",
     "kind": "DCI",
     "mecanisme": "Inhibe l’ECA et diminue la formation d’angiotensine II",
     "indication": "HTA, insuffisance cardiaque et néphroprotection citées dans le cours",
     "remarque": "",
     "source": "Cours 8 · transmission peptidergique · p. 12",
     "pages": "12"
    }
   ],
   "mechanism": "Inhibe l’ECA et diminue la formation d’angiotensine II",
   "ei": [],
   "ci": [],
   "interactions": []
  },
  {
   "id": "sentan",
   "district": "C9",
   "name": "Antagonistes de l’endothéline (sentans)",
   "short": "Sentan",
   "affix": "-sentan",
   "affixKind": "suffixe",
   "color": "#7048e8",
   "target": "Récepteurs de l’endothéline (ETA ± ETB)",
   "signature": "HTAP",
   "tip": "-SENTAN : poumon (HTAP). -SARTAN : tension.",
   "molecules": [
    {
     "n": "Bosentan",
     "note": "Antagoniste des récepteurs de l’endothéline · sentan",
     "kind": "DCI",
     "mecanisme": "Antagoniste mixte ETA / ETB",
     "indication": "Hypertension artérielle pulmonaire (HTAP)",
     "remarque": "Ne pas confondre -sentan et -sartan : le cours oppose HTAP et HTA essentielle.",
     "source": "Cours 8 · transmission peptidergique · p. 13",
     "pages": "13"
    },
    {
     "n": "Ambrisentan",
     "note": "Antagoniste des récepteurs de l’endothéline · sentan",
     "kind": "DCI",
     "mecanisme": "Antagoniste sélectif ETA",
     "indication": "Hypertension artérielle pulmonaire (HTAP)",
     "remarque": "Le cours signale les risques de rétention hydrosodée, d’hépatotoxicité et de tératogénicité pour cette classe.",
     "source": "Cours 8 · transmission peptidergique · p. 13",
     "pages": "13"
    }
   ],
   "mechanism": "Récepteurs de l’endothéline (ETA ± ETB)",
   "ei": [],
   "ci": [],
   "interactions": []
  },
  {
   "id": "nk1_cgrp",
   "district": "C9",
   "name": "Anti-NK1 et anti-CGRP",
   "short": "NK1/CGRP",
   "affix": null,
   "affixKind": null,
   "color": "#e599f7",
   "target": "Récepteur NK1 (substance P) / voie du CGRP",
   "signature": "Vomissements chimio-induits, migraine",
   "tip": "Aprépitant bloque NK1 ; les -mab visent la voie du CGRP.",
   "molecules": [
    {
     "n": "Aprépitant",
     "note": "Antagoniste NK1",
     "kind": "DCI",
     "mecanisme": "Bloque les récepteurs NK1 de la substance P, avec une action antiémétique centrale",
     "indication": "Prévention des vomissements liés à la chimiothérapie et à la radiothérapie",
     "remarque": "",
     "source": "Cours 8 · transmission peptidergique · p. 8",
     "pages": "8"
    },
    {
     "n": "Érénumab",
     "note": "Anticorps de la voie CGRP",
     "kind": "DCI",
     "mecanisme": "Cible précise non détaillée dans ce cours",
     "indication": "Migraine : renvoi en note, traitement non abordé ici",
     "remarque": "Cité dans la note de bas de page uniquement. Conservé pour le relevé exhaustif, exclu des QCM de ce chapitre.",
     "source": "Cours 8 · transmission peptidergique · p. 7",
     "pages": "7"
    },
    {
     "n": "Galcanézumab",
     "note": "Anticorps de la voie CGRP",
     "kind": "DCI",
     "mecanisme": "Cible précise non détaillée dans ce cours",
     "indication": "Migraine : renvoi en note, traitement non abordé ici",
     "remarque": "Cité dans la note de bas de page uniquement. Conservé pour le relevé exhaustif, exclu des QCM de ce chapitre.",
     "source": "Cours 8 · transmission peptidergique · p. 7",
     "pages": "7"
    }
   ],
   "mechanism": "Récepteur NK1 (substance P) / voie du CGRP",
   "ei": [],
   "ci": [],
   "interactions": []
  },
  {
   "id": "peptide_endo",
   "district": "C9",
   "name": "Peptides endogènes",
   "short": "Endogène",
   "affix": null,
   "affixKind": null,
   "color": "#da77f2",
   "target": "Récepteurs couplés aux protéines G",
   "signature": "Ligands naturels du cours",
   "tip": "Les ligands maison : chacun a son récepteur et son couplage G.",
   "molecules": [
    {
     "n": "Substance P",
     "note": "Tachykinine endogène",
     "kind": "Repère",
     "mecanisme": "Active principalement NK1, couplé Gq/G11",
     "indication": "Transmission nociceptive et inflammation neurogène",
     "remarque": "",
     "source": "Cours 8 · transmission peptidergique · p. 7–8",
     "pages": "7–8"
    },
    {
     "n": "VIP",
     "note": "Neuropeptide endogène",
     "kind": "Repère",
     "mecanisme": "Récepteurs couplés Gs → adénylate cyclase → AMPc",
     "indication": "Relaxation du muscle lisse et vasodilatation",
     "remarque": "",
     "source": "Cours 8 · transmission peptidergique · p. 15",
     "pages": "15"
    },
    {
     "n": "Met- et Leu-enképhalines",
     "note": "Peptides opioïdes endogènes",
     "kind": "Repère",
     "mecanisme": "Récepteurs opioïdes couplés Gi/o ; dégradation par les enképhalinases",
     "indication": "Modulation de la douleur et des sécrétions digestives",
     "remarque": "",
     "source": "Cours 8 · transmission peptidergique · p. 8–9, 16",
     "pages": "8–9, 16"
    },
    {
     "n": "β-endorphine",
     "note": "Peptide opioïde endogène",
     "kind": "Repère",
     "mecanisme": "Issue de POMC ; agit sur les récepteurs opioïdes",
     "indication": "Modulation de la douleur",
     "remarque": "",
     "source": "Cours 8 · transmission peptidergique · p. 8–9",
     "pages": "8–9"
    },
    {
     "n": "Dynorphines",
     "note": "Peptides opioïdes endogènes",
     "kind": "Repère",
     "mecanisme": "Issues de la prodynorphine ; famille des ligands opioïdes",
     "indication": "Modulation de la transmission opioïde",
     "remarque": "",
     "source": "Cours 8 · transmission peptidergique · p. 8–9",
     "pages": "8–9"
    },
    {
     "n": "Angiotensine II",
     "note": "Peptide du SRAA",
     "kind": "Repère",
     "mecanisme": "AT1 → Gq/G11 ; AT2 → Gi et effets opposés",
     "indication": "AT1 : vasoconstriction, aldostérone et soif",
     "remarque": "",
     "source": "Cours 8 · transmission peptidergique · p. 11–12",
     "pages": "11–12"
    },
    {
     "n": "Endothéline-1",
     "note": "Peptide vasculaire endogène",
     "kind": "Repère",
     "mecanisme": "ETA musculaire : contraction ; ETB endothélial : relaxation",
     "indication": "Régulation du tonus vasculaire",
     "remarque": "",
     "source": "Cours 8 · transmission peptidergique · p. 12–13",
     "pages": "12–13"
    }
   ],
   "mechanism": "Récepteurs couplés aux protéines G",
   "ei": [],
   "ci": [],
   "interactions": []
  },
  {
   "id": "psychoactif",
   "district": "C9",
   "name": "Substances psychoactives",
   "short": "Psychoact.",
   "affix": null,
   "affixKind": null,
   "color": "#be4bdb",
   "target": "Systèmes opioïdes endogènes (circuit de récompense)",
   "signature": "Circuit de récompense",
   "tip": "Elles allument le circuit de la récompense via les opioïdes endogènes.",
   "molecules": [
    {
     "n": "THC (Δ9-tétrahydrocannabinol)",
     "note": "Substance psychoactive",
     "kind": "Repère",
     "mecanisme": "Comparaison : stimulation des systèmes opioïdes endogènes",
     "indication": "Circuit de récompense, pas une indication thérapeutique",
     "remarque": "",
     "source": "Cours 8 · transmission peptidergique · p. 11",
     "pages": "11"
    },
    {
     "n": "Nicotine",
     "note": "Substance psychoactive",
     "kind": "Repère",
     "mecanisme": "Comparaison : stimulation des systèmes opioïdes endogènes",
     "indication": "Circuit de récompense, pas une indication thérapeutique",
     "remarque": "",
     "source": "Cours 8 · transmission peptidergique · p. 11",
     "pages": "11"
    }
   ],
   "mechanism": "Comparaison : stimulation des systèmes opioïdes endogènes",
   "ei": [],
   "ci": [],
   "interactions": []
  },
  {
   "id": "nitre",
   "district": "C10",
   "name": "Dérivés nitrés et apparentés",
   "short": "Nitrés",
   "affix": null,
   "affixKind": null,
   "color": "#5ef0c0",
   "target": "Voie NO → guanylate cyclase soluble → GMPc",
   "signature": "Angor",
   "tip": "NITR- dans le nom : ils livrent du NO, GMPc ↑, le muscle lisse vasculaire se relâche.",
   "molecules": [
    {
     "n": "Trinitrine (nitroglycérine)",
     "note": "Dérivé nitré vasodilatateur",
     "kind": "DCI",
     "mecanisme": "Active la voie NO / guanylate cyclase soluble / GMPc et relâche le muscle lisse vasculaire",
     "indication": "Angor : traitement ou prévention selon la forme",
     "remarque": "",
     "source": "Cours 4 · monoxyde d’azote · p. 20",
     "pages": "20"
    },
    {
     "n": "Dinitrate d’isosorbide",
     "note": "Dérivé nitré vasodilatateur",
     "kind": "DCI",
     "mecanisme": "Active la voie NO / guanylate cyclase soluble / GMPc et relâche le muscle lisse vasculaire",
     "indication": "Angor : traitement ou prévention selon la forme",
     "remarque": "",
     "source": "Cours 4 · monoxyde d’azote · p. 20",
     "pages": "20"
    },
    {
     "n": "Mononitrate d’isosorbide",
     "note": "Dérivé nitré vasodilatateur",
     "kind": "DCI",
     "mecanisme": "Active la voie NO / guanylate cyclase soluble / GMPc et relâche le muscle lisse vasculaire",
     "indication": "Angor : traitement ou prévention selon la forme",
     "remarque": "",
     "source": "Cours 4 · monoxyde d’azote · p. 20",
     "pages": "20"
    },
    {
     "n": "Tétranitrate de pentaérythrityle",
     "note": "Dérivé nitré vasodilatateur",
     "kind": "DCI",
     "mecanisme": "Active la voie NO / guanylate cyclase soluble / GMPc et relâche le muscle lisse vasculaire",
     "indication": "Angor : traitement ou prévention selon la forme",
     "remarque": "",
     "source": "Cours 4 · monoxyde d’azote · p. 20",
     "pages": "20"
    },
    {
     "n": "Hexanitrate de mannitol",
     "note": "Dérivé nitré vasodilatateur",
     "kind": "DCI",
     "mecanisme": "Active la voie NO / guanylate cyclase soluble / GMPc et relâche le muscle lisse vasculaire",
     "indication": "Angor : traitement ou prévention selon la forme",
     "remarque": "",
     "source": "Cours 4 · monoxyde d’azote · p. 20",
     "pages": "20"
    },
    {
     "n": "Molsidomine",
     "note": "Vasodilatateur apparenté aux donneurs de NO",
     "kind": "DCI",
     "mecanisme": "Active la voie de la guanylate cyclase soluble et du GMPc",
     "indication": "Prévention de l’angor",
     "remarque": "Le détail chimique de la libération de NO est formulé de façon discutable dans le poly : pas de QCM sur ce point.",
     "source": "Cours 4 · monoxyde d’azote · p. 20",
     "pages": "20"
    }
   ],
   "mechanism": "Voie NO → guanylate cyclase soluble → GMPc",
   "ei": [],
   "ci": [],
   "interactions": []
  },
  {
   "id": "no_nos",
   "district": "C10",
   "name": "NO et inhibiteurs de NOS",
   "short": "NO / NOS",
   "affix": null,
   "affixKind": null,
   "color": "#20c997",
   "target": "Guanylate cyclase soluble / NO-synthases",
   "signature": "Vasodilatation ; outils expérimentaux",
   "tip": "L-NAME et L-NMMA miment l’arginine pour bloquer la NOS.",
   "molecules": [
    {
     "n": "Monoxyde d’azote (NO)",
     "note": "Gaz médiateur vasodilatateur",
     "kind": "DCI",
     "mecanisme": "Active la guanylate cyclase soluble et augmente le GMPc",
     "indication": "Utilisation par inhalation évoquée dans le cours",
     "remarque": "Ne se stocke pas dans des vésicules. Les indications cliniques précises ne sont pas évaluées ici.",
     "source": "Cours 4 · monoxyde d’azote · p. 15–20",
     "pages": "15–20"
    },
    {
     "n": "L-NAME",
     "note": "Inhibiteur expérimental de NO-synthase",
     "kind": "Réactif",
     "mecanisme": "Analogue de l’arginine utilisé pour inhiber les NOS",
     "indication": "Réactif de pharmacologie expérimentale",
     "remarque": "",
     "source": "Cours 4 · monoxyde d’azote · p. 20",
     "pages": "20"
    },
    {
     "n": "L-NMMA",
     "note": "Inhibiteur expérimental de NO-synthase",
     "kind": "Réactif",
     "mecanisme": "Analogue de l’arginine utilisé pour inhiber les NOS",
     "indication": "Réactif de pharmacologie expérimentale",
     "remarque": "",
     "source": "Cours 4 · monoxyde d’azote · p. 20",
     "pages": "20"
    }
   ],
   "mechanism": "Guanylate cyclase soluble / NO-synthases",
   "ei": [],
   "ci": [],
   "interactions": []
  },
  {
   "id": "adenosine",
   "district": "C11",
   "name": "Adénosine et ATP",
   "short": "Adénos.",
   "affix": null,
   "affixKind": null,
   "color": "#ffc94a",
   "target": "Récepteurs A1 du nœud auriculoventriculaire",
   "signature": "Tachycardie jonctionnelle",
   "tip": "A1 au nœud AV : on ralentit la conduction et la tachycardie s’arrête.",
   "molecules": [
    {
     "n": "Adénosine",
     "note": "Agoniste purinergique endogène",
     "kind": "DCI",
     "mecanisme": "Active notamment les récepteurs A1 au nœud auriculoventriculaire et ralentit la conduction",
     "indication": "Tachycardies jonctionnelles ; outil diagnostique évoqué",
     "remarque": "",
     "source": "Cours 4 · bases puriques · p. 10–11",
     "pages": "10–11"
    },
    {
     "n": "ATP (Striadyne)",
     "note": "Nucléotide purinergique utilisé en thérapeutique",
     "kind": "DCI",
     "mecanisme": "Dégradation rapide en adénosine puis effet sur les récepteurs A1 du nœud AV",
     "indication": "Tachycardie paroxystique jonctionnelle",
     "remarque": "Le support utilise le nom ATP et la spécialité Striadyne ; aucun autre nom n’est requis par cette fiche.",
     "source": "Cours 4 · bases puriques · p. 15",
     "pages": "15"
    }
   ],
   "mechanism": "Récepteurs A1 du nœud auriculoventriculaire",
   "ei": [],
   "ci": [],
   "interactions": []
  },
  {
   "id": "xanthine",
   "district": "C11",
   "name": "Méthylxanthines",
   "short": "Xanthine",
   "affix": null,
   "affixKind": null,
   "color": "#fab005",
   "target": "Récepteurs de l’adénosine (antagonisme) ± phosphodiestérases",
   "signature": "Asthme (ancien), éveil",
   "tip": "Le café bloque l’adénosine, la molécule de la fatigue.",
   "molecules": [
    {
     "n": "Théophylline",
     "note": "Méthylxanthine bronchodilatatrice",
     "kind": "DCI",
     "mecanisme": "Antagoniste de récepteurs à l’adénosine et inhibiteur non sélectif des phosphodiestérases",
     "indication": "Ancien traitement de l’asthme",
     "remarque": "Marge thérapeutique étroite : toxicité cardiaque et neurologique.",
     "source": "Cours 4 · bases puriques · p. 12",
     "pages": "12"
    },
    {
     "n": "Caféine",
     "note": "Méthylxanthine psychoexcitante",
     "kind": "DCI",
     "mecanisme": "Antagoniste compétitif des récepteurs à l’adénosine, notamment A1 et A2A",
     "indication": "Effet stimulant de l’éveil",
     "remarque": "",
     "source": "Cours 4 · bases puriques · p. 12",
     "pages": "12"
    }
   ],
   "mechanism": "Récepteurs de l’adénosine (antagonisme) ± phosphodiestérases",
   "ei": [],
   "ci": [],
   "interactions": []
  },
  {
   "id": "p2y12",
   "district": "C11",
   "name": "Antagonistes P2Y12",
   "short": "P2Y12",
   "affix": "-grel",
   "affixKind": "suffixe",
   "color": "#f59f00",
   "target": "Récepteur plaquettaire P2Y12 (ADP)",
   "signature": "Prévention des thromboses artérielles",
   "tip": "Thiénopyridines = prodrogues irréversibles. Ticagrélor = actif et réversible.",
   "molecules": [
    {
     "n": "Clopidogrel",
     "note": "Thiénopyridine antiagrégante",
     "kind": "DCI",
     "mecanisme": "Prodrogue ; inhibition irréversible du récepteur plaquettaire P2Y12 après bioactivation",
     "indication": "Prévention des événements thrombotiques artériels",
     "remarque": "",
     "source": "Cours 4 · bases puriques · p. 13",
     "pages": "13"
    },
    {
     "n": "Prasugrel",
     "note": "Thiénopyridine antiagrégante",
     "kind": "DCI",
     "mecanisme": "Prodrogue ; inhibition irréversible du récepteur plaquettaire P2Y12 après bioactivation",
     "indication": "Prévention des événements thrombotiques artériels",
     "remarque": "",
     "source": "Cours 4 · bases puriques · p. 13",
     "pages": "13"
    },
    {
     "n": "Ticlopidine",
     "note": "Thiénopyridine antiagrégante",
     "trap": true,
     "kind": "DCI",
     "mecanisme": "Prodrogue ; inhibition irréversible du récepteur plaquettaire P2Y12 après bioactivation",
     "indication": "Prévention des événements thrombotiques artériels",
     "remarque": "",
     "source": "Cours 4 · bases puriques · p. 13",
     "pages": "13"
    },
    {
     "n": "Ticagrélor",
     "note": "Antiagrégant antagoniste P2Y12 réversible",
     "trap": true,
     "kind": "DCI",
     "mecanisme": "Molécule directement active ; bloque réversiblement P2Y12",
     "indication": "Prévention des événements thrombotiques artériels",
     "remarque": "",
     "source": "Cours 4 · bases puriques · p. 13",
     "pages": "13"
    }
   ],
   "mechanism": "Récepteur plaquettaire P2Y12 (ADP)",
   "ei": [],
   "ci": [],
   "interactions": []
  },
  {
   "id": "purine_autres",
   "district": "C11",
   "name": "Autres leviers purinergiques",
   "short": "Purin. div.",
   "affix": null,
   "affixKind": null,
   "color": "#ffd43b",
   "target": "Adénosine / PDE, COX-1, P2X3 selon la molécule",
   "signature": "Antiagrégation ; P2X3 (tableau)",
   "tip": "Dipyridamole : plus d’adénosine. Aspirine : COX-1. Géfapixant : P2X3.",
   "molecules": [
    {
     "n": "Dipyridamole",
     "note": "Antiagrégant plaquettaire",
     "kind": "DCI",
     "mecanisme": "Potentialise la voie de l’adénosine et inhibe les phosphodiestérases : augmente l’AMPc plaquettaire",
     "indication": "Prévention des événements thromboemboliques",
     "remarque": "Le poly décrit l’inhibition d’ENT et de la dégradation de l’adénosine.",
     "source": "Cours 4 · bases puriques · p. 10–11",
     "pages": "10–11"
    },
    {
     "n": "Acide acétylsalicylique (aspirine)",
     "note": "Antiagrégant par inhibition de COX-1",
     "kind": "DCI",
     "mecanisme": "Inhibe irréversiblement COX-1 : mécanisme distinct des antagonistes P2Y12",
     "indication": "Prévention cardiovasculaire à faible dose",
     "remarque": "DCI également citée comme comparateur ; ne pas la classer parmi les antagonistes P2Y12.",
     "source": "Cours 4 · bases puriques · p. 14",
     "pages": "14"
    },
    {
     "n": "Géfapixant",
     "note": "Antagoniste P2X3 cité dans le tableau",
     "kind": "DCI",
     "mecanisme": "Antagoniste du récepteur P2X3",
     "indication": "Indication non précisée dans ce tableau",
     "remarque": "Nom relevé dans le tableau illustré, absent du texte extrait automatiquement. Pas de QCM sur son indication.",
     "source": "Cours 4 · bases puriques · p. 15",
     "pages": "15"
    }
   ],
   "mechanism": "Adénosine / PDE, COX-1, P2X3 selon la molécule",
   "ei": [],
   "ci": [],
   "interactions": []
  }
 ],
 "groups": [
  {
   "id": "g_migraine",
   "name": "Antimigraineux",
   "classes": [
    "triptan",
    "nk1_cgrp"
   ]
  },
  {
   "id": "g_isrs",
   "name": "ISRS",
   "classes": [
    "isrs"
   ]
  },
  {
   "id": "g_ad",
   "name": "Autres antidépresseurs",
   "classes": [
    "irsna",
    "tricyclique",
    "alpha2",
    "imao"
   ]
  },
  {
   "id": "g_5ht",
   "name": "Récepteurs 5-HT variés",
   "classes": [
    "setron",
    "sero_autres",
    "melato"
   ]
  },
  {
   "id": "g_antipsy",
   "name": "Antipsychotiques et libérateurs",
   "classes": [
    "antipsy",
    "liberateur"
   ]
  },
  {
   "id": "g_bzd",
   "name": "Benzodiazépines",
   "classes": [
    "bzd"
   ]
  },
  {
   "id": "g_hypno",
   "name": "Hypnotiques et anesthésiques",
   "classes": [
    "zdrug",
    "gaba_pot"
   ]
  },
  {
   "id": "g_gabaa",
   "name": "Ligands du GABA-A",
   "classes": [
    "gaba_ligand"
   ]
  },
  {
   "id": "g_gabameta",
   "name": "GABA : métabolisme et GABA-B",
   "classes": [
    "gaba_meta",
    "gabab"
   ]
  },
  {
   "id": "g_nmda",
   "name": "Antagonistes NMDA",
   "classes": [
    "nmda"
   ]
  },
  {
   "id": "g_gluglY",
   "name": "Glutamate et glycine",
   "classes": [
    "glu_lib",
    "glycine"
   ]
  },
  {
   "id": "g_opio",
   "name": "Opioïdes",
   "classes": [
    "opioide"
   ]
  },
  {
   "id": "g_douleur",
   "name": "Douleur et digestif",
   "classes": [
    "palier1",
    "opio_dig",
    "psychoactif"
   ]
  },
  {
   "id": "g_sraa",
   "name": "SRAA et endothéline",
   "classes": [
    "ara2",
    "iec",
    "sentan"
   ]
  },
  {
   "id": "g_peptides",
   "name": "Peptides endogènes",
   "classes": [
    "peptide_endo"
   ]
  },
  {
   "id": "g_no",
   "name": "Voie du NO",
   "classes": [
    "nitre",
    "no_nos"
   ]
  },
  {
   "id": "g_p2y12",
   "name": "Antiagrégants P2Y12",
   "classes": [
    "p2y12"
   ]
  },
  {
   "id": "g_adeno",
   "name": "Adénosine et compagnie",
   "classes": [
    "adenosine",
    "xanthine",
    "purine_autres"
   ]
  }
 ]
};

/* Index pratique : liste plate des molécules avec leur classe. */
window.PHARMA.all = window.PHARMA.classes.flatMap(c => c.molecules.map(m => ({ ...m, cls: c })));
