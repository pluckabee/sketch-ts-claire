# Claire Patterson Sketch FE Test

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Decisions

Decided to use create-react-app to quickly get started

Decided to use typescript so I could spend less time debugging

### Structure
Folder structure is split thusly

assets - the image assets provided for the test
components - all the react components bar the container and base routing components. Non logic components that could be shared are prefixed with an underscore
providers - contexts and providers to manage the shared state
services - connections to the database and helpers
typeInterfaces - all the types and interfaces for the app

I have tried to use dependencyInjection where ever possible for components that have a lot of logic to test. This should make it easier and not have to mock out as many imports

### Data Management
I used axios to post to the graphQL endpoint to get the data and I have typed the Raw Data
I have added here a data normaliser to simplify the data interface for the rest of the application

note: I have made a few dangerous assumptions here which ideally I would have cleared up with someone that knows better.
I have assumed that the scale:1 files are the thumbnail files
I have assumed a 1:1 relationship  (in practical terms, not data terms) betweeen:
  an artboard and the artboard File url 
  and between the artboard and the artboard thumbnail
I have noticed some inconsistencies in the naming of artboard vs artBoard. I have gone with artboard

### State Management
I am using a provider that provides a datacontext and also gives us state to manage Loading, error and no data states

I am using the url structure to manage the selected artboard. I find this gives us a consistent single source of truth than trying to store it in state and keep it synced up with our routing structure

although now That I'm writing that out, it does somewhat tie us into the existing url structure - If there are too many connection points it could better to also create a provider for this that wraps around the router (although with react-router this is not simple at all, react router is very opinionated!)

It really depends on how flexible we need to be with the URL structure

### Tests

I added some tests for some particularly fiddly bits that could be difficult to just read

### Not so good things
The routing is really basic and not very extensible.

I originally tried to use the react-router-dom Switch component but it was proving to be very messy looking and I couldn't get it to work with the provider pattern I wanted

Because of the way i've normalised the data we can't choose between thumbnails/file images. I would mitigate this by having a thumbnailSmall and a thumbnailLarge property on my SketchArtboard Interface, or possibly returning to an array and having a helpert to pick the correct one. Right now, everything is just scaling so we are less performant than we could be


