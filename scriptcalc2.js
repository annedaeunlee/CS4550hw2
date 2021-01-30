(function() {
    "use strict"

    var numSoFar = "0";

    function update() {
        var display = document.getElementById('display');
        display.innerHTML = numSoFar;
    }

    function refreshClicked() {
        numSoFar = "0";
    }
    
    function equalClicked() {
        if(Number.isInteger(parseInt(numSoFar.slice(-1)))) {
            var acc = eval(numSoFar);
            numSoFar = acc.toString();
        }
    }

    function plusClicked() {
        if(Number.isInteger(parseInt(numSoFar.slice(-1)))) {
            numSoFar += "+";
        }
    }

    function plusOrEqual() {
        if(numSoFar.includes("-") 
            || numSoFar.includes("+") 
            || numSoFar.includes("*") 
            || numSoFar.includes("/")) {
            return equalClicked();
        } else{
            return plusClicked();
        }
    }

    function decimalClicked() {
        if(numSoFar.includes("-") 
                    || numSoFar.includes("+") 
                    || numSoFar.includes("*") 
                    || numSoFar.includes("/")) {
            var iLast = numSoFar.match(/([^\d.])(?!.*\1)/).index;
            if(!numSoFar.substr(iLast+1).includes(".")) {
                numSoFar += ".";
            }
        } else{
            if(!numSoFar.includes(".")) {
                numSoFar += ".";
            }
        }
    }

    function operatorClicked() {
        if(Number.isInteger(parseInt(numSoFar.slice(-1)))) {
            // if (this.value === "-") {
            //     numSoFar += "-";
            // } else if (this.value === "/") {
            //     numSoFar += "/";
            // } else if (this.value === "*") {
            //     numSoFar += "*";
            // }
            numSoFar += this.innerHTML;
        }
    }

    function numClicked() {
        if(numSoFar == "0") {
            numSoFar = this.innerHTML;
        } else{
            if(numSoFar.includes("-") 
                    || numSoFar.includes("+") 
                    || numSoFar.includes("*") 
                    || numSoFar.includes("/")) {
                var iLast = numSoFar.match(/([^\d.])(?!.*\1)/).index;
                if(numSoFar.substr(iLast + 1) == "0") {
                    numSoFar = numSoFar.substr(0, iLast+1) + this.innerHTML;
                } else{
                    numSoFar = numSoFar + this.innerHTML;
                }
            } else{
                numSoFar = numSoFar + this.innerHTML;
            }
        }
    }



    function listenForClick() {
        var buttons = document.getElementsByTagName('button');
      
            for(let j = 0; j < buttons.length; j++) {
                var button = buttons.item(j);
                if(button.innerHTML == "C") {
                    button.addEventListener('click', refreshClicked, false);
                    button.addEventListener('click', update, false);
                } else if(button.innerHTML == "+/=") {
                    button.addEventListener('click', plusOrEqual, false);
                    button.addEventListener('click', update, false);
                } else if(button.innerHTML == "-") {
                    button.addEventListener('click', operatorClicked, false);
                    button.addEventListener('click', update, false);
                } else if(button.innerHTML == ".") {
                    button.addEventListener('click', decimalClicked, false);
                    button.addEventListener('click', update, false);
                } else if(button.innerHTML == "/") {
                    button.addEventListener('click', operatorClicked, false);
                    button.addEventListener('click', update, false);
                } else if(button.innerHTML == "*") {
                    button.addEventListener('click', operatorClicked, false);
                    button.addEventListener('click', update, false);
                } else{
                    button.addEventListener('click', numClicked, false);
                    button.addEventListener('click', update, false);
                }
            }
        
    }

    window.addEventListener('load', listenForClick, false);
})();