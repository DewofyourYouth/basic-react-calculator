export const regexCheck = problemString =>
  /(\d+)(\*|\+|\-|\/)(\d+)/gm.test(problemString);

export const problemArr = string => /(\d+)(\*|\+|\-|\/)(\d+)/gm.exec(string);

export const doMath = arr => {
  const a = parseFloat(arr[1]);
  const b = parseFloat(arr[3]);
  const operator = arr[2];
  switch (operator) {
    case '*':
      return a * b;
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '/':
      return a / b;
    default:
      return 0;
  }
};
