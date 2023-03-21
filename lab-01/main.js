const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting)
        entry.target.style.animation = `popUp 0.75s 0.5s forwards ease-in-out`;
    });
  },
  {
    threshold: 0.5,
  }
);

const sections = document.querySelectorAll(".section");

sections.forEach((section) => {
  observer.observe(section);
});
