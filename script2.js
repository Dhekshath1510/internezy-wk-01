document.getElementById("calculate").addEventListener("click", function () {
    const dob = new Date(document.getElementById("dob").value);
    const tob = document.getElementById("tob").value.split(":");
    dob.setHours(parseInt(tob[0]), parseInt(tob[1]));

    const now = new Date();
    const diffMs = now - dob;

    const minutes = Math.floor(diffMs / (1000 * 60));
    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const months = Math.floor(days / 30.44);
    const years = Math.floor(days / 365.25);

    document.getElementById("liveTime").textContent = `Live Time: ${now.toLocaleTimeString()}`;
    document.getElementById("todayDate").textContent = `Today's Date: ${now.toLocaleDateString()}`;
    document.getElementById("ageInMinutes").textContent = `Minutes: ${minutes}`;
    document.getElementById("ageInHours").textContent = `Hours: ${hours}`;
    document.getElementById("ageInDays").textContent = `Days: ${days}`;
    document.getElementById("ageInMonths").textContent = `Months: ${months}`;
    document.getElementById("ageInYears").textContent = `Years: ${years}`;
});
