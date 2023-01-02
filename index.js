const commander = require('commander');

function checkPasswordStrength(password) {
  // A strong password should be at least 8 characters long and contain a mix of
  // uppercase and lowercase letters, numbers, and special characters.
  var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

  if (strongRegex.test(password)) {
    // password is strong
    return "strong";
  } else if (mediumRegex.test(password)) {
    // password is medium
    return "medium";
  } else {
    // password is weak
    return "weak";
  }
}

commander
  .version('1.0.0')
  .description('Password strength checker')
  .arguments('<password>')
  .action(password => {
    console.log(checkPasswordStrength(password));
  });

commander.parse(process.argv);
