import styled from "styled-components";

const DisplayDocumentation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DocContainer = styled.div`
  margin-top: 30px;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  color: #2c3e50;
  max-width: 900px;
  width: 100%;
`;

const SectionTitle = styled.h4`
  margin-bottom: 10px;
  color: #34495e;
`;

const DocParagraph = styled.p`
  margin: 10px 0;
  line-height: 1.6;
`;

const DocList = styled.ul`
  margin: 10px 0 20px 20px;
  list-style-type: disc;

  li {
    margin-bottom: 6px;
    line-height: 1.4;
  }
`;

const DocumentationUtilisateurShinyAgency = () => (
  <DisplayDocumentation>
    <DocContainer>
      <SectionTitle>🏠 Page d’accueil</SectionTitle>
      <DocList>
        <li>Au lancement de l’application, l’utilisateur arrive sur la page d’accueil.</li>
        <li>Un bouton "Faire le test" permet de commencer un test de personnalité.</li>
      </DocList>

      <SectionTitle>🧠 Le test</SectionTitle>
      <DocParagraph>
        En cliquant sur "Faire le test", l’utilisateur accède à une série de 6 questions. Voici son fonctionnement :
      </DocParagraph>
      <DocList>
        <li>Chaque question propose deux choix : "Oui" ou "Non".</li>
        <li>L’utilisateur peut naviguer entre les questions avec les boutons "Précédent" et "Suivant".</li>
        <li>La réponse sélectionnée peut être modifiée à tout moment en cliquant sur l’autre option.</li>
        <li>À la 6e question, le bouton "Suivant" est remplacé par "Résultat".</li>
        <li>Cliquer sur "Résultat" affiche le type de profil recommandé selon les réponses.</li>
        <li>Un bouton "Découvrez nos profils" permet ensuite d’accéder à la liste des profils disponibles.</li>
      </DocList>

      <SectionTitle>📋 Navigation via le header</SectionTitle>
      <DocList>
        <li>Le header permet d’accéder rapidement à :</li>
        <ul>
          <li>La page d’accueil</li>
          <li>La page de test</li>
          <li>La page des profils</li>
        </ul>
      </DocList>

      <SectionTitle>👤 Profils</SectionTitle>
      <DocParagraph>
        La page des profils affiche plusieurs profils. En cliquant sur l’un d’entre eux, une page dédiée s’ouvre avec plus de détails :
      </DocParagraph>
      <DocList>
        <li>Nom du profil</li>
        <li>Ville</li>
        <li>Tarif</li>
        <li>Autres informations spécifiques</li>
      </DocList>

      <SectionTitle>🌓 Mode clair / sombre</SectionTitle>
      <DocParagraph>
        L’application propose un mode nuit et un mode jour. L’utilisateur peut basculer entre ces deux thèmes à tout moment.
      </DocParagraph>
    </DocContainer>
  </DisplayDocumentation>
);

export default DocumentationUtilisateurShinyAgency;