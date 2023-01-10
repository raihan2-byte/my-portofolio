const router = require('express').Router()
const nodemailer = require('nodemailer')

router.post('/contact',(req,res)=>{
    let data = req.body
    if(data.name.length === 0 || data.email.length === 0 || data.message.length === 0){
        return res.json({msg: "please fill all the field"})
    }

        let smtpTransporter = nodemailer.createTransport({
            service: 'Gmail',
            port: 465,
            auth:{
                user: 'raihanalfarisi2@gmail.com',
                pass: 'royalcampus123'
            }
        })
        let mailOptions = {
            from: data.email,
            to: 'raihanalfarisi2@gmail.com',
            subject : `message from $(data.name)`,
            html:`
            <h3>Informations</h3>
            <ul>
            <li>Name: ${data.name}</li>
            <li>Email: ${data.email}</li>
            </ul>
            <h3>Message</h3>
            <p>${data.message}</p>
            `
        }
        smtpTransporter.sendMail(mailOptions, (eror)=>{
            try{
                if(eror) return res.status(400).json({msg:"please fill all the fields"})
                res.status(200).json({msg:"Thank you for contacting Raihan"})

            }catch(eror){
                if(eror) return res.status(500).json({msg: "There is server eror"})
            }
        })
    
})

module.exports=router