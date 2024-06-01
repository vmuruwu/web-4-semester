function ShowDaysCount(){
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date(inputDate.value);
    let daysCount = (today - birthday)/1000/60/60/24;
    daysCount = Math.floor(daysCount);
    let out = document.querySelector('.out');
    out.innerHTML = 'Количество дней с даты рождения: ' + daysCount;
}
function clearText(){
    let out = document.querySelector('.out');
    let inputDate = document.querySelector('input[type=date]');
    out.innerHTML = ' ';
    inputDate.value = '';
}