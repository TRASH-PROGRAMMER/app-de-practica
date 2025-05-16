addEventListener('DOMContentLoaded', function(event) {
const number = document.getElementById("numberForm"); 
const fistnumber = document.getElementById("firstNumber");
const secondnumber = document.getElementById("secondNumber");
const result = document.getElementById("result");
number.addEventListener('submit', function(event) {
    event.preventDefault() 
    result.innerHTML = "";
    const num1 = parseInt(fistnumber.value);
    const num2 = parseInt(secondnumber.value);
    for(let i =0; i<=5;i++){
         let resultOperation;
            let operationText = '';
            let operationSymbol = ''; // Para mostrar la operación en el resultado

            // Usamos una variable para el HTML de este paso del bucle
            let stepHTML = '';
             

            if(i === 1){ // Suma
                resultOperation = num1 + num2;
                operationText = 'suma';
                operationSymbol = '+';
                stepHTML = `<p>El resultado de la ${operationText} (${num1} ${operationSymbol} ${num2}) es: ${resultOperation}</p>`;

            } else if(i === 2){ // Resta
                resultOperation = num1 - num2;
                operationText = 'resta';
                operationSymbol = '-';
                stepHTML = `<p>El resultado de la ${operationText} (${num1} ${operationSymbol} ${num2}) es: ${resultOperation}</p>`;

            } else if(i === 3){ // Multiplicación
                resultOperation = num1 * num2;
                operationText = 'multiplicación';
                 operationSymbol = '*';
                 stepHTML = `<p>El resultado de la ${operationText} (${num1} ${operationSymbol} ${num2}) es: ${resultOperation}</p>`;

            } else if(i === 4){ // División
                operationText = 'división';
                operationSymbol = '/';
                if (num2 !== 0) {
                     resultOperation = num1 / num2;
                     stepHTML = `<p>El resultado de la ${operationText} (${num1} ${operationSymbol} ${num2}) es: ${resultOperation}</p>`;
                } else {
                    stepHTML = `<p style="color: orange;">No se puede realizar la ${operationText} por cero.</p>`;
                }

            } else if(i === 5){ // Módulo
                 operationText = 'módulo';
                 operationSymbol = '%';
                 if (num2 !== 0) {
                     resultOperation = num1 % num2;
                     stepHTML = `<p>El resultado del ${operationText} (${num1} ${operationSymbol} ${num2}) es: ${resultOperation}</p>`;
                 } else {
                     stepHTML = `<p style="color: orange;">No se puede calcular el ${operationText} por cero.</p>`;
                 }
            }
            // Añadimos el HTML del paso al resultado
            result.innerHTML += stepHTML;
    }
    fistnumber.value = "";
    secondnumber.value = "";
})
})
  
