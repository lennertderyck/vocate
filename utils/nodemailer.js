import nodemailer from 'nodemailer';

const { SMTP_ACCOUNT, SMTP_PASSWORD } = process.env;

const transport = nodemailer.createTransport({
    host: 'mail.zxcs.nl',
    port: 465,
    auth: {
       user: SMTP_ACCOUNT,
       pass: SMTP_PASSWORD
    }
});

export const sendMail = ({ from, to, subject, html }) => {
    const message = { from, to, subject, html };
    return new Promise((resolve, reject) => {
        transport.sendMail(message, (err, info) => {
            if (err) reject(err)
            else resolve(info)
        });
    })
}