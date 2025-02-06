import { Request, Response } from 'express';

import { classifyNumber } from '../utils/math-utils';

const getClassifyNumber = async (req: Request, res: Response) => {
  const number = parseInt(req.query.number as string);

  if (isNaN(number)) {
    return res.status(400).json({
      number: req.query.number,
      error: true,
    });
  }

  try {
    const properties = classifyNumber(number);
    const funFact = await fetchFunFact(number);

    res.status(200).json({
      number,
      is_prime: properties.isPrime,
      is_perfect: properties.isPerfect,
      properties: properties.properties,
      digit_sum: properties.digitSum,
      funFact: funFact,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export default {
  getClassifyNumber,
};

const fetchFunFact = async (num: number): Promise<string> => {
  const url = `http://numbersapi.com/${num}/math`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch fun fact');
  }

  return response.text();
};
