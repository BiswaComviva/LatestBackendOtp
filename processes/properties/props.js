
function Props() {
}

Props.prototype.sendKey = function(userid) {

    var key = "KVKFKRCPNZQUYMLXOVYDSQKJKZDTSRLD";
    var userid = userid +"";
    const numChar = key.length - userid.length + 1
    const secret = key.substring(0 , numChar) + userid.toUpperCase();
    return secret;
}



module.exports = Props;