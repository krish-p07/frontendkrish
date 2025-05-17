const searchInput = document.getElementById("searchInput");
const krisAiWindow = document.getElementById("krisAiWindow");

searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const query = searchInput.value.trim().toLowerCase();

        if (query === "cmd" || query === "command prompt" || query === "krisai") {
            krisAiWindow.classList.remove("hiddenKrisAi");
            krisAiWindow.classList.remove("minimized");
            krisAiWindow.classList.remove("maximized");
        }

        searchInput.value = "";
    }
});