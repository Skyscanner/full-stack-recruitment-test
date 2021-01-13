# Dashfy full-stack recruitment test

Thanks for taking the time to do our front-end / full-stack coding test. The challenge has two parts:

1) a [task](#task) to create a basic job candidate front-end site to show a candidate list and their profiles.

2) some [follow-up questions](./FOLLOW-UP.md)

----

You will be graded based on the following have been met:

* Your implementation works as described in the [task](#task).

* Code quality and style.

----

## Task

We have placed a number of helpful todo's inside the code (see `index.js` and `App.jsx`) to help get you started, the main items we are looking for are:

- Fork this repository on with your own Github account.

- Use a [json-server](https://www.npmjs.com/package/json-server) to serve data from the `data.json` file with candidates information.

- Create a page with a list of candidates with the following information for each candidate:
    - avatar, name, current_position, city, country.

- Create a profile page to display all the information in the `data.json` file for a single candidate.

- Clicking on any of the candidates in the list page, should take us to the candidate profile page.

- Once done, create a Pull Request from your fork to our base repository and let your recruiter know your are done.


### Extras

Feel free to add any other functionality that you can think of that could improve the value of this application as you wish and only if you have time left out of the 4 hours time limit.

Please don't extend the time you spend on this test developing extra functionality, not having any extras would not turn us away from any candidate. ;)


## Design

Here you are free to use your creativity, we don't expect you to be a designer, and we also don't expect any master peace, but having a good eye and taste
for UI/UX is a small plus.

## Client implementation

We'd like you to use [React](https://facebook.github.io/react/). On top of that, use whatever front-end libraries you feel comfortable with.

We've set you up with a build based on [Skyscraper custom fork](https://backpack.github.io/using/backpack-react-scripts) of Facebook's [create-react-app](https://github.com/facebookincubator/create-react-app).

We've wired in [Sass](http://sass-lang.com/) with our base stylesheet (`bpk-stylesheets`) + mixins (`bpk-mixins`) for you to get at -- see the [`Header`](./client/src/components/Header/Header.jsx) component for example use.

## Flight results

The provided `flights` `json` will return two collections of different items:

* **Itineraries** - These are the containers for your trips, tying together **Legs**, and **prices**. Prices are offered by an **agent** - an airline or travel agent.

* **Legs** - These are journeys (outbound, return) with **duration**, **stops** and **airlines**.

A good structure to represent trip options would be hierarchical:

```
Itineraries
  Legs
```

## Running the project

To startup the frontend client run the following command.

* `npm start` - This will start the application for development
* `npm run build` - Will create a production optimised build
* `npm test` - Will run the front end tests
* `npm run lint` - Will run the code through our linting rules

## Submission Guidelines



* The zip file should be named {yourname}.zip, and should itself contain the full-stack-recruitment-test project folder with your submission.

* The zip file should contain the [FOLLOW-UP.md](./FOLLOW-UP.md) file with answers to the follow-up questions.

* The zip file should **not** include the `node_modules` folder.


----

Inspiration for the test format taken with ❤️ from [JustEat's recruitment test](https://github.com/justeat/JustEat.RecruitmentTest).
