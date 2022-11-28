const quotes = [
    {
        quote: "Don't dwell on the past",
        author: 'Unknown',
    },
    {
        quote: 'Believe in yourself',
        author: "That's on me",
    },
    {
        quote: 'Where there is a will there is a way',
        author: 'Angela Merkel',
    },
    {
        quote: 'Life is a journey',
        author: 'Ralph Waldo Emerson',
    },
    {
        quote: "Don't dream, Be it",
        author: 'Tim curry',
    },
    {
        quote: 'No pain, No gain',
        author: 'Benjamin Franklin',
    },
    {
        quote: 'No sweat, No sweet',
        author: 'Unknown',
    },
    {
        quote : 'SIN PRISA PERO SIN PAUSA',
        author : 'Unknown',
    },
    {
        quote : 'Just Do It',
        authoe : 'NIKE',
    }
]

//명언
const quote = document.querySelector('#quote span:first-child');
//명언작성자
const author = document.querySelector('#quote span:last-child');
//명언배열 내에서 무작위 호출
const todayQuotes = quotes[Math.floor(quotes.length * Math.random())];

quote.innerText = todayQuotes.quote;
author.innerText = todayQuotes.author;