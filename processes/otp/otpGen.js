const otplib = require('otplib');
//import totp from 'otplib/totp';
const Nexmo = require('nexmo');
const Props =  require('../properties/props');

function OtpGen() {
}

var key = new Props();

const nexmo = new Nexmo({
    apiKey: '8449fda0',
    apiSecret: 'lvdpdYnESqlRxD3Q',
  });

otplib.authenticator.options = {
    step: 60,
    algorithm: 'SHA256'
  };

  OtpGen.prototype.createOTP = function(number , userid) {

    const secret = key.sendKey(userid);
    const token = otplib.authenticator.generate(secret);
    const from = 'HP-Comviva';
    const to = number;
    const text = 'Please use the OTP developed by OTP Project for Login!!! Happy login  '+ token ;
    try {
    nexmo.message.sendSms(from, to, text);
    console.log("Token sent this time" , token);
    return token;
    } catch (err){
    console.log(err);
    }

  };

  OtpGen.prototype.ValidateOTP = function(userid , token) {
    const secret = key.sendKey(userid);
    console.log(token);
    var isValid = true;
    try {
        isValid = otplib.authenticator.verify({token, secret});
    } catch (err) {
      console.error(err);
    }
    return isValid;
  };

module.exports = OtpGen;
