 function missingChars (str, strLength)
    {
      let MAX_CHARS = 26;
 
      // A boolean array to store
      // characters present in string.
      
      let present = new Array(MAX_CHARS);
      present.fill(false);
      let charsList = [];
 
      // Traverse string and mark.
      // characters present in string.
      for(let i = 0; i < strLength; i++){
        if ('A'.charCodeAt() <= str[i].charCodeAt() && str[i].charCodeAt() <= 'Z'.charCodeAt())
          present[str[i].charCodeAt() - 'A'.charCodeAt()] = true;
        else if ('a'.charCodeAt() <= str[i].charCodeAt() && str[i].charCodeAt() <= 'z'.charCodeAt())
          present[str[i].charCodeAt() - 'a'.charCodeAt()] = true;
      }
 
      // Store missing characters
      // in alphabetic order.
      for(let i = 0; i < 26; i++){
        if (present[i] == false)
        {
          charsList.push(String.fromCharCode(i + 'a'.charCodeAt()));
        }
      }
      return charsList;
    }
     
    let str = "The quick brown fox jumps";
    let missing = missingChars(str, str.length);
    console.log(missingChars(str, str.length));
    if (missing.length >= 1)
    {
      for(let i = 0; i < missing.length; i++)
      {
        console.log(missing[i]);
      }
    }





