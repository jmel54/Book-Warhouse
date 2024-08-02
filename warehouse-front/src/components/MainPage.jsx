import React, { useEffect, useState } from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap'

import WarehouseManager from './WareHouseManager'
const MainPage = () => {

  //get initial info of company and 
  const [id, setid] = useState('1');

  const [childData, setChildData] = useState("");
  useEffect(() => {
  fetch(`http://localhost:8080/warehouse/1`)
        .then(response => response.json())
        .then(data => setChildData(data))
        .catch(error => console.error('Error fetching warehouse:', error));
       }, []);

  return (
    <Container>
      <Row className="d-flex justify-content-between align-items-center py-3">

      
      <header>
        <div>
          <h2>Phoenix Publishings</h2>
          <p>Phoenix, AZ</p>
        </div>
      </header>
      </Row>
      <Row>
      <main className="text-center my-4">

        <Row className="justify-content-center my-3">

          <Col>
            <WarehouseManager/>
          </Col>

        </Row>

      </main>

      
      </Row>
    </Container>
  );
};

export default MainPage;
