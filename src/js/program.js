const readMoreBtn = document.querySelector(".program-read-more-btn");
const text = document.querySelector(".program-text");

readMoreBtn.addEventListener("click", (e) => {
  e.preventDefault();
  text.classList.toggle("show-more");
  if (e.target.textContent === "Read more") {
    e.target.textContent = "Less";
  } else {
    e.target.textContent = "Read more";
  }
});
