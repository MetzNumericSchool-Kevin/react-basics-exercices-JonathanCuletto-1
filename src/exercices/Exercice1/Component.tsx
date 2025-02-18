const BienvenueAventurier = ({ titre, texte }) => {
    return (
      <div>
        <h1>{titre}</h1>
        <p>{texte}</p>
      </div>
    );
  };
  
  export default function Exercice1() {
    return (
      <BienvenueAventurier
        titre="Boutique d'Archibald le Sorcier 🧙‍♂️"
        texte="Bienvenue Aventurier, ici vous pouvez acheter diverses potions pour vos aventures !"
      />
    );
  }
  