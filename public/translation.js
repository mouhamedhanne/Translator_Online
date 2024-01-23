const dropdowns = document.querySelectorAll(".dropdown-container"),
  inputLanguageDropdown = document.querySelector("#input-language"),
  outputLanguageDropdown = document.querySelector("#output-language");

function populateDropdown(dropdown, options) {
  dropdown.querySelector("ul").innerHTML = "";
  options.forEach((option) => {
    const li = document.createElement("li");
    const title = option.name + " (" + option.native + ")";
    li.innerHTML = title;
    li.dataset.value = option.code;
    li.classList.add("option");
    dropdown.querySelector("ul").appendChild(li);
  });
}

populateDropdown(inputLanguageDropdown, languages);
populateDropdown(outputLanguageDropdown, languages);

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", (e) => {
    dropdown.classList.toggle("active");
  });

  dropdown.querySelectorAll(".option").forEach((item) => {
    item.addEventListener("click", (e) => {
      //remove active class from current dropdowns
      dropdown.querySelectorAll(".option").forEach((item) => {
        item.classList.remove("active");
      });
      item.classList.add("active");
      const selected = dropdown.querySelector(".selected");
      selected.innerHTML = item.innerHTML;
      selected.dataset.value = item.dataset.value;
      translate();
    });
  });
});
document.addEventListener("click", (e) => {
  dropdowns.forEach((dropdown) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("active");
    }
  });
});

const swapBtn = document.querySelector(".swap-position"),
  inputLanguage = inputLanguageDropdown.querySelector(".selected"),
  outputLanguage = outputLanguageDropdown.querySelector(".selected"),
  inputTextElem = document.querySelector("#input-text"),
  outputTextElem = document.querySelector("#output-text");

swapBtn.addEventListener("click", (e) => {
  const temp = inputLanguage.innerHTML;
  inputLanguage.innerHTML = outputLanguage.innerHTML;
  outputLanguage.innerHTML = temp;

  const tempValue = inputLanguage.dataset.value;
  inputLanguage.dataset.value = outputLanguage.dataset.value;
  outputLanguage.dataset.value = tempValue;

  //swap text
  const tempInputText = inputTextElem.value;
  inputTextElem.value = outputTextElem.value;
  outputTextElem.value = tempInputText;

  translate();
});

function translate() {
  const inputText = inputTextElem.value;
  const inputLanguageCode =
    inputLanguageDropdown.querySelector(".selected").dataset.value;
  const outputLanguageCode =
    outputLanguageDropdown.querySelector(".selected").dataset.value;
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${inputLanguageCode}&tl=${outputLanguageCode}&dt=t&q=${encodeURI(
    inputText
  )}`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      console.log("Texte d'entrée:", inputText);
      console.log("Texte traduit:", json[0].map((item) => item[0]).join(""));
      const translatedText = json[0].map((item) => item[0]).join("");
      outputTextElem.innerText = translatedText;
      {
        /** const translatedText = json[0].map((item) => item[0]).join("");
      outputTextElem.innerText = translatedText; */
      }
      {
        /**console.log(json);
      outputTextElem.value = json[0].map((item) => item[0]).join(""); */
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
inputTextElem.addEventListener("input", (e) => {
  //limit input to 5000 characters
  if (inputTextElem.value.length > 5000) {
    inputTextElem.value = inputTextElem.value.slice(0, 5000);
  }
  translate();
});

const uploadDocument = document.querySelector("#upload-document"),
  uploadTitle = document.querySelector("#upload-title");

uploadDocument.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file.type === "application/pdf") {
    uploadTitle.innerHTML = file.name;

    const reader = new FileReader();
    reader.onload = async (e) => {
      const arrayBuffer = e.target.result;

      // Utiliser pdf.js pour extraire le texte du PDF
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      let text = "";

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();

        content.items.forEach((item) => {
          text += item.str + " ";
        });
      }

      // Mettre le texte extrait dans inputTextElem
      inputTextElem.value = text;
      translate();
    };

    reader.readAsArrayBuffer(file);
  } else {
    alert("Veuillez télécharger un fichier PDF valide");
  }
});

const downloadBtn = document.querySelector("#download-btn");

downloadBtn.addEventListener("click", (e) => {
  const outputText = outputTextElem.value;
  const outputLanguage =
    outputLanguageDropdown.querySelector(".selected").dataset.value;

  if (outputText) {
    // Utilisation de jsPDF pour créer un document PDF
    const pdf = new jsPDF();
    pdf.text(outputText, 10, 10);

    // Création d'une URL à partir du contenu PDF
    const url = URL.createObjectURL(pdf.output("blob"));

    // Création d'un élément <a> pour le téléchargement
    const a = document.createElement("a");

    // Configuration du téléchargement avec le nom de fichier PDF
    a.download = `translated-to-${outputLanguage}.pdf`;
    a.href = url;

    // Déclenchement du téléchargement
    a.click();
  }
});

{
  /**downloadBtn.addEventListener("click", (e) => {
  const outputText = outputTextElem.value;
  const outputLanguage =
    outputLanguageDropdown.querySelector(".selected").dataset.value;
  if (outputText) {
    const blob = new Blob([outputText], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.download = `translated-to-${outputLanguage}.pdf`;
    a.href = url;
    a.click();
  }
}); */
}

const darkModeCheckbox = document.getElementById("dark-mode-btn");
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
darkModeCheckbox.addEventListener("change", toggleDarkMode);
toggleDarkMode();

const inputChars = document.querySelector("#input-chars");

inputTextElem.addEventListener("input", (e) => {
  inputChars.innerHTML = inputTextElem.value.length;
});

/**
  uploadDocument.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (
      file.type === "application/pdf" ||
      file.type === "text/plain" ||
      file.type === "application/msword" ||
      file.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      uploadTitle.innerHTML = file.name;
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = (e) => {
        inputTextElem.value = e.target.result;
        translate();
      };
    } else {
      alert("Please upload a valid file");
    }
  });
**/

/**
 * uploadDocument.addEventListener("change", (e) => {
  const file = e.target.files[0];

  if (file.type === "application/pdf") {
    uploadTitle.innerHTML = file.name;

    const reader = new FileReader();

    reader.onload = async (e) => {
      const data = new Uint8Array(e.target.result);
      const loadingTask = pdfjsLib.getDocument(data);

      try {
        const pdf = await loadingTask.promise;
        const numPages = pdf.numPages;
        let text = "";

        for (let pageNum = 1; pageNum <= numPages; pageNum++) {
          const page = await pdf.getPage(pageNum);
          const content = await page.getTextContent();
          const pageText = content.items.map((item) => item.str).join(" ");
          text += pageText;
        }

        inputTextElem.value = text;
        translate();
      } catch (error) {
        console.error(error);
      }
    };

    reader.readAsArrayBuffer(file);
  } else {
    alert("Please upload a valid PDF file");
  }
});
 */
