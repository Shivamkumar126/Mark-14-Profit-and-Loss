 var initialPrice = document.querySelector("#initial-price");
 var stocksQuantity = document.querySelector("#stocks-quantity");
 var currentPrice = document.querySelector("#current-price");
 var submitBtn = document.querySelector("#submit-btn");
 var outputBox = document.querySelector("#output-box");

 function calculateProfitAndLoss(initial , quantity, current ){
    if(initial > current){
     var loss = (initial-current) * quantity;
     var lossPercentage = (loss / initial)*100;
     outputBox.innerHTML="The loss is" + loss + "and the percentage is"+ lossPercentage +"%";
    }    
    else if(current > initial){
         var profit =(current - initial) * quantity;
        var profitPercentage = (profit / initial) * 100;
        outputBox.innerHTML="The profit is " + profit + " and the percentage is "+ profitPercentage +"%"; 
    }
    else{
        outputBox.innerText="no gain no pain";
    }
 }

 function clickHandler(){
    var ip = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var curp = Number(currentPrice.value);
    calculateProfitAndLoss(ip, qty, curp);
 }
 submitBtn.addEventListener('click', clickHandler)