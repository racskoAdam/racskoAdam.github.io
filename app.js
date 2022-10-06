function feliratkozas()
{
    let email = document.getElementById('email').value;
    if(email == "")
    {
        alert("Kérem adjon meg egy email címet!");
    }
    else{
        alert("Sikeresen feliratkozott!");
    }
}

function komment(){
    let kommentszoveg = document.getElementById("kommentinput").value;
    if (kommentszoveg.length > 0) {
        let box = document.getElementById("commentbox");
        let komment = document.createElement("p");
        komment.innerHTML = kommentszoveg;
        box.append(komment);
    } else {
      alert("adjon meg egy szöveget");  
    }
}