const nodemailer = require('nodemailer');
const from = '"Picturesque" <info@picturesque.com>';


exports.sendConfirmationEmail = function(client){

        const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "de4838f7f4b0a8",
          pass: "e3edc2e141b2af"
        }
        });
        const email={
            from,
            to: client.email,
            subject: "Welcome to Picturesque Community",
            text: `
            Thankyou for creating an account on Picturesque, Please confirm your Email.
            ${client.generateConfirmationUrl()}
            `
        }
        transport.sendMail(email);

        


}

exports.sendResetPasswordEmail = function(client){

  const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "de4838f7f4b0a8",
    pass: "e3edc2e141b2af"
  }
  });
  const email={
      from,
      to: client.email,
      subject: "Rest Password",
      text: `
      Follow this link to reset password
      ${client.generateResetPasswordLink()}
      `
  }
  transport.sendMail(email);

  


}
