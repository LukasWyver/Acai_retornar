
import { useHistory } from 'react-router-dom'

import { Button } from "../components/Button";
import { Title } from '../components/Title'

import "../styles/sabores.scss";

export function Home() {
  const history = useHistory();

  function personalize(){
    history.push("./personalize");
  }

  return (
    <div id="sabores">
      <main>
        <div className="title">
          <Title text="Escolha seu açai:" />
        </div>

        <div className="sabores">
          <h3>SABOR:</h3>
          <div className="sabores_opcoes">
            <input
              type="radio"
              id="radioMorango"
              name="radioSabores"
              value="morango"
            />
            <label htmlFor="radioMorango">Morango</label>

            <input
              type="radio"
              id="radioBanana"
              name="radioSabores"
              value="banana"
            />
            <label htmlFor="radioBanana">Banana</label>

            <input 
              type="radio" 
              id="radioKiwi" 
              name="radioSabores" 
              value="kiwi" 
            />
            <label htmlFor="radioKiwi">Kiwi</label>
          </div>
        </div>

        <div className="tamanho">
          <h3>TAMANHO:</h3>
          <div className="tamanho_opcoes">
            <input
              type="radio"
              id="radioPequeno"
              name="radioTamanho"
              value="pequeno"
            />
            <label htmlFor="radioPequeno">Pequeno (300 ml)</label>

            <input 
              type="radio" 
              id="radioMedio" 
              name="radioTamanho" 
              value="medio" 
            />
            <label htmlFor="radioMedio">Médio (500 ml)</label>

            <input
              type="radio"
              id="radioGrande"
              name="radioTamanho"
              value="grande"
            />
            <label htmlFor="radioGrande">Grande (700 ml)</label>
          </div>
        </div>

        <div className="btn">
          <Button onClick={personalize} type="submit" value="avancar">
            Avançar
          </Button>
        </div>
      </main>
    </div>
  );
}
