import input from 'input';

async function main() {
    const userName = await input.text('What is your name?');

userName ? console.log(`Hello ${userName}`) : console.log("Hello!");
    const userQuestion = await input.text('What is your question?');

console.log(`The user asked: ${userQuestion}`);
    
let randomNumber = Math.floor(Math.random() * 9);
    let eightBall = '';
    switch (randomNumber) {
    case 0:
        eightBall = 'It is certain';
    break;
    case 1:
        eightBall = 'It is decidedly so';
    break;
    case 2:
        eightBall = 'Reply hazy try again'
    break;
    case 3:
        eightBall = 'Cannot predict now'
    break;
    case 4:
        eightBall = 'Do not count on it'
    break;
    case 5:
        eightBall = 'My sources say no'
    break;
    case 6:
        eightBall = 'Outlook not so good'
    break;
    case 7:
        eightBall = 'Signs point to yes'
    break;
    case 8:
        eightBall = 'Concentrate and ask again'
    break;
    case 9:
        eightBall = 'As I see it, yes'
    break;
    }
    console.log(`The eight ball answered: ${eightBall}`);
        const resp = await input.text('Do you wish to continue?');
    if (resp.toUpperCase().includes ('Y') && !resp.toUpperCase().includes ('N')) {
        main();
    }
    
}
main();