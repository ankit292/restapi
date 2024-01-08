const jwt = require('jsonwebtoken');
const Member = require('../model/members');

const auth = async(req, res, next)=>{
    try {
        const getToken = req.cookies.jwt;
        const verifyToken = jwt.verify(getToken, 'ankitkumarvermalodhirajpoot');
        console.log(verifyToken);

    } catch (error) {
        res.status(402).send('Athentication Error =>' + error)
    }
}

module.exports = auth;