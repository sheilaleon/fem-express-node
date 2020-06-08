const express = require('express');
const path = require('path');

let feedbackType = null;

const compliments = [
  "You're an awesome friend.",
  "You're a gift to those around you.",
  "You're a smart cookie.",
  'You are awesome!',
  'I like your style.',
  'You are enough.',
  "You're a good egg.",
  "You're more helpful than you realise.",
  "On a scale from 1 to 10, you're an 11.",
  'You are making a difference.',
  'Thank you for being there for me.',
  "You're all that and a super-size bag of chips.",
  "You're like a ray of sunshine on a really dreary day.",
];

const insults = [
  "Why don't you dig yourself a hole and lay in it.",
  'I do not consider you a vulture. I consider you something a vulture would eat.',
  'People clap when they see you. They clap their hands over their eyes.',
  'You are proof that God has a sense of humour.',
  'If I throw a stick, will you leave?',
  'A sharp tongue is no indication of a keen mind',
  'In the land of witless, you would be king.',
  "I'd prefer a battle of wits, but you appear unarmed",
  'I regard you with an indifference of bordering on aversion.',
  'You sir, are the reason God created the middle finger.',
  'Sometimes I need what only you can provide, your absence.',
  'Your inferiority complex is fully justified.',
  'You have delusions of adequacy.',
];

function getRandomFeedback() {
  const random = Math.floor(Math.random() * feedbackType.length);
  return feedbackType[random];
}

const app = express();

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/compliment', function(req, res) {
  feedbackType = compliments;
  res
    .json({
      compliment: getRandomFeedback(feedbackType),
    })
    .end();
});

app.get('/insult', function(req, res) {
  feedbackType = insults;
  res
    .json({
      insult: getRandomFeedback(feedbackType),
    })
    .end();
});

app.use('/public', express.static('./public'));

app.listen(3000);
console.log('Listening on http://localhost:3000');
