
let finished;
start.addEventListener('click', () => {
    startWork();
});

const startWork = () => {
    // 40 mins
    var workingSeconds = 2400;
    var startDateSeconds = new Date().getTime() / 1000
    var endTime = startDateSeconds - workingSeconds;
    var timeleft = startDateSeconds - endTime

    setInterval(() => {
        timeleft--

        var minutes = Math.floor(timeleft / 60);
        var seconds = timeleft - minutes * 60;
        document.getElementById('safeTimerDisplay').innerHTML = `${minutes} : ${seconds}`;

        if (timeleft < 0) {
            window.alert("Hello");
        }
    }, 1000);
}