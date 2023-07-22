
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CrockpotRecipe } from './dtos/dtos';
import { UtilsService } from 'src/utils/utils.service';
import { FoodType } from './enums/foodType.enum';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class CrockpotRecipesService {
  constructor(
    private db: DatabaseService,
    private utils: UtilsService,
  ) { }


  async getAll(limit: number, offset: number): Promise<CrockpotRecipe[]> {



    let db = this.db.from("crockpotRecipes")

    let recipes = await db.fetch({})
    let data = recipes.items as unknown as CrockpotRecipe[]

    if (limit === undefined) {
      limit = data.length;
    }
    if (offset === undefined || offset < 0) {

      offset = 0;
    }
    if (offset > limit) {
      limit = data.length
      offset = 0
    }


    data.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });



    return data.slice(offset, limit)
  }

}
