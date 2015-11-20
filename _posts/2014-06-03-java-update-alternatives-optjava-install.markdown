---
layout: post
title: Java JRE and mozilla-javaplugin update-alternatives install
date: 2014-06-03 11:26:29.000000000 -04:00
---
Download and unpack java at `/opt/java/`, this way you can keep all past versions in one place configuring only update-alternatives.
Following examples use version jre1.7.0_60. Java binaries or `libnpjp2.so` location may differ.
Basically is install and configure:

	~$ sudo update-alternatives --install "/usr/bin/java" "java" "/opt/java/jre1.7.0_60/bin/java" 1
	~$ sudo update-alternatives --config java

This trailing number in the end is some kind of priority, I always set it to 1.
In following config screen that show all installed versions, you need to select the newest version and press enter.

	~$ sudo update-alternatives --install "/usr/lib/mozilla/plugins/mozilla-javaplugin.so" mozilla-javaplugin.so "/opt/java/jre1.7.0_60/lib/amd64/libnpjp2.so" 1
	~$ sudo update-alternatives  --config mozilla-javaplugin.so
    
In the same way the following config screen will show all installed versions, select the newest version and press enter.
