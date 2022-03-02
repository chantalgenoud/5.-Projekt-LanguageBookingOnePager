function onSubmit() {
    
    /*select eleemnt with ID "vorname"
    get value from selected element
    assign value to new variable calles firstname*/

    let firstName = document.getElementById("firstName").value; /* also weist den wert VORNAME der Variable firstName zu*/

    /*falls keinen wert negierung = !*/ /*mit Javascript besser, da mehr möglichkeiten und es auf allen Browsern funktioniert*/
    if (!firstName) {
        alert("bitte geben Sie ihren Namen an");
        return false;
    } 

    sessionStorage.setItem("firstName", document.getElementById("firstName").value) // key name erstes speichert als das ab (set), das zweite ist der key value
}


 function validateForm() {
        let vorname = document.getElementById("firstName").value; 

        sessionStorage.setItem("firstName", firstName); //wert speichern im Memory des Browsers
        alert("firstName= "+firstName);
    }



        //document.getElementById("firstName").innerHTML; // das nimmt den wert aus dem cache und setzte sie als id = vorname Die Eigenschaft Element.innerHTML liest und speichert den Inhalt eines HTML-Elements. Wenn Sie beim dynamischen Ändern des gespeicherten Inhalts HTML-Tags notieren, werden diese bei der Aktualisierung des Elementinhalts interpretiert. */