const root = document.getElementById('root');
const search = new URLSearchParams(window.location.search);

const name = search.get('name');
const h2 = document.createElement('h2');

fetch(`/api/v1/colors/${name}`)
  .then(res => res.json())
  .then(color => {
    h2.textContent = `${color.name} hex= ${color.hex}`;
  });

root.appendChild(h2);
