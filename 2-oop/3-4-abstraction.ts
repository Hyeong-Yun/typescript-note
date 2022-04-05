{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    grindBeans(shots){
      console.log(`grinding beans for ${shots}`);
      if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT){
        throw new Error('Not enough coffee beans!')
      }
    }
    
    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    //   if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
    //     throw new Error("Not enough coffeeBeans");
    //   }

    //   this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
    //   return {
    //     shots,
    //     hasMilk: false,
    //   };
    // }
  }

  const maker = CoffeeMaker.makeMachine(14);
  console.log(maker);

  class User {
    get fullName(): string {
      return `${this.firstName} + ${this.lastName}`;
    }
    private internalAge = 4;

    get age(): number {
      return this.internalAge;
    }

    set age(num: number) {
      this.internalAge = num;
    }

    constructor(private firstName: string, private lastName: string) {}
  }

  const user = new User("Steve", "Jobs");
  console.log(user.fullName);
  user.age = 6;
  console.log(user.age);
}
