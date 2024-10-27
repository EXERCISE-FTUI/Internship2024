const getElement = (identifier = "") => document.querySelector(identifier);

function verifySubmission() {
  let subjectElement = getElement("#subject").value;
  let messageElement = getElement("#message").value;
  let nameElement = getElement("#name").value;

  if (subjectElement && messageElement && nameElement) {
    let body = encodeURIComponent("From: " + nameElement + "\n" + messageElement);
    window.location.href = "mailto:kamal.makarim@gmail.com?subject=" + subjectElement + "&body=" + body;
  } else {
    alert("Please fill in all required fields.");
  }
}

getElement("#sendButton").addEventListener("click", verifySubmission);
