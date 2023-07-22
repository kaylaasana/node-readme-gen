// render license badges
function renderLicenseBadge(license) {
  if(license === 'Apache2.0'){
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }else if(license === 'BSD 3'){
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  }else if(license === 'MIT'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }else if(license === 'GPL v3'){
    return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
  }else if(license === 'IBM'){
    return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
  }else if(license === 'none'){
    // If there is no license, return an empty string
    return ''
  }
}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.projTitle}  

  ## Table of Contents

  * [License](#license)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributions](#contributions)
  * [Contact](#contact)
   
   ## License:
   ${answers.license}

   ## Description
   ${answers.description}
   
   ## Installation
   ${answers.installInst}
            
   ## Usage
   ${answers.usage}
   
   ## Contributions
   ${answers.contributions}
   
   ## Testing
   ${answers.testing}

   ## Contact
   Github: https://github.com/${answers.userName}
   E-mail: ${answers.email}

`;
}

module.exports = generateMarkdown;
