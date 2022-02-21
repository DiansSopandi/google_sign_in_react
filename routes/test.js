import express from "express";

import testOperator from '../controllers/testOperator.js';

const router = express.Router();

// router.get('/', ( req, res ) => {
//     res.send(' Test Successful... ');
// });

router.get('/', testOperator);



export default router;