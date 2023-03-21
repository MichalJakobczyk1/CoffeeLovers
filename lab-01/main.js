const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("section--active");
    } else {
      entry.target.classList.remove("section--active");
    }
  });
});

const sections = document.querySelectorAll(".section");

sections.forEach((section) => {
  observer.observe(section);
});
