import styled from "styled-components";
// Photos
import LogoVeolia from "../../assets/EntrepriseAsset/logo-Veolia.jpg";
import StepBaumette from "../../assets/EntrepriseAsset/Steplabaumette.jpg";
// Tiny logos
import TinyLogoDatedeCreation from "../../assets/EntrepriseAsset/TinyLogoDatedeCreation.png";
import TinyLogoNombredeSite from "../../assets/EntrepriseAsset/TinyLogoNombresDeSite.png";
import TinyLogoEffectif from "../../assets/EntrepriseAsset/TinyLogoEffectif.png";
import TinyLogoChiffreAffaire from "../../assets/EntrepriseAsset/TinyLogoChiffresAffaire.png";
import TinyLogoActivitéEau from "../../assets/EntrepriseAsset/TinyLogoActivitéEau.png";
import TinyLogoStep from "../../assets/EntrepriseAsset/TinyLogoStepLabaumette.png";

// Styled components
const StyledFullPage = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #34495e;
  color: #ecf0f1;
  padding: 20px;
  box-sizing: border-box;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const Section = styled.section`
  margin-bottom: 40px;

  h3 {
    margin-bottom: 20px;
    text-align: center;
  }

  .section-image {
    display: block;
    margin: 20px auto;
    max-width: 100%;
    max-height: 200px; /* Réduction spécifique de l'image */
    border-radius: 8px;
  }
    p {
        text-align:center;
    }
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const StatCard = styled.div`
  display: flex;
  align-items: center;
  justify-content:center
  background: #2c3e50;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .tiny-logo {
    width: 40px;
    height: 40px;
    margin-right: 15px;
  }

  div {
    h6 {
      font-size: 1rem;
      margin: 0;
    }

    ul {
      margin: 5px 0 0;
      padding-left: 20px;
      list-style-type: disc;

      li {
        font-size: 0.9rem;
        margin-bottom: 5px;
        color: #bdc3c7;
      }
    }
  }
`;

const MissionsList = styled.ul`
  margin-top: 20px;
  padding-left: 20px;
  list-style-type: disc;

  li {
    margin-bottom: 10px;
    font-size: 1rem;
    line-height: 1.5;
    color: #bdc3c7;
  }
`;

// Composant principal
function Entreprise() {
  return (
    <StyledFullPage>
      <Title>Entreprise</Title>

      <Section>
        <h3>Veolia</h3>
        <img className="section-image" src={LogoVeolia} alt="Logo Veolia" />
        <p>
          Veolia est un leader mondial dans la gestion de l'eau, des déchets et de l'énergie, engagé dans la préservation des ressources naturelles et le développement durable.
          À Angers, la STEP (Station d'Épuration) de la Baumette joue un rôle essentiel en traitant les eaux usées de la région pour protéger l'environnement et améliorer la qualité de l'eau avant son retour dans la nature.
        </p>
        <img className="section-image" src={StepBaumette} alt="Step de la Baumette" />
      </Section>

      <Section>
        <h3>Quelques Chiffres Clés</h3>
        <StatsContainer>
          <StatCard>
            <img className="tiny-logo" src={TinyLogoDatedeCreation} alt="Date de création" />
            <div>
              <h6>Date de création</h6>
              <ul>
                <li>1853</li>
              </ul>
            </div>
          </StatCard>
          <StatCard>
            <img className="tiny-logo" src={TinyLogoNombredeSite} alt="Nombre de sites" />
            <div>
              <h6>Nombre de sites</h6>
              <ul>
                <li>Présence dans 135 pays</li>
              </ul>
            </div>
          </StatCard>
          <StatCard>
            <img className="tiny-logo" src={TinyLogoEffectif} alt="Effectif" />
            <div>
              <h6>Effectif</h6>
              <ul>
                <li>215 000 employés</li>
                <li>Répartis sur 5 continents</li>
              </ul>
            </div>
          </StatCard>
          <StatCard>
            <img className="tiny-logo" src={TinyLogoChiffreAffaire} alt="Chiffre d'affaires" />
            <div>
              <h6>Chiffre d'affaires (2024)</h6>
              <ul>
                <li>44,7 milliards d'euros</li>
                <li>Hausse de 5 %</li>
              </ul>
            </div>
          </StatCard>
          <StatCard>
            <img className="tiny-logo" src={TinyLogoActivitéEau} alt="Activité eau" />
            <div>
              <h6>Activité eau</h6>
              <ul>
                <li>111 millions desservis en eau potable</li>
                <li>3 879 usines de production d'eau potable gérées</li>
                <li>3 198 usines de traitement des eaux usées opérées</li>
              </ul>
            </div>
          </StatCard>
          <StatCard>
            <img className="tiny-logo" src={TinyLogoStep} alt="Station de la Baumette" />
            <div>
              <h6>Station de la Baumette</h6>
              <ul>
                <li>Capacité : 285 000 Eq. Hab</li>
                <li>1 600 tonnes de boues séchées par an</li>
                <li>1 440 710 Nm³ de biométhane produit</li>
                <li>1 800 foyers chauffés par an</li>
              </ul>
            </div>
          </StatCard>
        </StatsContainer>
      </Section>

      <Section>
        <h3>Mes Missions</h3>
        <MissionsList>
          <li>
            La STEP de la Baumette Angers appartient à ALM (Angers Loire Métropole) et est exploitée par Veolia Eau.
          </li>
          <li>ALM est donc le client de Veolia.</li>
          <li>
            Ma mission principale au cœur de la station était d'étoffer le logiciel de GMAO (Gestion de la Maintenance Assistée par Ordinateur) qui avait été abandonné depuis 5 ans.
          </li>
          <li>
            Les tâches que je réalisais allaient de l'import des renouvellements réalisés ces 5 dernières années à la mise en place de préventif avec une fréquence d'apparition permettant une organisation plus automatisée pour les agents de terrain de la station.
          </li>
          <li>
            Lors de la deuxième année d'alternance, j'avais complètement pris en main le logiciel et ai donc discuté avec mon tuteur de missions différentes que je pouvais réaliser. De là est venue l'idée de faire un site web permettant à la station d'exister de manière digitale.
          </li>
        </MissionsList>
      </Section>
    </StyledFullPage>
  );
}

export default Entreprise;