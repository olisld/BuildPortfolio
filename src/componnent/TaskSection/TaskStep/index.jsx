import styled from "styled-components";

const DisplayTasks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TaskSection = styled.div`
  margin-top: 20px;
  max-width: 800px;
  width: fit-content;

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

const TaskSectionStep = () => (
  <DisplayTasks>
    <TaskSection>
      <h5>Tâches</h5>
      <ul>
        <li>Analyse des besoins clients</li>
        <li>Redaction d’un cahier des charges simplifié </li>
        <li>Développement de pages informatives sur le traitement de l’eau et l'impact environnemental</li>
        <li>Modélisation des diagrammes UML et de la base de donnée</li>
        <li>Création de la base de donnée et configuration de firebase</li>
        <li>Création d'un forum interactif pour visiteurs et professionnels</li>
        <li>Déploiement du site avec OVH et PuTTY.</li>
        <li>Mise à jour et correction des informations ou des erreurs</li>
      </ul>
    </TaskSection>
  </DisplayTasks>
);

export default TaskSectionStep;