const bgmanou = ["M", "a", "n", "o", "u"];
const t = {
  duration: 150,
};
for (item in bgmanou) {
  document.getElementById(bgmanou[item]).style.animation =
    "move 2s " + (item * 1.4) / 10 + "s infinite" + " ease-in-out";
}
