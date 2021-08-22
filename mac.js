const memoryPrice8 = document.getElementById("memory-price-8");
const memoryPrice16 = document.getElementById("memory-price-16");
 const storagePrice256 = document.getElementById("storage-price-256");
const storagePrice512 = document.getElementById("storage-price-512");
const storagePrice1Tb = document.getElementById("storage-price-1tb");
 const deliveryFree = document.getElementById("free-delivery");
const deliveryCharge = document.getElementById("delivery-charge");
let bestPrice = document.getElementById("best-price");

// =====MEMORY PART STARTS===== 
 const extraMemory = document.getElementById("extra-memory");
 memoryPrice8.addEventListener("click", function(){
     extraMemory.innerText = "0";
     updateTotalPrice();
     
 });
memoryPrice16.addEventListener("click", function() {
     extraMemory.innerText = "180";
     updateTotalPrice();
     
});
// =====MEMORY PART ENDS=====

// =====STORAGE PART STARTS===== 
const extraStorage = document.getElementById("extra-storage");
storagePrice256.addEventListener("click", function(){
    extraStorage.innerText = "0";
    updateTotalPrice();
     
});
storagePrice512.addEventListener("click", function(){
    extraStorage.innerText = "100";
    updateTotalPrice();
     
});
storagePrice1Tb.addEventListener("click", function(){
    extraStorage.innerText = "180";
    updateTotalPrice();
     

});
// =====STORAGE PART ENDS===== 

// =====DELIVERY PART STARTS===== 
const deliveryCostUpdate = document.getElementById("delivery-cost-update");
deliveryFree.addEventListener("click", function(){
    deliveryCostUpdate.innerText = "0";
    updateTotalPrice();
     
});
deliveryCharge.addEventListener("click", function(){
    deliveryCostUpdate.innerText = "20";
    updateTotalPrice();
     
});
// =====DELIVERY PART ENDS=====

// =====TOTAL PRICE COUNT===== 
const totalPrice = document.getElementById("total-price");
const footerPrice = document.getElementById("footer-price");
function updateTotalPrice() {
    let bestPriceUpdate = Number(bestPrice.innerText);
    const extraMemoryCost = Number(extraMemory.innerText);
    const extraStorageCost =Number (extraStorage.innerText);
    const deliveryCost = Number(deliveryCostUpdate.innerText);
    const totalPriceUpdate = bestPriceUpdate + extraMemoryCost + extraStorageCost + deliveryCost;
    totalPrice.innerText = totalPriceUpdate;
    // =====BONUS PART FOOTER PRICE===== 
    footerPrice.innerText = totalPriceUpdate;
    return totalPriceUpdate;
}

// =====BONUS PART PROMO CODE===== 
 function calculate(code) {
    code= document.getElementById('promo-code').value;
    if(code=='stevekaku'){
        const reducingAmount = parseFloat(totalPrice.innerText) * 0.20;
        const afterPromoCost =totalPrice.innerText- parseFloat(reducingAmount);
       footerPrice.innerText=afterPromoCost;
       return afterPromoCost;
        
    }

 }
 document.getElementById('code-entered').addEventListener('click',function(){
  
    calculate('stevekaku');
    document.getElementById('promo-code').value = '';
 });