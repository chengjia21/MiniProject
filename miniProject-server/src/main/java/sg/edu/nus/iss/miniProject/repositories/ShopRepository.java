package sg.edu.nus.iss.miniProject.repositories;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import sg.edu.nus.iss.miniProject.exceptions.ResourceNotFoundException;
import sg.edu.nus.iss.miniProject.model.Wines;

@Repository
public class ShopRepository {
    
    @Autowired
    JdbcTemplate jdbcTemplate;


    private final String findEverythingSQL = "select * from mock_wine_data";


     public List<Wines> findAllWines() {
        List<Wines> winesList = jdbcTemplate.query(findEverythingSQL, BeanPropertyRowMapper.newInstance(Wines.class));

        if (winesList.isEmpty()) {
            // throw custom exception
            throw new ResourceNotFoundException("Wines not found");
        }

        return winesList;


        
    }








}
