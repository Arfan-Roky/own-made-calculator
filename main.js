
const result = document.getElementById('result-show');
const buttons = document.querySelectorAll('button');
for(const button of buttons){
    button.addEventListener('click', function(e){
        if(e.target.innerText == '='){
            const calcValue = eval(result.innerText);
            result.innerText = parseFloat(calcValue.toFixed(3))
        }
        else if(e.target.innerText == 'AC'){
            result.innerText = '';
        }
        else if(result.innerText.length == 9){
            alert('Error: At a time calculate just 9 number');
        }
        else{
            result.innerText += e.target.innerText;
        }
    })
}