{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  //public
  //private
  //protected

  class CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7; //class Level
    coffeeBeans: number = 0; // instance

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    public fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error("Not enough");
      }

      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;

      return {
        shots: shots,
        hasMilk: true,
      };
    }
  }

  const maker = CoffeeMaker.makeMachine(32);
  console.log(maker.fillCoffeeBeans(2));

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 4;

    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 6) {
        return;
      }
      this.internalAge = num;
    }
    constructor(private firstName: string, private lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }

  const user = new User("steve", "jobs");
  console.log(user.fullName);
  user.age = 6;

  console.log(user.age);
}
