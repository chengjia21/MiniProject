package sg.edu.nus.iss.miniProject.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sg.edu.nus.iss.miniProject.model.Users;
import sg.edu.nus.iss.miniProject.model.Wines;
import sg.edu.nus.iss.miniProject.repositories.ShopRepository;

@Service
public class ShopService {
    
@Autowired ShopRepository shopRepo;


    public List<Wines> getAllWines() {
		List<Wines> wineList = shopRepo.findAllWines();
		return wineList;
	}



   public List<Users> getAllUsers() {
		List<Users> usersList = shopRepo.getAllUsers();
		return usersList;
	}





}
