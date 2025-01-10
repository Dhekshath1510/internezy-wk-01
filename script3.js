function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const ampm = hours >= 12 ? "PM" : "AM";
    const hourFormatted = hours % 12 || 12;
    const minuteFormatted = minutes < 10 ? "0" + minutes : minutes;
    const secondFormatted = seconds < 10 ? "0" + seconds : seconds;

    const timeString = `${hourFormatted}:${minuteFormatted}:${secondFormatted} ${ampm}`;
    document.getElementById("time").textContent = timeString;

    const greeting =
        hours < 12
            ? "Good Morning Guys"
            : hours < 18
            ? "Good Afternoon Guys"
            : "Good Evening Guys";
    document.getElementById("greeting").textContent = greeting;
}

setInterval(updateClock, 1000);
updateClock();
