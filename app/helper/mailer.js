module.exports = function (app) {
  const nodemailer = require("nodemailer");
  const fs = require('fs');
  
  this.main = function () {

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      secure: true,
      auth: {
        user: 'lucas.teste.node@gmail.com',
        pass: 'testenode1234'
      }
    });

    let mailOptions = {
      from: '"🔌 Aluno Fiap" <lucas_front@yahoo.com.br>',
      to: "lucas.fulldev@gmail.com",
      subject: "Nova solicitação de suporte ✔",
      html: fs.createReadStream('app/template/mail.html')
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Email enviado!');
      }
    });
  }

  return this;
}