export class foodListDto {
    constructor(
      public category ,
      public subcategory ,
      public item: string,
      public costPerItem: number,
      public photo: string
    ) {}
  }
  