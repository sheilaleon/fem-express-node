document.querySelector('.request-compliment').addEventListener('click', function() {
  fetch('/compliment')
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      document.querySelector('.feedback').innerText = data.compliment;
      complimentBg();
    })
    .catch(function(err) {
      console.error(err);
    });
});

document.querySelector('.request-insult').addEventListener('click', function() {
  fetch('/insult')
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      document.querySelector('.feedback').innerText = data.insult;
      insultBg();
    })
    .catch(function(err) {
      console.error(err);
    });
});
