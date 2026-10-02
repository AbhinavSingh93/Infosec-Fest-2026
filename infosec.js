const slides = document.querySelectorAll('.slider img');
let current = 0;

function changeSlide() {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}

setInterval(changeSlide, 8000); // change every 8 seconds


function updateFlagCountdown() {
  const targetStart = new Date("October 26, 2026 00:00:00").getTime();
  const targetEnd   = new Date("November 6, 2026 23:59:59").getTime();
  const now = new Date().getTime();

  // Agar 26 Oct se 6 Nov ke beech hai
  if (now >= targetStart && now <= targetEnd) {
    document.getElementById("flag-countdown").innerHTML = "Infosec Fest LIVE";
    return;
  }

  // Agar 26 Oct se pehle hai to countdown dikhao
  if (now < targetStart) {
    const distance = targetStart - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("flag-countdown").innerHTML =
      `Fest will be live in<br> ${days} days<br>` +
      `${hours.toString().padStart(2,'0')} hr:${minutes.toString().padStart(2,'0')}min:${seconds.toString().padStart(2,'0')}sec`;


    
    return;
  }

  // Agar 6 Nov ke baad hai
  if (now > targetEnd) {
    document.getElementById("flag-countdown").innerHTML = "Event Ended";
  }
}

setInterval(updateFlagCountdown, 1000);
updateFlagCountdown();
