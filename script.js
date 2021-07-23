const labels = document.querySelectorAll(".sign-in-element label");

labels.forEach((label) => {
  label.innerHTML = label.textContent
    .split("")
    .map(
      //  i stands for 'index'
      //  transition-delay of the
      //  first letter: (i * 50)ms => (0 * 50)ms = 0ms
      //  second letter: (i * 50)ms => (1 * 50)ms = 50ms
      //  etc.
      (letter, i) =>
        `<span style="transition-delay:${i * 70}ms">${letter}</span>`
    )
    .join("");
});
