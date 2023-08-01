const generateKey = (tokenLen, hyphen, hyphenPos) => {
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
    return new Error('Invalid arguments');
  }
  //console.log(token);
  token = token.join("");
  return token;
};

const generateKeyPattern = (pattern) => {
  const hexChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let guid = '';
  if(!pattern || !pattern.length) return new Error('Please provide pattern (eg: xxx-xxxx-xxx)');
  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i] === 'x') {
      const randomIndex = Math.floor(Math.random() * 16);
      guid += hexChars[randomIndex];
    } else {
      guid += pattern[i];
    }
  }
  return guid;
}

module.exports = {
  generateKey,
  generateKeyPattern
}