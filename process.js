var crypto = require('crypto');
var algorithm = 'AES-128-ECB';
var key = 'DEADBEEF';
for(let i = 0; i < 24; i++)
    key+='0';
key = Buffer.from(key, 'hex');

var queue = {"plaintext": "SGVsbG8gV29ybGQ="} //Hello World to base64

if(queue.hasOwnProperty('plaintext')) {

    console.log(queue);

    let text = base64_utf8(queue.plaintext);
    console.log(text);

    let ciphertext = AES128crypt(queue.plaintext)
    console.log(ciphertext);
}

console.log('\n')

var queue = {ciphertext: 'ZmjELJZ9ZXg8PFut/X8n4A=='}

if(queue.hasOwnProperty('ciphertext')) {

    console.log(queue);

    let plaintext = AES128decrypt(queue.ciphertext);
    console.log(plaintext);

    let text = base64_utf8(plaintext);
    console.log(text);
}




function base64_utf8(base64_text){
    return Buffer.from(base64_text, 'base64').toString('utf8')
}
function utf8_base64(utf8_text){
    return Buffer.from(utf8_text).toString('base64');
}
function AES128crypt(plaintext){
    //cipher.update(data[, inputEncoding][, outputEncoding])
    //cipher.final([outputEncoding])
    let cipher = crypto.createCipher(algorithm, key);
    let crypted = cipher.update(plaintext,'base64','base64'); // crypt block
    crypted += cipher.final('base64'); // block add padding
//??
    // crypted2 = Buffer.concat([cipher.update(plaintext,'base64','base64'),cipher.final('base64')]);
    // console.log(crypted2)
    return crypted;
}
function AES128decrypt(ciphertext){
    var decipher = crypto.createDecipher(algorithm, key);
    var decrypted = decipher.update(ciphertext,'base64','base64');
    decrypted += decipher.final('base64');
    return decrypted;
}
