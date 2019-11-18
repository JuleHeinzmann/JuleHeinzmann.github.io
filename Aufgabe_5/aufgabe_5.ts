var text1:string = "Die Emmision von Europa ist "
var zahl1:number = 4209.3

console.log(text1+zahl1+" kg CO2")

var emmisionafrica:number = 1235.5
var emmisionsouthamerica:number = 1261.5
var emmisioneurope:number = 4209.3
var emmisionnorthamerica:number = 6035.6
var emmisionasia:number = 16274.1
var emmisionaustralia:number = 2100.5
var emmisiongesamt:number = (emmisionafrica+emmisionnorthamerica+emmisioneurope+emmisionsouthamerica+emmisionasia+emmisionaustralia)

console.log("Relativ zur Gesamtemmision der Welt verursacht Europa damit "+(emmisioneurope/emmisiongesamt)*100+"%")

var emmisioneurope2008:number = 4965.7

console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um "+(emmisioneurope/emmisioneurope2008-1)*100+"% verändert")

console.log("2018 im Vergleich zu 2008 sind das "+(emmisioneurope-emmisioneurope2008)+" kg CO2")

console.log("Die Emmision von Afrika ist "+emmisionafrica+" kg CO2")

console.log("Relativ zur Gesamtemmision der Welt verursacht Afrika damit "+(emmisionafrica/emmisiongesamt)*100+"%")

var emmisionafrica2008:number = 1028

console.log("Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um "+(emmisionafrica/emmisionafrica2008-1)*100+"% verändert")

console.log("2018 im Vergleich zu 2008 sind das "+(emmisionafrica-emmisionafrica2008)+" kg CO2")

console.log("Die Emmision von Südamerika ist "+emmisionsouthamerica+" kg CO2")

console.log("Relativ zur Gesamtemmision der Welt verursacht Südamerika damit "+(emmisionsouthamerica/emmisiongesamt)*100+"%")

var emmisionsouthamerica2008:number = 1132.6

console.log("Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um "+(emmisionsouthamerica/emmisionsouthamerica2008-1)*100+"% verändert")


console.log("2018 im Vergleich zu 2008 sind das "+(emmisionsouthamerica-emmisionsouthamerica2008)+" kg CO2")

console.log("Die Emmision von Nordamerika ist "+emmisionnorthamerica+" kg CO2")

console.log("Relativ zur Gesamtemmision der Welt verursacht Nordamerika damit "+(emmisionnorthamerica/emmisiongesamt)*100+"%")

var emmisionnorthamerica2008:number = 6600.4

console.log("Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um "+(emmisionnorthamerica/emmisionnorthamerica2008-1)*100+"% verändert")

console.log("2018 im Vergleich zu 2008 sind das "+(emmisionnorthamerica-emmisionnorthamerica2008)+" kg CO2")

console.log("Die Emmision von Asien ist "+emmisionasia+" kg CO2")

console.log("Relativ zur Gesamtemmision der Welt verursacht Asien damit "+(emmisionasia/emmisiongesamt)*100+"%")

var emmisionasia2008:number = 12954.7

console.log("Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um "+(emmisionasia/emmisionasia2008-1)*100+"% verändert")

console.log("2018 im Vergleich zu 2008 sind das "+(emmisionasia-emmisionasia2008)+" kg CO2")

console.log("Die Emmision von Australien ist "+emmisionaustralia+" kg CO2")

console.log("Relativ zur Gesamtemmision der Welt verursacht Australien damit "+(emmisionaustralia/emmisiongesamt)*100+"%")

var emmisionaustralia2008:number = 1993

console.log("Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um "+(emmisionaustralia/emmisionaustralia2008-1)*100+"% verändert")

console.log("2018 im Vergleich zu 2008 sind das "+(emmisionaustralia-emmisionaustralia2008)+" kg CO2")