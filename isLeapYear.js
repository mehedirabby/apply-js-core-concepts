function isLeapYear (year){
    const reminder = year % 4;
    if (reminder == 0){
        //console.log('this is leap year',year)
        return true;
    }

    else{
        //console.log('this is not leap year',year)
    return false;
    }
}

const isMyYearisLeapYear = isLeapYear(1924);
console.log('my year',isMyYearisLeapYear);

const isHerYearisLeapYear = isLeapYear(19233);
console.log('my year',isHerYearisLeapYear);