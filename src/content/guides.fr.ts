import type { GuideKey } from "./slugs";
import type { GuideText } from "./guides";

export const GUIDES_FR: Record<GuideKey, GuideText> = {
  "remove-gps": {
    title: "Supprimer la position GPS d'une photo (tous appareils)",
    h1: "Comment supprimer la position GPS d'une photo",
    description:
      "Vos photos peuvent indiquer l'endroit exact où elles ont été prises. Vérifiez et supprimez la position GPS sur Windows, Mac, Linux, iPhone et Android, pour une photo ou un dossier.",
    short:
      "La position d'une photo est stockée dans ses balises EXIF GPS (GPSLatitude, GPSLongitude, GPSAltitude). Pour la supprimer : sous Windows, Propriétés › Détails › Supprimer les propriétés et les informations personnelles. Sur Mac, ouvrez la photo dans Aperçu › Outils › Afficher l'inspecteur › GPS › Supprimer les infos de localisation. Sur iPhone, touchez Options dans la feuille de partage et désactivez Position. Sur n'importe quel système et pour autant de fichiers que vous voulez, déposez-les sur EOM, choisissez le profil « Position uniquement » et cliquez sur Nettoyer.",
    minutes: 5,
    sections: [
      {
        id: "verifier",
        h2: "D'abord, vérifiez si la photo contient une position",
        body: [
          "Les téléphones inscrivent la position dans chaque photo dès que l'appareil photo a accès à la localisation, ce qui est le réglage par défaut sur beaucoup de modèles. Les appareils photo avec GPS intégré ou reliés à un téléphone font de même.",
          "Le plus rapide : déposez la photo sur notre [vérificateur dans le navigateur](@check). Il lit le fichier sur votre appareil et affiche les coordonnées s'il y en a. Vous pouvez aussi regarder dans l'Explorateur Windows (Propriétés › Détails, section GPS) ou dans Aperçu sur Mac (Outils › Afficher l'inspecteur › onglet GPS).",
          "La position est en général précise à quelques mètres. Assez pour désigner une maison, pas seulement une rue.",
        ],
      },
      {
        id: "ordinateur",
        h2: "Supprimer la position sur votre ordinateur",
        body: [
          "**Windows (une ou quelques photos, JPEG/TIFF) :**",
          {
            ol: [
              "Clic droit sur la photo, puis Propriétés.",
              "Onglet Détails, puis **Supprimer les propriétés et les informations personnelles** en bas.",
              "Choisissez « Supprimer les propriétés suivantes de ce fichier », cochez les champs GPS (ou Sélectionner tout), puis OK.",
            ],
          },
          "**Mac (une photo à la fois) :**",
          {
            ol: [
              "Ouvrez la photo dans Aperçu.",
              "Outils › Afficher l'inspecteur, puis l'onglet GPS.",
              "Cliquez sur **Supprimer les infos de localisation** et enregistrez.",
            ],
          },
          "**Linux, ou tout système avec ExifTool :** `exiftool -gps:all= photo.jpg` supprime le bloc GPS et garde une sauvegarde nommée `photo.jpg_original`.",
          {
            note: "Une position peut aussi être stockée hors du bloc GPS : dans le XMP, et sous forme de noms de lieux (ville, pays, quartier) dans l'IPTC. Les outils intégrés aux systèmes les oublient souvent. Le profil « Position uniquement » d'EOM les supprime tous.",
          },
        ],
      },
      {
        id: "dossier",
        h2: "La supprimer d'un dossier entier d'un coup",
        body: [
          "Les outils système fonctionnent fichier par fichier. Pour un dossier de vacances, un shooting ou une sauvegarde de téléphone, utilisez EOM :",
          {
            ol: [
              "Téléchargez [EOM](@download) (gratuit, sans installation) et ouvrez-le.",
              "Déposez le dossier sur la fenêtre. Chaque photo reçoit une note de risque.",
              "Choisissez le profil **Position uniquement**. L'aperçu montre exactement les balises qui vont partir.",
              "Cochez **Copies dans** pour garder les originaux intacts, puis cliquez sur **Nettoyer**.",
              "Ouvrez Avant / après sur n'importe quel fichier pour confirmer que les balises GPS ont disparu.",
            ],
          },
          "Dans un terminal, c'est une seule ligne :",
          {
            code: "eom clean ~/Images/vacances -r --profile location --output-dir ~/Images/vacances-propres",
          },
        ],
      },
      {
        id: "empecher",
        h2: "Empêcher votre téléphone de l'ajouter",
        body: [
          "**iPhone :** Réglages › Confidentialité et sécurité › Service de localisation › Appareil photo › **Jamais**. Les nouvelles photos ne seront plus géolocalisées. Celles déjà prises gardent leur position.",
          "**Android :** ouvrez l'appli Appareil photo, ses paramètres, et désactivez l'option de localisation. Elle s'appelle « Enregistrer la position », « Balises de localisation » ou à peu près, selon le fabricant.",
          "La désactiver supprime la vue carte de votre galerie. Si vous y tenez, gardez la localisation et retirez-la seulement des copies que vous partagez. Voir [photos iPhone et Android](@phone-photos).",
        ],
      },
      {
        id: "reseaux",
        h2: "Les réseaux sociaux ne l'enlèvent pas déjà ?",
        body: [
          "Les grandes plateformes retirent en général les données EXIF de la copie publique d'une photo. Cela vous protège des autres utilisateurs, pas de la plateforme, qui reçoit le fichier original.",
          "Beaucoup de canaux transmettent le fichier original, position comprise : pièces jointes d'e-mail, liens de partage cloud, photos envoyées « en tant que fichier » ou « document » dans les messageries, nombre de forums et de sites de petites annonces, fichiers copiés sur une clé USB. Nettoyez avant de partager, et vous n'avez pas à connaître les règles de chacun.",
        ],
      },
    ],
    howto: {
      name: "Supprimer la position GPS de photos avec EOM",
      steps: [
        [
          "Ouvrir EOM",
          "Téléchargez EOM pour Windows, macOS ou Linux et lancez-le. Rien à installer.",
        ],
        ["Ajouter les photos", "Glissez les photos ou le dossier entier sur la fenêtre d'EOM."],
        [
          "Choisir un profil",
          "Sélectionnez le profil « Position uniquement ». L'aperçu marque chaque balise de position qui sera supprimée.",
        ],
        [
          "Garder les originaux",
          "Cochez « Copies dans » et choisissez un dossier si vous voulez conserver les fichiers d'origine.",
        ],
        [
          "Nettoyer et vérifier",
          "Cliquez sur Nettoyer, puis ouvrez Avant / après pour confirmer que la position a disparu.",
        ],
      ],
    },
    faq: [
      [
        "Une capture d'écran contient-elle une position GPS ?",
        "En général non. Les captures d'écran n'enregistrent pas de GPS. Elles peuvent tout de même contenir le modèle de l'appareil, la date et le logiciel.",
      ],
      [
        "Supprimer la position dégrade-t-il la photo ?",
        "Aucune différence visible. Avec ExifTool installé, EOM ne touche pas du tout aux données de l'image. Sans lui, les JPEG sont réenregistrés avec leurs réglages de qualité d'origine.",
      ],
      [
        "Puis-je supprimer la position mais garder la date ?",
        "Oui. Le profil « Position uniquement » d'EOM supprime les coordonnées GPS et les noms de lieux, et garde tout le reste, dates comprises.",
      ],
      [
        "La position est-elle aussi dans le nom du fichier ou du dossier ?",
        "Pas dans le fichier photo lui-même, mais certaines applis nomment les exports ou les albums d'après un lieu. Vérifiez aussi les noms avant de partager.",
      ],
    ],
  },

  "phone-photos": {
    title: "Supprimer la position des photos iPhone et Android",
    h1: "Supprimer la position des photos iPhone et Android",
    description:
      "Votre téléphone géolocalise chaque photo par défaut. Partager sans position sur iPhone et Android, ne plus l'enregistrer, et nettoyer les photos déjà prises.",
    short:
      "Sur iPhone, touchez Partager, puis Options en haut de la feuille de partage, et désactivez Position avant d'envoyer. Pour ne plus l'enregistrer : Réglages › Confidentialité et sécurité › Service de localisation › Appareil photo › Jamais. Sur Android, désactivez l'option de localisation dans les paramètres de l'appli Appareil photo. Pour les photos déjà prises, retirez la position au moment du partage, ou nettoyez-les sur ordinateur avec EOM.",
    minutes: 4,
    sections: [
      {
        id: "pourquoi",
        h2: "Pourquoi votre téléphone enregistre l'endroit de chaque photo",
        body: [
          "Les galeries s'en servent pour la vue carte et les « souvenirs ». Pour cela, l'appareil photo écrit des coordonnées GPS dans chaque photo, précises à quelques mètres. Elles suivent le fichier partout où il va.",
          "La plupart des gens ne le remarquent jamais, car rien ne se voit sur l'image. Notre [vérificateur de photos](@check) le montre en une seconde.",
        ],
      },
      {
        id: "iphone-partager",
        h2: "iPhone : partager une photo sans sa position",
        body: [
          {
            ol: [
              "Sélectionnez la photo (ou plusieurs) dans Photos et touchez **Partager**.",
              "En haut de la feuille de partage, touchez **Options**.",
              "Désactivez **Position**, touchez OK et partagez normalement.",
            ],
          },
          "Seule la copie envoyée est concernée. La photo de votre photothèque garde sa position. Le bouton Options s'applique aussi à AirDrop, Messages et Mail.",
        ],
      },
      {
        id: "iphone-arreter",
        h2: "iPhone : ne plus géolocaliser les nouvelles photos",
        body: [
          "Réglages › Confidentialité et sécurité › Service de localisation › Appareil photo › **Jamais**. Les nouvelles photos n'auront plus de position. Les anciennes ne changent pas.",
          "Les iPhone enregistrent les photos en HEIC par défaut. Les fichiers HEIC contiennent les mêmes données EXIF que les JPEG, position comprise.",
        ],
      },
      {
        id: "android",
        h2: "Android",
        body: [
          "Chaque fabricant a sa propre appli photo, les noms changent donc, mais le réglage existe partout :",
          {
            ul: [
              "Ouvrez l'appli **Appareil photo** et ses paramètres (roue dentée).",
              "Désactivez **Enregistrer la position**, **Balises de localisation** ou l'option au nom proche.",
              "Ou retirez l'autorisation de localisation : Paramètres › Applications › Appareil photo › Autorisations.",
            ],
          },
          "Certaines galeries peuvent retirer la position au moment du partage. Regardez les options de partage de la vôtre. En cas de doute, vérifiez le fichier reçu avec le [vérificateur](@check).",
        ],
      },
      {
        id: "photos-existantes",
        h2: "Les photos déjà prises",
        body: [
          "Copiez-les sur un ordinateur, déposez le dossier sur [EOM](@download) et utilisez le profil **Position uniquement** ou **Partage sur les réseaux sociaux**. Cochez « Copies dans » pour garder les originaux avec leur carte et partager les copies propres.",
          "Les vidéos filmées au téléphone contiennent souvent une position elles aussi. Voir [fichiers MP3, MP4 et vidéo](@audio-video).",
        ],
      },
    ],
    faq: [
      [
        "Si je désactive Position dans les Options de partage, la photo de ma photothèque change-t-elle ?",
        "Non. Seule la copie envoyée est nettoyée. La photo de votre photothèque garde sa position.",
      ],
      [
        "AirDrop envoie-t-il la position ?",
        "AirDrop envoie le fichier original, position comprise, sauf si vous désactivez Position dans les Options de la feuille de partage avant.",
      ],
      [
        "Les messageries retirent-elles la position ?",
        "Cela dépend de l'appli et de la façon d'envoyer. Une photo envoyée « en tant que fichier » ou « document » est en général l'original, avec ses métadonnées. Nettoyez-la avant pour être sûr.",
      ],
    ],
  },

  "what-is-exif": {
    title: "Qu'est-ce que les données EXIF ? Contenu et risques",
    h1: "Qu'est-ce que les données EXIF ?",
    description:
      "L'EXIF, ce sont les données cachées que les appareils photo et téléphones stockent dans chaque photo : appareil, réglages, date, souvent GPS et numéro de série.",
    short:
      "L'EXIF (Exchangeable Image File Format) est une norme pour stocker des informations à l'intérieur des fichiers photo. Appareils photo et téléphones y enregistrent la marque et le modèle, les réglages de prise de vue (exposition, ouverture, ISO, focale), la date et l'heure, et souvent la position GPS et le numéro de série de l'appareil. C'est invisible sur l'image, mais toute personne qui possède le fichier peut le lire avec des outils gratuits.",
    minutes: 5,
    sections: [
      {
        id: "contenu",
        h2: "Ce que contient un bloc EXIF",
        body: [
          "Une photo de téléphone porte des dizaines de balises. Celles qui comptent pour votre vie privée :",
          {
            table: [
              ["Balise", "Exemple", "Ce qu'elle révèle"],
              [
                "GPSLatitude / GPSLongitude",
                "48° 51' 30\" N, 2° 17' 40\" E",
                "Où vous étiez, à quelques mètres près",
              ],
              ["DateTimeOriginal", "2024:03:14 08:42:31", "Quand, à la seconde"],
              ["Make / Model", "Apple iPhone 15 Pro", "Quel appareil vous utilisez"],
              ["BodySerialNumber", "DNPXQ2M5…", "Relie toutes les photos du même appareil"],
              ["Artist / Copyright", "Jane Doe", "Votre nom"],
              ["Software", "17.3.1 / Lightroom", "Le logiciel et sa version"],
              ["ThumbnailImage", "JPEG 160×120", "Un aperçu qui peut survivre aux recadrages"],
            ],
          },
          "Le reste est technique : exposition, ouverture, ISO, flash, balance des blancs, orientation. Sans danger en soi.",
        ],
      },
      {
        id: "normes",
        h2: "EXIF, XMP et IPTC : trois endroits pour le même genre de données",
        body: [
          "L'**EXIF** date de 1995 et est écrit par l'appareil. Le **XMP**, plus récent, est surtout écrit par les logiciels de retouche comme Lightroom ou Photoshop ; il peut contenir les mêmes champs et un historique de retouche. L'**IPTC** vient de la presse et contient légendes, mots-clés, crédits et noms de lieux.",
          "Un nettoyage qui ne touche que l'EXIF peut laisser votre nom dans le XMP ou votre ville dans l'IPTC. EOM lit et supprime les trois.",
        ],
      },
      {
        id: "qui",
        h2: "Qui peut les lire",
        body: [
          "Toute personne qui a le fichier. Chaque système en affiche une partie dans les propriétés du fichier, et des outils gratuits affichent tout. Pas de mot de passe, pas de compétence particulière.",
          "Ce qui compte, c'est que le fichier arrive en version originale. Les grands réseaux sociaux retirent en général l'EXIF des copies publiques. Les pièces jointes, les liens cloud, les photos envoyées en tant que fichier et beaucoup de sites, non. Voir [ce que révèlent les métadonnées](@what-metadata-reveals).",
        ],
      },
      {
        id: "voir",
        h2: "Comment voir les données EXIF d'une photo",
        body: [
          {
            ul: [
              "Dans le navigateur, sans envoi : notre [vérificateur de photos](@check).",
              "Windows : clic droit › Propriétés › Détails.",
              "Mac : Aperçu › Outils › Afficher l'inspecteur › onglet (i), puis EXIF et GPS.",
              "Toutes les balises, sur tout système : ouvrez la photo dans [EOM](@download), ou lancez `exiftool photo.jpg`.",
            ],
          },
        ],
      },
      {
        id: "supprimer",
        h2: "Comment les supprimer",
        body: [
          "Supprimer l'EXIF ne change pas l'image. Vous pouvez tout supprimer, ou seulement l'essentiel : la position, votre nom, les numéros de série. C'est exactement ce que font les profils d'EOM, et le guide [supprimer la position GPS d'une photo](@remove-gps) détaille les outils intégrés de chaque système.",
        ],
      },
    ],
    faq: [
      [
        "Les données EXIF, est-ce la même chose que les métadonnées ?",
        "L'EXIF est un type de métadonnées, propre aux images. Les photos peuvent aussi contenir du XMP et de l'IPTC, et les autres fichiers ont les leurs : ID3 dans les MP3, propriétés de document dans les PDF et fichiers Office.",
      ],
      [
        "Les fichiers PNG ont-ils des données EXIF ?",
        "C'est possible. Le PNG accepte l'EXIF et des blocs de texte, même si beaucoup d'applis y écrivent moins que dans les JPEG.",
      ],
      [
        "Supprimer l'EXIF modifie-t-il la photo ?",
        "Non. Les pixels restent identiques. Seule la balise d'orientation peut compter : sans elle, quelques visionneuses affichent la photo pivotée. Les profils d'EOM autres que « Tout supprimer » gardent les balises techniques comme l'orientation.",
      ],
    ],
  },

  "what-metadata-reveals": {
    title: "Ce que révèlent les métadonnées de vos photos (cas réels)",
    h1: "Ce que les métadonnées de vos photos révèlent sur vous",
    description:
      "Position, identité, numéros de série, appareils, habitudes, historique : ce que disent les métadonnées cachées, avec un cas réel, et comment EOM évalue le risque.",
    short:
      "Les métadonnées d'une photo peuvent révéler où vous étiez (coordonnées GPS précises à quelques mètres), qui vous êtes (noms d'auteur et de propriétaire), quel appareil vous utilisez (marque, modèle, numéros de série qui relient vos photos entre elles), quand vous y étiez (horodatage à la seconde) et comment le fichier a été retouché. EOM classe chaque balise dans ces catégories et note chaque fichier : risque élevé, moyen, faible ou aucun.",
    minutes: 6,
    sections: [
      {
        id: "categories",
        h2: "Six choses qu'un fichier peut dire de vous",
        body: [
          "**1. Où vous étiez.** Latitude, longitude et altitude GPS, plus des noms de lieux (ville, pays). Quelques photos prises chez vous donnent votre adresse.",
          "**2. Qui vous êtes.** Auteur, artiste, propriétaire, titulaire du copyright, le nom « modifié par » d'un document, la société à qui votre logiciel est licencié.",
          "**3. Ce qui vous relie.** Numéros de série des boîtiers et objectifs, identifiants uniques d'images et de documents. Ils rattachent à une même personne des photos publiées sous des comptes différents.",
          "**4. Ce que vous possédez.** Marque, modèle, objectif, firmware.",
          "**5. Quand.** L'heure de prise de vue à la seconde, avec le fuseau. Sur beaucoup de photos, cela dessine une routine.",
          "**6. Ce que le fichier a subi.** Logiciel, historique de retouche, et dans les documents, les auteurs des révisions et le temps total d'édition.",
        ],
      },
      {
        id: "cas",
        h2: "Un cas réel : retrouvé grâce au GPS d'une photo",
        body: [
          "En décembre 2012, John McAfee, recherché pour être interrogé par la police du Belize, se cachait. Des journalistes de Vice ont publié une photo de lui. Elle contenait toujours ses coordonnées GPS, et des lecteurs l'ont situé au Guatemala en quelques heures. Le lieu devait rester secret. Personne n'avait vérifié le fichier.",
          "C'est le cas d'école justement parce qu'il est banal : une photo, aucun piratage, juste un fichier qui en disait plus que son auteur ne le voulait.",
        ],
      },
      {
        id: "quotidien",
        h2: "Des situations quotidiennes où cela compte",
        body: [
          {
            ul: [
              "Vendre un objet en ligne depuis chez soi : les photos de l'annonce peuvent porter votre adresse.",
              "Envoyer un CV ou un rapport en PDF ou Word : auteur, société et anciennes révisions voyagent avec.",
              "Publier sous pseudonyme : le numéro de série de l'appareil peut relier le compte à votre vrai nom.",
              "Partager des photos d'enfants : position et habitudes.",
              "Journalistes et militants : sources, lieux et appareils.",
            ],
          },
        ],
      },
      {
        id: "note",
        h2: "Comment EOM évalue le risque",
        body: [
          "EOM range chaque balise dans une catégorie, et chaque catégorie a une gravité :",
          {
            table: [
              ["Gravité", "Catégories"],
              ["Élevée", "Position, identité, identifiants uniques et numéros de série"],
              [
                "Moyenne",
                "Appareil, dates, logiciel et historique de retouche, miniatures intégrées",
              ],
              ["Faible", "Copyright et licence, autres balises"],
              ["Aucune", "Balises techniques (taille, couleur, exposition)"],
            ],
          },
          "La note d'un fichier est celle de sa catégorie la plus grave. Une seule balise GPS suffit à classer un fichier en risque élevé. Testez n'importe quelle photo avec le [vérificateur dans le navigateur](@check), qui applique les mêmes règles.",
        ],
      },
    ],
    faq: [
      [
        "Les métadonnées peuvent-elles révéler mon adresse ?",
        "Oui. Les coordonnées GPS des photos prises chez vous désignent le bâtiment, souvent à quelques mètres près.",
      ],
      [
        "Mes photos peuvent-elles être reliées entre elles sans mon nom ?",
        "Oui. Les numéros de série du boîtier et de l'objectif, et certains identifiants d'image, sont les mêmes sur toutes les photos de l'appareil.",
      ],
      [
        "Toutes les métadonnées sont-elles dangereuses ?",
        "Non. Les balises techniques comme l'exposition, le profil couleur ou l'orientation ne révèlent rien de personnel. C'est pourquoi EOM peut supprimer l'essentiel et garder le reste.",
      ],
    ],
  },

  pdf: {
    title: "Supprimer les métadonnées d'un PDF (correctement)",
    h1: "Comment supprimer les métadonnées d'un PDF, correctement",
    description:
      "Un PDF stocke auteur, logiciel, société et dates à deux endroits, et une modification rapide peut laisser les anciennes valeurs récupérables. Comment vraiment les supprimer.",
    short:
      "Un PDF garde ses métadonnées à deux endroits : le dictionnaire d'informations du document (Titre, Auteur, Sujet, Mots-clés, Créateur, Producteur, dates) et un flux XMP. Beaucoup d'outils les modifient par une mise à jour incrémentale ajoutée à la fin du fichier, ce qui laisse les anciennes valeurs récupérables. Pour vraiment supprimer les métadonnées d'un PDF, il faut réécrire le fichier. EOM réécrit toujours les PDF ; la fonction Supprimer les informations masquées d'Adobe Acrobat Pro aussi.",
    minutes: 5,
    sections: [
      {
        id: "contenu",
        h2: "Ce que révèle un PDF",
        body: [
          {
            ul: [
              "**Auteur** : souvent le nom de votre compte Word ou de votre session.",
              "**Créateur et Producteur** : le logiciel et la version qui ont produit le fichier.",
              "**Dates de création et de modification**, avec le fuseau horaire.",
              "**Titre, Sujet, Mots-clés** : parfois un ancien titre de travail.",
              "**XMP** : une deuxième copie de tout cela, plus des identifiants de document et parfois un historique.",
            ],
          },
        ],
      },
      {
        id: "piege",
        h2: "Le piège des mises à jour incrémentales",
        body: [
          "Le format PDF permet d'ajouter des modifications à la fin du fichier au lieu de le réécrire. C'est rapide, mais l'ancienne version des métadonnées reste dans le fichier, et des outils de récupération peuvent la lire.",
          "La documentation d'ExifTool indique elle-même que ses modifications de PDF sont réversibles pour cette raison. C'est pourquoi EOM n'utilise jamais ExifTool pour les PDF : il réécrit tout le fichier avec pypdf, et les anciennes valeurs disparaissent.",
          {
            note: "Vider les propriétés du document dans une visionneuse puis enregistrer peut poser le même problème. Vérifiez le résultat avec un lecteur de métadonnées complet avant d'envoyer un PDF sensible.",
          },
        ],
      },
      {
        id: "comment",
        h2: "Trois façons de faire",
        body: [
          "**Avec EOM (gratuit, Windows, Mac, Linux) :** déposez les PDF, choisissez un profil (« Anonymat total » supprime tout ce qui n'est pas nécessaire à l'affichage), cliquez sur Nettoyer. Avant / après montre ce qui reste.",
          "**Avec Adobe Acrobat Pro :** dans les outils de biffure, utilisez **Supprimer les informations masquées** (ou Nettoyer le document). Cela retire aussi calques masqués, commentaires et pièces jointes.",
          "**À la source :** avant d'exporter depuis Word, lancez Fichier › Informations › Vérifier la présence de problèmes › Inspecter le document. Voir [Word, Excel et PowerPoint](@office).",
          "Dans un terminal, pour un dossier :",
          {
            code: "eom clean ~/Documents/a-envoyer -r --profile anonymous --output-dir ~/Documents/propres",
          },
        ],
      },
    ],
    howto: {
      name: "Supprimer les métadonnées d'un PDF avec EOM",
      steps: [
        ["Ouvrir EOM", "Lancez EOM sur Windows, macOS ou Linux."],
        ["Ajouter le PDF", "Glissez les fichiers PDF ou leur dossier sur la fenêtre."],
        ["Choisir un profil", "Choisissez « Anonymat total » ou « Tout supprimer »."],
        [
          "Nettoyer",
          "Cliquez sur Nettoyer. EOM réécrit chaque PDF pour que les anciennes valeurs ne restent pas dans le fichier.",
        ],
        [
          "Vérifier",
          "Ouvrez Avant / après pour constater que l'Auteur, le Créateur et les données XMP ont disparu.",
        ],
      ],
    },
    faq: [
      [
        "« Imprimer en PDF » supprime-t-il les métadonnées ?",
        "Le fichier produit en contient souvent moins, mais il garde en général le logiciel et les dates, parfois le titre. Vérifiez le résultat.",
      ],
      [
        "Supprimer les métadonnées change-t-il le contenu du PDF ?",
        "Non. Pages, texte et images restent identiques. Seuls les propriétés du document et le flux XMP sont vidés.",
      ],
      [
        "Peut-on voir les métadonnées d'un PDF sans logiciel ?",
        "La plupart des lecteurs PDF en montrent une partie dans Propriétés du document. Pour tout voir, XMP compris, ouvrez-le dans EOM.",
      ],
    ],
  },

  office: {
    title: "Supprimer les métadonnées Word, Excel et PowerPoint",
    h1: "Supprimer les métadonnées des fichiers Word, Excel et PowerPoint",
    description:
      "Les fichiers Office stockent auteur, société, temps d'édition et le nom derrière chaque modification suivie. Les supprimer avec l'Inspecteur de document ou en une fois avec EOM.",
    short:
      "Les fichiers Word, Excel et PowerPoint stockent l'auteur, le « modifié par », la société, le responsable, le modèle, le numéro de révision et le temps total d'édition, et Word garde le nom de chaque personne qui a laissé un commentaire ou une modification suivie. Dans Office sous Windows : Fichier › Informations › Vérifier la présence de problèmes › Inspecter le document, puis Supprimer tout. EOM supprime ces propriétés des fichiers DOCX, XLSX et PPTX sans ouvrir Office, et remplace le nom des auteurs de commentaires et de modifications par « Author ».",
    minutes: 4,
    sections: [
      {
        id: "contenu",
        h2: "Ce que contient un fichier Office",
        body: [
          {
            ul: [
              "**Auteur** et **Modifié par** : noms issus du compte Office ou de l'ordinateur.",
              "**Société** et **Responsable** : issus de la licence ou du modèle.",
              "**Temps total d'édition** et **numéro de révision** : combien de temps vous y avez passé, combien de fois il a été enregistré.",
              "**Modèle** : parfois un chemin sur votre ordinateur ou un lecteur d'entreprise.",
              "**Commentaires et modifications suivies** : chacun avec le nom de son auteur.",
            ],
          },
        ],
      },
      {
        id: "inspecteur",
        h2: "Avec l'Inspecteur de document d'Office (Windows)",
        body: [
          {
            ol: [
              "Enregistrez d'abord une copie du fichier. Certaines suppressions sont définitives.",
              "Fichier › Informations › **Vérifier la présence de problèmes** › **Inspecter le document**.",
              "Cochez Propriétés du document et informations personnelles (et Commentaires, si vous voulez les retirer), puis Inspecter.",
              "Cliquez sur **Supprimer tout** pour chaque section à nettoyer.",
            ],
          },
          "Dans Word pour Mac, Révision › Protéger le document propose une option pour supprimer les informations personnelles du fichier à l'enregistrement.",
        ],
      },
      {
        id: "eom",
        h2: "Avec EOM, pour beaucoup de fichiers d'un coup",
        body: [
          "Déposez un dossier de fichiers DOCX, XLSX et PPTX sur [EOM](@download). Il lit les propriétés principales et étendues ainsi que les noms derrière les commentaires et modifications suivies, évalue le risque, et supprime ce que prévoit le profil. Office n'a pas besoin d'être installé.",
          "Les commentaires et modifications suivies font partie du contenu du document. EOM anonymise le nom de leurs auteurs ; pour supprimer les commentaires eux-mêmes, acceptez ou refusez les modifications dans Office.",
        ],
      },
    ],
    faq: [
      [
        "Enregistrer en PDF supprime-t-il les métadonnées Office ?",
        "Une partie passe dans le PDF : il reprend en général le titre et l'auteur. Nettoyez le PDF ensuite ; voir [supprimer les métadonnées d'un PDF](@pdf).",
      ],
      [
        "Les anciens fichiers .doc et .xls fonctionnent-ils ?",
        "EOM gère les formats modernes (DOCX, XLSX, PPTX). Enregistrez d'abord les anciens fichiers au nouveau format.",
      ],
    ],
  },

  "audio-video": {
    title: "Supprimer les métadonnées MP3, MP4 et vidéo",
    h1: "Supprimer les métadonnées des fichiers MP3, MP4 et vidéo",
    description:
      "Les fichiers audio et vidéo ont aussi leurs balises : artiste, commentaires, encodeur, pochette, et souvent une position pour les vidéos de téléphone. Les voir et les supprimer.",
    short:
      "Les MP3 stockent des balises ID3 (artiste, album, commentaires, « encodé par », pochette), et les FLAC, OGG et M4A ont leurs équivalents. Les vidéos MP4 et MOV stockent la date de création, l'appareil et, pour les vidéos de téléphone, souvent la position GPS. EOM lit et supprime ces balises pour MP3, FLAC, OGG, Opus, WAV, AIFF, M4A, WMA, APE, WavPack, MP4, M4V, MOV, MKV et WebM.",
    minutes: 3,
    sections: [
      {
        id: "audio",
        h2: "Audio : plus que le titre du morceau",
        body: [
          "Des balises prévues pour les lecteurs de musique peuvent contenir des données personnelles : un nom dans « Artiste » ou « Encodé par » sur un mémo vocal, des commentaires, le logiciel utilisé, une pochette prise avec votre téléphone.",
          "Pour un podcast ou une note vocale envoyée à un journaliste, cela vaut le coup de vérifier. Déposez les fichiers sur EOM et choisissez un profil.",
        ],
      },
      {
        id: "video",
        h2: "Vidéo : date, appareil et lieu",
        body: [
          "Les téléphones enregistrent dans le fichier vidéo la date de création, le modèle de l'appareil et souvent la position. Les réseaux sociaux réencodent les vidéos, mais un fichier envoyé directement garde tout.",
          "EOM nettoie les MP4, M4V et MOV via ExifTool quand il est installé (il est inclus dans la version Windows), et via son lecteur intégré sinon.",
        ],
      },
      {
        id: "cli",
        h2: "Pour une bibliothèque de musique ou de vidéos",
        body: [
          "Nettoyer tout un dossier vers des copies :",
          {
            code: "eom clean ~/Musique/demos -r --profile anonymous --output-dir ~/Musique/demos-propres",
          },
          "Toutes les commandes dans [nettoyer les métadonnées en ligne de commande](@command-line).",
        ],
      },
    ],
    faq: [
      [
        "Supprimer les balises change-t-il le son ou l'image ?",
        "Non. Seules les balises sont supprimées ; les flux audio et vidéo ne sont pas touchés.",
      ],
      [
        "Mon lecteur affichera-t-il encore les titres ?",
        "Pas si vous supprimez tout. Choisissez un profil qui garde ce qu'il vous faut, ou nettoyez seulement les copies que vous partagez.",
      ],
    ],
  },

  windows: {
    title: "Supprimer les métadonnées sous Windows 10 et 11",
    h1: "Comment supprimer les métadonnées sous Windows",
    description:
      "Windows sait supprimer des propriétés de fichiers, avec des limites. Comment l'utiliser, et comment nettoyer photos, PDF et fichiers Office en masse, gratuitement.",
    short:
      "Sous Windows 10 et 11, clic droit sur un fichier, Propriétés › Détails › Supprimer les propriétés et les informations personnelles, puis supprimez tout ou une sélection. Cela marche pour les photos et fichiers Office courants, par lot, mais pas pour tous les formats ni tous les blocs de métadonnées. Pour un contrôle complet, EOM tourne sous Windows sans installation, inclut ExifTool, nettoie des dossiers entiers et s'ajoute au menu du clic droit.",
    minutes: 4,
    sections: [
      {
        id: "integre",
        h2: "La méthode intégrée",
        body: [
          {
            ol: [
              "Sélectionnez un ou plusieurs fichiers dans l'Explorateur, clic droit, **Propriétés**.",
              "Onglet **Détails**, puis **Supprimer les propriétés et les informations personnelles**.",
              "Choisissez **Créer une copie en supprimant toutes les propriétés possibles**, ou cochez les propriétés à supprimer du fichier lui-même.",
            ],
          },
          "Limites : elle ne connaît que les propriétés que Windows comprend pour chaque format, ne montre aucun risque et ne dit rien de ce qu'elle n'a pas pu supprimer. Les PDF, l'audio et de nombreux blocs des photos (XMP, notes du fabricant) lui échappent.",
        ],
      },
      {
        id: "eom",
        h2: "Avec EOM",
        body: [
          {
            ol: [
              "Téléchargez `eom-windows-x86_64.zip` depuis la [section téléchargement](@download), décompressez, lancez `eom.exe`. ExifTool est inclus.",
              "Déposez fichiers ou dossiers. Chacun reçoit une note de risque.",
              "Choisissez un profil, cochez « Copies dans » pour garder les originaux, cliquez sur Nettoyer.",
            ],
          },
          "Dans les Réglages, vous pouvez ajouter EOM au menu du clic droit de l'Explorateur.",
          "Dans PowerShell, le même binaire est un outil en ligne de commande :",
          {
            code: "eom.exe clean C:\\Users\\moi\\Pictures -r --profile social --output-dir C:\\Users\\moi\\propre",
          },
        ],
      },
    ],
    faq: [
      [
        "EOM a-t-il besoin des droits administrateur ?",
        "Non. C'est un seul exécutable qui se lance depuis n'importe quel dossier.",
      ],
      [
        "Windows SmartScreen le bloque ?",
        "Les nouveaux téléchargements non signés peuvent déclencher SmartScreen. Cliquez sur « Informations complémentaires », puis « Exécuter quand même ». Le code source est public sur GitHub.",
      ],
    ],
  },

  mac: {
    title: "Supprimer les métadonnées sur Mac (photos, PDF, fichiers)",
    h1: "Comment supprimer les métadonnées sur Mac",
    description:
      "macOS sait retirer la position d'une photo dans Aperçu et Photos, pas beaucoup plus. Nettoyer photos, PDF et fichiers Office sur Mac, un par un ou en masse.",
    short:
      "Sur Mac, Aperçu retire la position d'une photo (Outils › Afficher l'inspecteur › GPS › Supprimer les infos de localisation), et Photos peut exporter sans position (décochez les informations de localisation dans les options d'export). macOS n'a pas d'outil intégré pour retirer les autres métadonnées ni pour nettoyer PDF et fichiers Office en masse. EOM tourne sur les Mac Apple Silicon, nettoie des dossiers entiers et vérifie le résultat.",
    minutes: 4,
    sections: [
      {
        id: "apercu",
        h2: "Aperçu : la position d'une photo",
        body: [
          {
            ol: [
              "Ouvrez la photo dans Aperçu.",
              "Outils › **Afficher l'inspecteur**, puis l'onglet GPS.",
              "**Supprimer les infos de localisation**, puis enregistrez.",
            ],
          },
          "Seulement la position. L'appareil, les numéros de série, l'auteur et les dates restent.",
        ],
      },
      {
        id: "photos",
        h2: "Photos : exporter sans position",
        body: [
          "Sélectionnez les photos, Fichier › Exporter, et décochez l'option des informations de localisation dans la fenêtre d'export. Les copies exportées n'ont pas de position ; votre photothèque la garde.",
        ],
      },
      {
        id: "eom",
        h2: "Tout le reste, en masse : EOM",
        body: [
          {
            ol: [
              "Téléchargez `eom-macos-arm64.zip` depuis la [section téléchargement](@download) et décompressez-le.",
              "Le binaire n'est pas signé. Si macOS le bloque, lancez une fois `xattr -d com.apple.quarantine eom` dans le Terminal.",
              "Déposez photos, PDF ou fichiers Office, choisissez un profil, cliquez sur Nettoyer.",
            ],
          },
          "Avec Homebrew, `brew install exiftool` donne à EOM une lecture plus profonde (RAW, notes du fabricant, HEIC).",
        ],
      },
    ],
    faq: [
      [
        "EOM fonctionne-t-il sur les Mac Intel ?",
        "La version publiée vise Apple Silicon (macOS 14 ou plus récent). Sur un Mac Intel, vous pouvez lancer EOM depuis le code source avec Python.",
      ],
      [
        "AirDrop conserve-t-il les métadonnées ?",
        "Oui, AirDrop envoie le fichier original. Depuis Photos, désactivez d'abord Position dans les Options de la feuille de partage.",
      ],
    ],
  },

  linux: {
    title: "Supprimer les métadonnées sous Linux (interface et terminal)",
    h1: "Comment supprimer les métadonnées sous Linux",
    description:
      "Supprimer les métadonnées de photos, PDF, fichiers Office et audio sous Linux : ExifTool et mat2 en ligne de commande, ou EOM avec une interface et l'intégration au gestionnaire de fichiers.",
    short:
      "Sous Linux, `exiftool -all= fichier.jpg` supprime les métadonnées d'une photo et `mat2 fichier` crée une copie nettoyée de nombreux types de fichiers. Pour un outil graphique avec note de risque, profils de nettoyage et vérification avant/après, EOM tourne en un seul binaire sur toute distribution x86-64 avec glibc 2.31 ou plus, et peut s'ajouter au clic droit de votre gestionnaire de fichiers.",
    minutes: 4,
    sections: [
      {
        id: "terminal",
        h2: "Les outils en ligne de commande",
        body: [
          "**ExifTool** (paquet `libimage-exiftool-perl` sur Debian et Ubuntu) :",
          {
            code: "exiftool -all= photo.jpg           # tout supprimer, avec sauvegarde\nexiftool -gps:all= photo.jpg       # seulement le bloc GPS\nexiftool -r -all= ~/Images/export  # un dossier entier",
          },
          "**mat2** (Metadata Anonymisation Toolkit) écrit une copie `.cleaned` et gère images, PDF, fichiers Office et audio :",
          { code: "mat2 rapport.pdf" },
          "Évitez ExifTool pour les PDF à anonymiser : ses modifications de PDF sont incrémentales et réversibles. Voir [métadonnées PDF](@pdf).",
        ],
      },
      {
        id: "eom",
        h2: "EOM : une interface, des profils et une vérification",
        body: [
          { code: "unzip eom-linux-x86_64.zip && chmod +x eom && ./eom" },
          "Déposez fichiers ou dossiers, lisez le risque de chacun, choisissez ce qui part, et vérifiez avant / après. Dans les Réglages, ajoutez EOM au clic droit de votre gestionnaire de fichiers. Installez ExifTool pour une lecture plus profonde ; EOM l'utilise automatiquement.",
          "EOM est aussi une CLI, pratique dans des scripts : voir [nettoyer les métadonnées en ligne de commande](@command-line).",
        ],
      },
    ],
    faq: [
      [
        "Sur quelles distributions EOM fonctionne-t-il ?",
        "Toute distribution x86-64 avec glibc 2.31 ou plus : Ubuntu 20.04+, Debian 11+, Fedora, Arch, etc.",
      ],
      [
        "EOM est-il sur Flathub ou dans un dépôt de paquets ?",
        "Pas encore. Il est distribué en un seul binaire dans les versions GitHub, ou se lance depuis le code source avec Python.",
      ],
    ],
  },

  "online-tools": {
    title: "Outils en ligne pour supprimer les métadonnées : quels risques ?",
    h1: "Les outils en ligne de suppression des métadonnées sont-ils sûrs ?",
    description:
      "Envoyer un fichier pour en retirer les données privées, c'est d'abord les donner à quelqu'un d'autre. Les risques des outils en ligne et quoi utiliser à la place.",
    short:
      "La plupart des outils en ligne de suppression des métadonnées demandent d'envoyer le fichier sur leur serveur, c'est-à-dire de transmettre justement les données que vous voulez cacher (position, nom, historique du document) à un tiers dont vous ne pouvez vérifier ni le stockage ni la durée de conservation. Les outils qui tournent entièrement dans le navigateur évitent l'envoi, et les logiciels de bureau comme EOM n'envoient rien et nettoient aussi des dossiers entiers, des PDF et des fichiers Office.",
    minutes: 4,
    sections: [
      {
        id: "probleme",
        h2: "Le paradoxe : envoyer pour supprimer",
        body: [
          "Pour retirer la position d'une photo, un service en ligne reçoit la photo avec la position. Il faut ensuite croire qu'il supprime le fichier, ne le journalise pas, n'en garde pas de sauvegarde et ne se fait pas pirater. Rien sur la page ne peut le prouver.",
          "Pour une photo de vacances, pourquoi pas. Pour un contrat, un document médical, la photo d'une source ou de vos enfants, ce n'est pas un pari qui vaut le coup.",
        ],
      },
      {
        id: "verifier",
        h2: "Savoir si un outil web envoie votre fichier",
        body: [
          {
            ol: [
              "Ouvrez les outils de développement du navigateur (F12), onglet Réseau.",
              "Déposez un fichier dans l'outil.",
              "Si une requête transporte un contenu de la taille de votre fichier, il a été envoyé.",
            ],
          },
          "Notre [vérificateur de photos](@check) passe ce test : il lit le fichier dans le navigateur et n'envoie rien. Mais il ne fait que lire. Pour supprimer les métadonnées, utilisez une application de bureau.",
        ],
      },
      {
        id: "comparer",
        h2: "Outils en ligne ou EOM",
        body: [
          {
            table: [
              ["", "Outils avec envoi", "EOM"],
              ["Le fichier reste sur votre appareil", "Non", "Oui"],
              ["Fonctionne hors ligne", "Non", "Oui"],
              ["Dossiers entiers", "Variable", "Oui"],
              ["PDF, Office, audio, vidéo", "Variable", "Oui"],
              ["Montre ce qui reste après nettoyage", "Rarement", "Oui"],
              ["Prix, compte", "Variable", "Gratuit, aucun"],
            ],
          },
        ],
      },
    ],
    faq: [
      [
        "Les outils en ligne gardent-ils mes fichiers ?",
        "Impossible d'en être sûr. Certains publient une politique de conservation, mais rien dans le navigateur ne permet de la vérifier.",
      ],
      [
        "Les outils qui tournent dans le navigateur sont-ils sûrs ?",
        "S'ils tournent vraiment en local (vérifiez l'onglet Réseau), le fichier ne quitte pas votre appareil. La plupart ne font que lire, ou ne gèrent que quelques formats.",
      ],
    ],
  },

  "command-line": {
    title: "Nettoyer les métadonnées en ligne de commande (CLI EOM & CI)",
    h1: "Nettoyer les métadonnées en ligne de commande",
    description:
      "Nettoyer en masse photos, PDF, fichiers Office et audio depuis un terminal ou une CI avec la CLI d'EOM : contrôle du risque par code de sortie, profils, simulations.",
    short:
      "Le binaire EOM est aussi un outil en ligne de commande : `eom risk CHEMIN -r` affiche le risque de chaque fichier et sort avec 0 (aucun ou faible), 1 (moyen) ou 2 (élevé) ; `eom clean CHEMIN -r --profile social --output-dir SORTIE` écrit des copies nettoyées ; `eom extract` exporte des rapports JSON, CSV, HTML ou texte ; `eom edit` modifie des champs ou décale des dates. Il fonctionne de la même façon sous Windows, macOS et Linux.",
    minutes: 4,
    sections: [
      {
        id: "commandes",
        h2: "Les commandes",
        body: [
          {
            code: 'eom extract photo.jpg --format json         # afficher les métadonnées (txt, json, csv, html)\neom extract ~/Images -r -o rapport.html     # rapport HTML récursif\neom risk ~/Images -r -v                     # code de sortie : 0 aucun/faible, 1 moyen, 2 élevé\neom clean ~/Images -r --profile social --output-dir ~/propre\neom clean doc.pdf --categories location,identity --dry-run -v\neom edit photo.jpg --author "Jeanne" --copyright "CC-BY 4.0" --shift +2h\neom profiles                                # lister profils et catégories',
          },
          "Profils : `all`, `anonymous`, `social`, `keep_copyright`, `location`. Ou passez `--categories` avec : location, identity, identifiers, device, dates, software, thumbnail, copyright, technical, other.",
        ],
      },
      {
        id: "ci",
        h2: "Bloquer les fuites en CI",
        body: [
          "`eom risk` sort avec 2 quand un fichier est à risque élevé, ce qui fait échouer une étape de CI. Utile pour le dossier d'images d'un site ou un dépôt de documentation :",
          {
            code: "- name: Aucune position ni auteur dans les images publiées\n  run: |\n    curl -sL -o eom.zip https://github.com/abogo-nono/eom/releases/latest/download/eom-linux-x86_64.zip\n    unzip -q eom.zip -d eom && chmod +x eom/eom\n    ./eom/eom risk public/images -r -v",
          },
          "Vous acceptez un risque moyen (dates, appareil) ? Traitez le code de sortie 1 comme un succès dans votre script.",
        ],
      },
      {
        id: "simulation",
        h2: "Simulations et copies",
        body: [
          "`--dry-run` montre ce qui serait supprimé sans rien écrire. `--output-dir` écrit des copies nettoyées et n'écrase jamais un fichier existant. Sans lui, les fichiers sont nettoyés sur place.",
        ],
      },
    ],
    faq: [
      [
        "La CLI a-t-elle besoin d'un écran ?",
        "Non. Les commandes n'ouvrent aucune fenêtre. Le binaire charge tout de même les bibliothèques Qt : dans un conteneur minimal, installez d'abord `libegl1 libgl1 libxkbcommon0 libdbus-1-3`.",
      ],
      [
        "Puis-je utiliser ExifTool via la CLI d'EOM ?",
        "Oui, automatiquement : si ExifTool est installé, EOM s'en sert pour lire les fichiers et pour nettoyer les formats qu'il écrit sans risque.",
      ],
    ],
  },
};
