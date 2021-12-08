//exo1
var moi= ['janvier','fevrier','Mars','Avril','Mai','juin','juillet','aout','septembre','ocotobre','novembre','decembre'];
console.log(moi);

//exo2
var moi= ['janvier','fevrier','Mars','Avril','Mai','juin','juillet','aout','septembre','ocotobre','novembre','decembre'];
console.log(moi[2]);

//exo3
var moi= ['janvier','fevrier','Mars','Avril','Mai','juin','juillet','aout','septembre','ocotobre','novembre','decembre'];
console.log(moi.indexOf('juin'));

//exo4
var moi= ['janvier','fevrier','Mars','Avril','Mai','juin','juillet','aout','septembre','ocotobre','novembre','decembre'];
moi.splice(7,1 , "août")
console.log(moi)

//exo5
var haut = {'aisne' : 02 , 'Nord' : 59 , 'oise' : 60 , 'Pas de Calais': 62 ,'Somme' : 80 };
console.log(haut)

//exo6
var haut = {'aisne' : 02 ,  59 : 'Nord' , 'oise' : 60 , 'Pas de Calais': 62 ,'Somme' : 80 };
console.log(haut[59]);

//exo7
var haut = {02  :'aisne' ,  59 : 'Nord' , 60  :'oise' , 62 :'Pas de Calais', 80 :'sommes' };
haut[51] = 'marnes';
console.log(haut)

//exo8
var moi= ['janvier','fevrier','Mars','Avril','Mai','juin','juillet','aout','septembre','ocotobre','novembre','decembre'];
moi.forEach(item => console.log(item)); 


//exo9
var haut = {'aisne' : 02 , 'Nord' : 59 , 'oise' : 60 , 'Pas de Calais': 62 ,'Somme' : 80 };
for (n in haut) {
    console.log(haut[n]);
}

//exo10
let arr = { 02: 'Aisne', 59: 'Nord', 60: 'Oise', 62: 'Pas-de-Calais', 80: 'Somme' };
for (n in arr) {
    console.log('Le département ' + arr[n] + ' a le numéro ' + n);
}

