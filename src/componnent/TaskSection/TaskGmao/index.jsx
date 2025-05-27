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

const TaskSectionGmao = () => (
  <DisplayTasks>
    <TaskSection>
      <h5>Tâches</h5>
      <ul>
        <li>Importation massive des renouvellements non importés des 5 dernières années.</li>
        <li>Création et mise à jour des équipements manquants dans la base.</li>
        <li>Création de gammes préventives (tâches automatisées) avec fréquences d’exécution.</li>
        <li>Création de gammes de contrôle réglementaire avec automatisation.</li>
        <li>Création de correctifs ponctuels pour intégrer les événements passés.</li>
        <li>Modification de l'interface utilisateur pour simplifier l'usage pour les agents de terrain.</li>
        <li>Ajout de modules statistiques (analyse des interventions, machines les plus réparées, etc.)</li>
        <li>Recueil et intégration des retours d’expérience des agents pour améliorer l'ergonomie.</li>
      </ul>
    </TaskSection>
  </DisplayTasks>
);

export default TaskSectionGmao;