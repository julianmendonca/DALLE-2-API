const express = require("express");
const { Configuration, OpenAIApi } = require("openai");

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  const image = "";
  try {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const size = req.query.size;
    const text = req.query.text;
    if (!text) {
      res.send("No text provided");
    }
    image = await openai.createImage({
      prompt: text,
      n: 1,
      size: size || "256x256",
    });
  } catch (e) {}
  return res.send(image);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
