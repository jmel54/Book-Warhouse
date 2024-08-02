package com.example.warehouse.controllers;

import org.springframework.web.bind.annotation.*;

import com.example.warehouse.models.Book;
import com.example.warehouse.models.Warehouse;
import com.example.warehouse.services.WarehouseService;


import java.util.List;

@RestController
@RequestMapping("/warehouse")
public class WarehouseController {


    private WarehouseService warehouseService;

    public WarehouseController(WarehouseService warehouseService){
        this.warehouseService =  warehouseService;
    }

    @GetMapping
    public List<Warehouse> getAllWarehouses() {
        return warehouseService.getAllWarehouses();
    }

    @PostMapping
    public Warehouse createWarehouse(@RequestBody Warehouse warehouse) {
        return warehouseService.createWarehouse(warehouse);
    }

    @GetMapping("/{id}")
    public Warehouse getWarehouseById(@PathVariable Integer id) {
        return warehouseService.getWarehouseById(id);
    }

    //get total books and check on frontend
    @GetMapping("/{id}/totalBooks")
    public int getTotalBookQuantityInWarehouse(@PathVariable Integer id) {
        return warehouseService.getTotalBookQuantityInWarehouse(id);
    }

    
    @GetMapping("/{id}/books")
    public List<Book> getBooksByWarehouseId(@PathVariable Integer id) {
        return warehouseService.getBooksByWarehouseId(id);
    }

    @PutMapping("/{id}")
    public Warehouse updateWarehouse(@PathVariable Integer id, @RequestBody Warehouse warehouseDetails) {

        return warehouseService.updateWarehouse(id, warehouseDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteWarehouse(@PathVariable Integer id) {
        warehouseService.deleteWarehouse(id);
    }
}