---
layout: post
title: "UDEV rules for devices without serial number"
date: "2017-10-11 20:57:09 -0400"
---

I have and update about how to create UDEV rules for devices that doesn't have serial number. I bought this serial to USB adapters from a company called prolific and tried to create UDEV rules for it like [this](http://viniciusprado.org/udev-rules-for-ttyusb/):

    SUBSYSTEM=="usb-serial", ATTRS{idVendor}=="067b", ATTRS{idProduct}=="2303", ATTRS{serial}=="0000:00:1d.0", SYMLINK+="cyberglove.right"
    SUBSYSTEM=="usb-serial", ATTRS{idVendor}=="067b", ATTRS{idProduct}=="2303", ATTRS{serial}=="0000:00:1a.0", SYMLINK+="cyberglove.left"

But I couldn't, because that `ATTRS{serial}=="0000:00:1a.0"` is not the correct serial to be used in UDEV rules.

There is a solution [here](https://gist.github.com/cbrake/4337154) if you're using only one device:

    # single blue USB serial adapter, prolific devices don't seem to have a serial number that I can find
    SUBSYSTEM=="tty", DRIVERS=="pl2303", SYMLINK+="ttyUSB_panda"

But in my case there is two serial to USB adapters, one for each glove.
There is one workaround for it too. [Here](https://askubuntu.com/questions/49910/how-to-distinguish-between-identical-usb-to-serial-adapters), they use the position on the USB hub to create a `NAME` tag:

    KERNEL=="ttyUSB*", KERNELS=="1-8.1.5", NAME="ttyUSB0"

I only change `NAME` and use `SYMLINK` instead:

    KERNEL=="ttyUSB*", KERNELS=="1-1.3", SYMLINK+="ttyUSB.cyberglove.left"
    KERNEL=="ttyUSB*", KERNELS=="1-1.4", SYMLINK+="ttyUSB.cyberglove.right"

In this way you can use both adapters at the same time defining `tty` links to it. You only have to keep the device always at the same USB port or change the rule.

**BONUS:** How to reload UDEV rules without reboot:

    sudo udevadm control --reload-rules && udevadm trigger

Plug and unplug the device.
