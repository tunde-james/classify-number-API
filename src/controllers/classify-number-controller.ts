import { Request, Response } from 'express';
import axios from 'axios';

import { classifyNumber } from '../utils/math-utils';

const getClassifyNumber = async (req: Request, res: Response) => {
  const inputNumber = req.query.number as string;

  if (!inputNumber || !/^-?\d+$/.test(inputNumber)) {
    return res.status(400).json({
      number: inputNumber,
      error: true,
      message: 'Invalid input. Please provide a valid integer.',
    });
  }

  const number = parseInt(inputNumber, 10);

  try {
    const properties = classifyNumber(number);
    const funFact = await fetchFunFact(number);

    res.status(200).json({
      number,
      is_prime: properties.isPrime,
      is_perfect: properties.isPerfect,
      properties: properties.properties,
      digit_sum: properties.digitSum,
      fun_fact: funFact,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: true,
      message: error instanceof Error ? error.message : 'Internal Server Error',
    });
  }
};

export default {
  getClassifyNumber,
};

const fetchFunFact = async (num: number): Promise<string> => {
  const url = `http://numbersapi.com/${num}/math`;

  try {
    const response = await axios.get(url, {
      timeout: 5000,
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch fun fact');
  }
};
