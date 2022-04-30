// 
function renderLicenseBadge(license) {
  let licenseChoice = `${data.licensing}`;
  let licenseLink = '';

  if (licenseChoice === 'GNUAGPLv3') {
    licenseLink = 'https://choosealicense.com/licenses/agpl-3.0/';
  };
  if (licenseChoice === '') {
    licenseLink = '';
  };
  if (licenseChoice === '') {
    licenseLink = '';
  };
  if (licenseChoice === '') {
    licenseLink = '';
  };
  if (licenseChoice === '') {
    licenseLink = '';
  };
  if (licenseChoice === '') {
    licenseLink = '';
  };
  if (licenseChoice === '') {
    licenseLink = '';
  };
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Licensing:
  [![badge](https://img.shield.io/badge/license-${data.licensing}-blue)](https://shield.io)


  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Questions](#questions)

  ## Description:
  ${data.description}

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## License:
  _This application has the ${data.licensing}._
      
  For more information please view the [license description](${licenseLink}).

  ## Contribution:
  ${data.contribution}

  ## Testing:
  ${data.testing}

  ## If any questions please contact at:
  - GitHub: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}

`;
}

module.exports = generateMarkdown;
