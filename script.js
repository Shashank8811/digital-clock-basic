function timer() {
  let time = new Date();
  let hr = time.getHours();
  let mi = time.getMinutes();
  let se = time.getSeconds();

  document.querySelector(".hour").innerHTML = hr;

  document.querySelector(".min").innerHTML = mi;

  document.querySelector(".sec").innerHTML = se;
}

setInterval(timer, 1000);
