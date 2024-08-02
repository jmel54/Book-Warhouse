import React, { useEffect, useState } from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap'

import WarehouseManager from './WareHouseManager'
const MainPage = () => {

  //get initial info of company and 

  // const [childData, setChildData] = useState("");
  // useEffect(() => {
  // fetch(`http://localhost:8080/warehouse/1`)
  //       .then(response => response.json())
  //       .then(data => setChildData(data))
  //       .catch(error => console.error('Error fetching warehouse:', error));
  //      }, []);

  useEffect(() => {
    fetch(`http://localhost:8080/warehouse/1`, {
    method: "GET", // "GET/POST"
    headers: {
        "Content-Type": "application/json"
    },
       //Nothing to put but for POST: "body: JSON.stringify(data)"
    })
    .then(response => response.json())
    .then(r => {
    
    console.log('=====DEBUG======\n=============================================')
    console.log('Response', r); // You will get JSON response here.
    }).catch(error => console.error('Error', error)) //Print error
  }, []);
       
  return (

      <Row>
      <main className="text-center my-4">

        <Row className="justify-content-center my-3">

          <Col>
            <WarehouseManager/>
          </Col>

        </Row>
      </main> 
      </Row>
  );
};

export default MainPage;
