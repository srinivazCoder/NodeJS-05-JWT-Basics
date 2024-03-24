const jwt = require("jsonwebtoken");

const {BadRequest} = require("../errors");

const login = async (req, res) => {
    const { username, password } = req.body;
    // console.log(username,password)

    // mongo
    // Joi
    // check in the controller

    if (!username || !password) {
        throw new BadRequest("Please provide Email and Password");

    }

    // just for Demo normally provided by DB!!

    const id = new Date().getDate();

    // try to keep payload small , better user expericence
    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, { expiresIn: '30d' });
    console.log(token)
    // res.send('Fake Login/Register/Signup Route');
    res.json({ msg: 'user created', token })
}



const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100);
    res.status(200).json({ msg: `Hello, ${req.user.username}`, secret: `Here is your authorized data, your lucky number is ${luckyNumber}` })

}


module.exports = {
    login, dashboard
}