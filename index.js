import express from "express";
import cors from "cors";
import fs from "fs";

// Load JSON files safely
const hindi = JSON.parse(fs.readFileSync("./jokes/hindi.json", "utf8"));
const english = JSON.parse(fs.readFileSync("./jokes/english.json", "utf8"));
const kannada = JSON.parse(fs.readFileSync("./jokes/kannada.json", "utf8"));

const app = express();
app.use(cors());

const jokes = {
  hindi,
  english,
  kannada
};

// Root route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Indian Jokes API",
    routes: {
      english: "/jokes/english",
      hindi: "/jokes/hindi",
      kannada: "/jokes/kannada",
      random: "/jokes/random"
    }
  });
});

// Joke route by language
app.get("/jokes/:lang", (req, res) => {
  const lang = req.params.lang.toLowerCase();
  const list = jokes[lang];

  if (!list) {
    return res.status(404).json({ error: "Language not found" });
  }

  let joke = list[Math.floor(Math.random() * list.length)];

  // Remove \n for clean output
  joke.joke = joke.joke.replace(/\n/g, " ");

  res.json({ joke });
});

// Random joke across all languages
app.get("/jokes/random", (req, res) => {
  const all = [...hindi, ...english, ...kannada];
  const joke = all[Math.floor(Math.random() * all.length)];
  res.json({ joke });
});

// Server listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Indian Jokes API running on port ${PORT}`);
});
