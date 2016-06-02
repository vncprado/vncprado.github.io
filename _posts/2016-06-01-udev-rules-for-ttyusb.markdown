---
layout: post
title: "UDEV rules for ttyUSB"
date: "2016-06-01 21:34:23 -0400"
---

Really useful stuff when developing using Arduino or other USB stuff that maybe have the same `[vendor]:[product]`. First you need to get the serial number:

    # udevadm info -a -n /dev/ttyUSB1 | grep '{serial}' | head -n1

You will get something like `ATTRS{serial}=="A6008isP"`. With this you can create new file called `99-usb-serial.rules` inside `/etc/udev/rules.d/`. In this file you can put one line for any devices you need changing only the serial in case of same vendor and product:

    SUBSYSTEM=="tty", ATTRS{idVendor}=="0403", ATTRS{idProduct}=="6001", ATTRS{serial}=="A6008isP", SYMLINK+="ttyUSB.arduino"
    SUBSYSTEM=="tty", ATTRS{idVendor}=="0403", ATTRS{idProduct}=="6001", ATTRS{serial}=="A9234HMO", SYMLINK+="ttyUSB.other"

In this way `/dev/ttyUSB.arduino` and `/dev/ttyUSB.other` will link to some `/dev/ttyUSB*` that Linux will create for your device.

[Source](http://hintshop.ludvig.co.nz/show/persistent-names-usb-serial-devices/)

All the best!
