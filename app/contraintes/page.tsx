/* eslint-disable react/no-unescaped-entities */

export default function Page() {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-bold">Contraintes</h1>
      <p className="text-md text-white">
        Pour cet exercice vous aurez plusieurs contraintes que nous allons
        lister ici.
      </p>

      <ul>
        <li>
          Votre maquette doit être entièrement réalisé sur Figma. Il vous est
          possible si besoin bien sûr d'utiliser d'autres logiciels comme
          Photoshop en cas de besoin pour modifier des images
        </li>
        <li>
          Votre rendu doit être prototypé. C'est à dire qu'il doit être
          totalement navigable et contenir si possible des animations (hover sur
          les actions, animations entre les écrans et animation sur certains
          effets comme Loading.)
        </li>
        <li>
          L'idée est d'avoir un maximum de page et une maquette la plus complète
          possible. Néanmoins les écrans prioritaires et les plus aboutis seront
          :
        </li>
        <ul>
          <li>Page d'accueil de la console (sélections des jeux etc...).</li>
          <li>Page de déverrouillage.</li>
          <li>Page de paramètrages de la console.</li>
          <li>Page de gestion des manettes.</li>
          <li>Page album photo de la console.</li>
          <li>Bonus: Page "Eshop" permettant d'acheter/installer des jeux.</li>
          <li className="font-bold">
            Si vous avez d'autres idées de pages qui vous sembleraient être
            importantes ou intéressantes, n'hésitez pas !
          </li>
        </ul>
      </ul>
    </div>
  );
}
