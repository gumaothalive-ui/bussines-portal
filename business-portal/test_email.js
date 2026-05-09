const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports. STARTTLS is used automatically.
  auth: {
    user: 'dailymarket380@gmail.com',
    pass: 'pxog cqgl zqsk trfs',
  },
});

async function main() {
  const mailOptions = {
    from: '"DailyMarket Elite" <dailymarket380@gmail.com>',
    to: 'gumaqiqa323@gmail.com',
    subject: 'Your DailyMarket Vendor Login Code (TEST)',
    html: `
      <div style="font-family: Arial, sans-serif; text-align: center; padding: 40px; background-color: #fcfcfc;">
        <h1 style="color: #000; font-weight: 900; letter-spacing: 2px;">DAILYMARKET BUSINESS</h1>
        <p style="color: #666; font-size: 16px; margin-top: 20px;">Use the following Elite Vendor Passcode to access your storefront:</p>
        <div style="margin: 40px auto; padding: 20px; background-color: #000; color: #fff; font-size: 32px; font-weight: 900; letter-spacing: 5px; width: fit-content; border-radius: 4px;">
          123456
        </div>
        <p style="color: #999; font-size: 12px; margin-top: 40px;">This code expires in 10 minutes. Do not share it with anyone.</p>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully: ' + info.response);
  } catch (error) {
    console.error('Email sending failed:', error);
  }
}

main();
