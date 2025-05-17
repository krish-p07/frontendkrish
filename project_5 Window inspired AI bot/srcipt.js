const geminiApiKey = "apiKeyj";
const krisAiInput = document.getElementById("krisAiInput");
const krisAiOutput = document.getElementById("krisAiOutput");

krisAiInput.addEventListener("keydown", async (e) => {
    if (e.key === "Enter") {
        const userPrompt = krisAiInput.value.trim();
        if (!userPrompt) return;

        krisAiOutput.innerHTML += `> ${userPrompt}\n`;
        krisAiInput.value = "";

        try {
            const res = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" + geminiApiKey, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{ text: userPrompt }]
                    }]
                })
            });

            const data = await res.json();
            const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response.";

            krisAiOutput.innerHTML += reply + "\n";
        } catch (error) {
            krisAiOutput.innerHTML += "Error: " + error.message + "\n";
        }

        // Scroll to bottom
        krisAiOutput.scrollTop = krisAiOutput.scrollHeight;
    }
});

