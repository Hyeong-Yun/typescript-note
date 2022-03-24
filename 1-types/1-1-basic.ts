{
  /**
   * Primitive: numbser, string, boolean, bigint, symbol, null, undefined
   * Object: function, array....
   */

  //number
  const num: number = 1;

  //string
  const str: string = "hello";

  //boolean
  const boal: boolean = false;

  //undefined
  let age: number | undefined;
  age = undefined;
  age = 1;

  //null
  let person: null | string;
  person = null;
  person = "";

  //가능한 쓰지 않기
  // unknown
  let notSure: unknown = 0;
  notSure = "Hello";
  notSure = true;

  let anything: any;
  anything = "Hello";
  anything = 2;

  //void
  function print(): void {
    console.log("hello");
    return;
  }

  //never - return 할 수 없음
  function throwError(message: string): never {
    throw new Error(message);
  }

  //Object // 타입을 구체적으로 정해주는게 중요
  let obj: Object;
  function acceptSomeObject(obj: Object) {}

  acceptSomeObject({ name: "animal" });
}
