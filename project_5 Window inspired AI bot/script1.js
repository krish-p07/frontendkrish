//Weather Js
const output = document.getElementById("weather");

function fetchData() {
    fetch(
        `https://api.openweathermap.org/data/2.5/find?q=hyderabad&appid=5796abbde9106b7da4febfae8c44c232&units=metric`
    )
        .then((res) => res.json())
        .then((data) => {
            const temp = document.createElement("h2");
            temp.textContent = `${data.list[0].main.temp} °C`;
            output.appendChild(temp);
        })
        .catch((err) => console.log(err));
}

fetchData();

//dateTime Js
const date = document.getElementById("dateTime");

function fetchLocalDateTime() {
    const now = new Date();

    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear();

    const hour = String(now.getHours()).padStart(2, "0");
    const minute = String(now.getMinutes()).padStart(2, "0");
    const second = String(now.getSeconds()).padStart(2, "0");

    date.innerHTML = "";

    const datet = document.createElement("h2");
    datet.classList.add("date-text");
    datet.textContent = `${day}/${month}/${year}`;

    const timet = document.createElement("p");
    timet.classList.add("time-text");
    timet.textContent = `${hour}:${minute}:${second}`;

    date.appendChild(timet);
    date.appendChild(datet);
}

fetchLocalDateTime();

setTimeout(() => {
    setInterval(fetchLocalDateTime, 1000);
}, 1000);

//startButton
const startButton = document.getElementById("startButton");
const startMenu = document.getElementById("startMenu");

startButton.addEventListener("click", () => {
    startMenu.classList.toggle("show");
});

document.addEventListener("keydown", (e) => {
    if (e.altKey && e.key.toLowerCase() === "w") {
        e.preventDefault();
        startMenu.classList.toggle("show");
    }
});

document.addEventListener("click", (e) => {
    if (
        !startMenu.contains(e.target) &&
        e.target !== startButton &&
        !startButton.contains(e.target)
    ) {
        startMenu.classList.remove("show");
    }
});

//krisAI
const krisAiIcon = document.getElementById('krisAiIcon');
const krisAiWindow = document.getElementById('krisAiWindow');
const closeKrisAiBtn = document.getElementById('closeKrisAiBtn');
const miniKrisAiBtn = document.getElementById('miniKrisAiBtn');
const fullKrisAiBtn = document.getElementById('fullKrisAiBtn');

krisAiIcon.addEventListener('dblclick', () => {
    krisAiWindow.classList.remove('hiddenKrisAi');
    krisAiWindow.classList.remove('minimized');
    krisAiWindow.classList.remove('maximized');
});
closeKrisAiBtn.addEventListener('click', () => {
    krisAiWindow.classList.toggle('minimized');
});
miniKrisAiBtn.addEventListener('click', () => {
    krisAiWindow.classList.toggle('minimized');
});
fullKrisAiBtn.addEventListener('click', () => {
    krisAiWindow.classList.toggle('maximized');
});

//taskbarCMD

const krisAiTaskbarBtn = document.getElementById('krisAiTaskbarBtn');

krisAiTaskbarBtn.addEventListener('click', () => {
  krisAiWindow.classList.remove('hiddenKrisAi');
  krisAiWindow.classList.remove('minimized');
  krisAiWindow.classList.remove('maximized');
});

// Close button
closeKrisAiBtn.addEventListener('click', () => {
  krisAiWindow.classList.add('hiddenKrisAi');
});

