const url_1 = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const btn = document.getElementById("SearchButton");

btn.addEventListener("click", () => {
  let input1 = document.getElementById("Word1").value;
  console.log(input1);
  fetch(`${url_1}${input1}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      result.innerHTML = `  <div>
      <p><u><b>Word</b></u></p>
      <h3 class="word" id="word">${input1}</h3>
    </div>
    <hr>
    <p class="Meaning"><b><u>Meaning:</u></b></p>
    <hr>
    <p class="Word-meaning">${data[0].meanings[0].definitions[0].definition}</p>
    <hr>
    <p><b><u>Example:</u></b></p>
    <p class="word-example">${
      data[0].meanings[0].definitions[0].example ||
      data[0].meanings[0].definitions[2].example ||
      data[0].meanings[0].definitions[1].example ||
      data[0].meanings[1].definitions[0].example ||
      data[0].meanings[0].definitions[4].example ||
      " "
    }</p>
  `;
    });
});
