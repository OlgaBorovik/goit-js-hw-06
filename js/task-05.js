const textInput = document.querySelector('#name-input')
const textOutput = document.querySelector('#name-output')



const enteringName = (e) => {
    if (e.currentTarget.value === '') {
        return textOutput.textContent =`Anonymus`
    }  textOutput.textContent = e.currentTarget.value;
}

textInput.addEventListener("input", enteringName)
    
