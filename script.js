// Wedding date at 05:30 IST (UTC+5:30) = 00:00 UTC
const weddingDate = new Date("2026-05-25T00:00:00Z");
const timerElement = document.getElementById("timer");

function updateTimer() {
    const now = new Date();
    const timeDifference = weddingDate - now;

    if (timeDifference <= 0) {
        timerElement.innerHTML = "The wedding has started!";
        return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60),
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    timerElement.innerHTML = `${days}&nbsp;${days === 1 ? "day" : "days"}, ${hours}&nbsp;${hours === 1 ? "hour" : "hours"}, ${minutes}&nbsp;${minutes === 1 ? "minute" : "minutes"}, and ${seconds}&nbsp;${seconds === 1 ? "second" : "seconds"} to go...`;
}

setInterval(updateTimer, 1000);
updateTimer(); // Initial call to display the timer immediately
