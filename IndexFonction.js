 
 //exo1
function testNum(a) {
    var a;
    if (a === 10) {
        result = 'true';
    } else {
        result = 'false';
    }
    return result;
}
console.log(testNum(10));
// exo2

var cities = ['paris', 'londre', 'birmingham', 'liverpool'];
console.log(cities)

//exo3

var region =['languedoc','herautl', 'bouche du rhone']
var ville = ['ales','montpellier','marseille']
let conca = region +ville
console.log(conca)

//exo4
function compareNum(b, c) {
    if (b < c) {
        result = "b < c";
    } else if (b > c) {
        result = "b > c";
    } else {
        result = "b = c";
    }
    return result;
}
console.log(compareNum(2, 3));


//exo5
var number = 1;
var prenom = 'sofian' ;
let poke = number + prenom
console.log(poke)

//exo6
nom = 'sofian';
prenom= 'braaa';
age = 24;

function goura(){ 
let gourou =  "bonjour" + nom + prenom + ",tu as" + age + "ans"
console.log(gourou)
}
goura()

//exo7 


function Id(age, genre){
    if ( genre == "Homme" ){
        if ( age> 18 ) {
            console.log("Vous etes un Homme et majeur")
        }
        else { console.log("Vous etes un Homme et mineur")}
    }
    else if ( genre == "Femme") {
        if ( age>18 ){
            console.log("Vous etes une Femme Majeur")
        }
        else { console.log("Vous etes une Femme mineure")} 
    }
    else { 
        if ( age>18) {
            console.log("Vous etes ni homme ni une femme et majeur")
        }
        else {console.log("Vous etes ni homme ni une femme et mineur")}
    }
    
}
Id(2,"Homme");
 //exo08

 
var v = 15;
 var b =30;
 var n = 45;
function toto(){ 
 let total = v + b + n;
console.log(total); }
toto()

