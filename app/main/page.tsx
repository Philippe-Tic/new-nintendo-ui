/* eslint-disable react/no-unescaped-entities */

export default function Page() {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-bold">Page principale</h1>
      <p className="text-md text-white">
        La page principale de votre UI devra contenir certains éléments
        importants, voici une liste non exhaustive de ce que vous devriez au
        moins avoir :
      </p>
      <ul>
        <li>Gestion des jeux</li>
        <li>Accès a l'eshop</li>
        <li>Accès a l'album</li>
        <li>Accès aux paramètres</li>
        <li>Accès au profil</li>
        <li>Gestion des manettes</li>
        <li>Possibilité de mettre en veille/d'éteindre</li>
      </ul>
    </div>
  );
}
