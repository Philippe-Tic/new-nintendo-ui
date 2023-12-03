/* eslint-disable react/no-unescaped-entities */

export default function Page() {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-bold">Page de gestion des manettes</h1>
      <p className="text-md text-white">
        La page de gestion des manettes devra être accessible du menu principale
        et vous permettre de voir plusieurs infos pertinentes. Le nombre de
        manettes connectés, peut être le type de manette (partez du principe que
        nous auront des JoyCon comme sur la Switch + des manettes plus
        classiques), l'indicateur de la batterie et savoir si c'est en charge ou
        non. La batterie de la console peut aussi être demandé.
      </p>
    </div>
  );
}
