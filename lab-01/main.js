const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting)
        entry.target.style.animation = `popUp 0.75s 0.5s forwards ease-in-out`;
    });
  },
  {
    threshold: 0.2,
  }
);

// const arrow = document.querySelector(".main__container");
// const arrowTrigger = document.querySelector(".section__container--products");
// const arrowObserver = new IntersectionObserver((entry) => {
//   if (entry.isIntersecting) console.log("Works");
// });

const sections = document.querySelectorAll(".section");

sections.forEach((section) => {
  observer.observe(section);
});
// arrowObserver.observe(arrowTrigger);
