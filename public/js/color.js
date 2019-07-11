const root = document.getElementById('root');
const search = new URLSearchParams(window.location.search);

const name = search.get('name');
const p = document.createElement('p');

fetch(`/api/v1/colors/${name}`)
  .then(res => res.json())
  .then(color => {
    p.textContent = `${color.name} HEX = ${color.hex}`;
  });

root.appendChild(p);
