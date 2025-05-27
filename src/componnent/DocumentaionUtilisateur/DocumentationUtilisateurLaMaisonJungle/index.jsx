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

const DocumentationUtilisateurMaisonJungle = () => (
  <DisplayDocumentation>
    <DocContainer>
      <SectionTitle>🛒 Accès au panier</SectionTitle>
      <DocList>
        <li>Cliquer sur "Ouvrir le panier" pour afficher le contenu du panier.</li>
        <li>Une fois ouvert, le bouton devient "Fermer le panier".</li>
        <li>Cliquer sur "Vider le panier" permet de supprimer tous les articles.</li>
      </DocList>

      <SectionTitle>🪴 Ajouter une plante au panier</SectionTitle>
      <DocParagraph>
        Sous chaque fiche de plante, un bouton "Ajouter" permet d’ajouter la plante au panier. Plusieurs exemplaires peuvent être ajoutés.
      </DocParagraph>

      <SectionTitle>☀️ Lumière & 💧 Arrosage</SectionTitle>
      <DocParagraph>
        Chaque plante est associée à des icônes représentant ses besoins :
      </DocParagraph>
      <DocList>
        <li>☀️ Cliquer sur l’icône "soleil" affiche un message sur le besoin en lumière.</li>
        <li>💧 Cliquer sur l’icône "goutte" affiche le besoin en arrosage.</li>
      </DocList>

      <SectionTitle>🔍 Filtrage par catégorie</SectionTitle>
      <DocParagraph>
        L’utilisateur peut filtrer les plantes selon trois grandes catégories grâce aux boutons prévus à cet effet.
      </DocParagraph>

      <SectionTitle>📧 Champ email en bas de page</SectionTitle>
      <DocParagraph>
        En bas de l’application, un champ permet à l’utilisateur d’entrer son adresse email (non enregistrée).
      </DocParagraph>
      <DocList>
        <li>Le caractère "@" est requis pour valider l'affichage de l'email à l'écran.</li>
        <li>Aucune donnée n’est stockée.</li>
      </DocList>
    </DocContainer>
  </DisplayDocumentation>
);

export default DocumentationUtilisateurMaisonJungle;
