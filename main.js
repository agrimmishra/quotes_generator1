let btn = document.querySelector('#button');
let author = document.getElementById('author');
let newQuote = document.getElementById('quotes');
const quotes = [{
    quote:`"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."`,
    author:`Marilyn Monroe`
},{
    quote:`“Be yourself; everyone else is already taken.”`,
    author:`Oscar Wilde`
},{
    quote:`“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
    author:`Albert Einstein`
},{
    quote:`“Be the change that you wish to see in the world.”`,
    author:`Mahatma Gandhi`
},{
    quote:`“Man is made by his belief. As he believes, so he is”`,
    author:`Bhagvat Gita`
},{
    quote:`“You are only entitled to the action, never to its fruits.”`,
    author:`Bhagvat Gita`
},{
    quote:`“Guide Us To The Straight Path”`,
    author:`Quran`
   
}
];

function changeQuote(){
    let random = Math.floor(Math.random()*quotes.length);
    newQuote.innerText = quotes[random].quote;
    author.innerText = quotes[random].author;
}

btn.addEventListener('click',changeQuote);
