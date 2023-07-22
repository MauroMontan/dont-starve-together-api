import { Injectable } from '@nestjs/common';
import { Deta as Det } from 'deta';
import Deta from 'deta/dist/types/deta';
import { Config } from 'src/config/config.provider';

@Injectable()
export class DatabaseService {

    deta: Deta

    constructor() {
        this.deta = Det(Config.DPK)
    }

    from(collection: string) {
        return this.deta.Base(collection)
    }
}
