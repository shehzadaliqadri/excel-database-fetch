const url =
    "https://docs.google.com/spreadsheets/d/1WbZGBp1thhqfkt1hSa4gRbAowcT4UGtRmoIP9Go4uPE/export?format=csv",
  main = document.querySelector("main");
main.innerHTML = `<p>Loading...</p>`;
fetch(url)
  .then((result) => result.text())
  .then(function (csvtext) {
    return csv().fromString(csvtext);
  })
  .then(function (csv) {
    // main.innerHTML = `<code>+${JSON.stringify(csv)} + </code>`;
    csv.forEach(function (row) {
      main.innerHTML += `<h3>${row.name} </h3>`;
      main.innerHTML += `<p>${row.description}`;
      main.innerHTML += `<Strong>${row.price} </strong>`;
      main.innerHTML += `</p>`;
    });
  });
