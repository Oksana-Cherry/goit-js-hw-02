function formatString(string, maxLength = 40) {

  /*   const format = 
       string.length < maxLength
         ? string.slice(0, maxLength) + '…'
         : string
         ? string.slice(0, maxLength) + '…'
         : string
         ? string.slice(0, (maxLength = 30)) + '…'
         : string;
  
    return format;  это сложный не нужный вариант*/ 
    //Write code under this line
          return string.length > maxLength
         ? `${string.slice(0, maxLength)}...`
         : string;
  
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// 'Curabitur ligula sapien, tincidunt non.'

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// 'Vestibulum facilisis, purus nec pulvinar...'

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30));
// 'Vestibulum facilisis, purus ne...'
