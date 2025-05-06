
    const a = parseFloat(document.getElementById("num1").value); //value는 문자로 가져오기 때문에 parse로 넘버로 바꿔야함
    const b = parseFloat(document.getElementById("num2").value);
    const result = document.querySelector('#result');

    const plusBtn = document.querySelector("#plus");
    const minusBtn = document.querySelector("#minus");
    const xBtn = document.querySelector("#x");
    const diviBtn = document.querySelector("#divi");
    let final;

    plusBtn.addEventListener("click", function () {
        const a = parseFloat(document.getElementById("num1").value); //value는 문자로 가져오기 때문에 parse로 넘버로 바꿔야함
        const b = parseFloat(document.getElementById("num2").value);
        final = a+b;
        result.textContent = `결과: ${final}`;
    });

    minusBtn.addEventListener("click", function () {
        result.textContent = `결과: ${a-b}`;
    });

    xBtn.addEventListener("click", function () {
        result.textContent = `결과: ${a*b}`;
    });

    diviBtn.addEventListener("click", function () {
        result.textContent = `결과: ${a/b}`;
    });

//연산 과정을 담은 함수 생성 후에 button에서는 그 함수를 호출만하도록