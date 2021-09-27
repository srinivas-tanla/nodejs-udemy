module.exports=(req,res,next)=>{
    console.log(`got request to http://localhost:3000${req.url}`);
    next();
}