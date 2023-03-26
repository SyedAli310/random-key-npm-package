module.exports = generateKey = (tokenLen, hyphen, hyphenPos) => {
    let keySet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var token = [];
    if (hyphen == true) {
      for (let i = 0; i < tokenLen; i++) {
        let pos = Math.floor(Math.random() * keySet.length);
        if (hyphenPos == undefined) hyphenPos = 1;
        if (i % hyphenPos == 0) {
          token.push("-");
        }
        token.push(keySet[pos]);
      }
      token.shift();
    } else if (hyphen == false) {
      for (let i = 0; i < tokenLen; i++) {
        let pos = Math.floor(Math.random() * keySet.length);
        token.push(keySet[pos]);
      }
    } else {
      token = ["Incorrect", " ", "Arguments", " ", "Provided"];
    }
    //console.log(token);
    token = token.join("");
    return token;
  };  