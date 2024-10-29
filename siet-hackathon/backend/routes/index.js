import express from 'express'
import authRouter from './auth.route.js'
import cropRouter from './crop.route.js'
import { authenticate } from '../middleware/auth.middleware.js'
import marketRouter from './market.route.js'
const router=express.Router()

router.use('/auth',authRouter)
router.use('/crop',authenticate,cropRouter)
router.use('/market',authenticate,marketRouter)
export default router