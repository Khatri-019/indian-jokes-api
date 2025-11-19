# 🤝 Contributing to Indian Jokes API

First off, thank you for considering contributing to the Indian Jokes API! 🇮🇳

This project relies on the community to grow its library of jokes and keep the humor fresh. Whether you are a developer fixing a bug or a comedy fan adding a new joke, we appreciate your help.

## 🚀 Ways to Contribute

1.  **Add New Jokes:** We always need more content in English, Hindi, Kannada, etc or **any other Indian language!**
2.  **Fix Bugs:** Improve the API logic or error handling.
3.  **Improve Documentation:** Fix typos or make the guides clearer.

---

## 📝 How to Add a New Joke

This is the most common contribution. Please follow these steps carefully to ensure the API doesn't break.

1.  **Navigate to the `jokes` folder.** 
2.  **Choose your file:**
    * If adding to an existing language, open the corresponding file (e.g., `hindi.json`).
    * **✨ Want to add a new language?** You are welcome to do so! Simply create a new file named after the language (e.g., `tamil.json`, `marathi.json`, `punjabi.json`) inside the `jokes` folder.
3.  **Scroll to the bottom** of the list (if the file already exists).
4.  Add a new JSON object. **Please make sure you:**
    * Increment the `id` by 1 (check the previous joke's ID). If it is a new file, start with `id: 1`.
    * Ensure valid JSON syntax (watch out for trailing commas!).

### ✅ JSON Format Example

If the last joke in `english.json` was ID `50`, your new entry should look like this:

```json
[
    {
        "id": 50,
        "joke": "Previous joke...",
        "language":"english"
    }, 
    {
        "id": 51,
        "joke": "Your new hilarious joke here.",
        "language": "english"
    }
]
```

## ⚠️ Content Guidelines
- No Hate Speech: Jokes targeting specific religions, castes, genders, or abilities in a hateful way will be rejected.

- Keep it Fun: Lighthearted teasing is fine (it's Indian humor, after all!), but keep it clean enough for general audiences.

- Correct Script: Please use the native script for the language (e.g., Devanagari for Hindi/Marathi, Dravidian scripts for South Indian languages) unless it is a "Hinglish/Tanglish" style joke.

---

## 💡 Quick Contribution Workflow

To ensure a smooth contribution process, please follow these steps:

1.  **Fork** the repository to your personal GitHub account.
2.  **Clone** your fork locally and navigate into the project folder:
    ```bash
    git clone https://github.com/Khatri-019/indian-jokes-api.git 
    cd indian-jokes-api
    ```
3.  **Create a new branch** for your specific changes (use a descriptive name):
    ```bash
    git checkout -b feature/add-tamil-jokes
    ```
4.  Make your changes (add jokes, fix code).
5.  Commit your changes and **Open a Pull Request (PR)** against the `main` branch of the original repository.

---
