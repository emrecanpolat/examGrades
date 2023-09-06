
let degisken = document.getElementById("notGoster");
let degisken2 = "";
let not = prompt("Aldığınız notu giriniz");

if (not >= 90 && not <=100){
    degisken2 = "AA";
}else if (not >=85){
    degisken2 = "BA";
}else if (not >= 80){
    degisken2 = "BB";
}else if (not >= 75){
    degisken2 = "CB";
}else if (not >= 70){
    degisken2 = "CC";
}else if (not >= 65){
    degisken2 = "DC";
}else if (not >= 60){
    degisken2 = "DD";
}else if (not >= 50){
    degisken2 = "FD";
}else if (not < 50){
    degisken2 = "FF";
} else{
    degisken2 = "Hatalı Bilgi Girdiniz";
}

degisken.innerHTML = "Notunuz:" + degisken2;
