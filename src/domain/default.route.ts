import { Router } from 'express';
import type { Request, Response } from 'express';
const { Configuration, OpenAIApi } = require('openai');

const DefaultRoute = Router();
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

DefaultRoute.get('/', async (req: Request, res: Response) => {
  const response = await openai.createImage({
    prompt: 'a white siamese cat',
    n: 1,
    size: '256x256',
  });
  res.send(response.data.data[0].url);
});
export default DefaultRoute;
