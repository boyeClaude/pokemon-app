export class Pokemon {
  id: number;
  hp: number;
  cp: number;
  name: string;
  picture: string;
  types: Array<string>;
  created: Date;

  constructor(
    hp: number = 100,
    cp: number = 10,
    name: string = "Enter a name",
    picture: string = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/xxx.png",
    types: Array<string> = ["Normal"],
    created: Date = new Date()
  ) {
    this.hp = hp;
    this.cp = cp;
    this.name = name;
    this.picture = picture;
    this.types = types;
    this.created = created;
  }
}

/*constructor(
    public id: number,
    public hp: number,
    public cp: number,
    public name: string,
    public picture: string,
    public types: Array<string>,
    public created: Date
  ) {}*/
