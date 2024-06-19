function updateTime() {
  //Zaragoza
  let zaragozaElement = document.querySelector("#zaragoza");
  let zaragozaDateElement = zaragozaElement.querySelector(".date");
  let zaragozaTimeElement = zaragozaElement.querySelector(".time");
  let zaragozaTime = moment().tz("Europe/Madrid");

  zaragozaDateElement.innerHTML = moment().format("D MMMM YYYY");
  zaragozaTimeElement.innerHTML = zaragozaTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //London
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = moment().format("D MMMM YYYY");
  londonTimeElement.innerHTML = londonTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Phnom Penh
  let cambodiaElement = document.querySelector("#cambodia");
  let cambodiaDateElement = cambodiaElement.querySelector(".date");
  let cambodiaTimeElement = cambodiaElement.querySelector(".time");
  let cambodiaTime = moment().tz("Asia/Phnom_Penh");

  cambodiaDateElement.innerHTML = moment().format("D MMMM YYYY");
  cambodiaTimeElement.innerHTML = cambodiaTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
