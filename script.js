function toggleAnswer(answerId) {
    var answer = document.getElementById(answerId);
  
    if (answer.classList.contains("show")) {
      answer.classList.remove("show");
    } else {
      // Hide all other answers
      var allAnswers = document.querySelectorAll('.hidden-text');
      allAnswers.forEach(function(el) {
        el.classList.remove('show');
      });
  
      // Show the clicked answer
      answer.classList.add("show");
    }
  }
  