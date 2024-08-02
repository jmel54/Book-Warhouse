import React, { useEffect, useState } from 'react';
import BookTable from './BookTable'; 
import AddBookModal from './BookModal'

const WarehouseManager = () => {
    const [selectedWarehouseId, setSelectedWarehouseId] = useState(null);
    const [warehouses, setWarehouses] = useState([]);

    const [showModal, setShowModal] = useState(false);
  

    //modal states
      const handleShow = () => setShowModal(true);
      const handleClose = () => setShowModal(false);

    useEffect(() => {
        // Fetch list of all warehouses
        fetch('http://localhost:8080/warehouse')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => setWarehouses(data))
            .catch(error => console.error('Error fetching warehouses:', error));
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
            <h1>Warehouse Manager</h1>
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
            {selectedWarehouseId && <BookTable warehouseId={selectedWarehouseId} 
                                    warehousename={selectedWarehouse.name} />}
        </div>
        <div>
        <br/>
        <button className="btn btn-success" onClick={handleShow}>Add</button>
        <AddBookModal show={showModal} handleClose={handleClose} />
        </div>
        </>
    );
};

export default WarehouseManager;
