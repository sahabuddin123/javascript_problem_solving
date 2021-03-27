function calculate_age(argument) {
    // body... 
    var user_name = document.getElementById("name_id").value;
    var date_of_birth = new Date(document.getElementById("date_of_birth_id").value);
    var date_of_calculation = new Date(document.getElementById("date_of_calculation_id").value);

    var brthDay = date_of_birth.getDate();
    var brthMonth = date_of_birth.getMonth()+1;
    var brthYear = date_of_birth.getFullYear();

    var targetDay = date_of_calculation.getDate();
    var targetMonth = date_of_calculation.getMonth()+1;
    var targetYear = date_of_calculation.getFullYear();



    console.log("Brith Day: " + brthDay);
    console.log("Birth Month: " + brthMonth);
    console.log("Birth Year: " + brthYear);
    console.log("Selected Day: " + targetDay);
    console.log("Selected Month: " + targetMonth);
    console.log("Selected Year: " + targetYear);

}