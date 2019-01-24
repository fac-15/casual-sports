# Sports & Rec :runner:

[![Build Status](https://travis-ci.com/fac-15/casual-sports.svg?branch=staging)](https://travis-ci.com/fac-15/casual-sports)[![codecov](https://codecov.io/gh/fac-15/casual-sports/branch/staging/graph/badge.svg)](https://codecov.io/gh/fac-15/casual-sports)

<img src="https://media.giphy.com/media/t58dlbfM3LabS/giphy.gif" style=" width: 150px; ">

An app to connect commitmentphobes and chillers who want to play sports.

Project team: @zurda, @charlielafosse, @tantsandras, @saksiva

## How to run our project :tada:

Either

- Launch from Heroku: https://casual-sports.herokuapp.com/

Or

- Clone this repo (https://github.com/fac-15/casual-sports)
- `npm install`
- `npm start`
- Open localhost:2500 in your browser

And to run tests:

- `npm test`

## User journeys :information_desk_person:

**Individual**: As a user, I want to be able to find sports teams and sports events that I can join.

**Team Leader**: As a user, I want to be able to add my team to the site, to see different opponents for my team, and to find new members for my team.

## Prototyping

<img width="200" alt="1" src="https://user-images.githubusercontent.com/16784959/51672526-9a573100-1fc3-11e9-9996-e443695298f4.png"><img width="200" alt="2" src="https://user-images.githubusercontent.com/16784959/51672530-9cb98b00-1fc3-11e9-943d-91b810a51dee.png"><img width="200" alt="3" src="https://user-images.githubusercontent.com/16784959/51672540-9e834e80-1fc3-11e9-8398-3269026b9ee9.png"><img width="200" alt="4" src="https://user-images.githubusercontent.com/16784959/51672543-a17e3f00-1fc3-11e9-9fa6-c048f4045567.png">

## User stories, Week 1 :full_moon_with_face:

As a user, I can:

1. [x] **Browse** through a **list** of sports events and sports teams.

2. [x] **Filter** all events and teams by the **sport** I want to play.

3. [x] **Select** a **specific** event or team, and get **more information** (such as location, which sports played, age range etc.)

4. [x] Apply a **filter** that allows me to only see teams that are looking for **new members**, and events that are **open to all**.

5. [x] **Register** my **team** on the site.

6. [x] **Post** my **event** on the site.

## Current Stretch Goals :100: :grimacing:

1. [x] Use **login authentication** for users, team leaders and event admins.

2. [x] Use the **Meetup.com API** and allow the user to also discover sports events on Meetup.

3. [ ] Display search results on an **interactive map**!

## Contributing

We welcome any additional help and contributions to our app! Check 'How to Run our Project' above :point_up: and 'Our Tech Stack' below :point_down: to familiarise yourself with the project. Contact any of the project team on github or gitter for environment variables, or any other questions you might have. Before starting any work, it may well be worth checking out the issues and seeing if anyone's flagged up a similar issue.

- ### Our Conventions
  - We've used ES6 syntax throughout, and our linting rules are contained in our `.eslintrc` file in the repo. We've also used `promises` for asynchronicity.
- ### Issue Labels
  - We've followed [dwyl's standard](https://github.com/dwyl/labels), as well as adding some of our own, including:
  - `wild`: A fun idea or enhancement that isn't a current priority, but would add useful or cool functionality to the site.
  - `rubie`: Words of wisdom and suggestions from our FAC mentor for this project, @rub1e!
  - `blocked`: An issue that is a priority, but is blocked at the moment by other issues that need addressing first.

## Our Tech Stack

:train: Express\
:man: Handlebars\
:heart_eyes_cat: Babel\
:relieved: Jest, Supertest and Codecov\
:bulb: ESLint & Prettier

## Thanks for reading!
