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