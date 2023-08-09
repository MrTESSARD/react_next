This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## 24. Mise en place

## 25. Créer des routes

## 26. Créer des routes dynamiques

## 27. Les liens

## 28. Créer des composants classiques

## 29. Utiliser "useRouter"

## 30. Créer un container global avec _app

## 31. Gérer l'erreur 404

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