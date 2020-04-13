interface Karte {
Zahl: number;
Farbe: string;



}

var karten: Karte[] = [

{Zahl: 1, Farbe: "blau"},
{Zahl: 2, Farbe: "blau"},
{Zahl: 3, Farbe: "blau"},
{Zahl: 4, Farbe: "blau"},
{Zahl: 5, Farbe: "blau"},
{Zahl: 6, Farbe: "blau"},
{Zahl: 7, Farbe: "blau"},
{Zahl: 8, Farbe: "blau"},

{Zahl: 1, Farbe: "gelb"},
{Zahl: 2, Farbe: "gelb"},
{Zahl: 3, Farbe: "gelb"},
{Zahl: 4, Farbe: "gelb"},
{Zahl: 5, Farbe: "gelb"},
{Zahl: 6, Farbe: "gelb"},
{Zahl: 7, Farbe: "gelb"},
{Zahl: 8, Farbe: "gelb"},

{Zahl: 1, Farbe: "grün"},
{Zahl: 2, Farbe: "grün"},
{Zahl: 3, Farbe: "grün"},
{Zahl: 4, Farbe: "grün"},
{Zahl: 5, Farbe: "grün"},
{Zahl: 6, Farbe: "grün"},
{Zahl: 7, Farbe: "grün"},

{Zahl: 1, Farbe: "rot"},
{Zahl: 2, Farbe: "rot"},
{Zahl: 3, Farbe: "rot"},
{Zahl: 4, Farbe: "rot"},
{Zahl: 5, Farbe: "rot"},
{Zahl: 6, Farbe: "rot"},
{Zahl: 7, Farbe: "rot"},
{Zahl: 8, Farbe: "rot"}
];


var spieler: Karte[] = [


];

var computer: Karte[] = [


];


var ablage: Karte [] = [

];

var ziehen: Karte [] = [

];

function KartenMischen(): void {

ziehen.push(karten.splice(Math.floor(Math.random() * karten.length), 1)[0]);

}
 


function Austeilen (ziehen, spiel, karten): void {
spiel.forEach(spieler =>  {
    while(spieler.)
});


}