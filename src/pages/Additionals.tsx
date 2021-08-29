// import { useHistory } from 'react-router-dom'
// import { Button } from "../components/Button";

import { Button } from "../components/Button";
import { Title } from "../components/Title";

// import "../styles/sabores.scss";

export function Additionals() {
  //   const history = useHistory();

  //   function personalize(){
  //     history.push("./personalize");
  //   }

  return (
    <div id="sabores">
      <main>
        <div className="title">
          <Title text="Personalize seu açai:" />
        </div>

        <div className="sabores">
          <h3>PERSONALIZAÇÃO:</h3>
          <div className="sabores_opcoes">
            <input
              type="radio"
              id="radioGranola"
              name="Adicional"
              value="granola"
            />
            <label htmlFor="radioGranola">Granola</label>

            <input 
              type="radio" 
              id="radioPacoca" 
              name="Adicional" 
              value="pacoca" 
            />
            <label htmlFor="radioPacoca">Paçoca</label>

            <input
              type="radio"
              id="radioLeiteNinho"
              name="Adicional"
              value="leiteninho"
            />
            <label htmlFor="radioLeiteNinho">Leite ninho</label>
          </div>
        </div>

        <div className="btn">
          <Button type="submit" value="avancar">
            Avançar
          </Button>
        </div>
      </main>
    </div>
  );
}
