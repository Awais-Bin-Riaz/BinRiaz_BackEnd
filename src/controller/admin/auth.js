const User = require("../../models/user");
const jwt = require('jsonwebtoken')
const bcrypt=require('bcrypt')
const shortid=require('shortid')

exports.signup = async (req, res) => {


    await User.findOne({ email: req.body.email })
        .exec(async(error, user) => {
            if (user) return res.status(400).json({
                message: "Admin already exist"

            });
           
            
            const {
                firstName,
                lastName,
                email,
                password
            } = req.body;

const hash_password=await bcrypt.hash(password, 10)

            const _user = new User({
                firstName,
                lastName,
                email,
                hash_password,
                userName: shortid.generate(),
                role:'admin'
            });

            _user.save((error, data) => {

                if (data) {
                    return res.status(201).json({
                        message: "Admin Created Successfully../"
                    });
                }
                if (error) {
                    return res.status(400).json({
                        message: "something went wrong"
                    })
                }
            })
        });
}

exports.signin = async (req, res) => {
    await User.findOne({ email: req.body.email })
        .exec(async(error, user) => {
            // if(error) return res.status(400).json({error})
            if (error) {
                return res.status(400).json({
                    message: "something went wrong"
                })
            }
            if (user) {
                const isPassword= await user.authenticate(req.body.password)
                if (isPassword && user.role==='admin') {
                    const token = jwt.sign({ _id: user._id, role:user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
                const {_id, firstName, lastName, email, role,fullName }=user;
                res.cookie('token', token, {expiresIn:'1d'})
                res.status(200).json({
                    token,
                    user:{
                        _id, firstName, lastName, email, role,fullName
                    }
                })
                }
                else{
                    return res.status(400).json({
                        message: "Invalid Password"
                    })
                }
            }
        })
}


exports.requireSignin = (req,res,next)=>{
    const token = req.headers.authorization.split(' ')[1];
    const user=jwt.verify(token, process.env.JWT_SECRET);
res.user=user;
return next();
}

exports.signout=(req,res)=>{
res.clearCookie('token')
res.status(200).json({
    message:'signout successfully.../'
})
}