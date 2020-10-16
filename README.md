# Workout Tracker
Michigan State Bootcamp Homework assignment 17: NoSQL Fitness Tracker App 

## Description

This application uses an express along with mongodb using mongoose ODM to create a basic fitness tracking expreience. The application allows users to create new workout routines, aswell as adding exersises to their most recent workout.  

![Fitness-Tracker](./img/Fitness-Tracker.gif)

## Table of Contents

* [Installation](#installation) 
* [License](#license) 
* [Contributors](#contributing) 
* [Tests](#tests)
* [Revisions](#Revisions)
* [Bugs](#Bugs) 

Revision History

## Installation

Run the app with heroku using the following link: 
> https://workout-trackerrr.herokuapp.com/


If running app locally from terminal you will need to run the following commands to get started:
> npm i

> npm start

The app will be rendered to: 
>http://localhost:3000/

## License

![License](https://img.shields.io/badge/License-none-blue.svg)

## Contributing

none

## Tests

none

## Revisions
workout-tracker_v1.0 - Initial commit: Added basic README and .gitignore files.

workout-tracker_v1.1 - Created api-routes.js and established functional getLastWorkout route, which is called upon initial page load of index.html.

workout-tracker_v1.2 - Fixed Total Workout Duration data input by adding a tallyDuration function, which sums all existing exersise durations for the last workout.

workout-tracker_v1.3 - Added functionallity to the New Workout button in index.html.

workout-tracker_v1.4 - Added functionallity to the Continue Workout button in index.html. User is now able to create a new workout or continue their last workout (by adding new exercises), while successfully updating the database.

workout-tracker_v1.5 - Added route to the stats page. Stats page seems functional, need to investigate for bugs.

workout-tracker_v1.6 - Connected app to Heroku with mongodb as database.

workout-tracker_v1.7 - Eliminated cardio workouts form the pounds lifted section.

## Bugs
Clicking on New Workout, initiates a new workout model in the database, so if the user leaves the create page prematurly the database will then contain an empty workout.

User can submit empty add exersise form which should be prevented to keep junk entires out of the database

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.