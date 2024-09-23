function getClassHidden(hidden, color){
    document.getElementById('donation').classList.add('hidden');
    document.getElementById('history').classList.add('hidden');

    document.getElementById('donation-btn').classList.add('bg-lime-400');
    document.getElementById('history-btn').classList.add('bg-lime-400');

    document.getElementById(hidden).classList.remove('hidden')
    document.getElementById(color).classList.remove('bg-lime-400')
}

function getInnerText(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

function getInputValue(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}