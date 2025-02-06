import { Request, Response } from 'express';

const getClassifyNumber = async (req: Request, res: Response) => {
  try {
    const { number } = req.query;
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export default {
  getClassifyNumber,
};
