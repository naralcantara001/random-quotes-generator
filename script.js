// random quotes generator
var generateQuoteBtn = document.querySelector('.generateQuoteBtn');
var w = document.querySelector('.w');
var a = document.querySelector('.a');
var quotes = [
    {
        w: "We grow fearless when we do the things we fear",
        a: "-Robin Sharma."
    },
    {
        w: "Impossible is just an opinion",
        a: "-Paulo Coelho"
    },
    {
        w: "The secret of getting ahead is getting started",
        a: "-Mark Twain"
    },
    {
        w: "When life gives you lemons, squirt someone in the eye",
        a: "-Cathy Guisewite"
    },
    {
        w: "I am so clever that sometimes I don't understand a single word of what I am saying ",
        a: "-Oscar Wilde."
    },
    {
        w: "The miracle is not that we do this work, but that we are happy to do it",
        a: "-Mother Teresa."
    }
];

generateQuoteBtn.addEventListener('click', function(){
    var randomQuotes = quotes[Math.floor(Math.random()*quotes.length)]; 
    w.innerHTML = randomQuotes.w;
    a.innerHTML = randomQuotes.a;
})
