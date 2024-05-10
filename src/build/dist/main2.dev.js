"use strict";

function loadBody() {
  var currentCards = localStorage.getItem("cards");

  if (currentCards == null) {
    currentCards = [];
  } else {
    currentCards = JSON.parse(currentCards);
  }

  var htmlText = "";

  for (var i = 0; i < currentCards.length; i++) {
    htmlText += "<div class=\"card\" onclick=\"handleState(".concat(i, ")\">\n          <h2>").concat(currentCards[i].question, "</h2>\n          <div id=\"card-").concat(i, "\">\n            <p>").concat(currentCards[i].answer, "</p>\n            <button onclick=\"handleDelete(").concat(i, ")\">Remove</button>\n          </div>\n        </div>");
  }

  document.getElementById("card-container").innerHTML = htmlText;
}

function handleSubmit() {
  var question = document.getElementById("questionField").value;
  var answer = document.getElementById("answerField").value;
  var currentCards = localStorage.getItem("cards");

  if (question && answer) {
    if (currentCards == null) {
      currentCards = [];
    } else {
      currentCards = JSON.parse(currentCards);
    }

    currentCards.push({
      question: question,
      answer: answer
    });
    localStorage.setItem("cards", JSON.stringify(currentCards));
    document.getElementById("questionField").value = "";
    document.getElementById("answerField").value = "";
    loadBody();
  }
}

function handleState(index) {
  var card = document.getElementById("card-".concat(index));

  if (card.style.display == "none") {
    card.style.display = "block";
  } else {
    card.style.display = "none";
  }
}

function handleDelete(index) {
  var currentCards = localStorage.getItem("cards");

  if (currentCards == null) {
    currentCards = [];
  } else {
    currentCards = JSON.parse(currentCards);
  }

  currentCards.splice(index, 1);
  localStorage.setItem("cards", JSON.stringify(currentCards));
  loadBody();
}