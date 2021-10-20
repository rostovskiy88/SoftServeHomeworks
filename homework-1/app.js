let local = document.getElementById('local');
let london = document.getElementById('london');

function getTime() {
  const today = new Date();
  const timeLocal = today.toLocaleString('en-US', {
    timeStyle: 'medium',
    hourCycle: 'h24',
  });
  const timeLondon = today.toLocaleString('en-US', {
    timeZone: 'Europe/London',
    timeStyle: 'medium',
    hourCycle: 'h24',
  });
  local.innerHTML = timeLocal;
  london.innerHTML = timeLondon;
}

let clock = setInterval(getTime, 1000);
