const BoutonAppelArchibald = ({ quandSorcierRepond }) => {
    return (
      <button className="btn btn-primary" onClick={() => quandSorcierRepond("🧙‍♂️ Archibald : J'arrive, j'arrive Aventurier !") }>
      🛎️ Appeler Archibald
      </button>
    );
};

export default function Exercice2() {
    return (
      <section id="exercice2">
        <h2>Si je ne suis pas là, faites sonner la cloche !</h2>
        <BoutonAppelArchibald quandSorcierRepond={window.alert} />
      </section>
    );
}




