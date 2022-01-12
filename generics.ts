function identity<T>(arg: T): T {
    return arg;
  }
  class Collection<T,K> {//we can also put another parameter
    private _things:K[];
    constructor() {
      this._things = [];
    }
    add(something: K): void {
      this._things.push(something);
    }
    get(index: number): K {
      return this._things[index];
    }
  }
  let Stringss = new Collection<String,number>();
  //Stringss.add(101);//this will give error bcs of number data type
  //Stringss.add("world");
  Stringss.add(1011);
  console.log(Stringss.get(0));