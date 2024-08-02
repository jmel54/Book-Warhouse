package com.example.warehouse.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.warehouse.models.Book;
import com.example.warehouse.models.Warehouse;
import com.example.warehouse.repositories.BookRepository;
import com.example.warehouse.repositories.WarehouseRepository;

@Service
public class WarehouseService {

    @Autowired
    private WarehouseRepository warehouseRepository;
    

    @Autowired
    private BookRepository bookRepository;

    public List<Warehouse> getAllWarehouses() {
        return warehouseRepository.findAll();
    }

        public List<Book> getBooksByWarehouseId(Integer warehouseId) {
        return bookRepository.findByWarehouseId(warehouseId);
    }

    public Warehouse createWarehouse(Warehouse warehouse) {
        return warehouseRepository.save(warehouse);
    }

    public Warehouse getWarehouseById(Integer id) {
        return warehouseRepository.findById(id).orElse(null);
    }

    public Warehouse updateWarehouse(Integer id, Warehouse warehouseDetails) {
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

    public void deleteWarehouse(Integer id) {
        warehouseRepository.deleteById(id);
    }
}
