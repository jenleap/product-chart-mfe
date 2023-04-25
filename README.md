# product-chart-mfe
A simple React app using Module Federation and Vite

This example demos a basic container application loading components from a remote application.

container is the host application.
my-components (standalone) application which exposes BarChart, Filter and Table Container components, capable of being shared with other applications.

In each of the applications the vite.config.js file uses the federation plugin for Module Federation.

# Running Demo  

Run `npm run build` then `npm run preview`, first in my-components folder, then in container folder. This will build and serve each application. 

They will then be running:

localhost:3002 (Container)
localhost:3001 (MyComponents Remote)

Go to http://localhost:3002/ to view the live application.