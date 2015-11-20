---
layout: post
title: Ghost config file Apache2 + subdomain
date: 2014-01-15 21:02:50.000000000 -05:00
---
Using ghost blogging platform with a Apache subdomain is as easy as it may seem.

First I unzipped ghost data at `/var/www/ghost/` and followed default install instructions to have it running. Ghost production `IP` and `URL` in the config file have to be setted to `0.0.0.0` and `http://subdomain.example.com`, respectively.

	// # Ghost Configuration
	// Setup your Ghost install for various environments
	var path = require('path'),
    	config;
	config = {
    	production: {
        	url: 'http://subdomain.example.com',
        	mail: {
            	transport: 'sendmail',
            	options: {}
        	},
        	database: {
            	client: 'sqlite3',
            	connection: {
                	filename: path.join(__dirname, '/content/data/ghost.db')
            	},
            	debug: false
        	},
        	server: {
            	host: '0.0.0.0',
            	port: '2368'
        	}
    	}
	};

	// Export config
	module.exports = config;

Second I configured a subdomain called `blog` that uses apache-proxy to foward ghost port. So the apache config files for the blog are under `/etc/apache2/sites-available/blog` and follows:

	<VirtualHost *:80>
   		ServerName subdomain.example.com
   		ProxyPass / http://0.0.0.0:2368/
   		ProxyPassReverse / http://0.0.0.0:2368/
   		ProxyPreserveHost On
   		<DirectoryMatch /var/www/ghost>
       		Order allow,deny
       		Deny from all
   		</DirectoryMatch>
	</VirtualHost>

So finally I would enable the blog:

	user@machine:/etc/apache2/sites-available/# a2ensite blog
    
I think that's all.

