



var emmisionafrica:number = 1235.5
var emmisionsouthamerica:number = 1261.5
var emmisioneurope:number = 4209.3
var emmisionnorthamerica:number = 6035.6
var emmisionasia:number = 16274.1
var emmisionaustralia:number = 2100.5
var emmisiongesamt:number = (emmisionafrica+emmisionnorthamerica+emmisioneurope+emmisionsouthamerica+emmisionasia+emmisionaustralia)
var emmisioneurope2008:number = 4965.7
var emmisionafrica2008:number = 1028
var emmisionsouthamerica2008:number = 1132.6
var emmisionnorthamerica2008:number = 6600.4
var emmisionasia2008:number = 12954.7
var emmisionaustralia2008:number = 1993
var europe2:number = (emmisioneurope/emmisiongesamt)*100
var europe3:number = (emmisioneurope/emmisioneurope2008-1)*100
var europe4:number = (emmisioneurope-emmisioneurope2008)
var africa2:number = (emmisionafrica/emmisiongesamt)*100
var africa3:number = (emmisionafrica/emmisionafrica2008-1)*100
var africa4:number = (emmisionafrica-emmisionafrica2008)
var southamerica2:number = (emmisionsouthamerica/emmisiongesamt)*100
var southamerica3:number = (emmisionsouthamerica/emmisionsouthamerica2008-1)*100
var southamerica4:number = (emmisionsouthamerica-emmisionsouthamerica2008)
var northamerica2:number = (emmisionnorthamerica/emmisiongesamt)*100
var northamerica3:number = (emmisionnorthamerica/emmisionnorthamerica2008-1)*100
var northamerica4:number = (emmisionnorthamerica-emmisionnorthamerica2008)
var asia2:number = (emmisionasia/emmisiongesamt)*100
var asia3:number = (emmisionasia/emmisionasia2008-1)*100
var asia4:number = (emmisionasia-emmisionasia2008)
var australia2:number = (emmisionaustralia/emmisiongesamt)*100
var australia3:number = (emmisionaustralia/emmisionaustralia2008-1)*100
var australia4:number = (emmisionaustralia-emmisionaustralia2008)

function FunctionEuropa() {

    document.querySelector(".Text1").innerHTML = "Carbon Dioxide Emmisions in Europe"
    document.querySelector(".Text2").innerHTML = "Emission absolute of Europe in 2018"
    document.querySelector("#eins").innerHTML = "" + emmisioneurope
    document.querySelector("#zwei").innerHTML = "" + europe2
    document.querySelector("#drei").innerHTML = "" + europe3
    document.querySelector("#vier").innerHTML = "" + europe4 ;
    document.querySelector(".chart").setAttribute ("style", "height:" + europe2 + "%")
}

window.addEventListener('load', function() {
    document.querySelector('.europe').addEventListener('click', FunctionEuropa);
});


function FunctionAfrika() {

    document.querySelector(".Text1").innerHTML = "Carbon Dioxide Emmisions in Africa"
    document.querySelector(".Text2").innerHTML = "Emission absolute of Africa in 2018"
    document.querySelector("#eins").innerHTML = "" + emmisionafrica
    document.querySelector("#zwei").innerHTML = "" + africa2
    document.querySelector("#drei").innerHTML = "" + africa3
    document.querySelector("#vier").innerHTML = "" + africa4
    document.querySelector(".chart").setAttribute ("style", "height:" + africa2 + "%")
}

window.addEventListener('load', function() {
    document.querySelector('.africa').addEventListener('click', FunctionAfrika);
});

function FunctionSouthamerica() {

    document.querySelector(".Text1").innerHTML = "Carbon Dioxide Emmisions in Southamerica"
    document.querySelector(".Text2").innerHTML = "Emission absolute of Southamerica in 2018"
    document.querySelector("#eins").innerHTML = "" + emmisionsouthamerica
    document.querySelector("#zwei").innerHTML = "" + southamerica2
    document.querySelector("#drei").innerHTML = "" + southamerica3
    document.querySelector("#vier").innerHTML = "" + southamerica4
    document.querySelector(".chart").setAttribute ("style", "height:" + southamerica2 + "%")
}

window.addEventListener('load', function() {
    document.querySelector('.southamerica').addEventListener('click', FunctionSouthamerica);
});

function FunctionNorthamerica() {

    document.querySelector(".Text1").innerHTML = "Carbon Dioxide Emmisions in Northamerica"
    document.querySelector(".Text2").innerHTML = "Emission absolute of Northamerica in 2018"
    document.querySelector("#eins").innerHTML = "" + emmisionnorthamerica
    document.querySelector("#zwei").innerHTML = "" + northamerica2
    document.querySelector("#drei").innerHTML = "" + northamerica3
    document.querySelector("#vier").innerHTML = "" + northamerica4
    document.querySelector(".chart").setAttribute ("style", "height:" + northamerica2 + "%")

}

window.addEventListener('load', function() {
    document.querySelector('.northamerica').addEventListener('click', FunctionNorthamerica);
});

function FunctionAsien() {

    document.querySelector(".Text1").innerHTML = "Carbon Dioxide Emmisions in Asia"
    document.querySelector(".Text2").innerHTML = "Emission absolute of Asia in 2018"
    document.querySelector("#eins").innerHTML = "" + emmisionasia
    document.querySelector("#zwei").innerHTML = "" + asia2
    document.querySelector("#drei").innerHTML = "" + asia3
    document.querySelector("#vier").innerHTML = "" + asia4
    document.querySelector(".chart").setAttribute ("style", "height:" + asia2 + "%")

}

window.addEventListener('load', function() {
    document.querySelector('.asia').addEventListener('click', FunctionAsien);
});

function FunctionAustralien() {

    document.querySelector(".Text1").innerHTML = "Carbon Dioxide Emmisions in Australia"
    document.querySelector(".Text2").innerHTML = "Emission absolute of Australia in 2018"
    document.querySelector("#eins").innerHTML = "" + emmisionaustralia
    document.querySelector("#zwei").innerHTML = "" + australia2
    document.querySelector("#drei").innerHTML = "" + australia3
    document.querySelector("#vier").innerHTML = "" + australia4
    document.querySelector(".chart").setAttribute ("style", "height:" + australia2 + "%")

}

window.addEventListener('load', function() {
    document.querySelector('.australia').addEventListener('click', FunctionAustralien);
});

//Aufgabe 5 ausgabe
console.log("Die Emmision von Europa ist "+emmisioneurope+" kg CO2")

console.log("Relativ zur Gesamtemmision der Welt verursacht Europa damit "+(emmisioneurope/emmisiongesamt)*100+"%")

console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um "+(emmisioneurope/emmisioneurope2008-1)*100+"% verändert")

console.log("2018 im Vergleich zu 2008 sind das "+(emmisioneurope-emmisioneurope2008)+" kg CO2")

console.log("Die Emmision von Afrika ist "+emmisionafrica+" kg CO2")

console.log("Relativ zur Gesamtemmision der Welt verursacht Afrika damit "+(emmisionafrica/emmisiongesamt)*100+"%")

console.log("Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um "+(emmisionafrica/emmisionafrica2008-1)*100+"% verändert")

console.log("2018 im Vergleich zu 2008 sind das "+(emmisionafrica-emmisionafrica2008)+" kg CO2")

console.log("Die Emmision von Südamerika ist "+emmisionsouthamerica+" kg CO2")

console.log("Relativ zur Gesamtemmision der Welt verursacht Südamerika damit "+(emmisionsouthamerica/emmisiongesamt)*100+"%")

console.log("Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um "+(emmisionsouthamerica/emmisionsouthamerica2008-1)*100+"% verändert")

console.log("2018 im Vergleich zu 2008 sind das "+(emmisionsouthamerica-emmisionsouthamerica2008)+" kg CO2")

console.log("Die Emmision von Nordamerika ist "+emmisionnorthamerica+" kg CO2")

console.log("Relativ zur Gesamtemmision der Welt verursacht Nordamerika damit "+(emmisionnorthamerica/emmisiongesamt)*100+"%")

console.log("Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um "+(emmisionnorthamerica/emmisionnorthamerica2008-1)*100+"% verändert")

console.log("2018 im Vergleich zu 2008 sind das "+(emmisionnorthamerica-emmisionnorthamerica2008)+" kg CO2")

console.log("Die Emmision von Asien ist "+emmisionasia+" kg CO2")

console.log("Relativ zur Gesamtemmision der Welt verursacht Asien damit "+(emmisionasia/emmisiongesamt)*100+"%")

console.log("Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um "+(emmisionasia/emmisionasia2008-1)*100+"% verändert")

console.log("2018 im Vergleich zu 2008 sind das "+(emmisionasia-emmisionasia2008)+" kg CO2")

console.log("Die Emmision von Australien ist "+emmisionaustralia+" kg CO2")

console.log("Relativ zur Gesamtemmision der Welt verursacht Australien damit "+(emmisionaustralia/emmisiongesamt)*100+"%")

console.log("Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um "+(emmisionaustralia/emmisionaustralia2008-1)*100+"% verändert")

console.log("2018 im Vergleich zu 2008 sind das "+(emmisionaustralia-emmisionaustralia2008)+" kg CO2")