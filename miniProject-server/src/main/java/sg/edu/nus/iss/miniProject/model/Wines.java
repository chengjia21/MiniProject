package sg.edu.nus.iss.miniProject.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Wines {

private Integer wine_id;
private String wine_name;
private String country;
private String region;
private String winery;
private String wine_description;
private String winegrape_variety;
private Integer bottled_year;
private Double price;
private Double rating;
private String food_pairing;
private String serving_temperature;
private String tasting_notes;
private String wine_color;
private String body;
private String acidity;
private String tannins;
private String finish;
private String oakiness;
private String sweetness;

}
