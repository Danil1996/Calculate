'use strict'

    window.addEventListener('load', function OnWindowLoaded() {
        let signs = [
            'AC', 'ˆ', '(', ')',
            '7', '8', '9', '/',
            '4', '5', '6', '*',
			'1', '2', '3', '-',
			'0', '.', '=', '+'
        ];
     
        let calc = document.getElementById('calc');
     
        let textArea = document.getElementById('inputVal');
     
        signs.forEach(function (sign) {
            let signElement = document.createElement('div');
            signElement.className = 'btn';
            signElement.innerHTML = sign;
            calc.appendChild(signElement);
        });
     
        document.querySelectorAll('#calculator .btn').forEach(function (button) {
            button.addEventListener('click', onButtonClick);
        });
        function onButtonClick(e) {
            if (e.target.innerHTML === 'AC') {
                textArea.innerHTML = '0';
            } else if (e.target.innerHTML === '=') {
                let result = doubleOperands(searchNumberFloats(validationOfString(validationBrackets(textArea.innerHTML))));
                alert (fuckingCalculator(result));
                let history = document.getElementById("History");
                let newHistory = document.createElement("p");
                newHistory.innerHTML = `${textArea.value} = ${result}`;
                history.appendChild(newHistory);
            } else if (textArea.innerHTML === '0') {
                textArea.innerHTML = e.target.innerHTML;
            } else {
                textArea.innerHTML += e.target.innerHTML;
            }
        }
    });
    