# Routes visible par le visiteur

| URL | Méthode HTTP | Controller | Méthode | Titre | Contenu | Commentaire |
|--|--|--|--|--|--|--|
| `/` | `GET` | `MainController` | `home` | Agence Boris Doyle (?)  | Vidéo de présentation, (?) | - |
| `/realisations/`| `GET` | `MainController` | `realisations` | Réalisations (?) | Page pour présenter le travail de l'agence | Avec visionnage des films |
| `/team/` | `GET` | `MainController` | `team` | La Team | Une page pour présenter les collaborateurs | - |
| `/equipement/` | `GET` | `MainController` | `equipement` | Équipement | Une page pour présenter le matériel | - |
| `/partenaires/` | `GET` | `MainController` | `clients` | Nos partenaires | Une page pour présenter les clients / partenaire | - |
| `/aventure/` | `GET` | `BlogController` | `aventure` | Projet Cap Horn (?) | Une page pour présenter le film "Projet Cap Horn" | - |
| `/blog/` | `GET` | `BlogController` | `blog` | Notre Blog (?) | Une page de news ( Articles, photos, texte) | - |
| `/contact/` | `POST` | `BlogController` | `contact` | Nous Contacter | Une page de contact | - |
| `/mentions-legales/` | `GET` | `MainController` | `legalMentions` | Mentions Légales | Paragraphes sur les mentions légales | - |

# Routes non-visible par le visiteur

| URL | Méthode HTTP | Controller | Méthode | Titre | Contenu | Commentaire |
|--|--|--|--|--|--|--|
| `/404/` | `GET` | `ErrorController` | `404` | Page Introuvable | Page 404 pour les erreurs de chemin | - |
| `/connexion-admin/` | `POST` | `AdminController` | `adminConnect` | Connexion Administrateur | Une page de connexion administrateur | - |
| `/admin/` | `POST` | `AdminController` | `admin` | Interface Administrateur | BackOffice (?) | - |
