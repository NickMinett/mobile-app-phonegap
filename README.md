# SENG3150 Assignment - Mobile-App (PhoneGap)

To clone the app, run this command in the terminal:

	git clone https://github.com/SENG3150/mobile-app-phonegap.git

## Requirements
* Install [NodeJS](https://nodejs.org/en/) and then run the following commands in the terminal:

		npm install -g bower
		npm install -g gulp-cli
		npm install -g phonegap
		npm install -g karma-cli

* Install a web server and setup a virtual host for the website to run in. An example httpd-vhosts.conf entry is below for Apache, which assumes you have mod_rewrite and mod_deflate running:

		<VirtualHost *:80>
	        ServerAdmin admin@localhost
	        DocumentRoot "C:\mobile-app-phonegap\www"
	        ServerName phonegap.local
	        ErrorLog "C:\phonegap-error.log"
	        CustomLog "C:\phonegap-common.log" common     
	        RewriteEngine on
	        RewriteOptions inherit
	        SetOutputFilter DEFLATE
	        
	        <Directory "C:\mobile-app-phonegap\www">
	            Options Indexes FollowSymLinks
	            AllowOverride All
	            Order Deny,Allow
	            Deny from all
	            Allow from 127.0.0.1
	            Allow from ::1
	            Allow from localhost
	        </Directory>
	    </VirtualHost>
    
    A more complete guide that our team used to get the web server (Apache through Wamp) working is as follows:
    
    - Open ```Wamp/bin/apache/apache[version]/conf/httpd.conf```
    - Ctrl+F for ```'onlineoffline'```
    - Remove the ```'Require local'``` line below it and replace it with:
    
        ```
        Require all granted
        Order Deny,Allow
        Allow from all
        ```
	        
    - Scroll a page above it and find this section:
    
        ```
        <Directory />
            AllowOverride none
            Require all granted
        </Directory>
        ```
	        
    - Comment this out by adding hashes to the front of each line:
    
        ```
        #<Directory />
        #    AllowOverride none
        #    Require all granted
        #</Directory>
        ```
    
    - Open ```Wamp/bin/apache/apache[version]/conf/extra/httpd-vhosts.conf```
    - Add this to the end of the file:
    
        ```
        <VirtualHost *:80>
            ServerAdmin admin@localhost
            DocumentRoot "<full path to mobile-app-phonegap\www folder>"
            ServerName phonegap.local
            ErrorLog "<full path to one folder above the mobile-app-phonegap folder>\phonegap-error.log"
            CustomLog "<full path to one folder above the mobile-app-phonegap folder>\phonegap-common.log" common
            RewriteEngine on
            RewriteOptions inherit
            SetOutputFilter DEFLATE
            
            <Directory "<full path to mobile-app-phonegap\www folder>">
                Options Indexes FollowSymLinks
                AllowOverride All
                Order Deny,Allow
                Deny from all
                Allow from 127.0.0.1
                Allow from ::1
                Allow from localhost
            </Directory>
        </VirtualHost>
        ```
    
    - Left click on WAMP in the notifications tray, go to Apache > Apache modules > Check deflate_module
    - WAMP will restart and should have a green icon
    - Open ```C:\Windows\System32\drivers\etc\hosts```
    - Add this line to the end of the file:
        
        ```
        127.0.0.1       phonegap.local
        ```
    
    - Open [http://phonegap.local/](http://phonegap.local/) in your browser

## Dependencies
After cloning the repository go into the directory and run the following commands in the terminal:
	
	npm install
	bower install
	
## Compiling The Application
The application includes [Gulp](http://gulpjs.com) and a gulpfile which will minimise the stylesheets and javascript to ensure that the application loads quickly for users.

To compile the application for development run the following command in the terminal, and keep the terminal open and running while you develop the mobile app:

	gulp

To compile the application for development with a local [API server](https://github.com/SENG3150/server) running, run the following command in the terminal, and keep the terminal open and running while you develop the mobile app:

	gulp development

To compile the application for deployment run the following command in the terminal:

	gulp deployment
	
## Testing
The application includes [Karma](https://karma-runner.github.io/1.0/index.html), [Jasmine](https://jasmine.github.io/) and a gulp task which will run tests in Chrome, Firefox, Safari and Internet Explorer to ensure that the application works in all popular modern browsers.

To test the application run the following command in the terminal, and keep the terminal open and running while you develop the mobile-app:

	gulp test
	
This is automatically run when you use either of the following commands:

	gulp
	gulp development
	
## Running The Application
The application can be run on any iOS or Android device through [PhoneGap](http://www.phonegap.com/). PhoneGap has an application which allows developers to test their code on a device without specifically installing it.

To serve the application for development run the following commands in the terminal, and keep the terminal open and running while you test the mobile app:

	phonegap build browser
	phonegap serve

Then to view the app on your device, follow PhoneGap's guide on [installing their mobile app](http://docs.phonegap.com/getting-started/2-install-mobile-app/).

## Logging In
You can use the following credentials to login successfully.

|                   | Username   | Password   |
|-------------------|------------|------------|
| Technician        | technician | technician |