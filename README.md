# Ct Concept

This project is an application skeleton using [AngularJS](http://angularjs.org/) web app.
Mixed with css framework [Material Design Lite](http://www.getmdl.io/templates/index.html) and some patch work.

This by no means is ment to be the "final" or "complete" works but curiosity of mxing the two technologies. Going forward a safe bet is to use [Angular Material](https://material.angularjs.org/latest/).

## Getting Started

To get you started you can simply clone the repository and install the dependencies:

### Prerequisites

You need git to clone the repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

You must have node.js and its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Cloning 

Clone the repository using [git][git]:

```
git clone https://github.com/BigPrimeNumbersDotCom/ct-concept-demo.git
cd ct-concept-demo
```

### Install Dependencies

```
npm install
```
* `node_modules` - contains the npm packages for the tools we need

```
bower install
```

* `app/lib` - contains the angular framework files

*Note that the `app/lib` folder would normally be installed in the root folder but I've
change to the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a webserver.*

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm run p:dev
```

It will open chrome (or you preferred) 

## Directory Layout

```
app/                    --> all of the source files for the application
  app.complied.css               --> compiled css from sass
  config/                 --> config modules
    dev-properties.consts.js --> dev properties for application
  core/                   --> all bespoke modules
    /trader                 --> trader component 
      /sidemenu               --> trader sidemenu component
    /trade                  --> trade component
  common/                 --> all common modules
    /header                 --> header componet
    /footer                 --> footer componet
  app.mdl.js                --> main application module (mdl = module)
  app.routes.js             --> route definitions
  index.html            --> app layout file (the main html template file of the app)
karma.conf.js         --> config file for running unit tests with Karma
e2e-tests/            --> end-to-end tests
  protractor-conf.js    --> Protractor config file
  scenarios.js          --> end-to-end scenarios to be run by Protractor
```


## Other

Also there's some gulp  magic like that processing the config/*.json into *-properties.const.js

## Testing

Ignored for this concept. But you should always test!!