const errorHandler = (err,req,res,next)=>{
    const statuscode = res.statuscode ? res.statuscode : 500;
    res.json({message:"babooo"})
}

module.exports = errorHandler