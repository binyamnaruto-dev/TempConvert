let userInputOne = document.querySelector('.up1');
let userInputTwo = document.querySelector('.up2');
let BtnOne = document.querySelector('.conv-to-C')
let BtnTwo = document.querySelector('.conv-to-F')
let BtnClear = document.querySelector('.Clear')
let value;
BtnOne.addEventListener('click', () =>{
    //c = (F - 32) / 1.8; to convert c to f
    value = `${Math.round((userInputOne.value - 32) / 1.8)}°C`
    userInputOne.value = `${userInputOne.value}°F`;
    userInputTwo.value = value;
})

BtnTwo.addEventListener('click', () =>{
    //f = (c * 1.8) + 32; to convert c to f;
    value = `${Math.round((userInputTwo.value * 1.8) + 32)}°F`;
    userInputTwo.value = `${userInputTwo.value}°C`;
    userInputOne.value = value;
})

BtnClear.addEventListener('click', () =>{
    userInputOne.value = '';
    userInputTwo.value = '';
    value = '';
})

