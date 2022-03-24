{
  // Array
  const fruits: string[] = ["apple", "banana"];
  const scores: Array<number> = [1, 2, 3];
  function printArray(fruits: readonly string[]) {
    // readonly 베열 변경 불가
  }

  // Tuple
  let student: [string, number];
  student = ["name", 12345];
  student[0]; // name
  student[1]; // 12345
  const [name, age] = student;
}
