import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import getInfoWeather from "../helpers/getInfoWeather";

const initialstateJSON = [];

const CardInfo = ({ api }) => {
  const [JSON, setJSON] = useState(initialstateJSON);

  useEffect(() => {
    traerAPI();
  }, [api]);

  const traerAPI = () => {
    getInfoWeather(api.localidad, api.pais, api.token)
      .then((data) => setJSON(data))
      .catch((error) => console.error(error));
  };

  return (
    <>
      {JSON ? (
        JSON.map((dato) => {
          const url = `http://openweathermap.org/img/wn/${dato.icon}@2x.png`;
          return (
            <Card key={dato.id}>
              <Card.Body>
                <Card.Text>Estado: {dato.main}</Card.Text>
                <img src={url} />
              </Card.Body>
            </Card>
          );
        })
      ) : (
        <div>
          <h2>No se encuentran datos.</h2>
        </div>
      )}
    </>
  );
};

export default CardInfo;
