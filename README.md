# register-a-food-business-healthcheck-dashboard

Status monitoring for the register a food business service.

## Running and building the healthcheck dashboard

To start the application on port 3000:

`npm run dev`

To build the application:

`npm run build`

Serving the application once built on port 4001:

`npm run server-start`

## How the proxy works

create-react-app lets you specify a proxy URL that will be used while developing so that you don't have to go back and change all your URL origins when you deploy your website to the public. The proxy property can be found in the package.json file.

create-react-app will automatically set the request origin to whatever the "proxy" setting is in package.json while in development mode (localhost:4001), but will reset it to wherever it is being served from in production mode.

In this case (when running locally), the front-end runs on port 3000 and the proxy sends any API requests to the server running on localhost 4001.

1. package.json has: `"proxy": "http://localhost:4001"`
2. React app calls `http://localhost:3000/detailed/prod`
3. Dev server forwards call to `http://your-server/detailed/prod`
