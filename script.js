const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.getElementById("container");

open.addEventListener("click", () => {
  container.classList.add("active");
});
close.addEventListener("click", () => {
  container.classList.remove("active");
});

/* есть функция, у которой в качестве аргументов строки '*', '2', 's', '2d',
 реализуйте ее так чтобы вернулась строка '2*s*2d' 
 */

function getStr(...arg) {
  return arg.slice(1).join(arg[0]);
}
console.log(getStr("*", "2", "s", "2d"));
