import React, { useEffect, useState } from 'react';
import BookTable from './BookTable'; 

//parent function to hold multiple warehouses

const WarehouseManager = () => {
    const [selectedWarehouseId, setSelectedWarehouseId] = useState(null);
    const [warehouse, setWarehouse] = useState([]);

    useEffect(() => {
        //grab list of current warehouses at every mount
        fetch('http://localhost:8080/warehouse')  // Replace with your API endpoint
            .then(response => response.json())
            .then(data => setWarehouse(data))
            .catch(error => console.error('Error fetching books:', error));
    }, []);

    const handleWarehouseChange = (event) => {
        const warehouseId = event.target.value;
        console.log('Selected warehouse ID:', warehouseId); // Debugging
        setSelectedWarehouseId(warehouseId);
    };

    return (
        <div>
            <h1>Warehouse Manager</h1>
            <label>
                Select Warehouse:
                <select onChange={handleWarehouseChange}>
                    <option value="">Select a warehouse</option>
                    {warehouse.map(warehouse => (
                        <option key={warehouse.id}>{warehouse.id}</option>
                    ))}

                    {/* <option value="1">Warehouse 1</option>
                    <option value="2">Warehouse 2</option> */}

                </select>
            </label>
            {selectedWarehouseId && <BookTable warehouseId={selectedWarehouseId} />}
        </div>
    );
};

export default WarehouseManager;