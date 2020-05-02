
function getValue(){
    let getValue = document.getElementById('output');
    return getValue.innerHTML;
}

function printValue(num){
    let printValue = document.getElementById('output');
    printValue.innerHTML = num;
}

    let keys = document.getElementsByClassName('key');
    for(var i = 0; i < keys.length; i++ ){
        keys[i].addEventListener('click', function(){
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

            if(operator == '='){
                let history = getValue();
                history = eval(history);
                printValue(history);
            }
            else if(operator == 'clear-entry'){
                let output = getValue();
                output = output.substr(0, output.length -1);
                printValue(output);
            }
            else {
                let output = getValue();
                    if(output !== ''){
                        printValue(0);
                        getValue('');
                    }
            }
        })
    }