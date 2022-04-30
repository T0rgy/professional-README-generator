
// Function to generate markdown for README
function generateMarkdown(data) {
// Variables & if statements for licensing links
  let licenseChoice = `${data.licensing}`;
  let licenseLink = '';

  if (licenseChoice === 'GNUAGPLv3') {
    licenseLink = 'https://choosealicense.com/licenses/agpl-3.0/';
  };
  if (licenseChoice === 'GNUGPLv3') {
    licenseLink = 'https://choosealicense.com/licenses/gpl-3.0/';
  };
  if (licenseChoice === 'MozillaPublicLicense2.0') {
    licenseLink = 'https://choosealicense.com/licenses/mpl-2.0/';
  };
  if (licenseChoice === 'ApacheLicense2.0') {
    licenseLink = 'https://choosealicense.com/licenses/apache-2.0/';
  };
  if (licenseChoice === 'MITLicense') {
    licenseLink = 'https://choosealicense.com/licenses/mit/';
  };
  if (licenseChoice === 'BoostSoftwareLicense1.0') {
    licenseLink = 'https://choosealicense.com/licenses/bsl-1.0/';
  };
  if (licenseChoice === 'TheUnlicense') {
    licenseLink = 'https://choosealicense.com/licenses/unlicense/';
  };
  if (licenseChoice === 'None') {
    licenseLink === 'N/A';
  }
  // Readme Text
  let markdownTemplate = `# ${data.title}

  
  ![badge](https://img.shields.io/badge/license-${data.licensing}-brightgreen)


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
  _This application has ${data.licensing}._
      
  For more information please view the [license description](${licenseLink}).

  ## Contribution:
  ${data.contribution}

  ## Testing:
  ${data.testing}

  ## If any questions please contact at:
  - GitHub: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}

`;
// returns filled out Readme Template
return markdownTemplate;

}

// Makes this .js readable to index.js
module.exports = generateMarkdown;
