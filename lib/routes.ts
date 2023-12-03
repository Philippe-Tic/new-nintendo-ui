export type Item = {
  name: string;
  slug: string;
  description?: string;
};

export const routes: { name: string; items: Item[] }[] = [
  {
    name: 'Le Brief',
    items: [
      {
        name: 'Mise en situation',
        slug: 'situation',
        description: 'Mise en situation',
      },
      {
        name: 'Contraintes',
        slug: 'contraintes',
        description: 'Contraintes',
      },
      {
        name: 'Rendu et notation',
        slug: 'rendu',
        description: 'Rendu et notation',
      },
    ],
  },
  {
    name: 'Cahier des charges',
    items: [
      {
        name: 'Page principale',
        slug: 'main',
        description: 'Page principale',
      },
      {
        name: 'Page de déverrouillage',
        slug: 'unlock',
        description: 'Page de déverrouillage',
      },
      {
        name: 'Page de paramètrage',
        slug: 'config',
        description: 'Page de paramètrage',
      },
      {
        name: 'Page de gestion des manettes',
        slug: 'controllers',
        description: 'Page de gestion des manettes',
      },
      {
        name: "Page d'album photo",
        slug: 'album',
        description: "Page d'album photo",
      },
      {
        name: "Page d'eshop",
        slug: 'eshop',
        description: "Page d'eshop",
      },
    ],
  },
];
