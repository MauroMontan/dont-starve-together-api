import * as dotenv from 'dotenv';

dotenv.config();

export class Config {
  static DATABASE_URL = process.env.DATABASE_URL;
  static PORT = process.env.PORT;
}
