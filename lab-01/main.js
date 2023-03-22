// const images = document.querySelectorAll(".section__image--js");
// const headers = document.querySelectorAll(".section__header--js");
// const content = document.querySelectorAll(".section__paragraph--js");

// const observerImg = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.intersectionRatio > 0) {
//       entry.target.classList.add("popUp");
//     }
//   });
// });

// const observerHeaders = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.intersectionRatio > 0) {
//       entry.target.classList.add("popUp");
//     }
//   });
// });

// const observerContent = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.intersectionRatio > 0) {
//       entry.target.classList.add("popUp");
//     }
//   });
// });

// images.forEach((images) => {
//   observerImg.observe(images);
// });
// headers.forEach((headers) => {
//   observerHeaders.observe(headers);
// });
// content.forEach((content) => {
//   observerContent.observe(content);
// });

// console.log("hello");

// function scrollTrigger(selector) {
//   let els = document.querySelectorAll(selector);
//   els = Array.from(els);
//   els.forEach((el) => {
//     addObserver(el);
//   });
// }

// function addObserver(el) {
//   let observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("popUp");
//         observer.unobserve(entry.target);
//       }
//     });
//   });
//   observer.observe(el);
// }

// scrollTrigger(".section__image", { rootMargin: "-200px" });
