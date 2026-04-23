export const integrations = [
  {
    id: 'abelio',
    name: 'Abelio',
    logo: './logos/Integration-Abelio-squa.png',
    type: 'fertilisation',
    description: "Optimisation de la fertilisation et du pilotage des cultures.",
    descriptionLong: "Connectez vos stations météo Weenat à Abelio pour optimiser la fertilisation et le pilotage de vos cultures grâce à des données météo précises et localisées.",
    sensors: ['P+', 'PT', 'P'],
    connected: false
  },
  {
    id: 'criiam-sud',
    name: 'Criiam Sud',
    logo: './logos/Integration-CriiamSud-squa.png',
    type: 'maladie',
    description: "Modèles agroMétéo et pilotage de l'irrigation pour le grand Sud.",
    descriptionLong: "Connectez votre station météo et votre capteur d'humectation foliaire Weenat aux modèles maladie du Criiam Sud pour des recommandations adaptées aux cultures du bassin méditerranéen.",
    sensors: ['P+', 'PT', 'LWS'],
    connected: false
  },
  {
    id: 'cropwise-protector',
    name: 'Cropwise Protector',
    logo: './logos/Integration-CropwiseProtector-squa.png',
    type: 'maladie',
    description: "Détection des risques maladies et ravageurs, optimisation des traitements.",
    descriptionLong: "Connectez votre station météo Weenat afin de détecter les risques maladies et ravageurs et d'optimiser vos traitements phytosanitaires grâce aux modèles Syngenta.",
    sensors: ['P+', 'PT'],
    connected: false
  },
  {
    id: 'decitrait',
    name: 'DeciTrait',
    logo: './logos/Integration-Decitrait-squa.png',
    type: 'maladie',
    description: "Évaluation du risque mildiou, oïdium et black-rot sur vigne.",
    descriptionLong: "Connectez votre station météo Weenat afin d'évaluer le risque de mildiou, d'oïdium et de black-rot et optimiser les traitements phytosanitaires sur vigne.",
    sensors: ['P+', 'PT', 'LWS'],
    connected: false
  },
  {
    id: 'irre-lis-mono',
    name: 'IRRÉ-LIS Mono-Culture',
    logo: './logos/Integration-Irre-LIS-squa.png',
    type: 'irrigation',
    description: "Bilan hydrique mono-culture pour l'optimisation de l'irrigation.",
    descriptionLong: "Connectez votre pluviomètre ou station météo Weenat afin d'obtenir un bilan hydrique dédié à l'optimisation du pilotage de l'irrigation (version mono-culture).",
    sensors: ['P+', 'PT', 'P'],
    connected: true
  },
  {
    id: 'irre-lis-multi',
    name: 'IRRÉ-LIS Multi-Cultures',
    logo: './logos/Integration-Irre-LIS-squa.png',
    type: 'irrigation',
    description: "Bilan hydrique multi-cultures pour l'optimisation de l'irrigation.",
    descriptionLong: "Connectez votre pluviomètre ou station météo Weenat afin d'obtenir un bilan hydrique dédié à l'optimisation du pilotage de l'irrigation (version multi-cultures).",
    sensors: ['P+', 'PT', 'P'],
    connected: false
  },
  {
    id: 'limacapt',
    name: 'Limacapt',
    logo: './logos/Integration-Limacapt-squa.png',
    type: 'maladie',
    description: "Estimation du risque d'attaques de limaces sur vos cultures.",
    descriptionLong: "Connectez votre station météo Weenat afin d'estimer les risques d'attaques de limaces sur vos cultures et déclencher les traitements au bon moment.",
    sensors: ['P+', 'PT'],
    connected: false
  },
  {
    id: 'arvalis-previlis-mileos',
    name: 'Modèles Arvalis — PRÉVI-LIS / MILÉOS',
    logo: './logos/Integration-ModelesArvalis-squa.png',
    type: 'maladie',
    description: "Modèles maladies céréales d'hiver et mildiou pomme de terre.",
    descriptionLong: "Connectez votre station météo Weenat aux modèles PRÉVI-LIS ou MILÉOS d'Arvalis afin d'optimiser la protection contre les maladies des céréales d'hiver ou le mildiou de la pomme de terre.",
    sensors: ['P+', 'PT', 'LWS'],
    connected: false
  },
  {
    id: 'movida-grapevision',
    name: 'Movida GrapeVision',
    logo: './logos/Integration-Grapevision-squa.png',
    type: 'maladie',
    description: "Détection des risques maladie et optimisation des traitements vigne.",
    descriptionLong: "Connectez votre station météo Weenat afin de détecter les risques maladie sur vigne et d'optimiser vos traitements phytosanitaires grâce à Movida GrapeVision.",
    sensors: ['P+', 'PT'],
    connected: false
  },
  {
    id: 'pixagri',
    name: 'Pixagri',
    logo: './logos/Integration-PixagriIrrigation-squa.png',
    type: 'irrigation',
    description: "Bilan hydrique agronomique couplé aux images satellitaires.",
    descriptionLong: "Connectez votre station météo Weenat à Pixagri afin d'obtenir un bilan hydrique basé sur modèle agronomique et images satellitaires pour un pilotage précis de l'irrigation.",
    sensors: ['P+', 'PT', 'P'],
    connected: false
  },
  {
    id: 'rimpro',
    name: 'Rimpro',
    logo: './logos/Integration-Rimpro-squa.png',
    type: 'maladie',
    description: "Estimation du risque maladie et ravageur, optimisation des traitements.",
    descriptionLong: "Connectez votre station météo et capteur d'humectation foliaire Weenat afin d'estimer le risque maladie / ravageur et d'optimiser les traitements phytosanitaires.",
    sensors: ['P+', 'PT', 'LWS'],
    connected: false
  },
  {
    id: 'semiloni',
    name: 'Semiloni',
    logo: './logos/Integration-Semiloni-squa.png',
    type: 'maladie',
    description: "Estimation du risque de mildiou de l'oignon porte-graine.",
    descriptionLong: "Connectez votre station météo Weenat afin d'estimer le risque de mildiou de l'oignon porte-graine et d'optimiser vos interventions de traitement.",
    sensors: ['P+', 'PT'],
    connected: false
  },
  {
    id: 'vintel',
    name: 'Vintel',
    logo: './logos/Integration-Vintel-squa.png',
    type: 'fertilisation',
    description: "Optimisation de la fertilisation et des traitements sur vigne.",
    descriptionLong: "Connectez vos stations météo Weenat à Vintel pour optimiser la fertilisation et les traitements sur vigne grâce à des données météo précises et localisées.",
    sensors: ['P+', 'PT'],
    connected: false
  },
  {
    id: 'vitimeteo',
    name: 'VitiMeteo',
    logo: './logos/Integration-Vitimeteo-squa.png',
    type: 'maladie',
    description: "Détection des risques maladies et ravageurs, recommandations viticoles.",
    descriptionLong: "Connectez votre station météo à VitiMeteo afin de détecter les risques maladies et ravageurs sur vigne et d'obtenir des recommandations de traitement adaptées.",
    sensors: ['P+', 'PT', 'LWS'],
    connected: false
  },
  {
    id: 'xarvio',
    name: 'Xarvio',
    logo: './logos/Integration-Xarvio-squa.png',
    type: 'fertilisation',
    description: "Pilotage des grandes cultures : traitements et fertilisation.",
    descriptionLong: "Connectez vos capteurs Weenat à Xarvio afin d'optimiser la conduite des grandes cultures : traitements phytosanitaires et fertilisation avec les outils BASF.",
    sensors: ['P+', 'PT', 'P'],
    connected: false
  }
]
