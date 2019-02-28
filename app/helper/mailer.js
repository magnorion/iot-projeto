module.exports = function (app) {
  const nodemailer = require("nodemailer");
  
  this.main = function () {

    // let account = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      secure: true,
      proxy: 'fiap.com.br',
      auth: {
        user: 'lucas.teste.node@gmail.com', // generated ethereal user
        pass: 'testenode1234' // generated ethereal password
      }
    });

    // setup email data with unicode symbols
    let mailOptions = {
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: "lucas.fulldev@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>" // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log('houve um erro');
        console.log(err);
      } else {
        console.log(info);
      }
    });
  }

  return this;
}