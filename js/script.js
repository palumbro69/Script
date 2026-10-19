function compra(){
    let eta;

    do{
        eta = prompt("inserisci eta");
    } while(eta == "" || eta == 0 || eta === null || isNaN(eta));

    eta = Number(eta);

    if(eta > 0 ){
        if(eta <= 5 ){
            alert("il biglietto è gratis")
            console.log(eta + " è gratis")
        }
        else if(eta > 18 && eta < 25){
            alert(eta + " paghi 3.50€")
            console.log(eta + " paghi 3.50€")
        }
        else if(eta >= 50 && eta <= 55){
            alert(eta + " paghi 5€")
            console.log(eta + " paghi 5€")
        } else {
            alert(eta + " paghi 8€")
            console.log(eta + " paghi 8€")
        }
    }
}