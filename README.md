# Skyscanner Frontend Recruitment test

Thanks for taking the time to do our frontend coding test. The challenge has two parts:

1) a [task](#task) to create a basic flight search using our API

2) some [follow-up questions](#follow-up-questions)

----

Feel free to spend as much or as little time as you'd like, as long as the following have been met:

* Your implementation works as described in the [task](#task), retrieving results from [our API](#our-api).

* Your solution looks like the provided [design](#design).

----

**NB:** To get an API key and for submitting your solution, please contact the Skyscanner hiring person or member of staff who assigned you the test.

## Task

- Use our 'live pricing' API to find **return flights from Edinburgh to London, departing next Monday and returning the following day**.

- Use the returned data to display a page of results that matches the given design.

## Design

* We've provided a [design](./designs/) for small-screens (480px). Don't worry about tackling larger breakpoints.

* Don't worry about implementing menu functionality or sorting/filtering/alerting - these controls can be display-only.

* The design shows a look and feel defined in our in-progress [styleguide](http://backpack.prod.aws.skyscnr.com/docs). Feel free to import our [bpk- npm components](https://www.npmjs.com/search?q=bpk-) into your project, or lift colours and things directly from the styleguide pages. We also have some auto-generated [sassdoc](http://backpack.prod.aws.skyscnr.com/sassdoc/) that may help.

* For the airline logos, try the favicon size per code: e.g. https://logos.skyscnr.com/images/airlines/favicon/EZ.png

## Our API

We'd like you to use our Flights 'Living Pricing' service, using your API key, to retrieve the cheapest flight route details.

Our [API documentation is available here](https://github.com/Skyscanner/api-documentation/tree/master/live_flights_pricing) and a [test harness is provided](http://business.skyscanner.net/portal/en-GB/Documentation/FlightsLivePricingQuickStart) for you to try queries out.

You can use the Skyscanner `sky` location schema, and the `EDI-sky` and `LOND-sky` placenames in your query.

The API will return certain things you will be interested in:

* **Itineraries** - These are the container for your trips, tying together **Legs**, and **prices**. Prices are offered by an **agent** - an airline or travel agent.

* **Legs** - These are journeys (outbound, return) with **duration**, and **carriers**. These contain one or more **Segments** and **stops**.

* **Segments** - Individual flight information with directionality.

Your key will be rate-limited to ~5 queries per minute.

## Your implementation

We'd like you to use [React](https://facebook.github.io/react/). On top of that, use whatever frontend libraries you feel comfortable with.

We've set you up with a build based on Facebook's [create-react-app](https://github.com/facebookincubator/create-react-app).

To run it:

- cd into `app`, run `npm install`

- run `npm start` for the development build ([http://localhost:3000](http://localhost:3000))

We've wired in [SASS](http://sass-lang.com/) with our base stylesheet (`bpk-stylesheets`) + mixins (`bpk-mixins`) for you to get at, along with css modules -- see the [`TopNav`](./app/src/components/topnav/TopNav.js) component for example use.

The webpack dev server is setup to proxy local requests going to `/apiservices/*` to [our API](#our-api). Use a relative url for requests.

## Follow-up Questions

* How long did you spend on the test?

* If you had more time, what further improvements or new features would you add?

* Which parts are you most proud of? And why?

* Which parts did you spend the most time with? What did you find most difficult?

* How did you find the test overall? If you have any suggestions on how we can improve the test or our API, we'd love to hear them.

## Submission Guidelines

* Please submit your program by sending a zip file to your Skyscanner contact.

* The zip file should be named {yourname}.zip, and should itself contain the frontend-recruitment-test project folder with your submission.

* The zip file should contain a [FOLLOW-UP.md](./FOLLOW-UP.md) file with answers to the follow-up questions.

* The zip file should **not** include the `node_modules` folder.

* Please let your Skyscanner contact know when you've uploaded your solution.

----

<a name="footnote1">[1]</a>: If there are multiple carriers provided, please use the first carrier

Inspiration for the test format taken with <3 from [JustEat's recruitment test](https://github.com/justeat/JustEat.RecruitmentTest).
