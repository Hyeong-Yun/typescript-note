{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  const BEANS_GRAM_PER_SHOT: number = 7;
  let coffeeBeans: number = 0;

  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots * BEANS_GRAM_PER_SHOT) {
      throw new Error("Not enough");
    }

    coffeeBeans -= shots * BEANS_GRAM_PER_SHOT;

    return {
      shots: shots,
      hasMilk: true,
    };
  }
  const coffee = makeCoffee(7);
  console.log(coffee);
}
