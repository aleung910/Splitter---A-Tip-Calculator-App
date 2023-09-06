var price = 0;
var people = 0;

function updateCalculations() {
    price = parseFloat(document.querySelector('#priceinput').value);
    people = parseFloat(document.querySelector('#numofpeopleinput').value);

    var errorElementPrice = document.querySelector('.error.off1');
    var errorElementPeople = document.querySelector('.error.off2');

    if (!isNaN(price) && !isNaN(people) && people >= 0) {
        var tipPercentage = 0;

        var selectedTipOption = document.querySelector('.pp.selected');
        if (selectedTipOption) {
            tipPercentage = parseFloat(selectedTipOption.innerText) / 100;
        } else {
            tipPercentage = parseFloat(document.querySelector('#custom').value) / 100;
        }

        var tipAmount = (price * tipPercentage) / people;
        var totalAmount = (price / people) + tipAmount;

        document.getElementById('valtip').innerText = `$${tipAmount.toFixed(2)}`;
        document.getElementById('valtotal').innerText = `$${totalAmount.toFixed(2)}`;
        
    //     if (price === 0) {
    //         errorElementPrice.classList.remove('off1');
    //     } else {
    //         errorElementPrice.classList.add('off1');
    //     }

    //     if (people === 0) {
    //         errorElementPeople.classList.remove('off2');
    //     } else {
    //         errorElementPeople.classList.add('off2');
    //     }
    // } else {
    //     errorElementPrice.classList.add('off1');
    //     errorElementPeople.classList.add('off2');
    }
}


document.querySelector('#priceinput').addEventListener('input', updateCalculations);
document.querySelector('#numofpeopleinput').addEventListener('input', updateCalculations);

// Add event listener to the custom input field
var customInput = document.getElementById('custom');
customInput.addEventListener('input', function () {
    updateCalculations();
});

// Update your tipOptions selection to include the custom input
var tipOptions = document.querySelectorAll('.pp, #custom');
tipOptions.forEach(function (option) {
    option.addEventListener('click', function () {
        tipOptions.forEach(function (opt) {
            opt.classList.remove('selected');
        });
        option.classList.add('selected');
        updateCalculations();
    });
});

function resetForm() {
    document.querySelector('#priceinput').value = '';
    document.querySelector('#numofpeopleinput').value = '';
    document.querySelector('#custom').value = '';

    var tipOptions = document.querySelectorAll('.pp');
    tipOptions.forEach(function (option) {
        option.classList.remove('selected');
    });

    document.getElementById('valtip').innerText = '$0.00';
    document.getElementById('valtotal').innerText = '$0.00';
}
document.querySelector('.button').addEventListener('click', resetForm);