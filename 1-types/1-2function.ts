{
  //Javascript
  function jsAdd(num1, num2) {
    return num1 + num2;
  }
  //Typescript
  function tsAdd(num1: number, num2: number): number {
    return num1 + num2;
  }
  //Javascript
  function jsFetchNum(id) {
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  function jsFetchNum(id: string): Promise<number> {
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  //Javascript => TypeScript
  //Optional Parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName("Steve", "Jobs");
  printName("Yun");

  //Default parameter
  function printMessage(message: string = "default message") {
    console.log(message);
  }
  printMessage("");

  //Rest parameter
  function addNumbers(...numbers): number {
    return numbers.reduce((pre, cur) => pre + cur, 0);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3));
}
