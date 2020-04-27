
// function formatNumber(num){
//     let number = Number(num);
//     return number;
// }

// function reverseNumberFormat(num){
// 	return Number(num.replace(/,/g,''));
// }

function getHistory(){
    let getHis = document.getElementById('history');
    return getHis.innerHTML;
}

function printHistory(num){
    let printHis = document.getElementById('history');
    printHis.innerHTML = num;
}

function getValue(){
    let getVal = document.getElementById('output');
    return getVal.innerHTML;
}

function printValue(num){
    let printVal = document.getElementById('output');
    printVal.innerHTML = num;
}

    let numbers = document.getElementsByClassName('number');
    for(var i = 0; i < numbers.length; i++ ){
        numbers[i].addEventListener('click', function(){
            let number = getValue();
            number = number + this.id;
            printValue(number);
            console.log(number);
        })
    }

    let operators = document.getElementsByClassName('operator');
    for(var i = 0; i < operators.length; i++){
        operators[i].addEventListener('click', function(){
            let operator = this.id;

            if(operator == 'clear'){
                printValue('');
                printHistory('');
            }else if(operator == '='){
                let result = getHistory();
                result = result + getValue();
                printValue(eval(result));
                printHistory(result);
                getValue('');
            }else {

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