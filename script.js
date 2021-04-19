let URL = 'http://numbersapi.com/',
inputNumber = document.querySelector('.inputNumber'),
numberFact = document.querySelector('.numberFact'),
numberResult = document.querySelector('.numberResult'),
cardTitle = document.querySelector('.card-title strong'),
cardText = document.querySelector('.card-text'),
btnCopy = document.querySelector('.btn-copy'),
fasCopy = document.querySelector('.fas.fa-copy'),
farCopy = document.querySelector('.far.fa-copy');


numberFact.addEventListener('submit', (e) => {
    e.preventDefault();
    let number = inputNumber.value;

    if(number != ''){
        numberResult.style.display = 'block';

        fetch(URL + number)
        .then( response => response.text())
        .then( data => cardText.innerHTML = data )
        .catch( error => console.log( error ));
    
        cardTitle.innerHTML = number;
    }
})

btnCopy.addEventListener('click', () => {
    farCopy.style.display = 'none';
    fasCopy.style.display = 'inline-block';
    
    cardText.select();
    document.execCommand('copy');
})