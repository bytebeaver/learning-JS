const btn = document.querySelector("#new-quote");

const quote = document.querySelector(".quote");

const person = document.querySelector(".person");

const quotes = [
  {
    quote: "quote 2",
    person: "person 2",
  },
  {
    quote: "quote 3",
    person: "person 3",
  },
  {
    quote: "quote 4",
    person: "person 4",
  },
  {
    quote: "quote 5",
    person: "person 5",
  },
  {
    quote: "quote 6",
    person: "person 6",
  },
  {
    quote: "quote 7",
    person: "person 7",
  },
  {
    quote: "quote 8",
    person: "person 8",
  },
];

btn.addEventListener('click' , function()
{
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})
