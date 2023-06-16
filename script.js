const input = document.getElementById('inputBox');
const button = document.querySelectorAll('.button');

const arr = Array.from(button);
let string = "";
const operator = ['+', '-', '/','=', '*','%'];

function matchOperator(inp1,inp2='%') {
    var flag = 0;
    for (value of operator) {
        if (inp1 === value) {
            flag++;
        }
    }
    for (value of operator) {
        if (inp2 === value) {
            flag++;
        }
    }
    if (flag===2) return true;
    else return false;
}


arr.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (matchOperator(e.target.innerHTML) && string.length===0) {
            alert('Invalid input format.');
        }
        else if(matchOperator(e.target.innerHTML,string.substring(string.length-1))){
            alert('Inavlid input format.');
        }
        else if((e.target.innerHTML!='AC' && e.target.innerHTML!='DEL' && e.target.innerHTML!='=') && string.length==10){
            alert("Can't enter more than 10 digits.")
        }
        
        else {
            if (e.target.innerHTML == '=') {
                input.value = eval(string);
                string = input.value;
            }
            else if (e.target.innerHTML == 'AC') {
                string = "";
                input.value = string;
            }
            else if (e.target.innerHTML == 'DEL') {
                string = string.substring(0, string.length - 1);
                input.value = string;
            }
            else{
                string += e.target.innerHTML;
                input.value = string;
            }

        }

    })
})












