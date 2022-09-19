let countries = [];

const fetch_Countries = (countries) => {
  axios
    .get("https://restcountries.com/v3.1/all")
    .then((response) => {
      countries = response.data;

      appendToDOM(countries);
    })
    .catch((error) => console.error(error));
};

const appendToDOM = (countries) => {
  console.log(countries);
  const ul = document.querySelector("ul");
  for (const countrie in countries) {
    const element = countries[countrie];
    ul.appendChild(create_Li(element));
  }
};

const create_Li = (element) => {
  var li = document.createElement("li");
  getAllCompenentOfLi(li, element);
  li.onclick = () => {
    window.location = `/public/country.html?name=${element.name.common}`;
  };
  return li;
};

const getAllCompenentOfLi = (li, element) => {
  const h3 = document.createElement("h3");
  const img = document.createElement("img");
  const population = document.createElement("p");
  const region = document.createElement("p");
  const capital = document.createElement("p");

  img.src = element.flags.png;
  h3.innerHTML = `${element.name.common}`;

  population.innerHTML = `<b>Population:</b>  ${element.population}`;
  region.innerHTML = `<b>Region:</b>${element.region}`;
  capital.innerHTML = `<b>Capital:</b>  ${element.capital}`;

  li.appendChild(img);
  li.appendChild(h3);
  li.appendChild(population);
  li.appendChild(region);
  li.appendChild(capital);
};

fetch_Countries(countries);

const searchByName = async () => {
  const nameCountry = document.getElementById("nameCountry");
  console.log(nameCountry.value);
  const result = await axios.get(
    `https://restcountries.com/v3.1/name/${nameCountry.value}`
  );
  const selectorul = document.getElementById("countries-container");
  for (const iterator of selectorul.children) {
    if (result.data[0].name.common === iterator.childNodes[1].textContent) {
      iterator.style.display = "block";
    } else {
      iterator.style.display = "none";
    }
  }
  console.log(result.data);
};

const icon = document.getElementById("value-input");
icon.addEventListener("click", searchByName);

const selectContinent = document.getElementById("select-country");
selectContinent.addEventListener("change", changeRegion);

async function changeRegion() {
  const selectorul = document.getElementById("countries-container");

  if (selectContinent.value === "all") {
    let result = await axios.get("https://restcountries.com/v3.1/all");
    countries = await result.data;
    for (const iterator of selectorul.children) {
      let region = iterator.childNodes[3].innerHTML;
      region = region.split(">")[2];
      iterator.style.display = "block";
    }
  }

  if (selectContinent.value === "europe") {
    let result = await axios.get(
      `https://restcountries.com/v3.1/region/${selectContinent.value}`
    );
    countries = await result.data;
    for (const iterator of selectorul.children) {
      let region = iterator.childNodes[3].innerHTML;
      region = region.split(">")[2];
      if (region !== "Europe") {
        iterator.style.display = "none";
      } else {
        iterator.style.display = "block";
      }
    }
  }

  if (selectContinent.value === "asia") {
    let result = await axios.get(
      `https://restcountries.com/v3.1/region/${selectContinent.value}`
    );
    countries = await result.data;
    for (const iterator of selectorul.children) {
      let region = iterator.childNodes[3].innerHTML;
      region = region.split(">")[2];
      if (region !== "Asia") {
        iterator.style.display = "none";
      } else {
        iterator.style.display = "block";
      }
    }
  }

  if (selectContinent.value === "africa") {
    let result = await axios.get(
      `https://restcountries.com/v3.1/region/${selectContinent.value}`
    );
    countries = await result.data;
    for (const iterator of selectorul.children) {
      let region = iterator.childNodes[3].innerHTML;
      region = region.split(">")[2];
      if (region !== "Africa") {
        iterator.style.display = "none";
      } else {
        iterator.style.display = "block";
      }
    }
  }

  if (selectContinent.value === "oceania") {
    let result = await axios.get(
      `https://restcountries.com/v3.1/region/${selectContinent.value}`
    );
    countries = countries = await result.data;
    for (const iterator of selectorul.children) {
      let region = iterator.childNodes[3].innerHTML;
      region = region.split(">")[2];
      if (region !== "Oceania") {
        iterator.style.display = "none";
      } else {
        iterator.style.display = "block";
      }
    }
    await result.data;
  }

  if (selectContinent.value === "america") {
    let result = await axios.get(
      `https://restcountries.com/v3.1/region/${selectContinent.value}`
    );
    countries = await result.data;
    for (const iterator of selectorul.children) {
      let region = iterator.childNodes[3].innerHTML;
      region = region.split(">")[2];
      if (region !== "americas") {
        iterator.style.display = "none";
      } else {
        iterator.style.display = "block";
      }
    }
  }
}
