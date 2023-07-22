import * as dotenv from 'dotenv';

dotenv.config();


export class Config {
  static DPK = process.env.DETA_PROJECT_KEY;
  static PORT = process.env.PORT;
}
