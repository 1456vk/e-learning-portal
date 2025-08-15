function checkAnswers() {
    let score = 0;
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const result = document.getElementById('result');
  
    // Validate selection
    if (!q1 || !q2) {
      result.className = 'alert alert-warning';
      result.textContent = 'Please answer all questions before submitting.';
      return;
    }
  
    if (q1.value === 'a') score++;
    if (q2.value === 'b') score++;
  
    // Feedback
    if (score === 2) {
      result.className = 'alert alert-success';
      result.textContent = `Excellent! Your score: ${score} / 2 ✅`;
    } else if (score === 1) {
      result.className = 'alert alert-info';
      result.textContent = `Good try! Your score: ${score} / 2 ✨`;
    } else {
      result.className = 'alert alert-danger';
      result.textContent = `Keep learning! Your score: ${score} / 2 ❗`;
    }
  }
  