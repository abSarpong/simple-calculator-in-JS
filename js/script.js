
// function formatNumber(num){
//     let number = Number(num);
//     return number;
// }

// function reverseNumberFormat(num){
// 	return Number(num.replace(/,/g,''));
// }

function getHistory(){
    let getHistory = document.getElementById('history');
    return getHistory.innerHTML;
}

function printHistory(num){
    let printHistory = document.getElementById('history');
    printHistory.innerHTML = num;
}

function getValue(){
    let getValue = document.getElementById('output');
    return getValue.innerHTML;
}

function printValue(num){
    let printValue = document.getElementById('output');
    printValue.innerHTML = num;
}

function formatNumberToThousands(num){
    let value = Number(num);
    value = value.toLocaleString('en');
    return value;
}

    let numbers = document.getElementsByClassName('number');
    for(var i = 0; i < numbers.length; i++ ){
        numbers[i].addEventListener('click', function(){
            let number = getValue();

                if(number == 0){
                    number = '';
                }
                number = number + this.id;
                printValue(number);
        })
    }

    let operators = document.getElementsByClassName('operator');
    for(var i = 0; i < operators.length; i++){
        operators[i].addEventListener('click', function(){
            let operator = this.id;

            // Clear entry from right to back
            if(operator == 'clear-entry'){
                if(output !== ''){
                    let output = getValue();
                    output = output.substr(0, output.length -1);
                    printValue(output);
                }
            }
            // Clear entire screen
            else if(operator == 'clear'){
                let output = getValue();
                let history = getHistory();
                    if(output !== '' && history !== ''){
                        printHistory('');
                        printValue(0);
                    }else {
                        printHistory('');
                        printValue(0);
                    }
            }
            // Perform arithmetic
            else if(operator == '='){
                let result = getHistory();
                result = result + getValue();
                let evaluation = eval(result);
                printValue(evaluation);
                printHistory(result);
            }

            // Display values and history on screen
            else {
                let history = getHistory();
                history = getValue() + operator;
                printHistory(history);
                
                printValue('');

            }
        })
    }