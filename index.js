require('dotenv').config()
const nodemailer = require('nodemailer')
const hbsMailer = require('nodemailer-express-handlebars')

// Configures transporter with GMAIL credentials
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASSWORD
    }
})

// Configures Handlebars plugin in Nodemailer
const hbsOptions = {
    viewEngine: {
        partialsDir: 'views',
        layoutsDir: 'views',
        defaultLayout: 'welcomeMessage'
    },
    viewPath: 'views'
}

transporter.use('compile', hbsMailer(hbsOptions))

function sendEmail(to, subject, template, context) {
    //Configures email options like from, to, subject, message, attachments, template...
    const mailOptions = {
        from: 'financefinnfish@gmail.com',
        to,
        subject,
        template,
        context
    }

    // Send email options using the transporter
    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log('Error: ', err)
        } else {
            console.log('Message sent successfully!')
        }
    })
}

// Calling the function
sendEmail('briancordovabusiness@gmail.com', 'User Account Created!', 'welcomeMessage')
//sendEmail('email@domain.com', 'Dynamic Email Template with Handlebars', 'welcomeMessage', { userName: 'John Doe' })

module.exports = {sendEmail};