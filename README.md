# Dashfy full-stack recruitment test

Thank you for taking the time to do our front-end / full-stack coding test. This will help us better understand you skills
and experience, so use this chance to show us a bit about you and what you can do.

----

The challenge has two parts:

1) a [task](#task) to create a basic job candidate front-end site to show a candidate list and their profiles.

2) some [follow-up questions](./FOLLOW-UP.md)

----

The time limit for this test is **4 hours**.

We don't encourage spending more time than the suggested above, but we do encourage you to use the 4 hours to your advantage.
The goal is not to finish the whole project, some will, and some will not, just have fun and do your best in 4 hours.

----

You will be graded based on if the following have been met:

* Your implementation works as described in the [task](#task) even if incomplete, what you deliver must work.

* Code quality and style.


## Task

We have placed a number of helpful todo's inside the code (see `index.js` and `App.jsx`) to help get you started, the main items we are looking for are:

- Fork this repository on with your own Github account and clone your fork locally.

- Use a [json-server](https://www.npmjs.com/package/json-server) to serve data from the `data.json` file with candidates information.

- Create a page with a list of candidates with the following information for each candidate:
    - avatar, name, current_position, city, country.

- Create a profile page to display all the information in the `data.json` file for a single candidate.

- Clicking on any of the candidates in the list page, should take us to the candidate profile page.


### Extras

Feel free to add any other functionality that you can think of that could improve the value of this application as you wish and only if you have time left out of the 4 hours time limit.

Please don't extend the time you spend on this test developing extra functionality, not having any extras would not turn us away from any candidate. ;)



## Design

Here you are free to use your creativity, we don't expect you to be a designer, and we also don't expect any master peace, but having a good eye and taste
for UI/UX is a small plus.



## Client implementation

We'd like you to use [React](https://facebook.github.io/react/). On top of that, use whatever front-end libraries you feel comfortable with.

We've set you up with a build based on [Skyscraper custom fork](https://backpack.github.io/using/backpack-react-scripts) of Facebook's [create-react-app](https://github.com/facebookincubator/create-react-app).

We've wired in [Sass](http://sass-lang.com/) but have not included any stylesheet in the project, use your own or framework of choice.



## Running the project

To startup the frontend client run the following command.

* `npm start` - This will start the application for development
* `npm run build` - Will create a production optimised build
* `npm test` - Will run the front end tests
* `npm run lint` - Will run the code through our linting rules



## Submission Guidelines

Once complete please do the following:
- Create a Pull Request from your fork to our base repository.
- Let your recruiter know your are done



