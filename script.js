const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.getElementById("container");

open.addEventListener("click", () => {
  container.classList.add("active");
  document.body.style.overflow = "hidden";
});
close.addEventListener("click", () => {
  container.classList.remove("active");
  document.body.style.overflow = "scroll";
});

/***************************************************/

function getStr(...arg) {
  return arg.slice(1).join(arg[0]);
}
console.log(getStr("*", "2", "s", "2d"));

/***************************************************/

//   if (open) {
//     document.body.style.overflow = "hidden";
//   } else {
//     document.body.style.overflow = "visible";
//   }
// };
