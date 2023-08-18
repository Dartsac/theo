var countDownDate = new Date('Aug 26, 2023 11:00:00 EST').getTime()
var countdownFunction = setInterval(function () {
  var now = new Date().getTime()
  var distance = countDownDate - now
  var days = Math.floor(distance / (1000 * 60 * 60 * 24))
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  var seconds = Math.floor((distance % (1000 * 60)) / 1000)

  document.getElementById('countdown').innerHTML =
    days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's '

  if (distance < 0) {
    clearInterval(countdownFunction)
    document.getElementById('countdown').innerHTML = 'TIME TO MEET THEO!'
  }
}, 1000)
