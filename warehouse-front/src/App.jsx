import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WarehouseManager from './components/WareHouseManager'
import { Container, Row, Col, ProgressBar } from 'react-bootstrap'


import MainPage from './components/MainPage'

function App() {

  return (
    <Container>
      {/** Header */}
      <Row className="d-flex justify-content-between align-items-center py-3">
      <header>
          <h1>Phoenix Publishings</h1>
          <h3>Phoenix, AZ</h3>
      </header>
      </Row>

      {/**Warehouse main content */}
      <Row>
        <main className="text-center my-4">
          <Row className="justify-content-center my-3">
            <Col>
              <h1>Warehouse Manager</h1>
              <hr/>
              <WarehouseManager/>
            </Col>
            {/** Let's think about this:
             * We have a singular modal that will change for each option: Add or edit/delete a book
             * 
             * Option A: We can either have it nested in warehousemanager, have a usestate that gives 
             * warehouseid for the post OR
             * 
             * Option B: We have a component higher up in App.jsx. In this instance we would then have a global fetch that
             * would pass props to child components and then use a callback func to update the fetch:
             * Issue: we rely on the warehouse table telling us which table we are focused on... 
             * Better to go with option A.
             */}
          </Row>
        </main> 
      </Row>

    </Container>    

  )
}

export default App

{/**Reference for fetch:
  fetch(URL, {
    method: "POST", // "GET/POST"
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
})
.then(r => r.json())
.then(r => {
   console.log('Response', r) // You will get JSON response here.
}).catch(error => console.error('Error', error))
  */}