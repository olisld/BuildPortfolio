import styled from "styled-components";

const DisplayTasks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TaskSection = styled.div`
  margin-top: 20px;
  max-width: 800px;
  width: 100%;

  h5 {
    color: #34495e;
    font-size: 1.2rem;
    margin-bottom: 10px;
    border-left: 4px solid #34495e;
    padding-left: 8px;
  }

  ul {
    margin: 0;
    padding: 0 0 0 20px;
    list-style-type: disc;

    li {
      margin: 6px 0;
      font-size: 1rem;
      line-height: 1.5;
      color: #555;
    }
  }
`;

const TaskSectionBienvenue = () => (
  <DisplayTasks>
    <TaskSection>
      <h5>Tâches</h5>
      <ul>
        <li>Mise en place d'une authentification utilisateur</li>
        <li>Création de comptes utilisateur</li>
        <li>Gestion des sessions en fonction du rôle de l'utilisateur</li>
        <li>Sécurisation des mots de passe avec une méthode de hachage</li>
        <li>Fonctionnalités administratives : création, modification et suppression des utilisateurs, classes, matières, et cours</li>
        <li>Affectation des cours aux emplois du temps</li>
        <li>Possibilité de signer les cours</li>
      </ul>
      <ul>
        <li>Documentation de la base de données avec la méthode Merise</li>
        <li>Documentation globale : diagrammes UML, tableau des fonctionnalités, plan de test, documentation utilisateur</li>
      </ul>
    </TaskSection>
  </DisplayTasks>
);

export default TaskSectionBienvenue;