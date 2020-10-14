const express = require('express');

const app = express();
const port = 8080;

const animals = [
  {
    name: "Hund",
    description: "En fyrbent, tam art som äter upp din morgontidning"
  },
  {
    name: "Hamster",
    description: "Som en stor råtta, men som kan lagra morot i kindpåsen"
  },
  {
    name: "Katt",
    description: "Dunigt djur med vassa klor"
  },
  {
    name: "Fisk",
    description: "Kall, hal och inte så värst tillgiven"
  }
];

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', {
    title: "Mina husdjur",
    animals: animals
  })
});

// Här kanske du måste kunna tillhandahålla css-filer

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
