---
layout: post
title: Chroot Ubuntu
---

http://wiki.ros.org/ROS/Tutorials/InstallingIndigoInChroot

libpan error:
If you followed me and installed ubuntu-standard, you’d get another failed package: libpam-systemd. To solve this problem, we’re going to create a dummy init.d script. Create a file at /etc/init.d/systemd-logind with 0755 permissions (executable by all). In this file, enter the following:

    #!/bin/sh
    exit 0

Then, let apt complete the installation by running “apt-get upgrade -y”.

https://blog.tan-ce.com/chroot-ubuntu-14-04-on-android-nexus-10/

Installation Nvidia
