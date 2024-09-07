const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Home Route
app.get('/', (req, res) => {
  const appName = "Information Express App";
  const routesInfo = [
    { route: '/mountains', description: 'Get information about a specific mountain' },
    { route: '/countries', description: 'Get information about a specific country' },
    { route: '/mathematicians', description: 'Get information about a specific mathematician' },
    { route: '/famous-mountains', description: 'Get a list of famous mountains' },
    { route: '/famous-countries', description: 'Get a list of famous countries' },
    { route: '/famous-mathematicians', description: 'Get a list of famous mathematicians' },
    { route: '/add-mountain', description: 'Add a new mountain (POST)' },
    { route: '/add-country', description: 'Add a new country (POST)' },
    { route: '/add-mathematician', description: 'Add a new mathematician (POST)' },
    { route: '/math-problem', description: 'Create a math problem (POST)' }
  ];

  // Numerical Variables
  const a = 5;
  const b = 10;
  const sum = a + b; // Derived variable
  const product = a * b; // Derived variable

  res.json({
    message: `Welcome to the ${appName}! Here are the available routes:`,
    routes: routesInfo,
    numericalData: { a, b, sum, product }
  });
});

// GET Routes

app.get('/mountains', (req, res) => {
  const mountainName = "Mount Everest";
  const height = 8848; // in meters
  const location = "Nepal/Tibet";

  // Numerical Variables
  const baseCampAltitude = 5364; // in meters
  const peakAltitude = 8848; // in meters
  const altitudeDifference = peakAltitude - baseCampAltitude; // Derived variable
  const peakInFeet = peakAltitude * 3.281; // Derived variable (meters to feet)

  res.send(`Mountain: ${mountainName}, Height: ${height} meters, Location: ${location}. Base Camp Altitude: ${baseCampAltitude} meters, Altitude Difference: ${altitudeDifference} meters, Peak in Feet: ${peakInFeet.toFixed(2)} feet.`);
});

app.get('/countries', (req, res) => {
  const countryName = "Japan";
  const capital = "Tokyo";
  const population = 126.3; // in millions

  // Numerical Variables
  const area = 377975; // in square kilometers
  const populationDensity = population * 1000000 / area; // Derived variable
  const areaInMiles = area * 0.386102; // Derived variable (km² to mi²)

  res.send(`Country: ${countryName}, Capital: ${capital}, Population: ${population} million. Area: ${area} km², Population Density: ${populationDensity.toFixed(2)} people per km², Area in Miles: ${areaInMiles.toFixed(2)} mi².`);
});

app.get('/mathematicians', (req, res) => {
  const mathematicianName = "Carl Gauss";
  const contribution = "Number Theory";
  const nationality = "German";

  // Numerical Variables
  const birthYear = 1777;
  const deathYear = 1855;
  const ageAtDeath = deathYear - birthYear; // Derived variable
  const century = Math.floor(birthYear / 100) + 1; // Derived variable

  res.send(`Mathematician: ${mathematicianName}, Contribution: ${contribution}, Nationality: ${nationality}. Birth Year: ${birthYear}, Age at Death: ${ageAtDeath}, Century Born: ${century}th century.`);
});

app.get('/famous-mountains', (req, res) => {
  const mountain1 = "K2";
  const mountain2 = "Kangchenjunga";
  const mountain3 = "Lhotse";
  const mountains = [mountain1, mountain2, mountain3];

  // Numerical Variables
  const heightK2 = 8611; // in meters
  const heightKangchenjunga = 8586; // in meters
  const averageHeight = (heightK2 + heightKangchenjunga) / 2; // Derived variable
  const totalHeight = heightK2 + heightKangchenjunga; // Derived variable

  res.json({ message: "Famous mountains", mountains, heightData: { heightK2, heightKangchenjunga, averageHeight, totalHeight } });
});

app.get('/famous-countries', (req, res) => {
  const country1 = "India";
  const country2 = "China";
  const country3 = "Brazil";
  const countries = [country1, country2, country3];

  // Numerical Variables
  const populationIndia = 1391; // in millions
  const populationChina = 1444; // in millions
  const averagePopulation = (populationIndia + populationChina) / 2; // Derived variable
  const totalPopulation = populationIndia + populationChina; // Derived variable

  res.json({ message: "Famous countries", countries, populationData: { populationIndia, populationChina, averagePopulation, totalPopulation } });
});

app.get('/famous-mathematicians', (req, res) => {
  const mathematician1 = "Leonhard Euler";
  const mathematician2 = "Isaac Newton";
  const mathematician3 = "Pythagoras";
  const mathematicians = [mathematician1, mathematician2, mathematician3];

  // Numerical Variables
  const birthEuler = 1707;
  const deathEuler = 1783;
  const eulerLifeSpan = deathEuler - birthEuler; // Derived variable
  const eulerAgeAt20th = 20 - (1700 % 100); // Derived variable

  res.json({ message: "Famous mathematicians", mathematicians, lifeData: { birthEuler, deathEuler, eulerLifeSpan, eulerAgeAt20th } });
});

// POST Routes

app.post('/add-mountain', (req, res) => {
  const { name, height, location } = req.body;

  // Numerical Variables
  const baseHeight = 1000; // in meters
  const finalHeight = baseHeight + height; // Derived variable
  const heightInFeet = height * 3.281; // Derived variable

  const responseMessage = `Mountain added: ${name}, Height: ${height} meters (${heightInFeet.toFixed(2)} feet), Location: ${location}. Final Height: ${finalHeight} meters`;
  const status = "Success";
  res.send({ status, responseMessage });
});

app.post('/add-country', (req, res) => {
  const { name, capital, population } = req.body;
  const countryId = Math.floor(Math.random() * 1000);

  // Numerical Variables
  const basePopulation = 100; // in millions
  const totalPopulation = basePopulation + population; // Derived variable
  const populationInThousands = population * 1000; // Derived variable

  const responseMessage = `Country added: ${name}, Capital: ${capital}, Population: ${population} million. Total Population after adjustment: ${totalPopulation} million.`;
  res.send({ countryId, responseMessage, populationData: { basePopulation, population, totalPopulation, populationInThousands } });
});

app.post('/add-mathematician', (req, res) => {
  const { name, contribution, nationality } = req.body;
  const mathematicianId = Math.floor(Math.random() * 1000);

  // Numerical Variables
  const birthYear = 1900; // example year
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear; // Derived variable
  const ageInMonths = age * 12; // Derived variable

  const responseMessage = `Mathematician added: ${name}, Contribution: ${contribution}, Nationality: ${nationality}. Estimated Age: ${age} years (${ageInMonths} months).`;
  res.send({ mathematicianId, responseMessage, ageData: { birthYear, currentYear, age, ageInMonths } });
});

app.post('/math-problem', (req, res) => {
  const { problemType, difficulty, mathematician } = req.body;
  const problemId = Math.floor(Math.random() * 10000);

  // Numerical Variables
  const baseDifficulty = 2; // some base difficulty level
  const difficultyScore = baseDifficulty * difficulty; // Derived variable
  const problemLength = difficultyScore * 5; // Derived variable

  const result = `Problem of type "${problemType}" at difficulty level ${difficulty} (score: ${difficultyScore}) was given to mathematician ${mathematician}. Estimated problem length: ${problemLength} pages.`;
  res.send({ problemId, result, problemData: { baseDifficulty, difficulty, difficultyScore, problemLength } });
});

// Start the server
app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});
