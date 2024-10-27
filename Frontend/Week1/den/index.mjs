const getElement = (identifier = "") => document.querySelector(identifier)

function verifySubmission(e) {
  let subjectElement = getElement("#subject").value
  let bodyElement = getElement("#body").value

  e.preventDefault()

  if (subjectElement < 5 || subjectElement > 24) {
    alert("Subject must have a minimum length of 5 character!")
  } else {
    if (bodyElement < 10 || bodyElement > 560) {
      alert("Body must have a minimum length of 10 character!")
    } else {
      window.location.href =
        "mailto:kamal.makarim@gmail.com?subject=" +
        subjectElement +
        "&body=" +
        bodyElement
    }
  }
}

getElement("#contactForm").addEventListener("submit", verifySubmission)