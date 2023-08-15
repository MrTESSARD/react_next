# Formation de Next.JS
## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



## 24. Mise en place

## 25. Créer des routes

## 26. Créer des routes dynamiques

Next.js permet de créer des routes dynamiques pour gérer les pages avec des paramètres variables dans les URL. Cela vous permet de générer des pages dynamiques basées sur différents paramètres sans avoir à créer une page distincte pour chaque cas.

Voici comment créer des routes dynamiques avec Next.js :

1. Dans le répertoire `pages`, créez un fichier avec le format `[parametre].js`, où `parametre` est le nom du paramètre que vous souhaitez capturer dans l'URL :
```jsx
// Par exemple, pages/[slug].js

function DynamicPage({ slug }) {
  return (
    <div>
      {/* Utilisez le paramètre slug pour afficher le contenu dynamique */}
    </div>
  );
}

export async function getServerSideProps({ params }) {
  // Utilisez les paramètres pour récupérer les données spécifiques à la page
  const pageData = await fetchData(params.slug);

  // Retournez les données dans l'objet props
  return {
    props: {
      slug: params.slug,
      pageData,
    },
  };
}

export default DynamicPage;
```
> Le fichier [slug].js définit une page dynamique avec un paramètre slug. Le composant DynamicPage utilise ce paramètre pour afficher le contenu dynamique.

> La fonction getServerSideProps est utilisée pour récupérer les données spécifiques à la page en fonction du paramètre capturé dans l'URL. Les données récupérées sont passées en tant que propriétés (props) au composant DynamicPage pour le rendu.

> Lorsque vous accédez à une URL avec le paramètre correspondant, Next.js générera automatiquement la page dynamique avec les données spécifiques à ce paramètre.

> Les routes dynamiques sont très utiles pour créer des pages avec des contenus personnalisés en fonction des paramètres de l'URL, comme les articles de blog, les profils utilisateur, etc.


## 27. Les liens

Les liens sont essentiels pour la navigation entre les différentes pages d'une application web. Avec Next.js, vous pouvez utiliser la balise `Link` pour créer des liens internes entre les pages, ce qui améliore les performances de navigation en utilisant la pré-chargement des pages.

Voici comment créer des liens avec Next.js :

1. Importez la balise `Link` de `next/link` dans le composant où vous souhaitez créer le lien :
```jsx
import Link from 'next/link';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Accueil</Link>
        </li>
        <li>
          <Link href="/articles">Articles</Link>
        </li>
        {/* Ajoutez d'autres liens */}
      </ul>
    </nav>
  );
}

export default Navigation;
```

> Utilisez la balise Link pour envelopper le texte du lien et définir l'attribut href avec le chemin de la page vers laquelle vous souhaitez lier.

> Lorsque les utilisateurs cliquent sur le lien, Next.js précharge automatiquement la page cible, améliorant ainsi la vitesse de navigation.

> Les liens avec la balise Link sont optimisés pour l'utilisation avec Next.js et permettent une expérience de navigation plus fluide et rapide.

## 28. Créer des composants classiques

Dans Next.js, vous pouvez créer des composants réutilisables en dehors des pages en tant que fichiers séparés. Ces composants classiques peuvent être utilisés dans différentes parties de votre application pour améliorer la modularité et la réutilisabilité du code.

Voici comment créer des composants classiques avec Next.js :

1. Dans le répertoire de votre projet, créez un dossier (par exemple `components`) pour stocker vos composants réutilisables.

2. Dans ce dossier, créez un fichier pour chaque composant que vous souhaitez créer. Par exemple, créez un fichier `Button.js` pour un composant de bouton :
```jsx
// components/Button.js

function Button({ text, onClick }) {
  return (
    <button onClick={onClick}>{text}</button>
  );
}

export default Button;
```

Utilisez vos composants classiques dans vos fichiers de page ou d'autres composants en important et en utilisant le composant comme suit :
```jsx
// Dans un fichier de page

import Button from '../components/Button';

function MyPage() {
  const handleButtonClick = () => {
    // Gérez le clic du bouton ici
  };

  return (
    <div>
      <Button text="Cliquez-moi" onClick={handleButtonClick} />
    </div>
  );
}

export default MyPage;
```

> En utilisant cette approche, vous pouvez créer des composants réutilisables tels que des boutons, des en-têtes, des pieds de page, etc., qui peuvent être utilisés dans différentes parties de votre application.

> Cela améliore la maintenabilité du code, permettant de mettre à jour un composant à un seul endroit pour affecter tous les endroits où il est utilisé.


## 29. Utiliser "useRouter"

`useRouter` est un hook fourni par Next.js qui permet d'accéder aux informations de routage dans vos composants fonctionnels. Vous pouvez l'utiliser pour obtenir des détails sur l'URL actuelle, les paramètres de l'URL, les requêtes et plus encore.

Voici comment utiliser `useRouter` avec Next.js :

1. Importez le hook `useRouter` de `next/router` dans le composant où vous souhaitez l'utiliser :
```jsx
import { useRouter } from 'next/router';
```

Utilisez useRouter dans votre composant pour accéder aux informations de routage :
```jsx
function MyComponent() {
  const router = useRouter();

  // Accédez aux informations de routage
  const currentPath = router.pathname;
  const query = router.query; // Les paramètres de l'URL
  const asPath = router.asPath; // L'URL complète

  return (
    <div>
      {/* Utilisez les informations de routage */}
      <p>Path actuel : {currentPath}</p>
      <p>Paramètres de l'URL : {JSON.stringify(query)}</p>
      <p>URL complète : {asPath}</p>
    </div>
  );
}

export default MyComponent;
```
> En utilisant useRouter, vous pouvez accéder aux détails du routage et adapter le comportement de vos composants en conséquence. Cela peut être particulièrement utile pour créer des interfaces dynamiques et interactives qui réagissent aux changements d'URL.



## 30. Créer un container global avec _app

Dans Next.js, le fichier `_app.js` est un point d'entrée spécial où vous pouvez personnaliser le rendu et le comportement de l'ensemble de votre application. C'est l'endroit idéal pour créer un container global qui englobe toutes vos pages et composants.

Voici comment créer un container global avec `_app.js` dans Next.js :

1. Dans le répertoire `pages`, créez un fichier `_app.js` s'il n'existe pas déjà :
```jsx
// pages/_app.js

import '../styles/globals.css'; // Importez vos styles globaux ici

function MyApp({ Component, pageProps }) {
  // Utilisez le Component pour envelopper vos pages avec des éléments globaux
  return <Component {...pageProps} />;
}

export default MyApp;
```
> Dans cet exemple, nous enveloppons le composant Component (représentant la page en cours) avec des éléments globaux comme des en-têtes, pieds de page, barres de navigation, etc.

> Vous pouvez également importer vos styles globaux dans _app.js pour les appliquer à l'ensemble de l'application.

> Utiliser _app.js pour créer un container global vous permet de maintenir un design cohérent sur toutes vos pages et d'ajouter des fonctionnalités communes à l'ensemble de l'application.





## 31. Gérer l'erreur 404

L'erreur 404 se produit lorsque l'utilisateur essaie d'accéder à une page qui n'existe pas dans votre application. Avec Next.js, vous pouvez personnaliser la gestion de l'erreur 404 en créant un composant spécial pour cette situation.

Voici comment gérer l'erreur 404 avec Next.js :

1. Dans le répertoire `pages`, créez un fichier `404.js` pour gérer l'erreur 404 :
```jsx
// pages/404.js

function NotFound() {
  return (
    <div>
      <h1>Erreur 404 - Page non trouvée</h1>
      <p>Désolé, la page que vous cherchez n'existe pas.</p>
    </div>
  );
}

export default NotFound;
```
> Lorsque Next.js ne trouve pas de correspondance pour l'URL demandée, il rendra automatiquement le composant 404.js.

> Vous pouvez personnaliser le contenu de cette page en fonction de vos besoins. Par exemple, ajoutez des liens vers les pages populaires, une barre de recherche, ou toute autre information utile.

> La gestion personnalisée de l'erreur 404 offre une meilleure expérience utilisateur en fournissant des informations claires sur la situation et en redirigeant éventuellement l'utilisateur vers des pages pertinentes.





## 32. Résumé du Routing avec Next

- Next.js utilise un système de fichiers basé sur les pages pour gérer le routing. Chaque fichier JavaScript ou TypeScript dans le répertoire `pages` correspond à une route de l'application.

- Les fichiers dans le répertoire `pages` peuvent être organisés en sous-répertoires pour créer des routes imbriquées. Par exemple, `pages/blog/index.js` représente la route `/blog`.

- Les noms de fichiers peuvent être utilisés pour définir des paramètres dynamiques dans les routes. Par exemple, `pages/blog/[slug].js` représente une route avec un paramètre `slug` dynamique.

- Les composants `Link` et `router` de Next.js sont utilisés pour la navigation entre les pages. Le composant `Link` permet de créer des liens entre les pages, tandis que le composant `router` permet de gérer la navigation programmatique.

- Next.js prend en charge le préchargement (preloading) des pages avec la fonction `next/link`. Cela permet de charger les ressources nécessaires à l'avance pour une navigation plus rapide entre les pages.

- Les fichiers `_app.js` et `_document.js` dans le répertoire `pages` permettent de personnaliser l'apparence et le comportement de l'application à un niveau global. Par exemple, `_app.js` permet de définir un wrapper de mise en page commun à toutes les pages.

- Next.js offre également des fonctionnalités avancées pour le routing telles que les redirections, les URL statiques, la gestion des erreurs 404, etc.

Le système de routing de Next.js simplifie la gestion des routes dans vos applications en utilisant une approche basée sur les fichiers. Cela permet de créer et d'organiser facilement les différentes pages de votre application.

## 33. Utiliser du CSS

## 34. Utiliser un Framework CSS

## 35. Optimiser le Head
```jsx
import Head from 'next/head';

function MyPage() {
  return (
    <div>
      <Head>
        <title>Titre de la page</title>
        <meta name="description" content="Description de la page" />
        <link rel="canonical" href="https://example.com/my-page" />
      </Head>
      {/* Contenu de la page */}
    </div>
  );
}
```
### Utiliser les balises spéciales de <Head> pour définir des balises spécifiques à une page ou un composant :
<div>
      <Head>
        {/* Balises spécifiques à ce composant */}
      </Head>
      {/* Contenu du composant */}
    </div>
import Image from 'next/image';


## 36. Optimiser les images
```jsx
function MyComponent() {
  return (
    <div>
      <Image src="/path/to/image.jpg" alt="Description de l'image" width={500} height={300} />
    </div>
  );
}

export default MyComponent;

```
## 37. Optimiser les images 2
avec layout="responsive" placeholder="blur" plus long mais s'adapte mieux aux petits ecrans

## 38. Utiliser le _document.js
```jsx
 <Html lang="fr">
        <Head>
          {/* Balises globales */}
          <script src="https://example.com/script.js" />
          <link rel="stylesheet" href="https://example.com/styles.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
```


## 41. Utiliser la méthode `getStaticProps` avec Next.js

La méthode `getStaticProps` est une fonction spéciale utilisée dans Next.js pour récupérer des données à partir de sources externes et les pré-rendre lors de la construction de l'application. Cette fonction est utilisée pour le rendu statique des pages avec les données nécessaires déjà incluses dans le HTML.

Voici comment utiliser la méthode `getStaticProps` avec Next.js :

1. Dans un fichier de page (par exemple `pages/my-page.js`), définissez la fonction `getStaticProps` qui renverra les données nécessaires :

```jsx
// Importez les dépendances nécessaires

export async function getStaticProps() {
  // Effectuez une requête API ou récupérez les données nécessaires ici
  const data = await fetchData();

  // Retournez les données dans l'objet props
  return {
    props: {
      data,
    },
    // Définissez un délai de revalidation pour la régénération statique (en secondes)
    revalidate: 3600, // Par exemple, une heure (3600 secondes)
  };
}
```

- Utilisez les données récupérées dans le composant de la page pour le rendu :
```jsx
function MyPage({ data }) {
  return (
    <div>
      {/* Utilisez les données ici */}
    </div>
  );
}

export default MyPage;
```

> Dans cet exemple, la fonction getStaticProps est définie dans le fichier pages/my-page.js. Cette fonction effectue une requête API ou récupère les données nécessaires à partir de sources externes.

> Les données récupérées sont retournées dans l'objet props, qui sera passé en tant que propriétés au composant MyPage. Vous pouvez ensuite utiliser les données dans le composant pour le rendu.

> Le champ revalidate dans l'objet retourné par getStaticProps permet de définir un délai de revalidation pour la régénération statique de la page. Cela signifie que Next.js régénérera la page toutes les revalidate secondes, en récupérant de nouvelles données et en mettant à jour le HTML statique de la page.

> L'utilisation de getStaticProps avec Next.js permet de créer des pages statiquement générées avec des données pré-rendues, ce qui améliore les performances et la vitesse de chargement de l'application.


## 42. Faire de l'ISR (Incremental Static Regeneration) avec Next.js

L'ISR (Incremental Static Regeneration) est une fonctionnalité puissante de Next.js qui permet de régénérer de manière incrémentielle les pages statiquement générées à intervalles réguliers, sans avoir besoin de reconstruire l'ensemble de l'application.

Cela permet de mettre à jour les données des pages pré-rendues sans provoquer de temps d'arrêt et de fournir des informations actualisées aux utilisateurs en temps réel.

Voici comment faire de l'ISR avec Next.js :

1. Dans un fichier de page (par exemple `pages/my-page.js`), définissez la fonction `getStaticProps` avec l'option `revalidate` :
```jsx
// Importez les dépendances nécessaires

export async function getStaticProps() {
  // Effectuez une requête API ou récupérez les données nécessaires ici
  const data = await fetchData();

  // Retournez les données dans l'objet props avec l'option revalidate
  return {
    props: {
      data,
    },
    // Définissez un délai de revalidation pour l'ISR (en secondes)
    revalidate: 60, // Par exemple, une minute (60 secondes)
  };
}
```

> Utiliser les données récupérées dans le composant de la page pour le rendu, comme dans l'exemple précédent.
> Avec l'option revalidate définie dans la fonction getStaticProps, Next.js régénérera la page toutes les revalidate secondes, en récupérant de nouvelles données et en mettant à jour le HTML statique de la page.

> Lorsqu'un utilisateur accède à la page pendant que la régénération est en cours, Next.js servira la version statique préexistante tout en déclenchant une nouvelle régénération en arrière-plan.

> Cela permet d'offrir des performances optimales pour les utilisateurs, tout en maintenant les données à jour en fonction de l'intervalle de revalidation que vous avez défini.

> L'ISR est particulièrement utile pour les pages dont les données changent fréquemment, telles que les tableaux de bord, les flux d'actualités, etc.


## 46 Utiliser la méthode `getStaticPaths` avec Next.js

La méthode `getStaticPaths` est utilisée dans Next.js pour générer dynamiquement des chemins (URL) statiques pour les pages avec des paramètres dynamiques. Elle permet de définir quels sont les chemins possibles que Next.js doit pré-rendre lors de la construction de l'application.

Voici comment utiliser la méthode `getStaticPaths` avec Next.js :

1. Dans un fichier de page (par exemple `pages/[slug].js`), définissez la fonction `getStaticPaths` :
```jsx
// Importez les dépendances nécessaires

export async function getStaticPaths() {
  // Récupérez les données pour générer les chemins statiques
  const data = await fetchPathsData();

  // Générez les chemins à partir des données
  const paths = data.map(item => ({
    params: { slug: item.slug },
  }));

  // Retournez les chemins dans l'objet paths
  return {
    paths,
    // Définissez l'option fallback sur false si vous ne souhaitez pas pré-rendre les chemins inconnus
    fallback: false,
  };
}
```
> Utiliser les données récupérées dans la fonction getStaticPaths pour pré-générer les pages avec des paramètres dynamiques :
```jsx
// Importez les dépendances nécessaires

export async function getStaticPaths() {
  // Récupérez les données pour générer les chemins statiques
  const data = await fetchPathsData();

  // Générez les chemins à partir des données
  const paths = data.map(item => ({
    params: { slug: item.slug },
  }));

  // Retournez les chemins dans l'objet paths
  return {
    paths,
    // Définissez l'option fallback sur false si vous ne souhaitez pas pré-rendre les chemins inconnus
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Utilisez les paramètres pour récupérer les données spécifiques à la page
  const pageData = await fetchPageData(params.slug);

  // Retournez les données dans l'objet props
  return {
    props: {
      pageData,
    },
  };
}

function DynamicPage({ pageData }) {
  return (
    <div>
      {/* Utilisez les données récupérées pour le rendu de la page */}
    </div>
  );
}

export default DynamicPage;
```
> Dans cet exemple, la fonction getStaticPaths récupère les données nécessaires pour générer les chemins statiques avec des paramètres dynamiques. Les chemins sont ensuite générés dans l'objet paths et retournés par la fonction.

> Lorsque Next.js pré-génère les pages, il appelle la fonction getStaticProps pour chaque chemin généré avec les paramètres correspondants. Cela permet de récupérer les données spécifiques à chaque page pour le rendu.

> L'utilisation de getStaticPaths est particulièrement utile lorsque vous avez des pages avec des paramètres dynamiques dont les données peuvent être générées à l'aide d'une API ou d'une base de données.


## 48 La propriété `fallback` avec Next.js

La propriété `fallback` est utilisée dans Next.js avec la méthode `getStaticPaths` pour déterminer le comportement des pages qui ne sont pas pré-générées statiquement lors de l'utilisation de chemins dynamiques. Cette propriété permet de contrôler si Next.js doit générer dynamiquement les pages lorsqu'elles sont demandées par les utilisateurs.

Voici comment utiliser la propriété `fallback` avec Next.js :

1. Dans un fichier de page (par exemple `pages/[slug].js`), définissez la fonction `getStaticPaths` avec la propriété `fallback` :
```jsx
// Importez les dépendances nécessaires

export async function getStaticPaths() {
  // Récupérez les données pour générer les chemins statiques
  const data = await fetchPathsData();

  // Générez les chemins à partir des données
  const paths = data.map(item => ({
    params: { slug: item.slug },
  }));

  // Retournez les chemins dans l'objet paths avec la propriété fallback
  return {
    paths,
    // Définissez l'option fallback sur true, false ou 'blocking'
    fallback: true,
  };
}
```

Définissez la propriété fallback à true, false ou 'blocking' en fonction de vos besoins :
- fallback: true: Permet à Next.js de générer dynamiquement les pages qui ne sont pas pré-générées lorsqu'elles sont demandées. Idéal pour les cas où les données ne sont pas toutes connues à l'avance.
- fallback: false: Indique à Next.js de retourner une page d'erreur 404 pour les pages qui ne sont pas pré-générées statiquement. Utilisé lorsque vous connaissez à l'avance toutes les valeurs possibles des paramètres dynamiques.
- fallback: 'blocking': Permet à Next.js de générer dynamiquement les pages lorsqu'elles sont demandées, mais bloque l'affichage de la page jusqu'à ce qu'elle soit générée.

> La propriété fallback est particulièrement utile lorsque vous avez des pages avec des chemins dynamiques dont les données peuvent être générées dynamiquement. Elle vous permet de gérer la régénération incrémentielle des pages en fonction de vos besoins et de l'intervalle de revalidation.


## 49 Le rendu côté serveur (Server-Side Rendering - SSR) avec Next.js

Le rendu côté serveur (Server-Side Rendering - SSR) est une technique utilisée dans Next.js pour générer les pages du côté du serveur au lieu du navigateur. Cela permet de pré-rendre les pages avec des données dynamiques avant de les envoyer au client, offrant ainsi une meilleure performance et une meilleure indexation par les moteurs de recherche.

Voici comment utiliser le rendu côté serveur avec Next.js :

1. Dans un fichier de page (par exemple `pages/my-page.js`), définissez la fonction `getServerSideProps` :
```jsx
// Importez les dépendances nécessaires

export async function getServerSideProps() {
  // Effectuez une requête API ou récupérez les données nécessaires ici
  const data = await fetchData();

  // Retournez les données dans l'objet props
  return {
    props: {
      data,
    },
  };
}
```

> La fonction getServerSideProps est utilisée pour récupérer les données nécessaires du côté du serveur, juste avant le rendu de la page. Les données récupérées sont ensuite passées en tant que propriétés (props) au composant de la page pour le rendu.

> L'utilisation du rendu côté serveur avec Next.js est particulièrement utile lorsque vous avez des données dynamiques qui doivent être récupérées à chaque demande de page, ou lorsque vous avez besoin d'accès à des informations de session, des cookies, etc.

> Le rendu côté serveur offre une expérience utilisateur améliorée en pré-rendant les pages avec des données à jour, ce qui réduit le temps d'affichage initial et améliore le référencement.


## 61. Utiliser une requête "POST" pour changer les données

Lorsque vous avez besoin de modifier ou d'envoyer des données depuis votre application, vous pouvez utiliser des requêtes HTTP, telles que les requêtes "POST". Next.js vous permet d'interagir avec des API externes ou internes en utilisant différentes méthodes de requête.

Voici comment utiliser une requête "POST" pour changer les données avec Next.js :

1. Dans votre composant ou fichier de page, utilisez la fonction `fetch` pour effectuer la requête "POST" vers l'API cible :
```jsx
async function updateData(newData) {
  const response = await fetch('/api/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data: newData }),
  });

  if (!response.ok) {
    // Gérez les erreurs si nécessaire
    console.error('Erreur lors de la requête POST');
    return;
  }

  const result = await response.json();
  return result;
}
```

 - Dans cet exemple, la fonction updateData effectue une requête "POST" vers l'URL /api/update avec des données JSON.

 - Créez un fichier update.js dans le répertoire pages/api pour gérer la logique du serveur pour la requête "POST" :

```jsx
 // pages/api/update.js

export default function handler(req, res) {
  if (req.method === 'POST') {
    const newData = req.body.data;
    // Effectuez les opérations nécessaires pour mettre à jour les données
    // Renvoyez une réponse appropriée
    res.status(200).json({ message: 'Données mises à jour avec succès' });
  } else {
    res.status(405).json({ message: 'Méthode non autorisée' });
  }
}
```

> Dans ce fichier, la fonction handler gère la logique de mise à jour des données pour la requête "POST". Assurez-vous de personnaliser la logique en fonction de vos besoins.

> En utilisant cette approche, vous pouvez changer les données en effectuant des requêtes "POST" vers des API personnalisées dans Next.js.