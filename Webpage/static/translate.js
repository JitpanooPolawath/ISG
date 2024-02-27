async function lange(lang) {
  const paragraphs = document.querySelectorAll("p");
  const storedEnglish = localStorage;
  if (lang === "en") {
    location.reload();
  }
  //   console.log(storedEnglish);

  if (storedEnglish === null) {
    const English = document.querySelectorAll("p");
    for (let i = 0; i < 8; i++) {
      English[i].textContent = paragraphs[i].textContent;
      //   console.log(JSON.stringify(English[i].textContent));
      localStorage.setItem(i, English[i].textContent);
    }
  }
  for (let i = 0; i < 8; i++) {
    const res = await fetch("http://127.0.0.1:5000/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        q: storedEnglish[i],
        source: "en",
        target: lang,
        format: "text",
      }),
    })
      .then((res) => res.json())
      .then((re) => {
        paragraphs[i].textContent = re.translatedText;
      });
  }
}
