//First name
function onSubmit() {
    /*select eleemnt with ID "vorname"
    get value from selected element
    assign value to new variable calles firstname*/

    let firstName = document.getElementById("firstName").value; /* also weist den wert VORNAME der Variable firstName zu*/
    /*falls keinen wert negierung = !*/ /*mit Javascript besser, da mehr möglichkeiten und es auf allen Browsern funktioniert*/
    if (!firstName) {
        alert("Bitte geben Sie ihren Vornamen an");
        return false;
    } 
    sessionStorage.setItem("firstName", firstName); // key name erstes speichert als das ab (set), das zweite ist der key value

//lastName
            let lastName = document.getElementById("lastName").value; 

            if (!lastName) {
                alert("Bitte geben Sie ihren Familiennamen an");
                return false;
        }
            sessionStorage.setItem("lastName", lastName); 
 
// da bin ich dran bitte function on submit nur einmal und alles in die selb Funktion

        //birthDay +
            let birthDay = document.getElementById("birthDay").value; 

                if (!birthDay) {
                alert("Bitte geben Sie ihr Geburtsdatum an");
                return false;
                } 
            sessionStorage.setItem("birthDay", birthDay);       

        //address +
            let address = document.getElementById("address").value; 

                if (!address) {
                alert("Bitte geben Sie ihre Adresse an");
                return false;
                }

            sessionStorage.setItem("address", address); 


        //plz
            let plz = document.getElementById("plz").value;     
            
            if (!plz) {
                alert("Bitte geben Sie ihre Postleitzahl an");
                return false;
            }
            sessionStorage.setItem("plz", plz); 
        

        // place +
            let place = document.getElementById("place").value; 

                if (!place) {
                alert("Bitte geben Sie ihre Ortschaft an");
                return false;
                }
            sessionStorage.setItem("place", place); //wert speichern im Memory des Browsers
        
            
        // email
            let email = document.getElementById("email").value; 

            if (!email) {
                alert("Bitte geben Sie ihre E-Mail Adresse an");
                return false;
            } 
            sessionStorage.setItem("email", email); //wert speichern im Memory des Browsers
            


        // number
            let number = document.getElementById("number").value; 

                if (!number) {
                alert("Bitte geben Sie ihre Telefonnummer an");
                return false;
                } 
            
                sessionStorage.setItem("number", number); //wert speichern im Memory des Browser
            
    
        //agb funktioniert noch nicht, evt weil checkbox? da hackt was fest da es eine checkbox ist muss man statt value checked nehmen :)
            let agb = document.getElementById("agb").checked; 

            if (!agb) {
                alert("Bitte bestätigen sie unsere AGB's");
                return false;
            } 
                sessionStorage.setItem("agb", agb);  
      

         //kurs1
                let kurs1 = document.getElementById("kurs1").checked; 
    
                sessionStorage.setItem("kurs1", kurs1); //wert speichern im Memory des Browsers  */

          //kurs2
          let kurs2 = document.getElementById("kurs2").checked; 
    
          sessionStorage.setItem("kurs2", kurs2); //wert speichern im Memory des Browsers  */

        //kurs3
        let kurs3 = document.getElementById("kurs3").checked; 

        sessionStorage.setItem("kurs3", kurs3); //wert speichern im Memory des Browsers  */
 
} //function onSubmit closing 

