
const buildCard = (character) => {
  const card = document.createElement("article");
  card.classList.add("card");

  card.innerHTML = `
   <img src="${character.image}" alt="${character.name}" class="character" />
    <h2>${character.name}</h2>
    <span>${character.species}</span>
  `;

  return card;
}

const API = `https://rickandmortyapi.com/api/character`

const doSomethingAsync = fetch(API)
.then(response => response.json())
.then(data => {
   data.results.map(character => {
      const card = buildCard(character);
      promiseContainer.appendChild(card);
    });
}
  )

.catch(err => console.log(err))

