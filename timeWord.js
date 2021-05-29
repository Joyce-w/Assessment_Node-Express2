function timeWord(time) {
    
    let timeword = '';
    
    //edge cases
    if (time === '00:00') {
        timeword = 'midnight'
        return timeword;
    }
    if (time === '12:00') {
        timeword = 'noon'
        return timeword;
    }

    //slice hours and minutes out, turn into int
    let newHr; 
    let hour = +(time.slice(0, 2));
    //get the hour if it is past noon
    // if (hour > 12) {
    //     newHr = hour - 12;
    // }

    let minutes = +(time.slice(3, 5));
    let smMinutes = +(time.slice(4,5))

    //number checks
    const am = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const pm = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    const hourWords = {
        1 : 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13:'thirteen',
        14:'fourteen',
        15:'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    }

    const minuteWords = {
        10: 'ten',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty'
    }
    if (smMinutes < 10) {
        smMinutes = hourWords[smMinutes]
    }

    if (minutes === 00) {
        timeword = `${hourWords[hour]} o'clock`;
    }
    else if (minutes < 20 && minutes > 00 ) {
        timeword = `${hourWords[hour]} ${minuteWords[minutes]} `
    }

    if (hour < 12) {
        timeword += ' am'
    } else {
        timeword += ' pm'
    }

    return timeword;
}