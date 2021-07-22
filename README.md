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


## Decisions

Decided to use create-react-app to quickly get started

Decided to use typescript so I could spend less time debugging

If you put in a dodgy docuemnt id or artboard id you should get redirected back to the document chooser

Ive used a media query for the artboard heading to align it to the right to give the text more room to nto overflow onto the navigation

I have put in a min width of 330px - a possible dangerous assumption

Used css grid to align the grid, the text is aligned to the bottom while the images are centre aligned in theor own space in the list view

Developed on a Mac using chrome - I cannot couch for how it looks elsewhere

Added a tokens file to share some of the sizes to keep consistency

Extracted out box-shadow for easier readability

### Structure
Folder structure is split thusly

assets - the image assets provided for the test
components - all the react components
components/_styled all of the logicless styled components
providers - contexts and providers to manage the shared state
routes - the routing components
services - connections to the database and helpers
types - all the types and interfaces for the app

I have tried to use dependencyInjection where ever possible for components that have a lot of logic to test. This should make it easier and not have to mock out as many imports

I have used named import that match the file names of the components - I just find this much easier to manage when developing. Easier to find things when things and and files have specific names that match up rather than using the index exporting pattern. There is one expection here for types, this didn't feel big enough yet to split out

### Urls structure

The main views
/document/:documentId
/document/:documentId/art-board/:artboardName[encoded]

For easy navigation/debugging there are also:
/
/document

Which will take you to a form where you can easily paste in document guids if thats easier than using the url, it is autofilled with the original guid given in the test

and 

/loader

if you want to have a look at the loader 



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
I am using a provider that provides the document data and also gives us state to manage Loading, error and no data states

I am using the url structure to manage the selected artboard. I find this gives us a consistent single source of truth than trying to store it in state and keep it synced up with our routing structure

although now That I'm writing that out, it does somewhat tie us into the existing url structure - If there are too many connection points it could better to also create a provider for this that wraps around the router (although with react-router this is not simple at all, react router is very opinionated!)

It really depends on how flexible we need to be with the URL structure



### Tests

I added some tests for some particularly fiddly bits that could be difficult to just read

### Things that could be improved
The routing is really basic and not very extensible.

I originally tried to use the react-router-dom Switch component but it was proving to be very messy looking and I couldn't get it to work with the provider pattern I wanted

Because of the way i've normalised the data we can't choose between thumbnails/file images. I would mitigate this by having a thumbnailSmall and a thumbnailLarge property on my SketchArtboard Interface, or possibly returning to an array and having a helpert to pick the correct one. Right now, everything is just scaling the biggets images so we are less performant than we could be

The mobile view text will start to overlap the navigation if it getstoo long

Error handling and no data handling are managed the same way right now, errors should probably be managed by a dedicated error handler

Some of the code that wasn't asked for isn't split out as nicely as it could be, i wanted to avoid having non asked for stuff in the main structure so it wouldn't confuse the brief and keep these as simply extra bits for ease of use

Error handling of a bad artboard id is the same as document id, although perhaps they should just be sent to the document main page

More tests, I got a bit carried away with features