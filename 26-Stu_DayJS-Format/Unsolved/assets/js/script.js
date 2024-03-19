// Use Day.js to format the date and assign to the declared variable.

// TODO: 1. What is your graduation date in the following format: Jan 1, 1999?
// Use Day.js to format the date and assign to the declared variable.
const graduationDate = dayjs('08/01/2024').format('MMM D, YYYY');
$('#1a').text(graduationDate);
// TODO: 2. What day of the week will 1/1/2027 be? (e.g. Is it "Monday"?)
const dayOfWeek = dayjs('1/1/2027').format('dddd');
$('#2a').text(dayOfWeek);
// TODO: 3. What is the current time in the format: hours:minutes:seconds
const currentTime = dayjs().format('HH:mm:ss');
$('#3a').text(currentTime);
// TODO: 4. What is the current Unix timestamp?
const unixTimestamp = dayjs().unix();
$('#4a').text(unixTimestamp);
// TODO: 5. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.
const parsedTimestamp = dayjs.unix(1318781876).format('YYYY-MM-DD HH:mm:ss');
$('#5a').text(parsedTimestamp);
// TODO: 6. What is the difference in days between May 4, 2027 and today?
const today = dayjs();
const may4th2027 = dayjs('2027-05-04');
const differenceInDays = may4th2027.diff(today, 'day');
$('#6a').text(differenceInDays);

