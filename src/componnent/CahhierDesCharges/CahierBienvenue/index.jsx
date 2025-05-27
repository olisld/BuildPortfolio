import styled from "styled-components";

const DisplayCahierDescharges = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CahierDesCharges = styled.div`
  margin-top: 30px;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  color: #2c3e50;
  max-width: 900px;
  width: 100%;
`;

const CDCSectionTitle = styled.h4`
  margin-bottom: 10px;
  color: #34495e;
`;

const CDCParagraph = styled.p`
  margin: 10px 0;
  line-height: 1.6;
`;

const CDCList = styled.ul`
  margin: 10px 0 20px 20px;
  list-style-type: disc;

  li {
    margin-bottom: 6px;
    line-height: 1.4;
  }
`;

const CDCSubList = styled.ul`
  list-style-type: circle;
  margin-left: 20px;

  li {
    margin-bottom: 4px;
  }
`;

const CahierDesChargesBienvenue = () => (
  <DisplayCahierDescharges>
    <CahierDesCharges>
      <CDCSectionTitle>📄 Cahier des charges – Bienvenue Formation</CDCSectionTitle>

      <CDCSectionTitle>Contexte</CDCSectionTitle>
      <CDCParagraph>
        Le projet "Bienvenue Formation" vise à créer une application web de gestion de classes permettant :
      </CDCParagraph>
      <CDCList>
        <li>L'organisation des élèves et enseignants</li>
        <li>La gestion des matières et emplois du temps</li>
        <li>La signature électronique pour valider la présence en cours</li>
      </CDCList>
      <CDCParagraph>
        L'application doit être intuitive, sécurisée et adaptée à tous les appareils.
      </CDCParagraph>

      <CDCSectionTitle>Objectif</CDCSectionTitle>
      <CDCList>
        <li>Gestion administrative des classes et matières</li>
        <li>Suivi des présences via signature électronique</li>
        <li>Accès personnalisé selon le profil utilisateur (admin, enseignant, élève)</li>
      </CDCList>

      <CDCSectionTitle>Public cible</CDCSectionTitle>
      <CDCList>
        <li>Administrateurs d'établissements</li>
        <li>Enseignants</li>
        <li>Élèves</li>
      </CDCList>

      <CDCSectionTitle>Expression des besoins</CDCSectionTitle>
      <CDCList>
        <li>
          Gestion des utilisateurs :
          <CDCSubList>
            <li>Création, modification et suppression d’enseignants, d’élèves et de classes</li>
          </CDCSubList>
        </li>
        <li>
          Gestion des matières et emplois du temps :
          <CDCSubList>
            <li>Affectation des enseignants aux matières et classes</li>
            <li>Visualisation de l'emploi du temps pour chaque profil</li>
          </CDCSubList>
        </li>
        <li>
          Signature électronique :
          <CDCSubList>
            <li>Validation de présence en ligne par les élèves</li>
            <li>Archivage sécurisé des signatures</li>
          </CDCSubList>
        </li>
        <li>
          Espace personnel :
          <CDCSubList>
            <li>Tableau de bord selon le rôle (admin, enseignant, élève)</li>
          </CDCSubList>
        </li>
      </CDCList>

      <CDCSectionTitle>Fonctionnalités MVP</CDCSectionTitle>
      <CDCList>
        <li>Connexion sécurisée avec rôles</li>
        <li>Gestion des classes (CRUD)</li>
        <li>Gestion des matières et emploi du temps</li>
        <li>
          Système de signature électronique :
          <CDCSubList>
            <li>Déclenchement par l'enseignant</li>
            <li>Horodatage</li>
            <li>Historique par utilisateur</li>
          </CDCSubList>
        </li>
      </CDCList>

      <CDCSectionTitle>Fonctionnalités MLP</CDCSectionTitle>
      <CDCList>
        <li>Récupération de mot de passe par email</li>
        <li>Statistiques pour l'administrateur (taux de signature, effectifs, etc.)</li>
        <li>Notifications internes de rappel</li>
        <li>Responsive design (PC, tablette, smartphone)</li>
      </CDCList>

      <CDCSectionTitle>Contraintes techniques</CDCSectionTitle>
      <CDCList>
        <li>💻 <strong>Backend :</strong> PHP natif (bibliothèques légères autorisées)</li>
        <li>🎨 <strong>Frontend :</strong>
          <CDCSubList>
            <li>HTML5, CSS3 (avec Bootstrap pour le responsive)</li>
            <li>JavaScript (jQuery autorisé)</li>
          </CDCSubList>
        </li>
        <li>📄 <strong>Base de données :</strong> MySQL avec relations entre utilisateurs, classes, matières et signatures</li>
        <li>🌐 <strong>Hébergement :</strong> Serveur Apache, PHP 7+ et MySQL (mutualisé ou VPS)</li>
        <li>🔒 <strong>Sécurité :</strong>
          <CDCSubList>
            <li>Cryptage des mots de passe (<code>password_hash()</code>)</li>
            <li>Sessions sécurisées</li>
            <li>HTTPS obligatoire</li>
            <li>Vérification et sécurisation des signatures électroniques</li>
          </CDCSubList>
        </li>
        <li>🧠 <strong>Compatibilité :</strong> Chrome, Firefox, Edge</li>
      </CDCList>

      <CDCSectionTitle>Interfaces utilisateur</CDCSectionTitle>
      <CDCList>
        <li>👨‍💼 <strong>Administrateur :</strong>
          <CDCSubList>
            <li>Gestion des utilisateurs, classes, matières</li>
            <li>Gestion des emplois du temps</li>
            <li>Accès aux archives des signatures</li>
            <li>Vue statistique générale</li>
          </CDCSubList>
        </li>
        <li>👨‍🏫 <strong>Enseignant :</strong>
          <CDCSubList>
            <li>Consultation de l'emploi du temps</li>
            <li>Liste des classes et élèves</li>
            <li>Déclenchement et gestion de la signature en ligne</li>
          </CDCSubList>
        </li>
        <li>👨‍🎓 <strong>Élève :</strong>
          <CDCSubList>
            <li>Consultation de son emploi du temps</li>
            <li>Signature de présence</li>
            <li>Accès à l'historique de ses présences</li>
          </CDCSubList>
        </li>
      </CDCList>
    </CahierDesCharges>
  </DisplayCahierDescharges>
);

export default CahierDesChargesBienvenue;
