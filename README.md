# SLAP ALPHA - Documentation Guide
This project consists of the basic navigation framework of the Slap application as well as implementations for some of the core features.

Due to the fact that this is an Alpha, the application has been architecturally modulated with Angular JS as requirements, specifications, and designs will be added and modified as the application moves toward the full implementation. Modulation of components will ideally provide easier adaptions to these changes. 

For Requirements and Specifications Documentation: 
https://docs.google.com/document/d/1VAWVrAENEiXhgOBJik3Gyw2mpTlLakIsSdqQSuwQLyM/edit

For Design and Planning Documentation:
https://docs.google.com/document/d/1fiiBoKCF2reYNFGjwv6CBFfnuSp-GdjnygR2JVQt-Js/edit

Email ryanriebling@gmail.com or rclarke2112@gmail.com for access to Docs

### Running the app during development 

First, install Google Chrome Canary (Mobile emulator) - more info (https://developers.google.com/chrome-developer-tools/docs/mobile-emulation)
Second, install node js 
(http://nodejs.org/)

* open a terminal or command shell
* navigate to the SlapAlpha www/ directory
* run 'node web.js' 
Port will be indicated in terminal window ie 'http://localhost:5000/' 
Open a Chrome Canary window and enter the URL 

### Running unit tests

We recommend using [jasmine](http://pivotal.github.com/jasmine/) and
[Karma](http://karma-runner.github.io) for your unit tests/specs, but you are free
to use whatever works for you.

Requires [node.js](http://nodejs.org/), Karma (`sudo npm install -g karma`) and a local
or remote browser.

* start `scripts/test.sh` (on windows: `scripts\test.bat`)
  * a browser will start and connect to the Karma server (Chrome is default browser, others can be captured by loading the same url as the one in Chrome or by changing the `config/karma.conf.js` file)
* to run or re-run tests just change any of your source or test javascript files

### End to end testing

Requires a webserver, node.js + `./scripts/web-server.js` or your backend server that hosts the angular static files.

Check out the
[end-to-end runner's documentation](http://docs.angularjs.org/guide/dev_guide.e2e-testing) for more
info.

* create your end-to-end tests in `test/e2e/scenarios.js`
* serve your project directory with your http/backend server or node.js + `scripts/web-server.js`
* to run do one of:
  * open `http://localhost:port/test/e2e/runner.html` in your browser
  * run the tests from console with [Karma](http://karma-runner.github.io) via
    `scripts/e2e-test.sh` or `script/e2e-test.bat`


## Directory Layout

    www/                --> all of the files to be used in production
      css/              --> css files
        app.css         --> default stylesheet
        app-class-styles.css  --> Additional classes for custom css
        angular-snap.css
        ratchet.css
       
      images/              --> image files
      icons/			   --> icon files 
      
      index.html        --> app layout file (the main html template file of the app)
      index-async.html  --> just like index.html, but loads js files asynchronously
      
      js/               --> javascript files (Modulated with AngularJS)
        app.js          --> application	
       	
        
        
      lib/              --> angular and 3rd party javascript libraries
      	angular-snap.js
      	snap.js
      	parsesdk.js
        angular/
          angular.js        --> the latest angular js
          angular.min.js    --> the latest minified angular js
          angular-*.js      --> angular add-on modules
          version.txt       --> version number
          
      partials/             --> angular view partials (partial html templates)
        createplan.html
        drawer-menu.html
        groups.html
        main.html
        myplans.html
        plan-template.html
        settings.html
		
		
		
  