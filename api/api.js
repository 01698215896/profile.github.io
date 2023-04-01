let dulieu = $("#dulieu");
let name_city = $("#name_city");
let gio = $("#gio");
let phut = $("#phut");
let giay = $("#giay");
let hide = $("#hide");
let wind = $("#wind");
let water = $("#water");
let nhietdo1 = $("#nhietdo1");

let toado = async () => {
  let valueCity = dulieu.val().trim();
  let data = `https://nominatim.openstreetmap.org/search?q=${valueCity}&format=json`;
  let dataCity = await fetch(data).then((res) => res.json());
  return dataCity[0];
};

  let thoitiet = async () => {
    let valueToado = await toado();
    let lon = valueToado.lon;
    let lat = valueToado.lat;
    let dataUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f53c4e33081de4d197282bd11e04192e
      `;
    let thoitietValue = await fetch(dataUrl).then((res) => res.json());
    console.log(thoitietValue);
    name_city.html(thoitietValue.name);
    hide.html(thoitietValue.main.humidity + "m");
    wind.html(thoitietValue.wind.speed + "m/s");
    water.html(thoitietValue.main.pressure + "mm");
    nhietdo1.html(Math.round(thoitietValue.main.temp - 273.15) + "°C");

    let updateTime = () => {
      let currentTime = new Date();
      gio.html(currentTime.getHours() + " : ");
      phut.html(currentTime.getMinutes() + " : ");
      giay.html(currentTime.getSeconds());
    };

    setInterval(updateTime, 1000);
  return thoitietValue;
};

dulieu.on("change", thoitiet);



// Tọa độ của Hồ Chí Minh
const defaultLat = 10.762622;
const defaultLon = 106.660172;

// Sử dụng tọa độ của Hồ Chí Minh để lấy dữ liệu thời tiết mặc định
$(document).ready(async function () {
  let dataUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${defaultLat}&lon=${defaultLon}&appid=f53c4e33081de4d197282bd11e04192e`;
  let thoitietValue = await fetch(dataUrl).then((res) => res.json());
  name_city.html(thoitietValue.name);
  hide.html(thoitietValue.main.humidity + "m");
  wind.html(thoitietValue.wind.speed + "m/s");
  water.html(thoitietValue.main.pressure + "mm");
  nhietdo1.html(Math.round(thoitietValue.main.temp - 273.15) + "°C");
  let updateTime = () => {
    let currentTime = new Date();
    gio.html(currentTime.getHours() + " : ");
    phut.html(currentTime.getMinutes() + " : ");
    giay.html(currentTime.getSeconds());
  };

  setInterval(updateTime, 1000);
});
