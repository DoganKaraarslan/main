document.addEventListener('DOMContentLoaded', function () {
    const countdownDisplay = document.getElementById('countdownTimer');
    const countupDisplay = document.getElementById('countupTimer');

    // Setzen Sie das Enddatum für den Countdown und den Startzeitpunkt für den Countup
    const countdownEndDate = new Date('October 27, 2024 02:00:00').getTime();
    const countupStartDate = new Date().setHours(2, 0, 0, 0); // Heute um 2 Uhr

    // Countdown Timer
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countdownEndDate - now;

        // Zeitberechnungen für Tage, Stunden, Minuten und Sekunden
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Anzeige des Ergebnisses
        countdownDisplay.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        // Wenn der Countdown abgelaufen ist
        if (distance < 0) {
            clearInterval(countdownInterval);
            countdownDisplay.innerHTML = "Abgelaufen";
        }
    }

    // Countup Timer
    function updateCountup() {
        const now = new Date().getTime();
        const elapsed = now - countupStartDate;

        // Zeitberechnungen für Tage, Stunden, Minuten und Sekunden
        const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
        const hours = Math.floor((elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((elapsed % (1000 * 60)) / 1000);

        // Anzeige des Ergebnisses
        countupDisplay.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    }

    // Aktualisieren Sie die Timer jede Sekunde
    const countdownInterval = setInterval(updateCountdown, 1000);
    const countupInterval = setInterval(updateCountup, 1000);
});
