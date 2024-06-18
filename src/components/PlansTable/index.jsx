import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PlansTableContainer from "./PlansTableContainer";

const PlansTable = () => {
  const navigate = useNavigate();

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
            onClick={() => navigate("/payment-gateway/01")}
          >
            PARA COMEÇAR
          </th>
          <th
            className={`col-02 ${hoverToggle === "col-02" ? "hover" : ""}`}
            onMouseEnter={() => handleMouseEnter("col-02")}
            onMouseLeave={handleMouseLeave}
            onClick={() => navigate("/payment-gateway/02")}
          >
            10 FOTOS <p className="small-period">POR MÊS</p>
          </th>
          <th
            className={`col-03 ${hoverToggle === "col-03" ? "hover" : ""}`}
            onMouseEnter={() => handleMouseEnter("col-03")}
            onMouseLeave={handleMouseLeave}
            onClick={() => navigate("/payment-gateway/03")}
          >
            30 FOTOS <p className="small-period">POR MÊS</p>
          </th>
          <th
            className={`col-04 ${hoverToggle === "col-04" ? "hover" : ""}`}
            onMouseEnter={() => handleMouseEnter("col-04")}
            onMouseLeave={handleMouseLeave}
            onClick={() => navigate("/payment-gateway/04")}
          >
            DOWLOAD ILIMITADO
          </th>
        </tr>
        <tr>
          <th
            className={`col-01 ${hoverToggle === "col-01" ? "hover" : ""}`}
            onMouseEnter={() => handleMouseEnter("col-01")}
            onMouseLeave={handleMouseLeave}
            onClick={() => navigate("/payment-gateway/01")}
          >
            GRATUITO
          </th>
          <th
            className={`col-02 ${hoverToggle === "col-02" ? "hover" : ""}`}
            onMouseEnter={() => handleMouseEnter("col-02")}
            onMouseLeave={handleMouseLeave}
            onClick={() => navigate("/payment-gateway/02")}
          >
            R$ 50
          </th>
          <th
            className={`col-03 ${hoverToggle === "col-03" ? "hover" : ""}`}
            onMouseEnter={() => handleMouseEnter("col-03")}
            onMouseLeave={handleMouseLeave}
            onClick={() => navigate("/payment-gateway/03")}
          >
            R$ 99
          </th>
          <th
            className={`col-04 ${hoverToggle === "col-04" ? "hover" : ""}`}
            onMouseEnter={() => handleMouseEnter("col-04")}
            onMouseLeave={handleMouseLeave}
            onClick={() => navigate("/payment-gateway/04")}
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
            onClick={() => navigate("/payment-gateway/01")}
          >
            <p>
              Todos os meses, disponibilizamos uma coleção de fotos gratuitas;
            </p>
          </td>
          <td
            className={`col-02 ${hoverToggle === "col-02" ? "hover" : ""}`}
            onMouseEnter={() => handleMouseEnter("col-02")}
            onMouseLeave={handleMouseLeave}
            onClick={() => navigate("/payment-gateway/02")}
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
            onClick={() => navigate("/payment-gateway/03")}
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
            onClick={() => navigate("/payment-gateway/04")}
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
            onClick={() => navigate("/payment-gateway/01")}
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
            onClick={() => navigate("/payment-gateway/01")}
          >
            <p>Mediante a solicitação e aprovação de cadastro.</p>
          </td>
        </tr>
      </tbody>
    </PlansTableContainer>
  );
};

export default PlansTable;
