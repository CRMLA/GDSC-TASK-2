const mobileNav = document.getElementById("mobile-nav");
const burger = document.querySelector(".burger");
const logo = document.querySelector(".logo");
const header = document.querySelector("header");

const featureTitle = document.getElementById("feature-title");
const featureDescription = document.getElementById("feature-description");
const featureImage = document.getElementById("feature-img");
const btn1 = document.getElementById("simple");
const btn2 = document.getElementById("speedy");
const btn3 = document.getElementById("easy");

const arrow1 = document.getElementById("arrow1");
const arrow2 = document.getElementById("arrow2");
const arrow3 = document.getElementById("arrow3");
const arrow4 = document.getElementById("arrow4");
const faq_1 = document.getElementById("faq-1");
const faq_2 = document.getElementById("faq-2");
const faq_3 = document.getElementById("faq-3");
const faq_4 = document.getElementById("faq-4");

const body = document.querySelector("body");
const featureDes = document.querySelector(".features-description");
const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

hiddenElements.forEach((el) => observer.observe(el));

function enableScroll() {
  body.classList.toggle(".enable-scroll");
}

function disableScroll() {
  body.classList.toggle("disable-scroll");
}

burger.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
  if (mobileNav.classList.contains("active")) {
    burger.src = "images/icon-close.svg";
    mobileNav.classList.replace("mobile-nav", "mobile-nav-active");
    body.classList.replace("enable-scroll", "disable-scroll");
  } else {
    burger.src = "images/icon-hamburger.svg";
    mobileNav.classList.replace("mobile-nav-active", "mobile-nav");
    body.classList.replace("disable-scroll", "enable-scroll");
  }
});

// code to close the mobile nav when a link is clicked or when clicked anywhere on the page
mobileNav.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
  if (mobileNav.classList.contains("active")) {
    burger.src = "images/icon-close.svg";
    mobileNav.classList.replace("mobile-nav", "mobile-nav-active");
  } else {
    burger.src = "images/icon-hamburger.svg";
    mobileNav.classList.replace("mobile-nav-active", "mobile-nav");
    body.classList.replace("disable-scroll", "enable-scroll");
  }
});

featureTitle.addEventListener("click", () =>
  console.log("featureTitle clicked")
);
featureDescription.addEventListener("click", () =>
  console.log("featureDescription clicked")
);
featureImage.addEventListener("click", () => console.log("img clicked"));

window.onload = () => {
  btn1.click();
};

btn1.addEventListener("click", () => {
  btn1.style.borderBottom = "3px solid hsl(0, 94%, 66%)";
  btn2.style.borderBottom = "";
  btn3.style.borderBottom = "";
  featureTitle.innerText = "Simple Bookmarking";
  featureDescription.innerText =
    "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.";
  featureImage.src = "/images/illustration-features-tab-1.svg";
});

btn2.addEventListener("click", () => {
  btn1.style.borderBottom = "";
  btn2.style.borderBottom = "3px solid hsl(0, 94%, 66%)";
  btn3.style.borderBottom = "";
  featureTitle.innerText = "Intelligent search";

  featureDescription.innerText =
    "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.";
  featureImage.src = "/images/illustration-features-tab-2.svg";
});

btn3.addEventListener("click", () => {
  btn1.style.borderBottom = "";
  btn2.style.borderBottom = "";
  btn3.style.borderBottom = "3px solid hsl(0, 94%, 66%)";
  featureTitle.innerText = "Share your bookmarks";
  featureDescription.innerText =
    "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.";
  featureImage.src = "/images/illustration-features-tab-3.svg";
});

document.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.style.backgroundColor = "#6778d4";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

// -------------------------------------------------------------------------------------------------
faq_1.addEventListener("click", () => {
  arrow1.style.transform = "rotate(180deg)";
  arrow1.style.transition = "0.5s ease";

  arrow2.style.transform = "";
  arrow2.style.transition = "";

  arrow3.style.transform = "";
  arrow3.style.transition = "";

  arrow4.style.transform = "";
  arrow4.style.transition = "";
});
faq_2.addEventListener("click", () => {
  arrow1.style.transform = "";
  arrow1.style.transition = "";

  arrow2.style.transform = "rotate(180deg)";
  arrow2.style.transition = "0.5s ease";

  arrow3.style.transform = "";
  arrow3.style.transition = "";

  arrow4.style.transform = "";
  arrow4.style.transition = "";
});

faq_3.addEventListener("click", () => {
  arrow1.style.transform = "";
  arrow1.style.transition = "";

  arrow2.style.transform = "";
  arrow2.style.transition = "";

  arrow3.style.transform = "rotate(180deg)";
  arrow3.style.transition = "0.5s ease";

  arrow4.style.transform = "";
  arrow4.style.transition = "";
});

faq_4.addEventListener("click", () => {
  arrow1.style.transform = "";
  arrow1.style.transition = "";

  arrow2.style.transform = "";
  arrow2.style.transition = "";

  arrow3.style.transform = "";
  arrow3.style.transition = "";

  arrow4.style.transform = "rotate(180deg)";
  arrow4.style.transition = "0.5s ease";
});
