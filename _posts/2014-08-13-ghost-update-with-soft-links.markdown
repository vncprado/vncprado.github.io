---
layout: post
title: Ghost update with soft links
date: 2014-08-13 23:38:17.000000000 -04:00
---
Trying to find some easy way to update this blog, which uses [ghost](https://ghost.org/), I made some symbolic links and a small configuration.
The actual folder location and links are:

* /var/www/ghost ~> /var/www/ghost-data/versions/ghost-&lt;version>/
* /var/www/ghost-data/versions/ghost-&lt;version>/config.js ~> /var/www/ghost-data/config.js
* /var/www/ghost-data/content

This way I can change the version simply doing:

	~$ ln -s /var/ghost-data/versions/ghost-<version>/ /var/www/ghost

And setting the configuration file:

	~$ ln -s /var/ghost-data/config.js /var/ghost-data/versions/ghost-<version>/config.js
    
In order to matain only one content folder. The content folder is in the same base folder as config.js and versions folder:

	/var/www/ghost-data/content

but a small configuration in config.js is needed to make ghost see the content folder outside ghost installation folder:
	
    paths: {
    	contentPath: path.join(__dirname, '/path/to/content/dir/')
	}

One can see that the config file have their symbolic link to the real file and content folder is located outside the folder of ghost's new version.

By the documentation, with a new version you have to run in its folder:

	~$ npm install --production

All soft links and folders must be owned by ghost user and group, so:

	~$ chown ghost:ghost /var/www/ghost/*
    
Restart ghost:

	~$ service ghost restart

I used to restart apache too:

	~$ service apache2 restart

It was hard to solve (mainly because I dont know about the path config option and for a week I tryed to use soft links in the content folder too) but so far I've had no problems. And I believe it will be easier to update that way, just a metter of copy files, and make two soft links =)

That's all.
