const tripkm = document.getElementById('tripKm');
const age = document.getElementById('age');
const submit = document.querySelector('.btn-primary');
// console.log(submit);
const unitPrice = 0.21;
const discountMin = 1 - 20/100;
const discountOver = 1 - 40/100;
let basePrice= unitPrice * tripkm;

submit.addEventListener('click', function(){
    let valAge = age.value;
    let valtripKm = tripkm.value;
    console.log(valtripKm);
    console.log(valAge);

})