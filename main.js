const history = document.getElementById('history');
const result = document.getElementById('result');

// CE Button Handler --
document.querySelector('.clr').addEventListener('click', function () {
    history.value = ""
    result.value = ""
})

// All button function handler 
const inputbtn = document.getElementsByClassName('number');

for (let i = 0; i < inputbtn.length; i++) {
    const numberBtn = inputbtn[i];
    numberBtn.addEventListener('click', function (e) {
        const inputValue = e.target.value
        history.value = history.value + inputValue;
    })
}  


// Equal button handler ---
const EqualBtn = document.getElementById('EqualBtn');
EqualBtn.addEventListener('click', function () {
    const calculation = history.value
    result.value = eval(calculation);
})