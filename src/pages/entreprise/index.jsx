import styled from "styled-components"

const StyledFullPages = styled.div`

    width:100%;
    height:100%;
    display:flex;
    justify-content:center;

`


function Entreprise(){
    return(
        <StyledFullPages>
            <h1>Entreprise</h1>
            <div>
                <h2>Veolia</h2>
                <img src="" alt="STEP" />
                <h3>description entreprise</h3>
                <ul>
                    <li>La STEP de la baumette angers appartient à ALM(angers Loire Metropole)et exploité par Veolia eau </li>
                    <li>ALM est donc le client de Veolia</li>
                    <li>Ma mission principale au coeur de la station était d'étoffer le logiciel de GMAO (gestion de la maintenance assisté par ordinateur) qui avait été abandonné depuis 5 ans</li>
                    <li>Les tâches que je réalisais allait de l'import des renouvellements réalisé ces 5 dernières années à la mise en place de préventif avec une fréquence d'apparition permettant une organisation plus automatisé pour les agents de terrain de la station  </li>
                    <li>Lors de la deuxième année d'alternance j'avais complètement pris en main le logiciel et ai donc discuté avec mon tuteur de mission différente que je pouvais réalisée. DE la es tvenue l'idée de faire un site web permettant à la station d'exister de manière digital</li>
                </ul>
            </div>

        </StyledFullPages>
    )
}
export default Entreprise