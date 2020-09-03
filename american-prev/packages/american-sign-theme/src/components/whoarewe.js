import React from "react";
import { styled } from "frontity";
// import Building from "../assets/images/about/03.jpg";

const WhoAreWe = () => (
  <Container>
    <div>
      <img src={Building} alt="" />
    </div>
    <div>
      <div>
        <h2>¿quiénes somos?</h2>
        <p>
          americansign se fundó en 1993, desde el inicio, nuestra empresa ha
          evolucionado cada día ofreciéndole innovaciones tecnológicas y
          verdaderas soluciones gráficas.
          <br />
          En 1996 fuimos los primers en utlizar la impresión digital en el
          Sureste de México, impulsando fuertemente la era moderna de la
          publicidad exterior.
          <br />
          Somos reconocidos en la industria como la empresa más estable y con el
          equipo tecnológico más actualizad en el mercado.
        </p>
      </div>
    </div>
  </Container>
);

export default WhoAreWe;

const Container = styled.div`
  display: flex;
  flex: 1;
  background-color: #ebeded;
  & > div:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: center;
    & > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0 170px;
      & > h2 {
        font-size: 35px;
        text-transform: uppercase;
      }
    }
  }
`;
