
var zm1 = "jakikolwiek";
var zm2 = 2;
var zm3 = "2";
var wynik = zm2 + " sztuki";

function otwieracz() {
    alert("otwarto")
}
function zaawansowanyOtwieracz(x) {
    if (x > 5) {
        alert("większe od 5")
    } else { alert("mniejsze niż 5") }
}
function zo(x) {
    x = document.getElementById("text").value



    if (x >= 5 && x == true) {
        alert("cokolwiek")
    }
    else {
        if (!x) {
            alert("nie podano wartości")
        }
        else {
            alert("niecokolwiek")
        }
    }

}
function uzupelniacz() {
    document.getElementById("text2").innerHTML="cokolwiek"
    
}