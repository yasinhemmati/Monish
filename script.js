// Monish to English dictionary
const monishToEnglish = {
    "zamonad": "hello",
    "linad": "goodbye",
    "gmonad": "good morning",
    "gnad": "good night",
    "nad": "person in the Monad community",
    "zhonad": "developer or builder",
    "monzhora": "to decentralize",
    "monlet": "small unit of data",
    "monara": "spirit of Monad",
    "monflora": "to move data across the blockchain",
    "monblora": "to add data to a block",
    "montokeva": "token or digital asset",
    // Add more words and phrases here
};

// English to Monish dictionary
const englishToMonish = {
    "hello": "zamonad",
    "goodbye": "linad",
    "good morning": "gmonad",
    "good night": "gnad",
    "person in the Monad community": "nad",
    "developer or builder": "zhonad",
    "to decentralize": "monzhora",
    "small unit of data": "monlet",
    "spirit of Monad": "monara",
    "to move data across the blockchain": "monflora",
    "to add data to a block": "monblora",
    "token or digital asset": "montokeva",
    // Add more words and phrases here
};

// Function to translate Monish to English
function translateToEnglish() {
    const inputText = document.getElementById("inputText").value;
    const outputText = document.getElementById("outputText");

    // Convert input to lowercase for translation
    const lowerInput = inputText.toLowerCase();

    // Split the input into words
    const words = lowerInput.split(" ");

    // Initialize an empty array for the translated words
    const translatedWords = [];

    // Loop through the words and check for phrases
    for (let i = 0; i < words.length; i++) {
        // Check for two-word phrases (e.g., "good morning")
        if (i + 1 < words.length) {
            const twoWordPhrase = words[i] + " " + words[i + 1];
            if (monishToEnglish[twoWordPhrase]) {
                translatedWords.push(monishToEnglish[twoWordPhrase]);
                i++; // Skip the next word since it's part of the phrase
                continue;
            }
        }

        // Check for single-word translations
        if (monishToEnglish[words[i]]) {
            translatedWords.push(monishToEnglish[words[i]]);
        } else {
            translatedWords.push(words[i]); // Keep the word as-is if not found in the dictionary
        }
    }

    // Join the translated words into a sentence
    let translatedText = translatedWords.join(" ");

    // Restore capitalization of the first letter
    translatedText = translatedText.charAt(0).toUpperCase() + translatedText.slice(1);

    // Restore punctuation (if any)
    if (inputText.endsWith(".") || inputText.endsWith("!") || inputText.endsWith("?")) {
        translatedText += inputText.slice(-1);
    }

    // Display the translated text
    outputText.value = translatedText;
}

// Function to translate English to Monish
function translateToMonish() {
    const inputText = document.getElementById("inputText").value;
    const outputText = document.getElementById("outputText");

    // Convert input to lowercase for translation
    const lowerInput = inputText.toLowerCase();

    // Split the input into words
    const words = lowerInput.split(" ");

    // Initialize an empty array for the translated words
    const translatedWords = [];

    // Loop through the words and check for phrases
    for (let i = 0; i < words.length; i++) {
        // Check for two-word phrases (e.g., "good morning")
        if (i + 1 < words.length) {
            const twoWordPhrase = words[i] + " " + words[i + 1];
            if (englishToMonish[twoWordPhrase]) {
                translatedWords.push(englishToMonish[twoWordPhrase]);
                i++; // Skip the next word since it's part of the phrase
                continue;
            }
        }

        // Check for single-word translations
        if (englishToMonish[words[i]]) {
            translatedWords.push(englishToMonish[words[i]]);
        } else {
            translatedWords.push(words[i]); // Keep the word as-is if not found in the dictionary
        }
    }

    // Join the translated words into a sentence
    let translatedText = translatedWords.join(" ");

    // Restore capitalization of the first letter
    translatedText = translatedText.charAt(0).toUpperCase() + translatedText.slice(1);

    // Restore punctuation (if any)
    if (inputText.endsWith(".") || inputText.endsWith("!") || inputText.endsWith("?")) {
        translatedText += inputText.slice(-1);
    }

    // Display the translated text
    outputText.value = translatedText;
}