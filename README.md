# Skyscanner full-stack recruitment test



Thanks for taking the time to do our front-end / full-stack coding test. The challenge has two parts:

1) a [task](#task) to create a basic flight results front-end site to show flight prices

2) some [follow-up questions](./FOLLOW-UP.md)

----

You will be graded based on the following have been met:

* Your implementation works as described in the [task](#task).

* Your solution looks like the provided [design](#design).

----

## Task

We have placed a number of helpful todos inside the code (see `index.js` and `App.jsx`) to help get you started, the main items we are looking for are:

- Fetch flight results from the provided `flights.json` and format them into client readable results.
  - You are not required to serve this separately from the dev server (i.e. `npm start`).

- Use the returned data to display a page of results that matches the given design.
  - Times should be displayed in 24 hour format.

## Design

We've provided a [design](./designs/results-small.png) for small-screens (480px). Don't worry about tackling larger breakpoints, but **please make sure your solution looks good at 480px in portrait orientation**.

The design shows a look and feel defined in our [styleguide](https://backpack.github.io/). Feel free to import our React components into your project, or lift colours and things directly from the styleguide pages. We also have some auto-generated [sassdoc](https://backpack.github.io/sassdoc/) that may help.

**NB:** You don't have to use our styleguide or our components -- picking colours from the image and rolling your own css to save time is absolutely fine.

For the airline logos, insert the airline id to the following url: `https://logos.skyscnr.com/images/airlines/favicon/{id}.png`

## Client implementation

We'd like you to use [React](https://facebook.github.io/react/). On top of that, use whatever front-end libraries you feel comfortable with.

We've set you up with a build based on [our custom fork](https://backpack.github.io/using/backpack-react-scripts) of Facebook's [create-react-app](https://github.com/facebookincubator/create-react-app).

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

## Submission Guidelines

* The zip file should be named {yourname}.zip, and should itself contain the full-stack-recruitment-test project folder with your submission.

* The zip file should contain the [FOLLOW-UP.md](./FOLLOW-UP.md) file with answers to the follow-up questions.

* The zip file should **not** include the `node_modules` folder.


----

Inspiration for the test format taken with ❤️ from [JustEat's recruitment test](https://github.com/justeat/JustEat.RecruitmentTest).
