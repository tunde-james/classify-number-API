export const classifyNumber = (number: number) => {
  const isPrime = checkPrime(number);
  const isPerfect = checkPerfect(number);
  const isArmstrong = checkArmstrong(number);
  const isEven = number % 2 === 0;
  const digitSum = calculateDigitSum(number);

  const properties = [];

  if (isArmstrong) properties.push('armstrong');
  if (isEven) properties.push('even');
  else properties.push('odd');

  return {
    isPrime,
    isPerfect,
    properties,
    digitSum,
  };
};

const checkPrime = (num: number): boolean => {
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const checkPerfect = (num: number): boolean => {
  if (num < 2) return false;

  let sum = 1;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      sum += i;
      if (i !== num / i) sum += num / i;
    }
  }

  return sum === num;
};

const checkArmstrong = (num: number): boolean => {
  if (num < 0) return false;
  const digits = String(num).split('');
  const sum = digits.reduce(
    (acc, digit) => acc + Math.pow(Number(digit), digits.length),
    0
  );

  return sum === num;
};

const calculateDigitSum = (num: number): number => {
  const absoluteNum = Math.abs(num);
  return String(absoluteNum)
    .split('')
    .reduce((acc, digit) => acc + Number(digit), 0);
};
