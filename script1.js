function updateCountdown() {
    const now = new Date();
    const currentDateTime = now.toLocaleString("en-US", { dateStyle: "short", timeStyle: "medium" });
    document.getElementById("current-date-time").textContent = `Current Date and Time: ${currentDateTime}`;
  
    const nextYear = now.getFullYear() + 1;
    const newYearDate = new Date(`January 1, ${nextYear} 00:00:00`);
    const timeDifference = newYearDate - now;
  
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
    const seconds = Math.floor((timeDifference / 1000) % 60);
  
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }
  
  setInterval(updateCountdown, 1000);
  updateCountdown();
  