// variables
const tripkm = document.getElementById('tripKm');
const age = document.getElementById('age');
const submit = document.querySelector('.btn-primary');
const nome = document.getElementById ('name');
const divFinalPrice = document.querySelector('.final-price');
const namePsg = document.querySelector('.name-psg');
const numTicket = document.querySelector('.num-ticket');
const seat = document.querySelector('.seat');

// console.log(submit);
const unitPrice = 0.21;
const discountMin = 1 - 20/100;
const discountOver = 1 - 40/100;
let finalPrice;

submit.addEventListener('click', function(){
    let valAge = age.value;
    let valtripKm = tripkm.value;
    let basePrice= unitPrice * valtripKm;
    
    if(valAge === 'under18'){
        finalPrice= basePrice * discountMin;
        divFinalPrice.innerHTML= `Il prezzo del tuo biglietto è: ${finalPrice.toFixed(2)} €`;
        console.log('il prezzo del biglietto è ', finalPrice.toFixed(2));
    } else if (valAge === 'over65'){
        finalPrice= basePrice * discountOver;
        divFinalPrice.innerHTML= `Il prezzo del tuo biglietto è: ${finalPrice.toFixed(2)} €`
        console.log('il prezzo del biglietto è ', finalPrice.toFixed(2));
    } else{
        divFinalPrice.innerHTML= `Il prezzo del tuo biglietto è: ${basePrice.toFixed(2)} €`
        console.log('il prezzo del biglietto è ', basePrice.toFixed(2));
    } 
    namePsg.innerHTML= ` ${nome.value}`
    numTicket.innerHTML= ` 
    carrozza numero: ${rndNumb(0, 9)} <br>
    Biglietto numero: ${rndNumb(10000, 25000)}`
    seat.innerHTML = `A`

})

function rndNumb(min, max){
    return Math.floor(Math.random() * (max - min)) + min;

}

