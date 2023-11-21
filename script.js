const fillcut = (str,len) => {
 if (str.length <= len) {
 const vysledek = str.padStart(len, '.')
 return vysledek

}
 else if (str.length >= len) {
    const vysledek = str.slice(0, len)
    return vysledek
  
 }
 else {
 const vysledek = str
 return vysledek

}
}

document.body.innerHTML += fillcut('petr', 8) + '<br>'; // vypíše „....petr“
document.body.innerHTML += fillcut('petr', 3) + '<br>'; // vypíše „pet“
document.body.innerHTML += fillcut('petr', 4) + '<br>'; // vypíše „petr“
