console.log("HELL0")
function startWork() {
    setInterval(updateCountdown, 1000);
}
let workingSeconds = 3;
chrome.runtime.onMessage.addListener((message) => {
    console.log(message)
    if (message) {
        setInterval(updateCountdown, 1000);
    }
});

const updateCountdown = () => {
    let minutes = Math.floor(workingSeconds / 60);
    let seconds = workingSeconds % 60;
    if (seconds < 10) {
        seconds = ('0' + seconds)
    }

    if (workingSeconds === -1) {
        console.log('sending done')
        chrome.runtime.sendMessage({ done: true });
    } else if (workingSeconds >= 0) {
        chrome.runtime.sendMessage({ minutes, seconds });
    }
    workingSeconds--
}