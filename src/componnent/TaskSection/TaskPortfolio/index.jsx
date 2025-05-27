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

const TaskSectionPortfolio = () => (
  <DisplayTasks>
    <TaskSection>
      <h5>Tâches</h5>
      <ul>
        <li>Definir les objectifs du portfolio</li>
        <li>Choix des technologies utilisés, des sujets de veille et projets à intégrer</li>
        <li>Mise en place du squelette du site</li>
        <li>Redaction et mise en page des sujets de veilles et des projets</li>
        <li>Deploiement du site avec OVH et puTTY.</li>
        <li>Mise à jour des informations du Portfolio</li>
      </ul>
    </TaskSection>
  </DisplayTasks>
);

export default TaskSectionPortfolio;