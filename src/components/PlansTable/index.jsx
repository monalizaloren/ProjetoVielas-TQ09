import { useState } from "react";
import PlansTableContainer from "./PlansTableContainer";

const PlansTable = () => {
  const [hoverToggle, setHoverToggle] = useState(null);

  const handleMouseEnter = (colClas) => {
    setHoverToggle(colClas);
  };

  const handleMouseLeave = () => {
    setHoverToggle(null);
  };

  return (
    <PlansTableContainer>
      <thead>
        <tr>
          <th
            className={`col-01 ${hoverToggle === "col-01" ? "hover" : ""}`}
            onMouseEnter={() => handleMouseEnter("col-01")}
            onMouseLeave={handleMouseLeave}
          >
            PARA COMEÇAR
          </th>
          <th
            className={`col-02 ${hoverToggle === "col-02" ? "hover" : ""}`}
            onMouseEnter={() => handleMouseEnter("col-02")}
            onMouseLeave={handleMouseLeave}
          >
            10 FOTOS <p className="small-period">POR MÊS</p>
          </th>
          <th
            className={`col-03 ${hoverToggle === "col-03" ? "hover" : ""}`}
            onMouseEnter={() => handleMouseEnter("col-03")}
            onMouseLeave={handleMouseLeave}
          >
            30 FOTOS <p className="small-period">POR MÊS</p>
          </th>
          <th
            className={`col-04 ${hoverToggle === "col-04" ? "hover" : ""}`}
            onMouseEnter={() => handleMouseEnter("col-04")}
            onMouseLeave={handleMouseLeave}
          >
            DOWLOAD ILIMITADO
          </th>
        </tr>
        <tr>
          <th
            className={`col-01 ${hoverToggle === "col-01" ? "hover" : ""}`}
            onMouseEnter={() => handleMouseEnter("col-01")}
            onMouseLeave={handleMouseLeave}
          >
            GRATUITO
          </th>
          <th
            className={`col-02 ${hoverToggle === "col-02" ? "hover" : ""}`}
            onMouseEnter={() => handleMouseEnter("col-02")}
            onMouseLeave={handleMouseLeave}
          >
            R$ 50
          </th>
          <th
            className={`col-03 ${hoverToggle === "col-03" ? "hover" : ""}`}
            onMouseEnter={() => handleMouseEnter("col-03")}
            onMouseLeave={handleMouseLeave}
          >
            R$ 99
          </th>
          <th
            className={`col-04 ${hoverToggle === "col-04" ? "hover" : ""}`}
            onMouseEnter={() => handleMouseEnter("col-04")}
            onMouseLeave={handleMouseLeave}
          >
            [FALE COM NOSSA EQUIPE]
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td
            className={`col-01 ${hoverToggle === "col-01" ? "hover" : ""}`}
            onMouseEnter={() => handleMouseEnter("col-01")}
            onMouseLeave={handleMouseLeave}
          >
            <p>
              Todos os meses, disponibilizamos uma coleção de fotos gratuitas;
            </p>
          </td>
          <td
            className={`col-02 ${hoverToggle === "col-02" ? "hover" : ""}`}
            onMouseEnter={() => handleMouseEnter("col-02")}
            onMouseLeave={handleMouseLeave}
            rowSpan="3"
          >
            <p>
              Cadastro rápido; <br />
              10 fotos disponíveis para download por 30 dias.
            </p>
          </td>
          <td
            className={`col-03 ${hoverToggle === "col-03" ? "hover" : ""}`}
            onMouseEnter={() => handleMouseEnter("col-03")}
            onMouseLeave={handleMouseLeave}
            rowSpan="3"
          >
            <p>
              Cadastro rápido; <br />
              30 fotos disponíveis para download por 30 dias.
            </p>
          </td>
          <td
            className={`col-04 ${hoverToggle === "col-04" ? "hover" : ""}`}
            onMouseEnter={() => handleMouseEnter("col-04")}
            onMouseLeave={handleMouseLeave}
            rowSpan="3"
          >
            <p>Dowload instantâneo ilimitado de fotos para sua equipe.</p>
          </td>
        </tr>
        <tr>
          <td
            className={`col-01 ${hoverToggle === "col-01" ? "hover" : ""}`}
            onMouseEnter={() => handleMouseEnter("col-01")}
            onMouseLeave={handleMouseLeave}
          >
            <p>
              Disponível para veículos hiperlocais e em fins lucrativos,
              estudantes e professores;
            </p>
          </td>
        </tr>
        <tr>
          <td
            className={`col-01 ${hoverToggle === "col-01" ? "hover" : ""}`}
            onMouseEnter={() => handleMouseEnter("col-01")}
            onMouseLeave={handleMouseLeave}
          >
            <p>Mediante a solicitação e aprovação de cadastro.</p>
          </td>
        </tr>
      </tbody>
    </PlansTableContainer>
  );
};

export default PlansTable;
