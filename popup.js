
let finished;
let workingSeconds = 2400;
document.getElementById('start').addEventListener('click', function () {
    chrome.runtime.sendMessage({ start: true });
});

chrome.runtime.onMessage.addListener(
    function ({ minutes, seconds, done }) {
        console.log(done)
        if (done) {
            console.log('SENDING ALEART')
            alert("you have a message");

            // window.alert("TIMER DONE");
        } else {
            console.log(seconds)
            document.getElementById('safeTimerDisplay').innerHTML = `${minutes} : ${seconds}`;
        }
    }
);


// TO DO LIST
// ADD RESTART TIMER
// ADD BREAK TIMER
