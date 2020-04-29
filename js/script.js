
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

    let numbers = document.getElementsByClassName('number');
    for(var i = 0; i < numbers.length; i++ ){
        numbers[i].addEventListener('click', function(){
            let number = getValue();
            if(number == 0){
                number = '';
            }
            number = number + this.id;
            printValue(number);
            // console.log(number);
        })
    }

    let operators = document.getElementsByClassName('operator');
    for(var i = 0; i < operators.length; i++){
        operators[i].addEventListener('click', function(){
            let operator = this.id;

            if(operator == 'clear-entry'){
                if(output !== ''){
                    let output = getValue();
                    output = output.substr(0, output.length -1);
                    printValue(output);
                    console.log(output);
                }
            }
            else if(operator == 'clear'){
                printValue('');
                printHistory('');
            }
            else if(operator == '='){
                let result = getHistory();
                result = result + getValue();
                printValue(eval(result));
                printHistory(result);
                getValue('');
            }
            else {

                let history = getHistory();
                    if(history == ''){
                        history = history + getValue();
                        history = history + operator;
                        printHistory(history);
                        printValue('');
                        getValue('');
                    }else {
                        history = getHistory(history);
                        history = getValue();
                        printHistory(history);
                        printValue('')
                        history = history + getValue();
                        history = history + operator;
                        printHistory(history);
                    }

            }
        })
    }