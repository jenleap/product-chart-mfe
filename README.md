# product-chart-mfe
A simple React app using Module Federation

This example demos a basic container application loading components from a remote application.

container is the host application.
my-components (standalone) application which exposes BarChart, Filter and Table Container components, capable of being shared with other applications.

In each of the applications the config-overides.js file is where the webpack file is extended to include module federation

# Running Demo
Run `npm install` inside BOTH container and my-components, respectively. Once installed, run `npm run start` to build and serve each application.  

They will then be running:

localhost:3002 (Container)
localhost:3001 (MyComponents Remote)