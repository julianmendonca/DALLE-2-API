const express = require("express");
const { Configuration, OpenAIApi } = require("openai");

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  let image = "";
  let error = "";
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
    const response = await openai.createImage({
      prompt: text,
      n: 1,
      size: size || "256x256",
    });
    image = response.data.data[0].url;
  } catch (e) {
    error = e;
  }
  return res.send(image || error);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
