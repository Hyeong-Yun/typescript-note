{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  //public
  //private
  //protected
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7; //class Level
    coffeeBeans: number = 0; // instance

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMachine(coffeeBeans);
    }

    public fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value should be greater than 0");
      }
      this.coffeeBeans += beans;
    }
    clean() {
      console.log("cleaning the machine");
    }
    grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    }

    preheat(): void {
      console.log("heating up....");
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shot....`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(
      beans: number,
      public readonly serialNumber: string,
      private milkFrother: CheapMilkSteamer
    ) {
      super(beans);
    }

    private steamMilk(): void {
      console.log("Steaming some milik...");
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.milkFrother.makeMilk(coffee);
    }
  }
  //싸구려 우유 거품기
  class CheapMilkSteamer {
    private steamMilk(): void {
      console.log("Steaming some milk... ");
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  //설탕 제조기
  class AutomaticSugarMixer {
    private getSugar() {
      console.log("Getting some sugar from candy");
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    getSugar() {
      console.log("Getting some sugar");
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.getSugar();
      return {
        ...coffee,
        hasSugar: true,
      };
    }
  }

  class SweetCaffeKatteMachine extends CoffeeMachine {}

  const machines: CoffeeMaker[] = [
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, "1"),
    new SweetCoffeeMaker(16),
  ];

  machines.forEach((machine) => {
    console.log("---------");
    machine.makeCoffee(1);
  });
}
