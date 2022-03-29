{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeMaker {
    static BEANS_GRAM_PER_SHOT: number = 7; // class level
    coffeeBeans: number = 0;
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error("Not enough coffeeBeans");
      }

      this.coffeeBeans -= shots * CoffeMaker.BEANS_GRAM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = new CoffeMaker(32);
}
