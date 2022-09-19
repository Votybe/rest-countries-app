async function testApi() {
  let array = [];

  for (const iterator of window.location.href.split("?")) {
    array.push(iterator);
  }

  let teste = array[1].split("=");
  let result = await axios.get(
    `https://restcountries.com/v3.1/name/${teste[1]}`
  );

  console.log(result.data[0]);

  const country = document.getElementById("img-country");
  const titlecountry = document.getElementById("title");
  const nativeCountry = document.getElementById("native-name");
  const population = document.getElementById("population");
  const region = document.getElementById("region");
  const subregion = document.getElementById("subregion");
  const capital = document.getElementById("capital");
  const topLevelDomain = document.getElementById("top-level-domain");
  const currencies = document.getElementById("currencies");
  const languages = document.getElementById("languages");

  titlecountry.innerHTML = result.data[0].name.common;
  titlecountry.innerHTML = result.data[0].name.common;
  titlecountry.innerHTML = result.data[0].name.common;
  population.innerHTML = `<p><b>Population:</b> ${result.data[0].population}</p>`;
  region.innerHTML = `<p><b>Region:</b> ${result.data[0].region}</p>`;
  subregion.innerHTML = `<p><b>Subregion:</b> ${result.data[0].subregion}</p>`;
  capital.innerHTML = `<p><b>Capital:</b> ${result.data[0].capital}</p>`;
  topLevelDomain.innerHTML = `<p><b>Top level Domain:</b> ${result.data[0].tld[0]}</p>`;
  currencies.innerHTML = `<p><b>Currencies:</b> ${result.data[0].tld[0]}</p>`;
  languages.innerHTML = `<p><b>Languages:</b> ${result.data[0].tld[0]}</p>`;

  let i = 0;
  for (const key in result.data[0].name.nativeName) {
    const element = result.data[0].name.nativeName[key];
    nativeCountry.innerHTML = `<p><b>Native Name:</b> ${element.official}</p>`;
  }

  for (const key in result.data[0].currencies) {
    const element = result.data[0].currencies[key];
    currencies.innerHTML = `<p><b>Currencies:</b> ${element.name} - ${element.symbol}</p>`;
  }

  //   console.log(result.data[0].name.nativeName);
  country.src = result.data[0].flags.png;
}

testApi();

const back = document.getElementById("back");

back.addEventListener("click", () => {
  window.location.href = "../public/index.html";
});
