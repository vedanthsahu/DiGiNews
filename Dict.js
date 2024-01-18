const url_1 = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const btn = document.getElementById("SearchButton");

btn.addEventListener("click", () => {
  searchMeaning();
});

document.addEventListener('mouseup', function () {
  var selectedText = getSelectedText();
  if (selectedText !== '') {
    document.getElementById('Word1').value = selectedText;
    searchMeaning();
  }
});

function searchMeaning() {
  let input1 = document.getElementById("Word1").value.trim();
  console.log(input1);
  
  if (input1 === "") {
    result.innerHTML = "<p>Please enter a word.</p>";
    return;
  }

  fetch(`${url_1}${input1}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Word not found");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);

      if (!data || data.length === 0) {
        throw new Error("No definitions found");
      }

      result.innerHTML = `  
        <div>
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
          data[0].meanings[1]?.definitions[0]?.example ||
          data[0].meanings[0].definitions[4]?.example ||
          "No example available"
        }</p>
      `;
    })
    .catch((error) => {
      result.innerHTML = `<p>Error: ${error.message}</p>`;
    });
}

function getSelectedText() {
  var text = '';
  if (window.getSelection) {
    text = window.getSelection().toString();
  } else if (document.selection && document.selection.type !== 'Control') {
    text = document.selection.createRange().text;
  }
  return text.trim();
}
