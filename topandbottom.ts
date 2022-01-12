class Animal {
    public _species: string
    constructor(species: string) {
      this._species = species
    }
  }
  class Dog extends Animal {
    constructor() {
      super('Dog')
    }
  }
  const dog: Dog = new Dog()  
  const animal: Animal = dog
const obj: Object = animal
const str: Object = "I am a string and an Object"
const thing: unknown = obj  //this the use of top type we can sepecify the object type is unknown

const stringOrNum: string | number = "I am a string or number!"
if (typeof stringOrNum === 'string') {
    console.log('I am a string')
  } else if (typeof stringOrNum === 'number') {
    console.log('I am a number')
  } else {
    const _exhaustiveCheck: never = stringOrNum //this is bottom type:never
    throw new Error(`Unknown type ${_exhaustiveCheck}`)
  }

  function fail(msg: string): never {
    throw new Error(msg)
  }