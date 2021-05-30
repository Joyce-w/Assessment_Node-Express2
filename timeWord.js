function timeWord(time) {
    
    //edge cases
    if (time === '00:00' || time === '24:00') {
        return 'midnight'
    }
    if (time === '12:00') {
        return 'noon'
    }

    //slice hours and minutes out, turn into int
    let hour = +(time.slice(0, 2));
    let minutes = +(time.slice(3, 5));
    let tenthPlace = +(time.slice(3, 4));
    let onesPlace = +(time.slice(4, 5));
    
    const words = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        10: 'ten',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty'
    }
    //adjust hour to 12 hour
    if (hour > 12) {
        hour = hour - 12;
    }
    let hourWord = words[hour];

    // logic for
    let minuteWord;

    //if minute is less than 10
    if (tenthPlace === 0) {
        minuteWord = `oh ${words[onesPlace]}`
    }
    if (tenthPlace == 00) {
        minuteWord = `o'clock`
    }
    //if mins are 10s 
    else if (onesPlace === 0) {
        minuteWord = words[minutes];
    }
    // check for -teen words
    else if (minutes > 9 && minutes < 20) {
        minuteWord = words[minutes];
    }
    else {
        minutes = minutes - onesPlace;
        minuteWord = `${words[minutes]} ${words[onesPlace]}`
    }

    //meridiem check
    let meridiem = hour === 24 || hour < 12 ? 'am' : 'pm';
    
    return `${hourWord} ${minuteWord} ${meridiem}`;

}

module.exports = timeWord;