const inquirer = require('inquirer');
const fs = require('fs');

const generateMyHTML = (myAnswers) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${myAnswers.first_name} ${myAnswers.last_name}</title>
  </head>
  <body>
    <h1>Info from Inquirer</h1>
  <p>First Name: ${myAnswers.first_name} </p>
  <p>Last Name: ${myAnswers.last_name}</p>
  </body>
</html>
`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'first_name',
      message: "What's your first name",
    },
    {
      type: 'input',
      name: 'last_name',
      message: "What's your last name",
      default() {
        return 'Doe';
      },
    },
  ])
  .then((answers) => {
    // const htmlPageContent = generateMyHTML(answers);

    // fs.writeFile('my-index.html', htmlPageContent, (err) => {
    fs.writeFile('my-index.html', generateMyHTML(answers), (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Yo you created some HTML!');
      }
    });
  });
