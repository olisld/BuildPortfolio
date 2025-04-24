import styled from "styled-components"
import { Link } from "react-router-dom"
// Import de Logo
import LogoApple from "../../assets/logo_projet/Apple-logo.png"
import LogoCalculetteImo from "../../assets/logo_projet/immo-calculette-logo2.png"
import LogoBienvenueFormation from "../../assets/logo_projet/bienvenueformationLogo.png"
import LogoMaisonJungle from "../../assets/logo_projet/Logo_Maison_jungle.png"
import LogoShinyAgency from "../../assets/logo_projet/logo.svg"
// import de screen des appli
import ScreenApple from "../../assets/Screen_Projet/Screen_Apple_Page.png"
import ScreenCalcImmo from "../../assets/Screen_Projet/Screen_calculatrice_immo.png"
import ScreenBienvenueformation from "../../assets/Screen_Projet/Screen_Bienvenue_formation.png"

const BackgroundContainer = styled.div`
    background-color:#34495E;
`
const DivProjet = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    margin: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-5px)scale(1.50);
        box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
        background-color:black;
    }

    &:hover .screen-project{
        opacity: 1; /* Rendre visible au survol */
        transform: scale(1); /* Réinitialiser la transformation */
    }
`

const LinkProject= styled(Link)`
    text-decoration:none;
    color:black;

`


const ImgLogo = styled.div`
    width: 50px;
    height:50px;
    background-image:url(${(props)=>props.src});
    background-size:cover;
    background-position:center;
    border-radius: 8px; /* Facultatif : coins arrondis */
`

const DisplayDivProjet = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    gap:20px;

`

const ScreenProject =styled.div`
    position: absolute; /* Permet de superposer à l'intérieur de DivProjet */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.src});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 8px;
    opacity: 0; /* Caché par défaut */
    transform: scale(0.9); /* Légèrement réduit pour une animation */
    transition: opacity 0.3s ease, transform 0.3s ease;
    pointer-events: none; /* Empêche toute interaction */
`

function Projets(){

    const DataProject=[
        {title:"Integration Maquette Apple",src:LogoApple,screen:ScreenApple,link:"/Apple"},
        {title:"Calculette Immobilière",src:LogoCalculetteImo,screen:ScreenCalcImmo,link:"/Calculette"},
        {title:"Bienvenue Formation",src:LogoBienvenueFormation,screen:ScreenBienvenueformation,link:"/Bienvenue_formation"}
    ];
    const DataPersoProject=[
        {title:"Maison Jungle",src:LogoMaisonJungle},
        {title:"Shiny agency",src:LogoShinyAgency}
    ]

    return(
        <BackgroundContainer>
            {/* <h1>Projets</h1>
            <ul>
                <li>Intégration apple tv</li>
                <li><a href="https://github.com/olisld/projet.git">Apple page</a>
                </li>
                <li>Calculatrice immobilière</li>
                <li><a href="https://github.com/olisld/calculatrice_de_pr-t_immobilier.git">Calculatrice immobilière</a></li>    
                <li>Projet Bienvenue formation</li>
                <li><a href="https://github.com/olisld/Bienvenue_formation.git">Bienvenue formation</a>
                </li>
                <li>Projet Laravel</li>
                <li>Aprentissage de react js en développant un site de vente de plante en react</li>
                <li><a href="https://github.com/olisld/La-maison-jungle.git">La maison jungle</a></li>
                <li>Approfondissement de react js en dévelopant un site de prospect une shiny agency</li>
                <li><a href="https://github.com/olisld/Shiny-agency.git">Shiny agency</a></li>
            </ul>
            <h1>Side Projets</h1>
            <ul>
                <li>Tour de hanoi</li>
                <li><a href="https://github.com/olisld/Tour_de_hanoi.git">Tour de hanoi</a></li>
                <li>petits projet javascript microlead</li>
                <li>Projet gestion d'un menu en fonction des utilisateurs</li>
                <li></li>
                <li></li>
            </ul> */}

            <h1>Projet Ecole</h1>


            <DisplayDivProjet>
                {DataProject.map((item,index)=>(
                    <LinkProject to={item.link} key={index}>
                        <DivProjet >
                            <h3>{item.title}</h3>
                            <ImgLogo src={item.src}/>
                            <ScreenProject className="screen-project" src={item.screen}></ScreenProject>
                        </DivProjet>
                    </LinkProject>
                    
                ))}
            </DisplayDivProjet>
            

            <h1>Projet personnel</h1>
            <p>J'ai en dehors de la formation suivie un cours sur le langage React JS ce qui m'a permis de réaliser les deux sites internet suivant</p>
            <DisplayDivProjet>
                {DataPersoProject.map((item,index)=>(   
                    <DivProjet key={index}>
                        <h3>{item.title}</h3>
                        <ImgLogo src={item.src} alt="LOGO" />
                    </DivProjet>
                ))}

            </DisplayDivProjet>
            <DivProjet>
                <h3>Site de vente de plant en react</h3>
                <ImgLogo src="" alt="LOGO" />
            </DivProjet>

            <DivProjet>
                <h3>Site de recherche de prestataire</h3>
                <ImgLogo src="" alt="LOGO" />
            </DivProjet>


        </BackgroundContainer>
        



    )
}
export default Projets