const dropdownItems = document.querySelectorAll(".header-hider-js");
const header = document.querySelector(".sticky");

const headerDisappear = [
  { transform: "translateY(0)", opacity: 1 },
  { transform: "translateY(-500px)", opacity: 0 },
];

const headerAppear = [
  { transform: "translateY(-500px)", opacity: 0 },
  { transform: "translateY(0)", opacity: 1 },
];

const headerTiming = {
  duration: 2000,
  iterations: 1,
  fill: "forwards",
};

dropdownItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    header.animate(headerDisappear, headerTiming);

    setTimeout(() => {
      header.animate(headerAppear, headerTiming);
    }, 3000);
  });
});
