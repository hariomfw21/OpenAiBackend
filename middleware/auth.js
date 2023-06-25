const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
    if (!token) {
        return res.status(403).send({ message: 'you must be logged in' }); // return here
    }
    const token = req.headers.authorization.split(' ')[1];
    console.log(token);
    jwt.verify(token,process.env.SECRET_KEY, (err,data)=>{
        if(err){
            return res.status(403).send({ message: 'you must be logged in again' }); // return here
        }else{
            next();
        }
    })
}

module.exports = {
    auth
}
