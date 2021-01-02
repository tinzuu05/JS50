const tagsEl = document.querySelector("#tags");
const textarea = document.querySelector("#textarea");

textarea.focus();

textarea.addEventListener("keyup", (e) => {
  createTages(e.target.value);

  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value;
    }, 10);

    randomSelect();
  }
});

function createTages(input) {
  const tags = input
    .split(',')
    .filter(tag => tag.trim() !== '')
    .map(tag => tag.trim());

  tagsEl.innerHTML = ''

  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
}

function randomSelect() {
  const times = 30;

  const intervel = setInterval(() => {
      const randomTag = pickRandomTag()

      highlightTag(randomTag)

      setTimeout(() => {
          unHighlightTag(randomTag)
      }, 100)
  }, 100);

  setTimeout(() => {
      clearInterval(intervel)

      setTimeout(() => {
          const randomTag = pickRandomTag()

          highlightTag(randomTag)
      }, 100)
  }, times * 100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unHighlightTag(tag) {
    tag.classList.add('highlight')
}