// // 
// function renderLicenseBadge(license) {
//   let licenseChoice = `${data.licensing}`;
//   let licenseLink = '';

//   if (licenseChoice === 'GNUAGPLv3') {
//     licenseLink = 'https://choosealicense.com/licenses/agpl-3.0/';
//   };
//   if (licenseChoice === 'GNUGPLv3') {
//     licenseLink = 'https://choosealicense.com/licenses/gpl-3.0/';
//   };
//   if (licenseChoice === 'MozillaPublicLicense2.0') {
//     licenseLink = 'https://choosealicense.com/licenses/mpl-2.0/';
//   };
//   if (licenseChoice === 'ApacheLicense2.0') {
//     licenseLink = 'https://choosealicense.com/licenses/apache-2.0/';
//   };
//   if (licenseChoice === 'MITLicense') {
//     licenseLink = 'https://choosealicense.com/licenses/mit/';
//   };
//   if (licenseChoice === 'BoostSoftwareLicense1.0') {
//     licenseLink = 'https://choosealicense.com/licenses/bsl-1.0/';
//   };
//   if (licenseChoice === 'TheUnlicense') {
//     licenseLink = 'https://choosealicense.com/licenses/unlicense/';
//   };
//   if (license === 'None') {
//     licenseLink === 'N/A';
//   }
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
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
return markdownTemplate;

}


module.exports = generateMarkdown;
