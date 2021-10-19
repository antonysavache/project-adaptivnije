const readMoreBtn = document.querySelector(".about-read-more-btn");
const text = document.querySelector(".about-text");

readMoreBtn.addEventListener("click", (e) => {
  e.preventDefault();
  text.classList.toggle("show-more");
  if (e.target.textContent === "Read more") {
    e.target.textContent = "Less";
  } else {
    e.target.textContent = "Read more";
  }
});
