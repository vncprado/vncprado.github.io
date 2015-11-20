---
layout: post
title: How To Install and Configure Codiad in Your Own Server
date: 2015-02-14 23:17:56.000000000 -05:00
---
Codiad IDE in its own definition:

>"...is a web-based IDE framework with a small footprint and minimal requirements."

Having this in mind is expected that configure Codiad in your server should be really easy and it is.
As a solution for coding in a Chromebook, Codiad is almost perfect. For what I want to use, I found two major issues as I will describe along with the text.

######Installation
I followed [this](https://www.digitalocean.com/community/tutorials/how-to-install-and-configure-codiad-a-web-based-ide-on-an-ubuntu-vps) tutorial and it works really well. Besides the installation It shows how to configure htaccess for a better authentication. Although Codiad asks for login too what is a little bit annoying. I dont figure out how to disable this second login but probably there is a way to do this.

######Plugins

Codiad has a plugin system that works simply copying (or cloning) plugins to its plugin folder. And they have a selection of plugins in their [market](http://market.codiad.com/).

So all you need to do is:
	
    $ cd ~/Codiad/plugins/
    $ git clone https://github.com/Fluidbyte/Codiad-Terminal.git 

and you can use a terminal emulator inside your IDE.
To use the terminal you need to put a password ("terminal" by default). The main drawbacks is that it is a really simple terminal (e.g. there is no autocompletion).

I installed the git plugin too:

	git clone https://github.com/Andr3as/Codiad-CodeGit.git
    
but I didn't try it a lot (I had some issues with my github ssh accounts that time).

It is a really nice option for an web-based IDE. The plugin system is really easy but I think they need to be more useful.

At this time I moved for Cloud9. It is a more powerful IDE and it has advanced terminal and plugin options too.
I made an installation tutorial [here](http://blog.viniciusprado.org/how-to-install-and-configure-cloud9-in-your-own-server).
