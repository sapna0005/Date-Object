setInterval(() => {
    let show = document.querySelector("#display");
    let date = new Date();
    let hours = `<span class="hours">${date.getHours().toString().padStart(2,"0")}</span>`;
    let minutes = `<span class="minutes">${date.getMinutes().toString().padStart(2,"0")}</span>`;
    let seconds = `<span class="seconds">${date.getSeconds().toString().padStart(2,"0")}</span>`;
    show.innerHTML = `${hours} <span class="colon">: </span> ${minutes} <span class="colon">: </span> ${seconds}`;
}, 1000);
