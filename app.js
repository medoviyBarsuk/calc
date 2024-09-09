const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')

function computePercent(inp1, inp2) {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    return (Math.abs((num1 - num2)/num1 * 100).toFixed(2) + '%')
}

submitBtn.onclick = function () {
    const result = computePercent(input1, input2)
    resultElement.textContent = result

    if (Number(input1.value) > Number(input2.value)) {
        resultElement.style.color = 'red'
        resultElement.textContent = "снизилась на " + result
    } else {
        resultElement.style.color = 'green'
        resultElement.textContent = "выросла на " + result
    }
}



