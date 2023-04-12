├── app
│   ├── api
│   │   ├── controllers
│   │   ├── models
│   │   ├── routes
│   │   └── utils
│   ├── services
│   │   ├── data
│   │   ├── models
│   │   └── utils
│   └── utils
├── config
│   ├── environments
│   └── routes
├── tests
├── docs
├── public
├── package.json
├── package-lock.json
├── README.md
└── server.js
Here's what each directory contains:

app: contains the application code, including the API controllers, models, and routes, as well as utility functions and modules.
app/api: contains the code for the API endpoints, organized by their respective HTTP methods.
app/api/controllers: contains the controllers that handle the API requests and responses.
app/api/models: contains the data models used by the controllers.
app/api/routes: contains the API routes and their corresponding controllers.
app/api/utils: contains utility functions and modules used by the API.
app/services: contains the services used by the application, including data services, model services, and utility functions.
app/services/data: contains modules for accessing and managing data, such as databases or data storage services.
app/services/models: contains the code for the AI models used by the application.
app/services/utils: contains utility functions and modules used by the application services.
app/utils: contains general utility functions and modules used by the application.
config: contains the configuration files for the application, including environment-specific settings and routes.
config/environments: contains configuration files specific to different environments (e.g., development, production).
config/routes: contains the configuration files for the application's routes.
tests: contains the test files for the application.
docs: contains the documentation files for the application.
public: contains the public files served by the application, such as HTML, CSS, and JavaScript.
package.json: the file that contains the dependencies and configuration for the application.
package-lock.json: the lock file that ensures consistent installations of dependencies.
README.md: the README file for the application.
server.js: the main server file for the application.
