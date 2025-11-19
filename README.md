# 🚀 Indian Jokes API

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen.svg)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-orange.svg)

A **free, super-fast, multilingual REST API** serving **3000+ unique Indian-context jokes** in **English** 🇬🇧, **Hindi** 🇮🇳, and **Kannada** **(Other languages coming soon)** 🇮🇳.

Perfect for Discord/Telegram bots, fun apps, meme generators, and chat applications.

**No API Key • No Limits • 100% Free • Open Source**

---

## 📡 Base URL

https://indian-jokes-api.onrender.com

---

## 🎯 Features

- 🤣 **Massive Library:**
  - 1000+ **English** jokes (Indian context)
  - 1000+ **Hindi** jokes
  - 1000+ **Kannada** jokes
- ⚡ **High Performance:** Super-fast JSON responses.
- 🔓 **Open:** No authentication required.
- 🌐 **Web Ready:** HTTPS + CORS enabled for frontend usage.
- 🎲 **Randomizer:** Dedicated endpoints for random jokes.

---

## 📚 Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/` | Get API status and info |
| `GET` | `/jokes/random` | Get a random joke |
| `GET` | `/jokes/english` | Get a random **English** joke |
| `GET` | `/jokes/hindi` | Get a random **Hindi** joke |
| `GET` | `/jokes/kannada` | Get a random **Kannada** joke |


---

## 🧪 Example Responses

### 🇬🇧 English
**Request:** `GET /jokes/english`
```json
{ 
  "id": 20,
  "joke": "Every Indian father fixes the TV by hitting the remote.",
  "language": "english"
}
```

### IN Hindi
**Request:** `GET /jokes/hindi`
```json
{ 
  "id": 1,
  "joke": "टीचर: तुम स्कूल देर से क्यों आए? छात्र: मैडम, सपने में शादी हो गई थी, बारात रुक ही नहीं रही थी।",
  "language": "hindi"
}

```

### IN Kannada
**Request:** `GET /jokes/kannada`
```json
{ 
  "id": 450,
  "joke":"ಪೇಷೆಂಟ್: ಡಾಕ್ಟ್ರೆ, ನನ್ನ ಕೂದಲು ತುಂಬಾ ಉದುರುತ್ತಿದೆ. \nಡಾಕ್ಟರ್: ಅದಕ್ಕೆ ಏನು ಚಿಂತೆ ಮಾಡಬೇಡಿ. \nಪೇಷೆಂಟ್: ಯಾಕೆ ಡಾಕ್ಟ್ರೆ? \nಡಾಕ್ಟರ್: ಯಾಕಂದ್ರೆ, ಕೂದಲು ಉದುರೋದು ಬರಿ ತಲೆ ಇದ್ದವರಿಗೆ ಮಾತ್ರ!",
  "language": "kannada"
}
```


## ▶️ Run Locally

1. Clone the repository

```
git clone https://github.com/Khatri-019/indian-jokes-api.git

cd indian-jokes-api
```

2. Install dependencies
```
npm install
```

3. Start the server
node index.js

The server will start at: http://localhost:3000

## 🤝 Contributing

Contributions are welcome! We need more jokes!

- Fork the repo.
- Add jokes to the JSON files in the /jokes folder.
- Submit a Pull Request

## 📜 License
This project is licensed under the MIT License.

## ⭐ Support  

If you found this API funny or useful, please star ⭐ the repo — it motivates us to add more languages and features!