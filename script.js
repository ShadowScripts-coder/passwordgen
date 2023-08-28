document.addEventListener("DOMContentLoaded", function() {
    const generateButton = document.getElementById("generate-button");
    const generatedPassword = document.getElementById("generated-password");

    generateButton.addEventListener("click", function() {
        const length = parseInt(document.getElementById("length").value);
        const useLetters = document.getElementById("use-letters").checked;
        const useDigits = document.getElementById("use-digits").checked;
        const useSpecial = document.getElementById("use-special").checked;

        const characters = generatePassword(length, useLetters, useDigits, useSpecial);
        generatedPassword.textContent = "Generated Password: " + characters;
    });

    function generatePassword(length, useLetters, useDigits, useSpecial) {
        let characters = "";

        if (useLetters) {
            characters += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }
        if (useDigits) {
            characters += "0123456789";
        }
        if (useSpecial) {
            characters += "!@#$%^&*()_-+=<>?/[]{}";
        }

        if (!characters) {
            return "Error: You must select at least one character type.";
        }

        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters.charAt(randomIndex);
        }

        return password;
    }
});
