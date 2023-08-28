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
// JavaScript to refresh ads
function refreshAds() {
    const adLeft = document.getElementById('ad-left');
    const adRight = document.getElementById('ad-right');
    
    if (!adLeft.clicked && !adRight.clicked) {
        adLeft.src = adLeft.src; // Refresh the left ad
        adRight.src = adRight.src; // Refresh the right ad
    }
}

// Set up timer to refresh ads every 5 seconds
setInterval(refreshAds, 5000); // 5000 milliseconds = 5 seconds

// Event listener to track ad clicks
document.getElementById('ad-left').addEventListener('click', function() {
    this.clicked = true;
});

document.getElementById('ad-right').addEventListener('click', function() {
    this.clicked = true;
});
