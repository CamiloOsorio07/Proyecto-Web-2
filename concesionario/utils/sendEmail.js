const nodemailer = require('nodemailer');

const sendEmail = async (to, subject, text) => {
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'camiloosorio717@gmail.com',
            pass: 'Caiman1060266650.',
        },
    });

    let mailOptions = {
        from: 'camilo.osorio36662@ucaladas.edu.co',
        to,
        subject,
        text,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

module.exports = sendEmail;
