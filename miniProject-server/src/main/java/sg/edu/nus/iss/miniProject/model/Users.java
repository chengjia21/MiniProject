package sg.edu.nus.iss.miniProject.model;

import java.sql.Date;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class Users {
    // @JsonIgnore
    private Integer user_id;

    private String username;

    private String password;

    private String first_name;

    private String last_name;

    private String email;

    private Integer phone_no;

    private String address_id;

    private Date created_at;

}
