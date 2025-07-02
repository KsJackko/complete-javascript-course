'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

//https://countries-api-836d.onrender.com/countries/

///////////////////////////////////////
///////////////////////////////////////
// Our First AJAX Call: XMLHttpRequest
/*
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
  <article class="country">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('portugal');
getCountryData('usa');
getCountryData('germany');
*/
///////////////////////////////////////
// Welcome to Callback Hell

// const getCountryAndNeighbour = function (country) {
//   // AJAX Call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(request.responseText);
//     console.log(data);

//     // Render country 1
//     renderCountry(data, '');

//     // Get neighbour country (2)
//     const neighbourCountry = data.borders?.at(0);
//     if (!neighbourCountry) return;
//     const request2 = new XMLHttpRequest();
//     request2.open(
//       'GET',
//       `https://restcountries.com/v2/alpha/${neighbourCountry}`
//     );
//     request2.send();
//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(request2.responseText);
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighbour('usa');

//Call back hell --> nested call back function

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v2/name/${country}`);
// request.send();

//fetch
// const request = fetch('https://restcountries.com/v2/name/hk');
// console.log(request);

/*
const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

/*
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => {
      console.log(response);
      if (!response.ok)
        throw new Error(`Country not found!(${response.status})`);
      return response.json();
    })
    .then(data => {
      renderCountry(data[0]);
      const neighbourCountry = data[0].borders?.at(0);
      if (!neighbourCountry) return;
      return fetch(`https://restcountries.com/v2/alpha/${neighbourCountry}`);
    })
    .then(response => {
      console.log(response);
      if (!response.ok)
        throw new Error(`Country not found!(${response.status})`);
      return response.json();
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.log(`${err} ***`);
      renderError(`Something went wrong ** ${err}. Please try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
btn.addEventListener('click', function () {
  getCountryData('usa');
});

getCountryData('bbct');
*/

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
};
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};

const getJSON = function (url, errorMsg = '') {
  return fetch(`${url}`).then(response => {
    console.log(response);
    if (!response.ok) throw new Error(`${errorMsg}(${response.status})`);
    return response.json();
  });
};

const getCountryData = function (country) {
  getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found!')
    .then(data => {
      renderCountry(data[0]);
      const neighbourCountry = data[0].borders?.at(0);

      if (!neighbourCountry) throw new Error(`Neighbour country not found!`);

      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbourCountry}`,
        'Country not found!'
      );
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.log(`${err}`);
      renderError(`Something went wrong ** ${err}. Please try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

/*
// btn.addEventListener('click', function () {
//   getCountryData('usa');
// });

// getCountryData('bbct');

///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}.
The AJAX call will be done to a URL with this format: https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=52.508&longitude=13.381. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

/*
const getJSON2 = function (url, errorMsg) {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg}${response.status}`);
    console.log(response);
    return response.json();
  });
};
const whereAmI = function (lat, lng) {
  getJSON2(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`,
    'Problem of geocoding'
  )
    .then(data => {
      if (!data.countryName)
        throw new Error('No country found for these coordinates!');
      console.log(`You are in ${data.city}, ${data.countryName}.`);
      return getCountryData(data.countryName);
    })
    .catch(err => console.log(`Something went wrong!(${err}), try again!`));
};

whereAmI(19.037, 72.873);
*/

/*
console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));
Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 100000000; i++) {}
  console.log(res);
});
console.log('Test end');
*/

/*
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lotter draw is happening');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You WIN!');
    } else {
      reject(new Error('You lost your money!'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

//Promisifing setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 3 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 4 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 5 seconds');
    return wait(1);
  });

Promise.resolve('You WIN!').then(x => console.log(x));
Promise.reject('You LOSE!').catch(x => console.error(x));
*/

// navigator.geolocation.getCurrentPosition(
//   position => console.log(position),
//   err => console.error(err)
// );
/*
console.log('Getting position');

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
*/
// getPosition().then(pos => console.log(pos));

/*
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
getPosition().then(pos => console.log(pos));

const getJSON2 = function (url, errorMsg) {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg}${response.status}`);
    console.log(response);
    return response.json();
  });
};
const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { lat, lng } = pos.coords;
      return getJSON2(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`,
        'Problem of geocoding'
      );
    })
    .then(data => {
      if (!data.countryName)
        throw new Error('No country found for these coordinates!');
      console.log(`You are in ${data.city}, ${data.countryName}.`);
      return getCountryData(data.countryName);
    })
    .catch(err => console.log(`Something went wrong!(${err}), try again!`));
};

btn.addEventListener('click', whereAmI);
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/

/*
let currentImg;

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const imgEl = document.createElement('img');
    imgEl.src = imgPath;
    imgEl.addEventListener('load', function () {
      document.querySelector('.images').appendChild(imgEl);
      resolve(imgEl);
    });
    imgEl.addEventListener('error', function () {
      reject(new Error('Image loading failed'));
    });
  });
};

createImage('./img/img-1.jpg')
  .then(imgEl => {
    currentImg = imgEl;
    console.log('Image1 successfully loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('./img/img-2.jpg');
  })
  .then(imgEl => {
    currentImg = imgEl;
    console.log('Image2 successfully loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => console.error(err));
*/

/*
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  //fetch(`https://restcountries.com/v2/name/${country}`).then(res => console.log(res))
  try {
    const pos = await getPosition();
    const { lat, lng } = pos.coords;
    const resGeo = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
    );
    if (!resGeo.ok) throw new Error('Problem getting location data');
    const dataGeo = await resGeo.json();

    const res = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.countryName}`
    );
    if (!res.ok) throw new Error('Problem getting location data');
    const data = await res.json();

    renderCountry(data[0]);
    countriesContainer.style.opacity = 1;
    return `I am living in ${dataGeo.countryName}`;
  } catch (err) {
    renderError(`Something went wrong: ${err.message}`);
    countriesContainer.style.opacity = 1;

    //Reject promise returned from async function
    throw err;
  }
};

// console.log('1. Will get location');
// // const city = whereAmI();
// // console.log(city);
// whereAmI()
//   .then(res => console.log(res))
//   .catch(err => console.error(`${err.message}`))
//   .finally(() => console.log('3. Finished getting location'));

console.log('1. Will get location');
(async function () {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (err) {
    console.error(err.message);
  }
  console.log('3. Finished getting location');
})();
// try {
//   let y = 1;
//   const x = 2;
//   x = 3;
// } catch (err) {
//   alert(err.message);
// }
*/

// Do multiple data at the same time
/*
const get3Countries = async function (c1, c2, c3) {
  try {
    // const city1 = await getJSON(`https://restcountries.com/v2/name/${c1}`);
    // console.log(city1);
    // const city2 = await getJSON(`https://restcountries.com/v2/name/${c2}`);
    // console.log(city2);
    // const city3 = await getJSON(`https://restcountries.com/v2/name/${c3}`);

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`),
    ]);
    console.log(data.map(each => each[0].capital));
  } catch (err) {
    console.error(err.message);
  }
};
get3Countries('china', 'canada', 'usa');
*/
//Promise.race
/*
(async function () {
  try {
    const res = await Promise.race([
      getJSON(`https://restcountries.com/v2/name/hk`),
      getJSON(`https://restcountries.com/v2/name/mongolia`),
      getJSON(`https://restcountries.com/v2/name/japan`),
    ]);
    console.log(res[0].name);
  } catch (err) {
    console.error(err);
  }
})();
*/

/*
// Promise.race
const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took so long'));
    }, sec);
  });
};

Promise.race([
  getJSON(`https://restcountries.com/v2/name/hk`),
  getJSON(`https://restcountries.com/v2/name/mongolia`),
  getJSON(`https://restcountries.com/v2/name/japan`),
  timeout(1000),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));
*/

/*
//Promise.allSettled
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another success'),
]).then(res => console.log(res));

//Promise.any [ES2021]

Promise.any([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another success'),
]).then(res => console.log(res));
*/

///////////////////////////////////////
// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const imgEl = document.createElement('img');
    imgEl.src = imgPath;
    imgEl.addEventListener('load', function () {
      document.querySelector('.images').appendChild(imgEl);
      resolve(imgEl);
    });
    imgEl.addEventListener('error', function () {
      reject(new Error('Image loading failed'));
    });
  });
};

/*
const loadNPause = async function (p1, p2) {
  try {
    let currentImg2 = await createImage(p1);
    await wait(2);
    currentImg2.style.display = 'none';
    currentImg2 = await createImage(p2);
    await wait(2);
    currentImg2.style.display = 'none';
  } catch (err) {
    console.error(err.message);
  }
};

loadNPause('./img/img-1.jpg', './img/img-2.jpg');
*/

/*
const loadAll = async function (pathArray) {
  try {
    const imgs = pathArray.map(path => createImage(path));
    const imgEls = await Promise.all(imgs);
    imgEls.forEach(el => el.classList.add('paralell'));
    return imgEls;
  } catch (err) {
    console.error(err.message);
  }
};

(async () => {
  const imgs = await loadAll([
    'img/img-1.jpg',
    'img/img-2.jpg',
    'img/img-3.jpg',
  ]);
  console.log(imgs);
})();
*/
