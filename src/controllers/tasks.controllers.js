const pool=require('../db')
const createTask=async (req,res,next)=>{
    try{
        const {title,description}=req.body
        const newTask=await pool.query(
            'INSERT INTO task(title,description) VALUES($1,$2) RETURNING *', [title,description]
        )
        res.json(newTask.rows[0])
    }catch(error){
        next(error)
    }
}
module.exports={
    createTask
}