{
  /**
   * Type Assertion
   */
  function jsStrFunc(): any {
    return "hello";
  }
  const result = jsStrFunc();
  (result as string).length;₩
  <string>result.length;

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers!.push(2);
}
