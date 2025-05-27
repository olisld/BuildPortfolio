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

const TaskSectionShinyAgency = () => (
  <DisplayTasks>
    <TaskSection>
      <h5>Tâches</h5>
      <ul>
        <li>Création du projet React avec structure de pages.</li>
        <li>Implémentation du questionnaire utilisateur.</li>
        <li>Récupération dynamique des résultats via appels API.</li>
        <li>Navigation entre pages avec React Router.</li>
        <li>Transmission des données via les props.</li>
        <li>Gestion du thème et des réponses avec createContext.</li>
        <li>Intégration d’un affichage conditionnel selon les résultats.</li>
      </ul>
    </TaskSection>
  </DisplayTasks>
);

export default TaskSectionShinyAgency;