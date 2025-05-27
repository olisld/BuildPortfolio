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

const CahierDesChargesBaumette = () => (
  <DisplayCahierDescharges>
    <CahierDesCharges>
      <CDCSectionTitle>📄 Cahier des charges – Site de la STEP de la Baumette</CDCSectionTitle>

      <CDCSectionTitle>Contexte</CDCSectionTitle>
      <CDCParagraph>
        La station d’épuration de la Baumette (Veolia) souhaite valoriser ses actions environnementales et renforcer la communication interne et externe.
      </CDCParagraph>
      <CDCParagraph>
        Le projet consiste à développer un site vitrine informatif ainsi qu'un forum de discussion ouvert aux agents et visiteurs extérieurs, avec gestion sécurisée des comptes.
      </CDCParagraph>

      <CDCSectionTitle>Objectif</CDCSectionTitle>
      <CDCList>
        <li>Présenter la station, ses procédés et ses engagements environnementaux</li>
        <li>Proposer un espace de discussion accessible via inscription, avec rôles</li>
      </CDCList>

      <CDCSectionTitle>Public cible</CDCSectionTitle>
      <CDCList>
        <li>Agents de la station d'épuration de la Baumette</li>
        <li>Visiteurs intéressés par le fonctionnement de la station et les sujets environnementaux</li>
      </CDCList>

      <CDCSectionTitle>Expression des besoins</CDCSectionTitle>
      <CDCList>
        <li>
          Partie informative publique :
          <CDCSubList>
            <li>Présentation du traitement des eaux usées</li>
            <li>Mise en avant de la production d’énergies renouvelables (panneaux photovoltaïques, biogaz)</li>
          </CDCSubList>
        </li>
        <li>
          Partie communautaire (forum) :
          <CDCSubList>
            <li>Accessible aux agents et visiteurs après inscription</li>
            <li>Système de rôles pour la gestion et la modération :</li>
            <CDCSubList>
              <li>Administrateurs : gestion et modification des comptes utilisateurs</li>
              <li>Modérateurs : modération des messages</li>
              <li>Utilisateurs : participation aux discussions</li>
            </CDCSubList>
          </CDCSubList>
        </li>
        <li>Navigation intuitive, responsive et sécurisée</li>
      </CDCList>

      <CDCSectionTitle>Fonctionnalités MVP</CDCSectionTitle>
      <CDCList>
        <li>Page d’accueil présentant la station</li>
        <li>Pages d’information sur :</li>
        <CDCSubList>
          <li>Le traitement des eaux usées</li>
          <li>L’utilisation des panneaux photovoltaïques</li>
          <li>La production et valorisation du biogaz</li>
        </CDCSubList>
        <li>Inscription et authentification sécurisée</li>
        <li>Accès au forum après connexion</li>
        <li>Création, modification et suppression de messages</li>
        <li>Gestion des rôles (admin, modérateur, utilisateur)</li>
      </CDCList>

      <CDCSectionTitle>Fonctionnalités MLP</CDCSectionTitle>
      <CDCList>
        <li>Espace profil utilisateur</li>
        <li>Notifications internes (réponses, mentions)</li>
        <li>Ajout de documents et images aux messages</li>
        <li>Recherche de messages dans le forum</li>
        <li>Historique des modifications de comptes (pour les administrateurs)</li>
      </CDCList>

      <CDCSectionTitle>Contraintes techniques</CDCSectionTitle>
      <CDCList>
        <li>🧩 <strong>Frontend :</strong> Développement en React.js</li>
        <li>🔌 <strong>Backend / Services :</strong>
          <CDCSubList>
            <li>Firebase ou API maison</li>
            <li>Authentification sécurisée</li>
            <li>Gestion des rôles et permissions</li>
            <li>Stockage des messages et comptes</li>
          </CDCSubList>
        </li>
        <li>🌐 <strong>Déploiement :</strong> Serveur sécurisé (VPS ou cloud)</li>
        <li>🦽 <strong>Accessibilité :</strong> Navigation clavier, contraste visuel conforme</li>
        <li>🔒 <strong>Sécurité :</strong>
          <CDCSubList>
            <li>Certificat SSL (HTTPS)</li>
            <li>Respect des bonnes pratiques de sécurité des comptes</li>
          </CDCSubList>
        </li>
        <li>📄 <strong>Qualité du code :</strong> Code commenté et organisé pour faciliter la maintenance</li>
      </CDCList>
    </CahierDesCharges>
  </DisplayCahierDescharges>
);

export default CahierDesChargesBaumette;