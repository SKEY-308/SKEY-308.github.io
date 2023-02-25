// Typing animation

var typed = new typed(".typing", {
  strings: [
    "",
    "Web & Mobile Designer",
    "Web & Mobile Developer",
    "Graphic Designer",
    "YouTuber",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

// Aside

const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length;
for (let i = 0; i < totalNavList; i++) {
  console.log(navList[i]);
}
