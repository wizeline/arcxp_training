// Challenge - Format dates:
// Write a function called formatDates that takes an array of Date objects as input and returns a new array
// where each date is formatted as a string in the format “MM/DD/YYYY”.

const dates: Date[] = [
    new Date(),
    new Date('02-02-02'),
    new Date('2024-05-23'),
    new Date('2024-09-05T12:30')
];

//This approach is correct

function formatDates1(dates: Array<Date>) {
    return dates.map((date) => {
        let day = date.getDate().toLocaleString().padStart(2, '0');
        let month = (date.getMonth() + 1).toLocaleString().padStart(2, '0');
        const year = date.getFullYear();
        return `${month}/${day}/${year}`;
    });
}

//This approcah is less accurate

function formatDates2(dates: Array<Date>) {
    return dates.map((date) => {
        let format = date.toISOString().split('T')[0];
        let chunk = format.split('-');
        return chunk[1] + '/' + chunk[2] + '/' + chunk[0];
    });
}

//We can also use the Moment.js library
import moment from 'moment';

function formatDates3(dates: Array<Date>) {
    return dates.map((date) => {
        return moment(date).format("MM/DD/YYYY");
    });
}

console.log(formatDates1(dates));
console.log(formatDates2(dates));
console.log(formatDates3(dates));
