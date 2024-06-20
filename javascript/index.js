function updateTime() {
  //Zaragoza
  let zaragozaElement = document.querySelector("#zaragoza");
  if (zaragozaElement) {
    let zaragozaDateElement = zaragozaElement.querySelector(".date");
    let zaragozaTimeElement = zaragozaElement.querySelector(".time");
    let zaragozaTime = moment().tz("Europe/Madrid");

    zaragozaDateElement.innerHTML = moment().format("D MMMM YYYY");
    zaragozaTimeElement.innerHTML = zaragozaTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //London
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = moment().format("D MMMM YYYY");
  londonTimeElement.innerHTML = londonTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
 <div class="city">
  <div>
    <h2>${cityName}</h2>
    <div class="date">${cityTime.format("D MMMM YYYY")}</div>
  </div>
  <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format(
    "A"
  )}</small></div>
 </div>
 <a href="/">All cities</>
`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
