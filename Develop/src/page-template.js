const getlicense = license => {
    if (license === "Apache License 2.0"){
        return '[![License](https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)';
    }else if (license === 'GNU GPLv2'){
        return '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
    }else if (license === 'GNU GPLv3'){
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    }else if (license === 'MIT'){
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    }else if (lisence === 'ISC'){
        return '[![License: ICL](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
    };
};

const generateDoc = templateData => {
    license = getlicense(templateData.license);

    return `# ${templateData.title}

${license} 

## Description

${templateData.decription}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)    
* [Contributing](#Contributing)
* [Tests](#Tests)

## Installation

${templateData.installation}

## Usage

${templateData.usage}

## License

This application is covered under the ${templateData.license} license. For more information visit [https://choosealicense.com/](https://choosealicense.com/)

## Contributing

${templateData.contribution}

## Tests

${templateData.testing}

## Questions

If you have additional questions please reach out!
    
[GitHub Profile](https://github.com/${templateData.github})

[Email](${templateData.email})`
};

module.exports = generateDoc;