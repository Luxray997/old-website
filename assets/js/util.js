function getValueFromRadioButtons(inputElements) {
    for (let i = 0; i < inputElements.length; i++) {
       if (inputElements[i].checked) {
          return inputElements[i].value;
       }
    }
    return null;
 }

 
function randomInt(start, rangeSize) {
    return start + Math.floor(Math.random() * rangeSize);
}

export { getValueFromRadioButtons, randomInt };