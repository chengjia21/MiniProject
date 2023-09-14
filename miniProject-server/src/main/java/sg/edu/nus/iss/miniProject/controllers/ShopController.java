package sg.edu.nus.iss.miniProject.controllers;

import java.io.IOException;
import java.util.List;

// import org.jcp.xml.dsig.internal.dom.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import jakarta.json.Json;
import jakarta.json.JsonObject;
import jakarta.json.JsonObjectBuilder;
import sg.edu.nus.iss.miniProject.model.Users;
import sg.edu.nus.iss.miniProject.model.Wines;
import sg.edu.nus.iss.miniProject.services.ShopService;

@Controller
@RequestMapping(path = "/api")

@CrossOrigin(origins = "https://www.heavenlygrovewinery.com/")

public class ShopController {

    @Autowired
    ShopService shopSvc;


    // @PostMapping(path = "/login")
    // @ResponseBody
    // public ResponseEntity<String> postLoginDetails(@RequestBody User user) {
    // // RequestBody of type User, in User model

    // System.out.println(user);
    // // return ResponseEntity.ok().build.toString();

    // return ResponseEntity.ok(user.toString());

    // // Only if string type, etc then need maually serialize into JSON, if Model
    // no
    // // need
    // }

    // @PostMapping("/comment")
    // public

    //

    @GetMapping(path = "/allproducts")
    public ResponseEntity<List<Wines>> getAllWines() {

        List<Wines> allWinesList = shopSvc.getAllWines();

        // model.addAttribute("types", types);
        // return ResponseEntity.ok().body(allWinesList);

        return ResponseEntity.ok()
                .header("getAllWinesHeader", "AllWinesHeaderValue")
                .body(allWinesList);
        // return
    }

    @GetMapping(path = "/allusers")
    public ResponseEntity<List<Users>> getAllUsers() {

        List<Users> allUsersList = shopSvc.getAllUsers();

        // model.addAttribute("types", types);
        // return ResponseEntity.ok().body(allWinesList);

        return ResponseEntity.ok()
                .header("getAllUsersHeader", "AllUsersHeaderValue")
                .body(allUsersList);
        // return
    }

    // @GetMapping(path = "/allproducts")
    // public List<Wines> getAllWines2() {

    // List<Wines> allWinesList = shopSvc.getAllWines();

    // return allWinesList;
    // // model.addAttribute("types", types);

    // // return ResponseEntity.ok().header("fefe").body(allWinesList);
    // // return
    // }

}
