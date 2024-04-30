import { useState } from "react";
import ProgressBarForm from "./progress";

export default function Consideration() {
  const [contributionType, setContributionType] = useState<string | null>(null);


  const handleContributionTypeChange = (value: string) => {
    setContributionType(value);
  };


  return (
    <>
      <form action="" className="formUserData">
        <h2 className="formUserData__title">Propuesta</h2>
        <ProgressBarForm porcentage={60}/>
        <div className="proposal-space">
          <div className="proposal-space-inline">
            <div>
              <label htmlFor="">Valor total del evento: </label>
              <input
                type="text"
                className="inputForm"
                placeholder=" Valor total del evento"
              />
            </div>
            <div>
              <label htmlFor="">Tipo de contribución: </label>
              <select
                className="inputForm"
                onChange={(e) => handleContributionTypeChange(e.target.value)}
              >
                <option value="" disabled selected>
                  Seleccionar...
                </option>
                <option value="especie">Especie</option>
                <option value="monetario">Monetario</option>
                <option value="ambos">Ambos</option>
              </select>
            </div>
            {(contributionType === "especie" || contributionType === "ambos") && (
              <div>
                <label htmlFor="">Aporte en especie: </label>
                <input
                  type="text"
                  className="inputForm"
                  placeholder=" Aporte en especie"
                />
              </div>
            )}
            {(contributionType === "monetario" || contributionType === "ambos") && (
              <div>
                <label htmlFor="">Aporte monetario: </label>
                <input
                  type="text"
                  className="inputForm"
                  placeholder=" Aporte monetario"
                />
              </div>
            )}
            <div>
              <label htmlFor="">Porcentaje: </label>
              <input
                type="text"
                className="inputForm"
                placeholder=" %"
              />
            </div>
          </div>
          <div>
            <label htmlFor="">ContraPrestaciones:</label>
            <p className="information-text">Indique lo que va a cubrir el aporte de Comfama y qué contraprestaciones tendrá Comfama en caso de vincularse a la propuesta</p>
            <textarea
              className="proposal-textarea"
              name=""
              id=""
              cols={30}
              rows={5}
            ></textarea>
          </div>
        </div>
        <div className="button__position">
          <input type="submit" className="sendButton" value={"Siguiente"} />
        </div>
      </form>
    </>
  );
}
