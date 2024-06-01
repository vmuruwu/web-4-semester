function showDate(){
    let out1 = document.querySelector('.date1');
    let out2 = document.querySelector('.date2');
    let out3 = document.querySelector('.date3');
    let out4 = document.querySelector('.date4');
    let out5 = document.querySelector('.date5');
    let out6 = document.querySelector('.date6');
    let year = document.querySelector('.year');
    let month = document.querySelector('.month');
    let date = document.querySelector('.date');
    let week = document.querySelector('.week');
    
    const today = new Date();
    const options = { timeZone: 'Pacific/Auckland', hour12: false };
    const koreanDateTime = today.toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' });
    const brazilianDateTime = today.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
    const canadianDateTimeEastern = today.toLocaleString('en-CA', { timeZone: 'America/Toronto' });
    const newZealandDateTime = today.toLocaleString('en-NZ', { timeZone: 'Pacific/Auckland' });
    const indianDateTime = today.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    out1.innerHTML = 'Дата и время для русской локали: ' + today.toLocaleString('ru-RU');
    out2.innerHTML = 'Дата и время для локали Южной Кореи: ' + koreanDateTime;
    out3.innerHTML = 'Дата и время для локали Новой Зеландии: ' + newZealandDateTime;
    out4.innerHTML = 'Дата и время для локали Бразилии: ' + brazilianDateTime;
    out5.innerHTML = 'Дата и время для локали Индии: ' + indianDateTime
    out6.innerHTML = 'Дата и время для локали Канады: ' + canadianDateTimeEastern;
    
    year.innerHTML = 'Текущий год: ' + today.getFullYear();
    nowMonth = today.getMonth();
    const MonthD = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь', ]
    month.innerHTML = 'Текущий месяц: ' + MonthD[nowMonth];
    let nowDate = today.getDate();
    date.innerHTML ='Текущая дата: ' +  nowDate;
    nowWeek = today.getDay();
    const WeekD = ['Воскресенье', 'Понедельник','Вторник','Среда','Четверг','Пятница','Суббота']
    week.innerHTML = 'День недели: ' + WeekD[nowWeek];
}

function WeekF(){
    let da = document.querySelector('.da').value;
    let mo = document.querySelector('.mo').value;
    let ye = document.querySelector('.ye').value;

    let td = new Date(da);
    document.querySelector('.out').innerHTML = 'Блабла ' + td;

    let weekday = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота', 'Воскресенье'];

    let MoN;
    if (mo == 'Январь' || mo == 'январь'){
        MoN = 0;
    }
    else if (mo == 'Февраль' || mo == 'февраль'){
        MoN = 1;
    }
    else if (mo == 'Март' || mo == 'март'){
        MoN = 2;
    }
    else if (mo == 'Апрель' || mo == 'апрель'){
        MoN = 3;
    }
    else if (mo == 'Май' || mo == 'май'){
        MoN = 4;
    }
    else if (mo == 'Июнь' || mo == 'июнь'){
        MoN = 5;
    }
    else if (mo == 'Июль' || mo == 'июль'){
        MoN = 6;
    }
    else if (mo == 'Август' || mo == 'август'){
        MoN = 7;
    }
    else if (mo == 'Сентябрь' || mo == 'сентябрь'){
        MoN = 8;
    }
    else if (mo == 'Октябрь' || mo == 'октябрь'){
        MoN = 9;
    }
    else if (mo == 'Ноябрь' || mo == 'ноябрь'){
        MoN = 10;
    }
    else if (mo == 'Декабрь' || mo == 'декабрь'){
        MoN = 11;
    }
    let d = new Date(ye, MoN, da);
    let n = d.getUTCDay()
    document.querySelector('.out').innerHTML = weekday[n];
}