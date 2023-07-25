// render license badges
function renderLicenseBadge(license) {
  if(license === 'Apache2.0'){
    return '(https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
  }else if(license === 'BSD 3'){
    return '(https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)'
  }else if(license === 'MIT'){
    return '(https://img.shields.io/badge/License-MIT-yellow.svg)'
  }else if(license === 'GPL v3'){
    return '(https://img.shields.io/badge/License-AGPL_v3-blue.svg)'
  }else if(license === 'IBM'){
    return '(https://img.shields.io/badge/License-IPL_1.0-blue.svg)'
  }else if(license === 'none'){
    // If there is no license, return an empty string
    return ''
  }
}

function renderLicenseDescription(license){
  if(license === 'Apache2.0'){
    return 'This project is covered under the Apache 2.0 license criteria'
  }else if(license === 'BSD 3'){
    return 'This project is covered under the BSD 3 license criteria'
  }else if(license === 'MIT'){
    return 'This project is covered under the MIT license criteria'
  }else if(license === 'GPL v3'){
    return 'This project is covered under the GPL v3 license criteria'
  }else if(license === 'IBM'){
    return 'This project is covered under the IBM license criteria'
  }else if(license === 'none'){
    // If there is no license, return an empty string
    return 'No license'
  }
}

// generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.projTitle}  
  ![${answers.license}]${renderLicenseBadge(answers.license)}

  ## Table of Contents

  * [License](#license)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributions](#contributions)
  * [Questions](#questions)
   
   ## License:
   ${renderLicenseDescription(answers.license)}

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

   ## Questions
   If you have any questions regarding this application, please contact me via the channels below
   * Github: https://github.com/${answers.userName}
   * E-mail: ${answers.email}


`;
}

module.exports = generateMarkdown;
