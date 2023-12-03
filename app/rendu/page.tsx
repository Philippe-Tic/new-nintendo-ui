/* eslint-disable react/no-unescaped-entities */

export default function Page() {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-bold">Rendu</h1>
      <p className="text-md text-white">
        Le rendu devra être votre Fichier Figma. Merci de bien vérifier ce
        dernier et que le prototype fonctionne correctement !
      </p>
      <p>
        Merci de partager votre fichier Figma, ou de me l'envoyer accessible par
        lien à l'adresse mail suivante avec votre nom prénom :
        <a
          className="ml-2"
          href="mailto:me@philippechevreul.com?subject=Rendu Figma Nintendo [Nom Prénom]"
        >
          me@philippechevreul.com
        </a>
      </p>
      <p className="text-md font-bold text-white">
        Vous avez jusqu'au 16 janvier au soir pour me l'envoyer (soit votre
        dernier cours avec moi !)
      </p>
      <h1 className="mt-16 text-xl font-bold">Notation</h1>
      <p className="text-md text-white">
        Vous serez évalué sur ce TP selon plusieurs critères
      </p>
      <ul>
        <li>
          Qualité de votre fichier, utilisation et configuration des variables,
          gestion des composants...
          <span className="font-bold">(7 points)</span>
        </li>
        <li>
          Direction Artistique & Originalité, avez-vous réussi à proposer
          quelque chose de différent des dernières consoles nintendo en étant
          dans le thème de l'entreprise{' '}
          <span className="font-bold">(5 points)</span>
        </li>
        <li>
          Gestion des animations entre pages et des micro-animations (effet de
          hover, effet de spin sur loader...){' '}
          <span className="font-bold">(3 points)</span>
        </li>
        <li>
          Prototype fonctionnel, votre maquette est navigable et cohérente{' '}
          <span className="font-bold">(5 points)</span>
        </li>
        <li>
          Complétion de la maquette, est-ce que tout le scope de page/feature
          est disponible et réalisé (pas besoin que toutes les pages soient a
          100% complété, vous référer aux pages du cahier des charges){' '}
          <span className="font-bold">(5 points)</span>
        </li>
        <li>
          Aide et solliciation, je vous noterai sur votre capacité à demander de
          l'aide et des conseils. Vous êtes vivement encouragé à demander de
          l'aide a moi-même ou vos voisins, pour avoir des conseils sur vos
          idées, ou même sur de la technique pure sur Figma !{' '}
          <span className="font-bold">(2 points)</span>
        </li>
      </ul>
      <p className="text-md text-white">
        Cela vous donnera une note sur 32 que je remettrai sur 20 par un calcul
        très scientifique dont moi seul connait{' '}
        <a
          target="_blank"
          href="https://www.letudiant.fr/college/methodologie-college/article/produit-en-croix-explications-et-methode.html"
          rel="noreferrer"
        >
          le secret !
        </a>
      </p>
    </div>
  );
}
