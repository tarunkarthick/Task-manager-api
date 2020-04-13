const sgMail=require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendwelcomeemail=(email,name)=>{
  sgMail.send({
    to:email,
    from:'tarunkarthick.7@gmail.com',
    subject:'Thanks for joining in!',
    text:`Welcome to the app,${name}.Let me know how you get along with the app.`
  })
}

const sendcancelationemail=(email,name)=>{
  sgMail.send({
    to:email,
    from:'tarunkarthick.7@gmail.com',
    subject:'Sorry to see u go',
    text:`Goodbye, ${name}.I hope to see you back sometime soon.`
  })
}

module.exports={
  sendwelcomeemail,
  sendcancelationemail
}
