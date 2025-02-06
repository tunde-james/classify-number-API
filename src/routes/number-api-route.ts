import express from 'express';
import ClassifyNumberController from '../controllers/classify-number-controller';

const router = express.Router();

router.get('/', ClassifyNumberController.getClassifyNumber);

export default router;
