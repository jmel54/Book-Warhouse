package com.example.warehouse.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.warehouse.models.Warehouse;
import com.example.warehouse.repositories.WarehouseRepository;

@Service
public class WarehouseService {

    private WarehouseRepository warehouseRepository;
    
    public WarehouseService(WarehouseRepository warehouseRepository) {
        this.warehouseRepository = warehouseRepository;

    }

    public List<Warehouse> getAllWarehouses() {
        return warehouseRepository.findAll();
    }


    public Warehouse createWarehouse(Warehouse warehouse) {
        return warehouseRepository.save(warehouse);
    }

    public Warehouse getWarehouseById(Long id) {
        return warehouseRepository.findById(id).orElse(null);
    }

    public Warehouse updateWarehouse(Long id, Warehouse warehouseDetails) {
        Warehouse warehouse = warehouseRepository.findById(id).orElse(null);
        if (warehouse != null) {
            warehouse.setName(warehouseDetails.getName());
            warehouse.setLocation(warehouseDetails.getLocation());
            warehouse.setCapacity(warehouseDetails.getCapacity());
            warehouse.setManager(warehouseDetails.getManager());
            return warehouseRepository.save(warehouse);
        }
        return null;
    }

    public void deleteWarehouse(Long id) {
        warehouseRepository.deleteById(id);
    }
}
