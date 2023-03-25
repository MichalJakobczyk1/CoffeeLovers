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

const sections = document.querySelectorAll(".section");

sections.forEach((section) => {
  observer.observe(section);
});

let isEng = true;

const infoContainer = document.querySelector(".section__container--info");
const sectionInfo = document.querySelector(".section--info");
const sectionProducts = document.querySelector(".section--products");
const sectionAbout = document.querySelector(".section--about");
const sectionContact = document.querySelector(".section--contact");
const buttonPl = document.querySelector(".lang__button--pl");
const buttonEng = document.querySelector(".lang__button--eng");

if (isEng) {
  buttonEng.style.color = "#1b1b1b";
  buttonPl.style.color = "#38ccae";
} else {
  buttonEng.style.color = "#38ccae";
  buttonPl.style.color = "#1b1b1b";
}
buttonPl.addEventListener("click", () => {
  isEng = false;
  if (isEng) {
    buttonEng.style.color = "#1b1b1b";
    buttonPl.style.color = "#38ccae";
  } else {
    buttonEng.style.color = "#38ccae";
    buttonPl.style.color = "#1b1b1b";
  }
  sectionInfo.innerHTML = `
  <img
  class="section__image section__image--info"
  src="./img/coffee_beans.svg"
  alt="coffee beans"
/>
<div class="section__container section__container--info">
  <header class="section__header section__header--info">
    <h1 class="section__h1">
      Jesteśmy <span class="section__special">The Brewers</span>
    </h1>
  </header>
  <p class="section__paragraph section__paragraph--info">
    Sprawdź nasze
    <a href="#products" class="section__link section__link--info"
      >produkty</a
    >, oraz
    <a href="#about" class="section__link section__link--info"
      >kim jesteśmy.</a
    >
  </p>
  <p class="section__paragraph section__paragraph--info">
    Jeśli potrzebujesz więcej informacji,
    <a href="#contact" class="section__link section__link--info"
      >skontaktuj się z nami.</a
    >
  </p>
</div>`;
  sectionProducts.innerHTML = `<header class="section__header section__header--products">
<h2 class="section__h2 section__h2--products section__special">
  Przejrzyj naszą ofertę
</h2>
</header>
<div class="section__container section__container--products">
<div class="section__product section__product--basic">
  <header class="section__header section__header--product">
    <h3 class="section__h3 section__h3--product">Podstawowy</h3>
  </header>
  <ol class="section__list">
    <li class="section__list-item">
      Dostęp do naszych warsztatów raz w miesiącu
    </li>
    <li class="section__list-item">5% cashbacku w naszym sklepie</li>
    <li class="section__list-item">
      Podstawowe materiały i video do nauki
    </li>
  </ol>
  <span class="section__product-price">44.90 na miesiąc</span>
</div>
<div class="section__product section__product--premium">
  <header class="section__header section__header--product">
    <img
      class="section__image section__image--product"
      src="./img/premium.svg"
    />
    <h3 class="section__h3 section__h3--premium">Premium</h3>
  </header>
  <ol class="section__list">
    <li class="section__list-item">
    Dostęp do naszych warsztatów dwa razy w miesiącu
    </li>
    <li class="section__list-item">10% rabatu w naszym sklepie</li>
    <li class="section__list-item">
      Dostęp do naszej grupy na facebooku
    </li>
    <li class="section__list-item">
      Dostęp do cuppingu raz w miesiącu
    </li>
  </ol>
  <span class="section__product-price">74.90 na miesiąc</span>
</div>
<div class="section__product section__product--elite">
  <header class="section__header section__header--product">
    <img
      class="section__image section__image--product"
      src="./img/elite.svg"
    />
    <h3 class="section__h3 section__h3--product">Elitarny</h3>
  </header>

  <ol class="section__list">
    <li class="section__list-item">
      Nielimitowany dostęp do naszych treningów
    </li>
    <li class="section__list-item">20% rabatu w naszym sklepie</li>
    <li class="section__list-item">Nielimitowany dostęp do cuppingów</li>
    <li class="section__list-item">
      Dostęp do specjalnych materiałów i video do nauki
    </li>
    <li class="section__list-item">
      Prywatne warsztaty 2 razy w miesiącu
    </li>
  </ol>
  <span class="section__product-price">110.90 na miesiąc</span>
</div>
</div>`;
  sectionAbout.innerHTML = `<img
class="section__image section__image--about"
src="./img/question_mark.svg"
alt="question mark"
/>
<div class="section__container section__container--about">
<header class="section__header section__header--about">
  <h2 class="section__h2 section__special">Kim dokładnie jesteśmy?</h2>
</header>
<p class="section__paragraph section__paragraph--about">
Miłośnicy kawy speciality w Krakowie to grupa pasjonatów z głębokim zrozumieniem dla wysokiej jakości kawy i kultury, która ją otacza. Są znający różne metody parzenia, cieszą się latte art i zawsze szukają nowych i innowacyjnych technik. Cenią sobie aspekt społeczny kultury kawy i lubią spotykać się z podobnie myślącymi ludźmi, aby dzielić się doświadczeniami i uczestniczyć w wydarzeniach związanych z kawą. Ta społeczność to żywa i pełna pasji grupa ludzi, którzy dumnie są częścią kultury kawy w Krakowie.
</p>
</div>`;
  sectionContact.innerHTML = `<header class="section__header section__header--contact">
<h2 class="section__h2 section__h2--contact section__special">
  Dowiedz się o nas więcej i wyskoczmy na kawę!
</h2>
</header>
<div class="section__container section__container--contact">
<div class="section__tile section__tile--facebook">
  <a
    href="https://www.facebook.com/"
    target="_blank"
    class="section__link section__link--contact"
  >
    <img
      class="section__image section__image--contact"
      src="./img/facebook.svg"
      alt="facebook icon"
    />
  </a>
  <p class="section__paragraph section__paragraph--contact">
    Sprawdź nasze nowe posty na facebooku
  </p>
</div>
<div class="section__tile section__tile--instagram">
  <a
    href="https://www.instagram.com/"
    target="_blank"
    class="section__link section__link--contact"
  >
    <img
      class="section__image section__image--contact"
      src="./img/instagram.svg"
      alt="instagram icon"
    />
  </a>
  <p class="section__paragraph section__paragraph--contact">
    Nasze nowe relacje i materiały z warsztatów na instagramie
  </p>
</div>
<div class="section__tile section__tile--tiktok">
  <a
    href="https://www.tiktok.com/"
    target="_blank"
    class="section__link section__link--contact"
  >
    <img
      class="section__image section__image--contact"
      src="./img/tiktok.svg"
      alt="tiktok icon"
    />
  </a>
  <p class="section__paragraph section__paragraph--contact">
    I video naszego zespołu na tiktoku!
  </p>
</div>
</div>`;
});

buttonEng.addEventListener("click", () => {
  isEng = true;
  if (isEng) {
    buttonEng.style.color = "#1b1b1b";
    buttonPl.style.color = "#38ccae";
  } else {
    buttonEng.style.color = "#38ccae";
    buttonPl.style.color = "#1b1b1b";
  }
  sectionInfo.innerHTML = `<img
class="section__image section__image--info"
src="./img/coffee_beans.svg"
alt="coffee beans"
/>
<div class="section__container section__container--info">
<header class="section__header section__header--info">
  <h1 class="section__h1">
    We are <span class="section__special">The Brewers</span>
  </h1>
</header>
<p class="section__paragraph section__paragraph--info">
  Checkout our
  <a href="#products" class="section__link section__link--info"
    >products</a
  >, and
  <a href="#about" class="section__link section__link--info"
    >who are we.</a
  >
</p>
<p class="section__paragraph section__paragraph--info">
  If you desire further information,
  <a href="#contact" class="section__link section__link--info"
    >contact us.</a
  >
</p>
</div>`;
  sectionProducts.innerHTML = ` <header class="section__header section__header--products">
<h2 class="section__h2 section__h2--products section__special">
  See what we have to offer
</h2>
</header>
<div class="section__container section__container--products">
<div class="section__product section__product--basic">
  <header class="section__header section__header--product">
    <h3 class="section__h3 section__h3--product">Basic</h3>
  </header>
  <ol class="section__list">
    <li class="section__list-item">
      Access to our training once per month
    </li>
    <li class="section__list-item">5% cashback in our store</li>
    <li class="section__list-item">
      Basic materials and videos for selflearning
    </li>
  </ol>
  <span class="section__product-price">44.90 per month</span>
</div>
<div class="section__product section__product--premium">
  <header class="section__header section__header--product">
    <img
      class="section__image section__image--product"
      src="./img/premium.svg"
    />
    <h3 class="section__h3 section__h3--premium">Premium</h3>
  </header>
  <ol class="section__list">
    <li class="section__list-item">
      Access to our training twice per month
    </li>
    <li class="section__list-item">10% discount in our store</li>
    <li class="section__list-item">
      Access to our group on facebook
    </li>
    <li class="section__list-item">
      Access to cupping once per month
    </li>
  </ol>
  <span class="section__product-price">74.90 per month</span>
</div>
<div class="section__product section__product--elite">
  <header class="section__header section__header--product">
    <img
      class="section__image section__image--product"
      src="./img/elite.svg"
    />
    <h3 class="section__h3 section__h3--product">Elite</h3>
  </header>

  <ol class="section__list">
    <li class="section__list-item">
      Unlimited access to our trainings
    </li>
    <li class="section__list-item">20% discount in our store</li>
    <li class="section__list-item">Unlimited access to cuppings</li>
    <li class="section__list-item">
      Access to special materials for selflearning
    </li>
    <li class="section__list-item">
      Private training once per month
    </li>
  </ol>
  <span class="section__product-price">110.90 per month</span>
</div>
</div>`;
  sectionAbout.innerHTML = `<img
class="section__image section__image--about"
src="./img/question_mark.svg"
alt="question mark"
/>
<div class="section__container section__container--about">
<header class="section__header section__header--about">
  <h2 class="section__h2 section__special">Who are we exactly?</h2>
</header>
<p class="section__paragraph section__paragraph--about">
  Krakow's coffee specialty enthusiasts are a passionate group of
  individuals with a deep appreciation for high-quality coffee and the
  culture that surrounds it. They are knowledgeable about different
  brewing methods, enjoy latte art, and are always on the lookout for
  new and innovative techniques. They value the social aspect of the
  coffee culture and enjoy meeting like-minded individuals to share
  experiences and attend coffee events. This community is a vibrant
  and passionate group of individuals who are proud to be part of the
  coffee culture in Krakow.
</p>
</div>`;
  sectionContact.innerHTML = `<header class="section__header section__header--contact">
<h2 class="section__h2 section__h2--contact section__special">
  Check us out and lets go on coffee together!
</h2>
</header>
<div class="section__container section__container--contact">
<div class="section__tile section__tile--facebook">
  <a
    href="https://www.facebook.com/"
    target="_blank"
    class="section__link section__link--contact"
  >
    <img
      class="section__image section__image--contact"
      src="./img/facebook.svg"
      alt="facebook icon"
    />
  </a>
  <p class="section__paragraph section__paragraph--contact">
    Check our facebook for news and posts
  </p>
</div>
<div class="section__tile section__tile--instagram">
  <a
    href="https://www.instagram.com/"
    target="_blank"
    class="section__link section__link--contact"
  >
    <img
      class="section__image section__image--contact"
      src="./img/instagram.svg"
      alt="instagram icon"
    />
  </a>
  <p class="section__paragraph section__paragraph--contact">
    Our instagram for relations and photos from trainings
  </p>
</div>
<div class="section__tile section__tile--tiktok">
  <a
    href="https://www.tiktok.com/"
    target="_blank"
    class="section__link section__link--contact"
  >
    <img
      class="section__image section__image--contact"
      src="./img/tiktok.svg"
      alt="tiktok icon"
    />
  </a>
  <p class="section__paragraph section__paragraph--contact">
    And our tiktok for funny videos from our staff!
  </p>
</div>
</div>`;
});
