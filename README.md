![License](https://img.shields.io/github/license/Jponto93/https://github.com/Jponto93/Pontos-Picks.svg?style=for-the-badge) ![Repo Size](https://img.shields.io/github/languages/code-size/Jponto93/https://github.com/Jponto93/Pontos-Picks.svg?style=for-the-badge) ![TOP_LANGUAGE](https://img.shields.io/github/languages/top/Jponto93/https://github.com/Jponto93/Pontos-Picks.svg?style=for-the-badge) ![FORKS](https://img.shields.io/github/forks/Jponto93/https://github.com/Jponto93/Pontos-Picks.svg?style=for-the-badge&social) ![Stars](https://img.shields.io/github/stars/Jponto93/https://github.com/Jponto93/Pontos-Picks.svg?style=for-the-badge)
    
# Pontos-Picks

## Table of Contents

- [Description](#description)
- [Screenshots](#screenshots)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Contacts](#contacts)

## Description

A paperless way to participate in friendly competition using NFL games between friends or offices!

## Screenshots

<!-- <img src="/images/home" /> -->

## Built With

<a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" height="40px" width="40px" /></a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" height="40px" width="40px" /></a><a href="https://material-ui.com/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg" height="40px" width="40px" /></a><a href="https://nodejs.org/en/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" height="40px" width="40px" /></a><a href="https://www.postgresql.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" height="40px" width="40px" /></a><a href="https://reactjs.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" height="40px" width="40px" /></a><a href="https://redux.js.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" height="40px" width="40px" /></a>

## Getting Started

The only thing you will need to know prior to replicating this project is the current week of the NFL schedule. Currently the application does not have an API implemented, but that will come in the future. The NFL schedule is already included for the 2021 season without the results of any games played thus far. 

### Prerequisites

You will need to install Node.js and PostgreSQL on your local machine before walking through the installation.

### Installation

Getting started is easy! First, clone the repository onto your local machine. Open with IDE of your choice (I used Visual Studio Code). You will also find a database.sql file in the project folder. Open PostgreSQL and create a database named "pontos_picks".  Copy all contents in database.sql file and paste file into PostgreSQL SQL Query and execute. Once the database is built and connected, go to VS Code and run these commands... "npm run server" and "npm run client". Cheers!

## Usage

As a user, you will be brought to a landing page once you run the application on your local machine. You will see a registration form on the right side of the screen. Input your information and log in. 

Once logged in you will see a concise summary of the rules to the game. 

<img src="/public/images/home.png" />

If you go to the profile tab on the upper right corner of the navigation tab you can upload a profile image of your choice using a URL for personalization. 

Once your profile is to your liking, click on "Make Picks" on the nav bar. 

Select the week you would like to view, and a table will populate with the selected week's matchups! 

This table includes scores, dates, and times for games. Making your selections is easy, just click on the name of the team you think will win each match up! Once all games have a green box in the "YOUR PICK" column, you click the "SUBMIT PICKS" button at the bottom to save them. You will receive a confirmation message once submitted!

Next, create an admin username/password. In the PostgreSQL database, change the access_level of the admin in the "user" table to "1". 

Once logged in as the admin you will have two jobs. First select the week you want to update. Then select update games, and fill in the scores and result of each game. (Result should be the same 3 letter acronym as displayed on the table). Once games results are input then save.

Lastly, go to update players and click on the "eye" icon of a given player to view their pick selections for that week. The amount of points that player earned will be calculated automatically, just update the player's score on the table and click the floppy disk icon on the right to save!

Once scores are updated, users can head to the leaderboards area to see their rankings!


## License

<a href="https://choosealicense.com/licenses/mit/"><img src="https://raw.githubusercontent.com/johnturner4004/readme-generator/master/src/components/assets/images/mit.svg" height=40 />MIT License</a>

## Acknowledgements

Who helped you make this project a reality? Friends? Family? Contributors? Instructors?

## Contacts

<a href="https://www.linkedin.com/in/https://www.linkedin.com/in/jordan-ponto/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a>  <a href="mailto:Jponto93@gmail.com"><img src=https://raw.githubusercontent.com/johnturner4004/readme-generator/master/src/components/assets/images/email_me_button_icon_151852.svg /></a>