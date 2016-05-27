---
layout: post
title: Chroot on Ubuntu 16.04 for ROS
date: "2016-05-26 22:12:27 -0400"
---

After install Ubuntu 16.04 on my laptop I found out that maybe would be challenging to have a nice ROS installation like in 14.04 but I could work almost in the same way before with a chroot of Ubuntu 14.04 in my 16.04 installation.

I followed [this](http://wiki.ros.org/ROS/Tutorials/InstallingIndigoInChroot) tutorial but I got an error on libpan. But [this](https://blog.tan-ce.com/chroot-ubuntu-14-04-on-android-nexus-10/) guy has a solution. Create a dummy `init.d` script at `/etc/init.d/systemd-logind` with 0755 permissions (executable by all). In this file, enter the following:

    #!/bin/sh
    exit 0

Then, let apt complete the installation by running `apt-get upgrade -y`.

After fixing this you can proceed and install Nvidia drivers. To enter your chroot `schroot -c indigo_trusty`.

All the best!
