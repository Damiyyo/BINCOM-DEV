const resume = document.querySelector(".resume");
const fileLink = "https://drive.google.com/uc?export=download&id=1aYiaLn3YOjL-_o5QBCy7tU1epqA6gZoi";
const initTimer = () => {
    if(resume.classList.contains("disable-timer")) {
        return location.href = fileLink;
    }
    let timer = resume.dataset.timer;
    resume.classList.add("timer");
    resume.innerHTML = `Your download will begin in <b>${timer}</b> seconds`;
    const initCounter = setInterval(() => {
        if(timer > 0) {
            timer--;
            return resume.innerHTML = `Your download will begin in <b>${timer}</b> seconds`;
        }
        clearInterval(initCounter);
        location.href = fileLink;
        resume.innerText = "Your file is downloading...";
        setTimeout(() => {
            resume.classList.replace("timer", "disable-timer");
            resume.innerHTML = `<span class="icon material-symbols-rounded"></span>
                                     <span class="text">Download successful</span>`;
        }, 3000);
    }, 1000);
}
resume.addEventListener("click", initTimer);