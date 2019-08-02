
const getUsers = "SELECT * FROM users";

const insertUser = "INSERT INTO users(userid , username , msisdn , isLoggedIn) VALUES (? , ? , ? , ?)";

const checkRegistered = "SELECT * FROM users WHERE userid = ?";

const checkUserExistance = "SELECT time,trials,otp FROM otps WHERE userid = ?";

const updateOtpsTrials= "UPDATE otps set time = now(), trials= trials-1  where userid=? ";

const updateOtps= "UPDATE otps set time = now(), otp=? where userid=? ";

const updateOtpsTime = "UPDATE otps set time = now(), trials=3 ,otp=0 where userid=? ";

const updateUserLogin = "UPDATE users set isLoggedIn=1 where userid=? "

const insertOtps = "INSERT INTO otps VALUES (? ,? ,now(), 2)";

const logOutUser = "UPDATE users set isLoggedIn=0 where userid=? ";

module.exports = {logOutUser , insertOtps, updateOtps , updateOtpsTrials,checkRegistered , checkUserExistance, getUsers  , insertUser,updateOtpsTime, updateUserLogin};
