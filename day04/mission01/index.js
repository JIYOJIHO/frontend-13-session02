function clickBtn(e) {
    if(e.key === enter) {
        const num1 = document.getElementById("num1").value;
        const num2 = document.getElementById("num2").value;
  
        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);
  
        const sum = number1 + number2;

        document.getElementById("result").innerText = `결과: ${sum}`;
    }
  }

function add ( ) {
    const a = parseFloat(document.getElementById("num1").value); //value는 문자로 가져오기 때문에 parse로 넘버로 바꿔야함
    const b = parseFloat(document.getElementById("num2").value);
    const result = document.querySelector('result');

    if(isNaN(a) || isNaN(b))

    result.textContent = `결과: ${a+b}`;

    // 여기에 엔터 어쩌구구
}

/* const btn = document.querySelector('button')

btn.onclick = add;

function add() {
    const n1 = document.querySelector('.num1');
    const n2 = document.querySelector('.num2');
    sum = n1 + n2;
    document.querySelector('.result').textContent = '결과: + sum'
} */

