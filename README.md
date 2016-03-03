# sia-react
Front-end for [Sia](https://sia.tech) using electron, [React](https://facebook.github.io/react/), and [Redux](https://github.com/reactjs/redux). 

## Prerequisites
You must have `npm` and `node`.

## Run 
`npm install`  
`npm run start`  

# Structure

This application contains the following fundamental components:

## [src/main](src/main)

Contains the main entrypoint for the electron application, defining the behavior of the Electron `main` process.

## [src/renderer](src/renderer)

Contains the main entrypoint for the sia-react application.  All of this code is webpacked and run inside the Electron `renderer` process.
The `renderer` process is where the application state is managed, using [https://github.com/reactjs/redux](redux).  

sia-react implements a standard Redux application structure.

- [src/renderer/actions](src/renderer/actions): Redux actions used to acquire new data from `siad`.
- [src/renderer/reducers](src/renderer/reducers): Redux reducers used to map data returned by actions to state 
- [src/renderer/constants](src/renderer/constants): Constants used to define action types
- [src/renderer/containers](src/renderer/containers): [react-redux](https://github.com/react/react-redux) containers used to connect state changes to components
- [src/renderer/components](src/renderer/components): Stateless react components used to render state  

Tests for each `action`, `reducer`, and `component` should be found in [test/](test/).

# Tooling

This project uses `babel` and `webpack`, utilizing the latest features of ES2015 along with JSX.  `sass` is used for preprocessing styles.
