//Write a function that will check if two given characters are the same case.
//If either of the characters is not a letter, return -1
//If both characters are the same case, return 1
//If both characters are letters, but not the same case, return 0

function sameCase(a, b) {
  let val = 0;
  if (/[A-Z]/.test(a) && /[A-Z]/.test(b)) return (val = 1);
  if (/[a-z]/.test(a) && /[a-z]/.test(b)) return (val = 1);
  if (/[A-Z]/.test(a) && /[a-z]/.test(b)) return (val = 0);
  if (/[a-z]/.test(a) && /[A-Z]/.test(b)) return (val = 0);
  if (!/^[a-zA-Z]/.test(a) || !/^[a-zA-Z]/.test(b)) return (val = -1);
}
