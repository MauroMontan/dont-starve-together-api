import * as dotenv from 'dotenv';

dotenv.config();

let developmentmode = false;
export class Config {
  static DATABASE_URL = developmentmode ? process.env.DEV_DATABASE_URL : process.env.DATABASE_URL;
  static PORT = process.env.PORT;
}
