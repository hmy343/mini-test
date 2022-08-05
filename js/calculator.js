const btnList = document.querySelectorAll('.btn');
const result = document.getElementById('result-input');
// console.log(btnList);

let calculator = [];
let preVal = 0;
for (let btn of btnList) {
    // console.log(btn.innerText);
    btn.addEventListener("click", () => {
        // console.log(btn.innerText);
        switch (btn.innerText) {
            case '+':
                calculator[1] = '+';
                result.value = preVal + Number(result.value);
                preVal = Number(result.value);
                calculator[0] = preVal;
                console.log(calculator);
                break;
            case '-':
                // console.log("-");
                calculator[1] = '-';
                calculator[0] = Number(result.value);
                
                console.log(calculator);
                break;
            case '*':
                // console.log("*");
                calculator[1] = '*';
                result.value = preVal * Number(result.value);
                preVal = Number(result.value);
                calculator[0] = preVal;
                console.log(calculator);
                break;
            case '/':
                // console.log("/");
                calculator[1] = '/';
                result.value = preVal / Number(result.value);
                preVal = Number(result.value);
                calculator[0] = preVal;
                console.log(calculator);
                break;
            case '=':
                // console.log("=");
                result.value = finishCal(calculator, Number(result.value));
                // preVal = Number(result.value);
                preVal = 0;
                calculator = []
                console.log(calculator);
                break;
            case 'C':
                // console.log("C");
                result.value = '';
                preVal = 0;
                calculator = [];
                break;
            default:
                for (let cal of calculator) {
                    if (typeof cal == 'string') {
                        result.value = '';
                    }
                }
                result.value += btn.innerText;
                // console.log(typeof result.value);
                break;
        }
    });
}

function finishCal(calculator, result) {
    switch (calculator[1]) {
        case '+':
            return calculator[0] + result;
        case '-':
            return calculator[0] - result;
        case '*':
            return calculator[0] - result;
        case '/':
            return calculator[0] - result;
    }
}