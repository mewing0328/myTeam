# myTeam
[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description
A Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. 

## Table of Contents
[1. Installation](#installation)

[2. Usage](#usage)

[3. Demo](#demo)

[4. Contributing](#contributing)

[5. Tests](#tests)

[6. Questions](#questions)

[7. License](#license)

[8. Screenshots](#screenshots)

[9. Credits](#tutorialsandCredits)

<br></br>

## Installation 
The application has dependencies (see package.json file). Before using the application, install npm modules.

Code for bash below or watch the [demo](#demo) video.

```bash
npm install
```

## Usage 
The application will be invoked by using the following command:

```bash
node index.js
```
Then the user answers the questions in the prompt window. An answer is required for all questions.

## Demo
[Link for demo video](https://watch.screencastify.com/v/XYXCWLWnaF6u1gqmZ5A5) (Length of video: 2 minutes and 23 seconds)

Video is also within the assets folder named "geneREADMErator.mp4".

```
A walkthrough video that demonstrates: 
- the functionality of the README generator.
- how a user would invoke the application from the command line.
- how a user would enter responses to all of the prompts in the application.
- a generated README that matches the user input and has a functioning table of contents.
```

## Contributing 
For all contributions, please refer to [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md) for contributing guidelines.

## Tests 
To ensure user's answers are validated, test the function within the validate property in the promptUser object. Specifically, do not input an answer for each prompt to confirm validation works properly. 

For example, when the user does not input a title name (false boolean), then a string will instruct the user to do so. Once an input is added, then the boolean returns as true and the next question is displayed.

## Questions
Interested in seeing my other work?

Check out my GitHub account: [mewing0328](https://github.com/mewing0328).

If you have additional questions, please reach me at [masandraewing@gmail.com](mailto:masandraewing@gmail.com).

## License 
geneREADMErator project is covered by MIT license. 

 To view the most current and full license description in opensource.org, click on the license name below.  

 [![MIT}](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

 ## Screenshots 
Utilized Visual Studio Code

1. Initiate the application by right clicking on the folder, choosing "Open in External Terminal"

    <img src=./Develop/assets/externalTerminal.png style="width:30rem">

2. Input "npm install" in the terminal to install dependencies.

    <img src=./Develop/assets/npmInstall.png style="width:30rem">

3. Input "node index" or "node index.js" in the terminal to start up the application 

    <img src=./Develop/assets/nodeIndex.png style="width:30rem">

4. Answer the questions within the terminal prompts - utilizes the [Inquirer 8.2.4](https://www.npmjs.com/package/inquirer/v/8.2.4) package from [npm.Inc.](https://www.npmjs.com/) to obtain user inputs

    <img src=./Develop/assets/promptQuestions.png style="width:30rem">

5. After all questions are answered, the application generates a README.md file titled "genREADME.md". User is informed that user can change the name of the generated file.

    <img src=./Develop/assets/promptQuestions.png style="width:30rem">

## Tutorials and Credits
[Call the Superclass Constructor](http://www.beginwithjava.com/java/inheritance/calling-the-superclass-constructor.html)

[GauriKhandke GitHub](https://github.com/GauriKhandke/Team-Profile-Generator): Reviewed this approach. Utilized as an example and used my own preferences for logic and flow. 

[npm: How to create a package-lock.json](https://remarkablemark.org/blog/2021/08/28/how-to-create-npm-package-lockfile/)



-------- NOTES FOR REQUIREMENTS -------------

            ## Acceptance Criteria

            ```md
            GIVEN a command-line application that accepts user input
            WHEN I am prompted for my team members and their information
            THEN an HTML file is generated that displays a nicely formatted team roster based on user input
            WHEN I click on an email address in the HTML
            THEN my default email program opens and populates the TO field of the email with the address
            WHEN I click on the GitHub username
            THEN that GitHub profile opens in a new tab
            WHEN I start the application
            THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
            WHEN I enter the team manager’s name, employee ID, email address, and office number
            THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
            WHEN I select the engineer option
            THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
            WHEN I select the intern option
            THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
            WHEN I decide to finish building my team
            THEN I exit the application, and the HTML is generated
```



This Challenge is graded based on the following criteria:

            ### Deliverables: 15%

            - A sample HTML file generated using the application must be submitted.

            - Your GitHub repository containing your application code.

            ### Walkthrough Video: 32%

            - A walkthrough video that demonstrates the functionality of the Team Profile Generator and passing tests must be submitted, and a link to the video should be included in your README file.

            - The walkthrough video must show all four tests passing from the command line.

            - The walkthrough video must demonstrate how a user would invoke the application from the command line.

            - The walkthrough video must demonstrate how a user would enter responses to all of the prompts in the application.

            - The walkthrough video must demonstrate a generated HTML file that matches the user input.

            ### Technical Acceptance Criteria: 40%

            - Satisfies all of the preceding acceptance criteria plus the following:

              - Uses the [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4).

              - Uses the [Jest package](https://www.npmjs.com/package/jest) for a suite of unit tests.

              - The application must have `Employee`, `Manager`, `Engineer`, and `Intern` classes.

            ### Repository Quality: 13%

            - Repository has a unique name.

            - Repository follows best practices for file structure and naming conventions.

            - Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

            - Repository contains multiple descriptive commit messages.

            - Repository contains a high-quality readme with description and a link to a walkthrough video.

            ## Review

            You are required to submit the following for review:

            - A walkthrough video that demonstrates the functionality of the application and passing tests.

            - A sample HTML file generated using your application.

            - The URL of the GitHub repository, with a unique name and a readme describing the project.

            ---