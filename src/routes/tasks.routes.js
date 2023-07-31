const {Router}=require('express')
const pool= require('../db')
const {
    createTask
}=require('../controllers/tasks.controllers')
const router=Router()
router.get('/tasks',createTask)
module.exports=router