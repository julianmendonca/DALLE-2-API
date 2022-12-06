import helmet from 'helmet';
import cors from 'cors';
import * as bodyParser from 'body-parser';

import express from 'express';
import compression from 'compression';
import morgan from 'morgan';

import Routes from './routes';

export class Application {
  public express: express.Application;

  constructor() {
    this.initialize()
      .then(() => process.stdout.write('Server started\n'))
      .catch((err) => {
        process.stderr.write(err.message);
        process.exit(1);
      });
  }

  protected async initialize(): Promise<void> {
    this.express = express();
    this.express.use(cors());
    this.express.use(helmet());
    this.express.use(compression());
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: true }));
    this.express.use(Routes);
  }
}

export default new Application().express;
