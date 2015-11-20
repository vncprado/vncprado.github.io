---
layout: post
title: How To Install and Configure Cloud9 in Your Own Server
date: 2015-02-15 00:21:31.000000000 -05:00
---
I've been watching [Cloud 9](http://c9.io) for a while for this project. I like their online IDE. Even in localhost would be nice to have something for development really working in the browser for many reasons.

But the version they had available in github was really poor comparing to the running version online. Which is really understandable, because they work with paid plans.

But I recently they released the [Cloud9 3.0 SDK](https://github.com/c9/core/) version.
I don't know how much this version is similar to online version but for my purposes is already good enough.

So less talk and more action.

######Installation

In my setup I have an `Apache2`, `Node.js` and `forever` installed previously. You will need to google how to install these things first. I use a dev subdomain for Cloud9 but other Apache configurations would be quite similar. Besides that I have one user (not root) for development. In this user's home folder we have the Cloud9 code and the workspace.

Login with your developer user (I used ssh). Clone the Cloud9 project in its home folder:

	cd ~/
	git clone https://github.com/c9/core.git c9sdk

Then go to the project and install it

	cd c9sdk/
	scripts/install-sdk.sh

Now, still in the cloud9 folder, use `forever` to start the server with the following parameters:

	forever start server.js -p 8181 -w ~/workspace/ -l 0.0.0.0 --auth username:passswd

Select an username and password to login in addition a workspace folder.

In apache, create a dev.conf file:

	$ sudo nano /etc/apache2/sites-avaible/dev.conf

Paste the following lines inside the file:
    
    <VirtualHost *:80>
        ServerName dev.yourdomain.org
        ProxyPass / http://0.0.0.0:8181/
        ProxyPassReverse / http://0.0.0.0:8181/
        ProxyPreserveHost On
    </VirtualHost>

Enable the site:

	$ sudo a2ensite dev

Finally restart Apache:

	$ sudo service apache2 restart

In a comparison with Codiad, I think that Cloud9 is far more robust and stable. Besides having a better terminal, which permits a large range of development.
