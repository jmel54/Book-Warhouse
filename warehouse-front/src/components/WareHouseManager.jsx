import React, { useEffect, useState } from 'react';
import BookTable from './BookTable'; 
import AddBookModal from './AddBookModal'

const WarehouseManager = () => {
    const [selectedWarehouseId, setSelectedWarehouseId] = useState(null);
    const [warehouses, setWarehouses] = useState([]);

    const [showModal, setShowModal] = useState(false);
  

    //modal states
      const handleShow = () => setShowModal(true);
      const handleClose = () => setShowModal(false);

    useEffect(() => {
        // Fetch list of all warehouses
        fetch('http://localhost:8080/warehouse', {
            method: "GET", // "GET/POST"
            headers: {
                "Content-Type": "application/json"
            },
               //Nothing to put but for POST: "body: JSON.stringify(data)"
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(response => {
                console.log('=====DEBUG======\n=============================================')
                console.log('Response', response); // You will get JSON response here.
                setWarehouses(response)
            }).catch(error => console.error('Error fetching warehouses:', error))
    }, []);

    // const getWarehouseByID = (id) => {warehouses.find((warehouse) => warehouse.id ==id);};
    // const warehouse = getWarehouseByID(warehouseId);

    const getWarehouseByID = (id) => {
        return warehouses.find((warehouse) => warehouse.id === parseInt(id));
    };

    const handleWarehouseChange = (event) => {
        const warehouseId = event.target.value;
        console.log('Selected warehouse ID:', warehouseId); // Debugging
        console.log(typeof(warehouseId));
        setSelectedWarehouseId(warehouseId);
    };
    const selectedWarehouse = getWarehouseByID(selectedWarehouseId);

    


    return (
        <>
        <div>
            {/**Generate options list from warehouse model using id as key  */}
            <label>
                Select Warehouse:<br/>
                <select onChange={handleWarehouseChange}>
                    <option></option>
                    {warehouses.map(warehouse => (
                        <option key={warehouse.id} value={warehouse.id}>
                            {warehouse.name}
                        </option>
                    ))}
                </select>
            </label>
            {/**conditional rendering because the first option is blank(which would cause problems!)  */}
            {selectedWarehouseId && <BookTable warehouseId={selectedWarehouseId} 
                                    warehousename={selectedWarehouse.name} />}
        </div>
        <div>

            <br/>
            <button className="btn btn-success" onClick={handleShow}>Add</button>
            <AddBookModal show={showModal} handleClose={handleClose} warehouseId = {selectedWarehouseId} />
        </div>
        </>
    );
};

export default WarehouseManager;
