import styled from "styled-components";
import { useState } from "react";

// photo
import ArticleImage from "../../assets/Veille_Informatique/veille_informatique_ia_iot.png";
import CyberSecurityIAImage from "../../assets/Veille_Informatique/Veille_informatique_cybersecurity_in_ia.png"
import VeilleAISanté from "../../assets/Veille_Informatique/VeilleAIsantéArticle1.png"
import VeilleAISantéArticle2 from "../../assets/Veille_Informatique/VeilleAISantéArticle2.png"
import VeilleAISantéArticle3 from "../../assets/Veille_Informatique/VeilleAISaantéArticle3.png"
// Logo
import LinkedinLogo from "../../assets/linkedin-alt.svg"
import InoreaderLogo from "../../assets/Veille_Informatique/inoreader_logo_icon_blue.png"
import GoogleScholarLogo from "../../assets/Veille_Informatique/Google_Scholar_logo.svg.png"

const Background = styled.div`
  background-color: #0c3e50;
  color: white;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: white;
  margin-bottom: 20px;
`;

const StyledParagraph = styled.p`
  color: white;
  text-align: center;
  line-height: 1.8;
  font-size: 18px;
  margin: 20px 0 40px;
  padding: 0 15%;
`;

const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // background-color: white;
  color: #333;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin-bottom: 40px;
  width: 45%; /* Ajuste la largeur pour que les articles tiennent sur la même ligne */
  height: 100%; /* S'assure que les articles prennent toute la hauteur du container */
  min-height: 570px; /* Hauteur minimale pour maintenir un design cohérent */
  justify-content: space-between; /* Assure que le contenu est bien réparti dans l'article */
  background-color: ${({ topic }) => {
    switch (topic) {
      case "cybersecurity":
        return " #fde8e1"; // rouge saumon clair
      case "healthcare":
        return " #ccebd6"; // vert menthe pâle
      case "robotics":
        return "	#ccdef4"; // bleu glacier clair
      default:
        return "white";
    }
  }};

`;

const ArticleImageStyled = styled.img`
  width: 50%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const ArticleTitle = styled.h2`
  font-size: 1.5rem;
  color: #34495e;
  margin-bottom: 10px;
  text-align:center;
`;

const ArticleDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  text-align: center;
`;

const ExpandButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const ArticlesWrapper = styled.div`
 display: flex;
  gap: 20px;
  justify-content: center;
  align-items: flex-start; /* Empêche l'alignement des hauteurs des articles */
  width: 100%;
  flex-wrap: wrap; /* Permet aux articles de passer à la ligne si la taille de l'écran est trop petite */
`;

const LinkButton = styled.a`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 16px;
  margin-top: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const ComparisonSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  width: 100%;
`;

const ComparisonItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 15px;
  font-size: 16px;
  border-bottom:1px solid black;
`;

const SubsectionTitle = styled.h5`
  font-size: 1.25rem;
  color: #34495e;
  margin-top: 20px;
`;

const SubsectionText = styled.p`
  font-size: 16px;
  line-height: 1.6;

  margin-bottom: 10px;
`;

const List = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  margin-top: 10px;
  font-size: 16px;
`;

const AioTSubsectionTitle = styled.h5`
  font-size: 1.25rem;
  color: #34495e;
  margin-top: 20px;
`;

const AioTSubsectionText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 10px;
`;

const AioTLinkButton = styled.a`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 16px;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
const ToggleButton = styled.button`
  background-color: ${(props) => (props.expanded ? "white" : "#007bff")};
  color: ${(props) => (props.expanded ? "#007bff" : "white")};
  padding: 10px 20px;
  border: ${(props) => (props.expanded ? "2px solid #007bff" : "none")};
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.expanded ? "#f0f0f0" : "#0056b3")};
  }
`;
const DivSection=styled.div`
    background-color: white;
    border: 1px solid #bdc3c7;
    border-radius: 12px;
    padding: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    color:#34495E;
    margin-bottom:40px;
`
const SectionTitle = styled.h2`
    font-size: 1.5rem;
    color: #34495E;
    margin-bottom: 20px;
`;
const PaddingListe = styled.ul`
    padding: 0;
    margin-bottom: 20px;
    list-style-type: none;
    width: 100%;
`;
const DisplayListe = styled.li`
    display:flex;
    align-items: center; /* Centre les éléments verticalement */
    justify-content: space-between; /* Espace entre les éléments */
    gap: 10px; /* Espace entre les éléments */
    padding: 10px; /* Ajoute de l'espace autour des contenus */
    border-bottom: 1px solid #ddd; /* Optionnel : ajoute une séparation visuelle */
`;
const ListeTitre = styled.h5`
    flex: 1; /* Permet au titre de prendre l'espace disponible */
    margin: 0; /* Supprime les marges par défaut */
    min-width:160px;
    // white-space: nowrap; /* Empêche le retour à la ligne automatique */
`;
const ListeTexte = styled.p`
    flex: 1; /* Permet au texte de prendre tout l'espace disponible */
    margin: 0; /* Supprime les marges par défaut */
    font-size: 14px;
    min-width:60px;
    color: #333;
`;

const TinyLogo = styled.img`
    width: 35px;
    height: auto;
    max-height:35px;
`;

const Separateur = styled.div`
  display:flex;
  width:100%;
  justify-content:center;
  margin-bottom:40px;
  margin-top:80px;
  h1{
      color:${({topic})=>{
        switch(topic){
          case "cybersecurity":
            return " #b44a3a";
          case "healthcare":
            return " #3b7750";
          case "robotics":
            return " #4db8e8";
          default:
            return "white"
        }
      }}
  }
`

function Veille() {


  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  const [expanded2, setExpanded2] = useState(false);

  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };


  const [expanded3, setExpanded3] = useState(false);

  const handleExpandClick3 = () => {
    setExpanded3(!expanded3);
  };


  const [expanded4, setExpanded4] = useState(false);

  const handleExpandClick4 = () => {
    setExpanded4(!expanded4);
  };

  const [expanded5, setExpanded5] = useState(false);

  const handleExpandClick5 = () => {
    setExpanded5(!expanded5);
  };

  const [expanded6, setExpanded6] = useState(false);

  const handleExpandClick6 = () => {
    setExpanded6(!expanded6);
  };

  const [expanded7,setExpanded7]=useState(false);
  const handleExpandClick7 =()=>{
    setExpanded7(!expanded7)  
  }
  const [expanded8,setExpanded8]=useState(false);
  const handleExpandClick8 =()=>{
    setExpanded8(!expanded8)  
  }

  const [expanded9,setExpanded9]=useState(false);
  const handleExpandClick9 =()=>{
    setExpanded9(!expanded9)  
  }

  return (
    <Background>
      <Title>Articles et Veilles Informatiques</Title>
      <StyledParagraph>
        Découvrez ici les articles et sujets pertinents que j'ai explorés dans le
        cadre de ma veille informatique. Ces sujets couvrent des technologies
        modernes et des tendances clés.
      </StyledParagraph>
        
        <DivSection>
        {expanded5 && (
          <>
            <p>
              La veille informatique consiste à collecter, analyser et diffuser des informations stratégiques liées aux technologies numériques pour anticiper les évolutions et rester compétitif.
            </p>
            <p>
            Pour ma veille technologique, j’ai choisi d’explorer l’impact de l’intelligence artificielle dans différents domaines :
            </p>
            <ul>
              <li>IA et IoT : Étude de l’interaction entre l’intelligence artificielle et les objets connectés pour améliorer l’automatisation et l’efficacité.</li>
              <li>IA et cybersécurité : Analyse de l’utilisation de l’IA pour anticiper et contrer les cybermenaces.</li>
              <li>IA et santé : Exploration des avancées de l’IA dans le diagnostic, les traitements personnalisés et la prévention médicale.</li>
            </ul>
            <SectionTitle>Outils utilisés</SectionTitle>
            <PaddingListe>
              <DisplayListe>
                <ListeTitre>Aggrégateur de flux RSS</ListeTitre>
                <ListeTexte>Inoreader</ListeTexte>
                <TinyLogo src={InoreaderLogo} alt="Inoreader Logo" />
              </DisplayListe>
              <DisplayListe>
                <ListeTitre>Publication Académique</ListeTitre>
                <ListeTexte>Google Scholar</ListeTexte>
                <TinyLogo src={GoogleScholarLogo} alt="Google Scholar Logo" />
              </DisplayListe>
              <DisplayListe>
                <ListeTitre>Réseau social</ListeTitre>
                <ListeTexte>LinkedIn</ListeTexte>
                <TinyLogo src={LinkedinLogo} alt="LinkedIn Logo" />
              </DisplayListe>
            </PaddingListe>
          </>
            
        
        )}
        <ToggleButton expanded={expanded5} onClick={handleExpandClick5}>
          {expanded5? "Moins":<h5>Démarche et outils de veille</h5>}
        </ToggleButton>  
        </DivSection>
      

      <Separateur topic="robotics">
        <h1 >L'impact de l'IA sur les objets connectés (AIoT)</h1>
      </Separateur>

      <ArticlesWrapper>
        <ArticleContainer topic="robotics">

          <ArticleImageStyled src={ArticleImage} alt="Article Example" />
          <ArticleTitle>
            L'IA révolutionne les objets connectés (IoT)
          </ArticleTitle>
          <ArticleDescription>
            L'article "AI Upgrades the Internet of Things" explore la fusion de l'IA et des objets connectés, ou AIoT, qui transforme la manière dont les données sont collectées et utilisées.
          </ArticleDescription>
          {expanded && (
            <>
              <ArticleDescription>
                Cette fusion entre l'IA et l'IoT ouvre la voie à des systèmes plus intelligents et autonomes. Découvrez les implications techniques et éthiques de cette évolution.
              </ArticleDescription>

              <div>
                <SubsectionTitle>Qu'est-ce qu'un IoT ?</SubsectionTitle>
                <SubsectionText>
                  L'Internet des objets (IoT) fait référence aux objets physiques connectés à Internet, qui collectent et échangent des données pour automatiser des tâches ou améliorer l'efficacité dans divers domaines.
                </SubsectionText>
                <h6>Exemples :</h6>
                <List>
                  <li>Thermostats intelligents (ex: Nest) qui ajustent la température selon vos préférences.</li>
                  <li>Montres connectées (ex: Apple Watch) qui suivent votre activité physique et votre santé.</li>
                  <li>Caméras de sécurité intelligentes (ex: Ring) qui vous alertent en cas de mouvement détecté.</li>
                </List>
              </div>

              <div>
                  <SubsectionTitle>L'impact de l'IA sur l'IoT : Vers l'AIoT</SubsectionTitle>
                  <SubsectionText>
                    L'IA transforme les systèmes IoT traditionnels en AIoT (Artificial Intelligence of Things). Cette évolution permet d'analyser et d'utiliser les données collectées de manière autonome, offrant des systèmes plus réactifs et personnalisés.
                  </SubsectionText>
                  <h6>Exemples :</h6>
                  <ComparisonSection>
                    <h6>Analyse intelligente des données :</h6>
                    <ComparisonItem>
                      <span><strong>Avant l'IA :</strong> Un capteur IoT mesure la température et envoie simplement les données.</span>
                      <span><strong>Avec l'IA :</strong> L'IA ajuste automatiquement la température en fonction des habitudes de l'utilisateur.</span>
                    </ComparisonItem>

                    <ComparisonItem>
                      <span><strong>Avant l'IA :</strong> Une caméra de sécurité détecte un mouvement et envoie une alerte.</span>
                      <span><strong>Avec l'IA :</strong> La caméra distingue un intrus d'un animal, réduisant ainsi les fausses alertes.</span>
                    </ComparisonItem>

                    <ComparisonItem>
                      <span><strong>Avant l'IA :</strong> Une machine industrielle envoie un rapport d'état régulièrement.</span>
                      <span><strong>Avec l'IA :</strong> L'IA identifie des anomalies dans les données pour prévenir les pannes.</span>
                    </ComparisonItem>
                  </ComparisonSection>
              </div>
              <div>
              <SubsectionTitle>Les enjeux éthiques de l'AIoT</SubsectionTitle>
              <SubsectionText>
                Bien que l'AIoT présente des avantages considérables, elle soulève également des questions éthiques importantes. La fusion de l'IA et de l'IoT peut entraîner des problèmes liés à la confidentialité, à la sécurité des données, et à l'autonomie des systèmes. Voici quelques-uns des enjeux éthiques majeurs :
              </SubsectionText>

              <List>
                <li>
                  <strong>Protection des données personnelles :</strong> Les objets connectés collectent une quantité massive de données, souvent personnelles. Il est crucial de garantir que ces données soient utilisées de manière responsable et sécurisée, afin d'éviter tout abus ou vol d'informations sensibles.
                </li>
                <li>
                  <strong>Autonomie des systèmes :</strong> L'AIoT rend les objets plus autonomes, ce qui pose la question de la responsabilité en cas de dysfonctionnement. Si un objet IoT intelligent prend une décision erronée ou cause un dommage, qui en est responsable ?
                </li>
                <li>
                  <strong>Impact sur l'emploi :</strong> L'automatisation et l'IA dans l'IoT pourraient réduire le besoin de certaines catégories de travailleurs, soulevant des questions sur l'avenir du travail dans certains secteurs.
                </li>
                <li>
                  <strong>Transparence des algorithmes :</strong> Les systèmes d'IA utilisés dans l'IoT sont souvent des boîtes noires, ce qui signifie qu'il est difficile de comprendre comment les décisions sont prises. Il est important d'assurer une certaine transparence pour garantir la confiance du public.
                </li>
                <li>
                  <strong>Accessibilité et inégalités technologiques :</strong> Bien que l'AIoT offre de nombreux avantages, il y a un risque de creuser davantage l'écart entre ceux qui ont accès à ces technologies avancées et ceux qui n'y ont pas accès.
                </li>
              </List>

              <SubsectionText>
                Ces questions éthiques nécessitent des réflexions approfondies et des régulations adaptées pour s'assurer que les technologies de l'AIoT sont utilisées de manière bénéfique et équitable.
              </SubsectionText>
            </div>
              <LinkButton
                href="https://cacm.acm.org/news/ai-upgrades-the-internet-of-things/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lire l'article complet
              </LinkButton>
            </>
          )}
          <ExpandButton onClick={handleExpandClick}>
            {expanded ? "Voir moins" : "En savoir plus"}
          </ExpandButton>
        </ArticleContainer>

        <ArticleContainer topic="robotics">
          <ArticleImageStyled src={ArticleImage} alt="Article Example" />
          
            <ArticleTitle>L'AIoT pour la Fabrication Durable</ArticleTitle>

            <ArticleDescription>
              L'AIoT transforme l'industrie manufacturière en optimisant les processus, réduisant la consommation d'énergie et les déchets,
              tout en améliorant la qualité des produits pour une production plus durable.            
            </ArticleDescription>
              {expanded2 && (
                <>                        
                <AioTSubsectionTitle>Optimisation des Processus et Réduction des Déchets</AioTSubsectionTitle>
                <AioTSubsectionText>
                  L'AIoT permet une surveillance en temps réel des processus de fabrication, ce qui optimise l'efficacité des machines et des chaînes de production. L'analyse des données générées permet de minimiser le gaspillage de matières premières et d'énergie, contribuant ainsi à la fabrication durable.
                </AioTSubsectionText>

                <AioTSubsectionTitle>Maintenance Prédictive et Sécurité des Travailleurs</AioTSubsectionTitle>
                <AioTSubsectionText>
                  L'AIoT permet de prédire les défaillances des machines avant qu'elles ne surviennent, évitant ainsi les arrêts de production imprévus. Elle améliore aussi la sécurité des travailleurs en détectant les risques en temps réel.
                </AioTSubsectionText>

                <AioTSubsectionTitle>Prise de Décisions Basée sur les Données</AioTSubsectionTitle>
                <AioTSubsectionText>
                  Grâce à l'AIoT, les industriels peuvent prendre des décisions plus éclairées grâce à l'analyse des données collectées. Ces données peuvent être utilisées pour optimiser la production et réduire les coûts.
                </AioTSubsectionText>

                <AioTSubsectionTitle>Défis et Perspectives</AioTSubsectionTitle>
                <AioTSubsectionText>
                  Bien que l'AIoT offre de nombreux avantages, son adoption reste complexe, avec des défis liés à l'intégration des technologies existantes et à la gestion des données. Toutefois, les recherches dans ce domaine continuent de progresser et ouvrent la voie à une fabrication plus durable et plus intelligente.
                </AioTSubsectionText>

                <AioTLinkButton
                  href="https://www.sciencedirect.com/science/article/abs/pii/S254266052300224X"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lire l'article complet
                </AioTLinkButton>
                </>

              )}

            <ExpandButton onClick={handleExpandClick2}>
              {expanded2 ? "Voir moins" : "En savoir plus"}
            </ExpandButton>
          

        </ArticleContainer>
      </ArticlesWrapper>

      <Separateur topic="cybersecurity">
        <h1 >L'impact de l'IA sur la cybersécurité</h1>
      </Separateur>

      <ArticlesWrapper>

        <ArticleContainer topic="cybersecurity">
          <ArticleImageStyled src={CyberSecurityIAImage} alt="Article Example" />
          <ArticleTitle>
            The cat and mouse game of computer security
          </ArticleTitle>
          <ArticleDescription>
            L'article explore comment l'IA révolutionne la cybersécurité, en transformant les menaces et les réponses grâce à des outils avancés et sophistiqués.
          </ArticleDescription>
          {expanded4 && (
            <>
              <ArticleDescription>
                Depuis les premiers hacks des années 70 jusqu'à aujourd'hui, l'IA est devenue un outil essentiel dans la lutte contre les cybermenaces. Découvrez les impacts de cette révolution technologique.
              </ArticleDescription>

              <div>
                <SubsectionTitle>Les débuts de la cybersécurité</SubsectionTitle>
                <SubsectionText>
                  Dès les années 1970, des innovations comme le programme Reaper pour contrer le ver Creeper ont posé les bases de la sécurité informatique. Aujourd'hui, l'IA redéfinit ces frontières.
                </SubsectionText>
                <h6>Exemples marquants :</h6>
                <List>
                  <li>
                    Utilisation de modèles d'apprentissage automatique pour détecter des comportements suspects.
                  </li>
                  <li>
                    Génération de contenu malveillant, comme des e-mails de phishing convaincants.
                  </li>
                </List>
              </div>

              <div>
                <SubsectionTitle>Le rôle de l'IA en cybersécurité</SubsectionTitle>
                <SubsectionText>
                  Les solutions comme Microsoft Copilot ou Palo Alto Precision AI utilisent des capacités génératives pour accélérer la détection et la neutralisation des menaces.
                </SubsectionText>
                <h6>Avantages clés :</h6>
                <ComparisonSection>
                  <ComparisonItem>
                    <span><strong>Avant l'IA :</strong> Analyse manuelle des journaux réseau.</span>
                    <span><strong>Avec l'IA :</strong> Identification automatique et en temps réel des anomalies.</span>
                  </ComparisonItem>
                  <ComparisonItem>
                    <span><strong>Avant l'IA :</strong> Réponses réactives aux menaces.</span>
                    <span><strong>Avec l'IA :</strong> Proactivité et prédiction des attaques.</span>
                  </ComparisonItem>
                </ComparisonSection>
              </div>

              <div>
                <SubsectionTitle>Risques et limites</SubsectionTitle>
                <SubsectionText>
                  Malgré ses avantages, l'IA présente des défis tels que les biais dans les données d'entraînement ou les hallucinations des modèles génératifs.
                </SubsectionText>
                <List>
                  <li>
                    <strong>Traçabilité :</strong> Difficulté à comprendre les décisions prises par les modèles d'IA.
                  </li>
                  <li>
                    <strong>Fiabilité :</strong> Risque de fausses alertes ou d'actions incorrectes.
                  </li>
                </List>
              </div>

              <LinkButton
                href="https://cacm.acm.org/news/security-via-ai/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lire l'article complet
              </LinkButton>
            </>
          )}
          <ExpandButton onClick={handleExpandClick4}>
            {expanded4 ? "Voir moins" : "En savoir plus"}
          </ExpandButton>
        </ArticleContainer>

        <ArticleContainer topic="cybersecurity">
          <ArticleImageStyled src={CyberSecurityIAImage} alt="Article Example" />
          <ArticleTitle>
            L’intelligence artificielle (IA) dans la taille du marché de la cybersécurité.
          </ArticleTitle>
          <ArticleDescription>
            L'article "Artificial Intelligence in Cybersecurity Market" explore comment l'intégration de l'IA transforme la détection des menaces et renforce les stratégies de défense face aux cyberattaques sophistiquées.
          </ArticleDescription>
          {expanded3 && (
            <>
              <ArticleDescription>
                Avec un marché estimé à 78,5 milliards USD d'ici 2032, l'intégration de l'IA dans la cybersécurité répond aux défis croissants des cyberattaques complexes et de la protection des données sensibles.
              </ArticleDescription>

              <div>
                <SubsectionTitle>Les technologies clés de l’IA en cybersécurité</SubsectionTitle>
                <SubsectionText>
                  L'IA repose sur des technologies avancées pour renforcer les défenses contre les cybermenaces. Voici les principales :
                </SubsectionText>
                <List>
                  <li>
                    <strong>Apprentissage automatique (Machine Learning) :</strong> Analyse des données pour détecter des anomalies et des patterns dans les attaques.
                  </li>
                  <li>
                    <strong>Traitement du langage naturel (NLP) :</strong> Amélioration des communications dans les centres d'opérations de sécurité (SOC).
                  </li>
                  <li>
                    <strong>Deep Learning :</strong> Renforcement de la prévention des menaces et de la détection proactive des vulnérabilités.
                  </li>
                </List>
              </div>

              <div>
                <SubsectionTitle>Secteurs et leaders de l'industrie</SubsectionTitle>
                <SubsectionText>
                  Les secteurs les plus impactés par ces innovations comprennent :
                </SubsectionText>
                <List>
                  <li>
                    <strong>Finance (BFSI) :</strong> Gestion des risques et protection contre la fraude.
                  </li>
                  <li>
                    <strong>Santé :</strong> Protection des données médicales sensibles.
                  </li>
                  <li>
                    <strong>Cloud computing :</strong> Défense des environnements numériques dématérialisés.
                  </li>
                </List>
                <SubsectionText>
                  Parmi les leaders de cette transformation, on retrouve CrowdStrike, Darktrace, IBM, Palo Alto Networks et Fortinet, qui développent des outils de défense innovants.
                </SubsectionText>
              </div>

              <div>
                <SubsectionTitle>Les défis et opportunités</SubsectionTitle>
                <SubsectionText>
                  Bien que prometteuse, l'intégration de l'IA dans la cybersécurité soulève des défis importants :
                </SubsectionText>
                <List>
                  <li>
                    <strong>Prolifération des objets connectés :</strong> L’augmentation de la surface d’attaque nécessite des systèmes plus robustes.
                  </li>
                  <li>
                    <strong>Manque de professionnels qualifiés :</strong> L'IA compense ce déficit en automatisant les tâches répétitives.
                  </li>
                  <li>
                    <strong>Réglementations strictes :</strong> Respect des lois comme le RGPD pour garantir la protection des données.
                  </li>
                </List>
                <SubsectionText>
                  Ces défis s’accompagnent d’opportunités pour renforcer les défenses des entreprises et anticiper les cybermenaces.
                </SubsectionText>
              </div>
              <LinkButton
                href="https://www.openpr.com/news/3977877/artificial-intelligence-ai-in-cybersecurity-market-size"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lire l'article complet
              </LinkButton>

            </>
          )}              
          <ExpandButton onClick={handleExpandClick3}>
            {expanded3 ? "Voir moins" : "En savoir plus"}
          </ExpandButton>
        </ArticleContainer>

        <ArticleContainer topic="cybersecurity">
          <ArticleImageStyled src={CyberSecurityIAImage} alt="Cybersecurity and AI" />
          <ArticleTitle>
            L'intelligence artificielle : Un changement de paradigme dans la cybersécurité.
          </ArticleTitle>
          <ArticleDescription>
            L'article explore comment l'intelligence artificielle, associée à l'apprentissage automatique et au deep learning, révolutionne la détection et la gestion des cybermenaces.
          </ArticleDescription>
          {expanded6 && (
            <>
              <ArticleDescription>
                Grâce à des technologies comme les réseaux neuronaux et le traitement des données massives, les entreprises peuvent identifier et contrer les cyberattaques de manière plus rapide et efficace.
              </ArticleDescription>

              <div>
                <SubsectionTitle>Mécanismes de détection et prévention des menaces</SubsectionTitle>
                <SubsectionText>
                  L'IA en cybersécurité repose sur des mécanismes avancés pour identifier et prévenir les cybermenaces :
                </SubsectionText>
                <List>
                  <li>
                    <strong>Reconnaissance de modèles et détection d’anomalies :</strong> Identifier les comportements suspects dans des ensembles de données complexes.
                  </li>
                  <li>
                    <strong>Analyse prédictive et évaluation des risques :</strong> Anticiper les attaques avant qu’elles ne surviennent.
                  </li>
                  <li>
                    <strong>Automatisation des tâches répétitives :</strong> Libérer les équipes de sécurité pour se concentrer sur les menaces critiques.
                  </li>
                </List>
              </div>

              <div>
                <SubsectionTitle>Applications clés de l'IA dans la cybersécurité</SubsectionTitle>
                <SubsectionText>
                  Les solutions basées sur l'IA trouvent des applications dans divers secteurs :
                </SubsectionText>
                <List>
                  <li>
                    <strong>Finance :</strong> Protection contre la fraude et renforcement de la gestion des risques.
                  </li>
                  <li>
                    <strong>Santé :</strong> Sécurisation des données médicales sensibles.
                  </li>
                  <li>
                    <strong>Administration publique :</strong> Prévention des cyberattaques visant des infrastructures critiques.
                  </li>
                </List>
              </div>

              <div>
                <SubsectionTitle>Défis et perspectives</SubsectionTitle>
                <SubsectionText>
                  L'adoption de l'IA en cybersécurité s'accompagne de défis importants :
                </SubsectionText>
                <List>
                  <li>
                    <strong>Complexité des systèmes :</strong> Intégration avec les infrastructures existantes.
                  </li>
                  <li>
                    <strong>Coûts élevés :</strong> Ressources nécessaires pour la mise en œuvre et la maintenance.
                  </li>
                  <li>
                    <strong>Pénurie de compétences :</strong> Manque de professionnels qualifiés dans les domaines du machine learning et de la cybersécurité.
                  </li>
                </List>
                <SubsectionText>
                  Ces défis créent également des opportunités pour les entreprises cherchant à innover et renforcer leurs défenses face à des menaces toujours plus sophistiquées.
                </SubsectionText>
              </div>
              <LinkButton
                href="https://www.linkedin.com/posts/adnan-shahzad-learnearninfo-com_the-role-of-artificial-intelligence-in-cybersecurity-activity-7294469998171844608-yxak?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESuRbIBbBnp2F1vS4wUhDZMSDqQLvzBVR8"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lire l'article complet
              </LinkButton>
            </>
          )}
          <ExpandButton onClick={handleExpandClick6}>
            {expanded6 ? "Voir moins" : "En savoir plus"}
          </ExpandButton>
        </ArticleContainer>  
      </ArticlesWrapper>

      <Separateur topic="healthcare">
        <h1 >L'impact de l'IA sur le secteur de la santé</h1>
      </Separateur>

      <ArticlesWrapper>
        <ArticleContainer topic="healthcare">
          <ArticleImageStyled src={VeilleAISanté} alt="Artificial Intelligence in Healthcare" />
          <ArticleTitle>
            Le potentiel de l’intelligence artificielle dans le domaine de la santé
          </ArticleTitle>
          <ArticleDescription>
            Cet article explore les nombreuses façons dont l’intelligence artificielle (IA) est déjà utilisée dans le secteur médical, que ce soit pour le diagnostic, la personnalisation des traitements ou l’automatisation administrative. Bien que les capacités de l’IA progressent rapidement, de nombreux défis freinent encore son adoption à grande échelle.
          </ArticleDescription>
          {expanded7 && (
            <>
              <ArticleDescription>
                L’IA, sous ses différentes formes (apprentissage automatique, NLP, systèmes experts, robots physiques ou logiciels), est appliquée dans plusieurs domaines :
              </ArticleDescription>

              <div>
                <SubsectionTitle>Technologies clés de l’IA en santé</SubsectionTitle>
                <List>
                  <li>
                    <strong>Machine Learning & Deep Learning :</strong> utilisés pour prédire les traitements les plus adaptés (médecine de précision) et analyser les images médicales (radiomics).
                  </li>
                  <li>
                    <strong>Traitement du langage naturel (NLP) :</strong> permet l’analyse de documents cliniques, la transcription automatique et les assistants conversationnels.
                  </li>
                  <li>
                    <strong>Robotic Process Automation :</strong> automatise les tâches administratives (mise à jour de dossiers, traitement de factures).
                  </li>
                  <li>
                    <strong>Robots chirurgicaux :</strong> améliorent la précision et la visibilité lors des interventions, tout en étant pilotés par un humain.
                  </li>
                </List>
              </div>

              <div>
                <SubsectionTitle>Applications concrètes</SubsectionTitle>
                <SubsectionText>
                  Plusieurs entreprises développent des outils basés sur l’IA pour :
                </SubsectionText>
                <List>
                  <li>
                    <strong>Diagnostiquer des maladies complexes :</strong> par exemple, Google et Enlitic travaillent sur des algorithmes pour détecter le cancer via l’imagerie.
                  </li>
                  <li>
                    <strong>Accompagner les patients :</strong> via des systèmes de recommandations personnalisées ou des rappels pour améliorer l’observance des traitements.
                  </li>
                  <li>
                    <strong>Optimiser la gestion hospitalière :</strong> prédiction des réadmissions, gestion des ressources, analyse de réclamations médicales.
                  </li>
                </List>
              </div>

              <div>
                <SubsectionTitle>Limites et enjeux</SubsectionTitle>
                <SubsectionText>
                  Malgré ses capacités prometteuses, l’intégration de l’IA dans la pratique médicale quotidienne rencontre plusieurs obstacles :
                </SubsectionText>
                <List>
                  <li>
                    <strong>Manque d’explicabilité des algorithmes :</strong> en particulier ceux basés sur le deep learning, rendant difficile l’interprétation des décisions.
                  </li>
                  <li>
                    <strong>Difficultés d’intégration :</strong> peu de solutions sont compatibles avec les systèmes de dossiers médicaux existants.
                  </li>
                  <li>
                    <strong>Problèmes éthiques :</strong> liés à la transparence, la vie privée, les biais algorithmiques et la responsabilité en cas d’erreur.
                  </li>
                </List>
              </div>

              <div>
                <SubsectionTitle>Perspectives pour les professionnels de santé</SubsectionTitle>
                <SubsectionText>
                  L’IA ne devrait pas remplacer les soignants, mais les assister. Les métiers les plus exposés à l’automatisation concernent les tâches numériques (radiologie, pathologie), mais la complexité des cas et la relation humaine limitent cette substitution.
                </SubsectionText>
                <SubsectionText>
                  À terme, l’IA pourra libérer du temps aux praticiens pour se concentrer sur les tâches à forte valeur humaine, comme l’empathie et la communication.
                </SubsectionText>
              </div>

              <LinkButton
                href="https://www.sciencedirect.com/science/article/pii/S2514664524010592"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lire l'article complet
              </LinkButton>
            </>
          )}
          <ExpandButton onClick={handleExpandClick7}>
            {expanded7 ? "Voir moins" : "En savoir plus"}
          </ExpandButton>
        </ArticleContainer>

        <ArticleContainer topic="healthcare">
          <ArticleImageStyled src={VeilleAISantéArticle2} alt="AI Breast Cancer Trial" />
          <ArticleTitle>
            Le NHS lance le plus grand essai mondial de diagnostic du cancer du sein par IA
          </ArticleTitle>
          <ArticleDescription>
            Le système de santé britannique (NHS) entame un essai majeur pour évaluer l'efficacité de l’intelligence artificielle dans le dépistage du cancer du sein. Cette initiative pourrait transformer la manière dont les mammographies sont analysées, tout en réduisant les délais de diagnostic.
          </ArticleDescription>
          {expanded8 && (
            <>
              <ArticleDescription>
                L’étude portera sur plus de 700 000 mammographies au Royaume-Uni, dont environ deux tiers seront analysées à l’aide de cinq types d’IA. L’objectif est de comparer leur précision à celle des radiologues.
              </ArticleDescription>

              <div>
                <SubsectionTitle>Un système de "double lecture" repensé</SubsectionTitle>
                <SubsectionText>
                  Actuellement, chaque mammographie est étudiée par deux radiologues pour minimiser les erreurs. Si l’IA se révèle aussi fiable, elle pourrait remplacer l’un des deux lecteurs humains, libérant ainsi du temps pour d’autres tâches médicales.
                </SubsectionText>
              </div>

              <div>
                <SubsectionTitle>Un potentiel prometteur confirmé par des essais précédents</SubsectionTitle>
                <SubsectionText>
                  Une étude suédoise de 2023 portant sur 80 000 femmes a montré que l’IA pouvait réduire la charge de travail des radiologues de moitié, sans augmentation significative des faux positifs.
                </SubsectionText>
              </div>

              <div>
                <SubsectionTitle>Des enjeux de fiabilité et d’éthique</SubsectionTitle>
                <SubsectionText>
                  Bien que prometteuse, l’IA soulève des préoccupations, notamment sur la fiabilité des algorithmes vis-à-vis de la diversité ethnique des patientes. Une attention particulière sera portée à la conception de systèmes équitables et précis.
                </SubsectionText>
              </div>

              <div>
                <SubsectionTitle>Un plan national pour lutter contre le cancer</SubsectionTitle>
                <SubsectionText>
                  Le gouvernement britannique, via le ministère de la Santé, prévoit un plan national dédié au cancer, visant à faire du pays un leader mondial dans la détection précoce et le traitement de la maladie grâce aux nouvelles technologies.
                </SubsectionText>
              </div>

              <LinkButton
                href="https://www.theguardian.com/society/2024/feb/04/nhs-to-launch-worlds-biggest-trial-of-ai-breast-cancer-diagnosis"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lire l'article complet
              </LinkButton>
            </>
          )}
          <ExpandButton onClick={handleExpandClick8}>
            {expanded8 ? "Voir moins" : "En savoir plus"}
          </ExpandButton>
        </ArticleContainer>

        <ArticleContainer topic="healthcare">
          <ArticleImageStyled src={VeilleAISantéArticle3} alt="AI-Assisted Haptic Robotic Surgery" />
          <ArticleTitle>
            Une chirurgie robotique assistée par retour haptique et intelligence artificielle
          </ArticleTitle>
          <ArticleDescription>
            L’article propose une approche innovante intégrant l’intelligence artificielle, la réalité virtuelle (VR), la réalité augmentée (AR), le retour haptique et la 5G pour révolutionner la chirurgie robotique et l’imagerie médicale à distance.
          </ArticleDescription>
          {expanded9 && (
            <>
              <ArticleDescription>
                Le modèle vise à améliorer la visualisation des images médicales et à permettre des interventions chirurgicales à distance tout en limitant les risques d’infection et en réduisant la charge de travail des soignants.
              </ArticleDescription>

              <div>
                <SubsectionTitle>Technologies intégrées</SubsectionTitle>
                <List>
                  <li>
                    <strong>Réalité virtuelle et augmentée :</strong> permet une visualisation 3D détaillée des organes du patient pour un diagnostic plus précis.
                  </li>
                  <li>
                    <strong>Retour haptique :</strong> offre au chirurgien la sensation du toucher à distance, renforçant la précision des gestes.
                  </li>
                  <li>
                    <strong>5G :</strong> garantit une latence minimale et une transmission fluide des données pour les opérations en temps réel.
                  </li>
                  <li>
                    <strong>Intelligence artificielle :</strong> apprend des gestes du chirurgien pour potentiellement automatiser certaines tâches.
                  </li>
                </List>
              </div>

              <div>
                <SubsectionTitle>Bénéfices pour le corps médical et les patients</SubsectionTitle>
                <SubsectionText>
                  Cette solution technologique améliore la qualité des soins :
                </SubsectionText>
                <List>
                  <li>
                    <strong>Moins d'erreurs :</strong> grâce à une meilleure visualisation et à la précision robotique.
                  </li>
                  <li>
                    <strong>Réduction des contacts physiques :</strong> limite la propagation des maladies infectieuses.
                  </li>
                  <li>
                    <strong>Convalescence accélérée :</strong> grâce à des incisions plus petites et des procédures moins invasives.
                  </li>
                </List>
              </div>

              <div>
                <SubsectionTitle>Perspectives futures</SubsectionTitle>
                <SubsectionText>
                  À l’avenir, cette technologie pourrait permettre des interventions mondiales à distance, un accès aux soins dans des zones isolées, et des consultations médicales personnalisées grâce à l’IA et au Big Data.
                </SubsectionText>
              </div>

              <LinkButton
                href="https://www.mdpi.com/2076-3417/13/6/3592" // Mettre l'URL officielle si disponible
                target="_blank"
                rel="noopener noreferrer"
              >
                Lire l'article complet
              </LinkButton>
            </>
          )}
          <ExpandButton onClick={handleExpandClick9}>
            {expanded9 ? "Voir moins" : "En savoir plus"}
          </ExpandButton>
        </ArticleContainer>
      </ArticlesWrapper>
    </Background>
  );
}

export default Veille;