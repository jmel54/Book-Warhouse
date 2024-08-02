import React, { useEffect, useState } from 'react';

const WarehouseDetails = ({ warehouseId }) => {
    const [warehouse, setWarehouse] = useState(null);
    const [totalBooks, setTotalBooks] = useState(0);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (warehouseId) {
            // Fetch warehouse details
            fetch(`http://localhost:8080/warehouse/${warehouseId}`)
                .then(response => response.json())
                .then(data => setWarehouse(data))
                .catch(error => {
                    console.error('Error fetching warehouse:', error);
                    setError(error);
                });

            // Fetch total book quantity
            fetch(`http://localhost:8080/warehouse/${warehouseId}/totalBooks`)
                .then(response => response.json())
                .then(data => setTotalBooks(data))
                .catch(error => {
                    console.error('Error fetching total books:', error);
                    setError(error);
                });
        }
    }, [warehouseId]);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!warehouse) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Warehouse: {warehouse.name}</h2>
            <p>Location: {warehouse.location}</p>
            <p>Capacity: {warehouse.capacity}</p>
            <p>Total Books: {totalBooks}</p>
        </div>
    );
};

export default CapacityStatus;
