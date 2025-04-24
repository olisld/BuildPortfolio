import styled from "styled-components";

const ContentWrapper = styled.div`
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #34495e;

    h4 {
        font-size: 1.2rem;
        color: #2c3e50;
        margin-bottom: 10px;
    }

    ul {
        margin: 0;
        padding: 0 0 0 20px;
        list-style-type: disc;
        
        li {
            margin: 6px 0;
            font-size: 1rem;

            span {
                font-weight: bold;
            }

            ul {
                padding-left: 20px;
                list-style-type: circle;

                li {
                    margin: 4px 0;
                }
            }
        }
    }

    p {
        margin: 10px 0;
    }
`;

// Partie 1 : Fonctionnalités principales
const FonctionnalitesPrincipales = (
  <ContentWrapper>
    <h4>Fonctionnalités principales</h4>
    <ul>
      <li>
        <span>Calcul des mensualités :</span> Le montant emprunté, le taux nominal annuel et la durée de remboursement sont utilisés pour calculer les échéances mensuelles.
      </li>
      <li>
        <span>Affichage d’un tableau d’amortissement :</span> Chaque ligne du tableau détaille : le mois, le montant initial, les intérêts, l’amortissement, l’échéance mensuelle et le solde restant.
      </li>
      <li>
        <span>Gestion des erreurs :</span>
        <ul>
          <li>Des validations sont effectuées sur les champs du formulaire pour s'assurer que les données saisies sont valides.</li>
          <li>Des messages d’erreur spécifiques sont affichés pour guider l’utilisateur en cas de saisie incorrecte.</li>
        </ul>
      </li>
      <li>
        <span>Exportation PDF :</span> Le tableau d’amortissement peut être téléchargé au format PDF.
      </li>
    </ul>
  </ContentWrapper>
);

// Partie 2 : Instructions d'utilisation
const InstructionsUtilisation = (
  <ContentWrapper>
    <h4>Instructions d'utilisation</h4>
    <ul>
      <li>
        <span>Remplir le formulaire :</span>
        <ul>
          <li>Montant emprunté : Entrez un montant entre 1 000 € et 1 000 000 €.</li>
          <li>Taux nominal annuel : Entrez un taux entre 0 % et 30 %.</li>
          <li>Durée de remboursement : Entrez une durée entre 1 et 30 ans.</li>
        </ul>
      </li>
      <li>
        <span>Soumettre le formulaire :</span>
        <ul>
          <li>Cliquez sur le bouton « Calculer » pour générer le tableau d’amortissement.</li>
          <li>En cas d’erreur, des messages s’afficheront sous les champs concernés.</li>
        </ul>
      </li>
      <li>
        <span>Télécharger le tableau :</span> Une fois le tableau généré, cliquez sur le bouton « Télécharger en PDF » pour enregistrer le tableau sur votre appareil.
      </li>
    </ul>
  </ContentWrapper>
);

// Partie 3 : Tu peux ajouter une autre partie ici, par exemple pour une FAQ
const FAQSection = (
  <ContentWrapper>
    <h4>FAQ</h4>
    <ul>
      <li>Q: Comment calculer les mensualités ?</li>
      <li>R: Vous entrez le montant emprunté, le taux et la durée de remboursement dans le formulaire, et cliquez sur "Calculer".</li>
    </ul>
  </ContentWrapper>
);

export { FonctionnalitesPrincipales, InstructionsUtilisation, FAQSection };
