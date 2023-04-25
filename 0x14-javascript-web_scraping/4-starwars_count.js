#!/usr/bin/node
const request = require('request');

const apiUrl = process.argv[2];
const characterId = 18;

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  const films = JSON.parse(body).results;
  const numFilmsWithWedge = films.reduce((count, film) => {
    const wedgeAppears = film.characters.some((url) => url.endsWith(`/${characterId}/`));
    return count + (wedgeAppears ? 1 : 0);
  }, 0);

  console.log(numFilmsWithWedge);
});

