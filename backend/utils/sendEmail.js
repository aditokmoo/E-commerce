const nodemailer = require('nodemailer');

const sendEmail =  async (user, confirmToken) => {
    const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE,
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: false,
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    // Create message
    const message = {
        from: process.env.EMAIL_SENDER,
        to: user.email,
        subject: 'Email verification',
        text: `${process.env.BASE_URL}` + `api/auth/verify/${confirmToken}`
    }

    // Send message
    await transporter.sendMail(message)
}

module.exports = sendEmail;