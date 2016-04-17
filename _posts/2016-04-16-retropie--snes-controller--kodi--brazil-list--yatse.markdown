---
layout: post
title: "Retropie + SNES controller + Kodi + Brazil list + Yatse"
date: "2016-04-16 21:52:18 -0400"
---

Some side project I'm working with my [Raspberry Pi A+](https://www.raspberrypi.org/products/model-a-plus/) is to transform it in a retro game with Bluetooth control and [Kodi](http://kodi.wiki/view/Main_Page) for IPTV. I've got [Retropie 3.5](https://github.com/RetroPie/RetroPie-Setup/releases) (for some reason 3.6 doesn't update).

To install:

    $ gzip -d retropie-v3.5-rpi1.img.gz
    $ sudo dd bs=4M if=retropie-v3.6-rpi1_zero.img of=/dev/mmcblk0

To get my [USB hub](http://www.dx.com/p/orico-a3h4-4-port-usb-3-0-high-speed-hub-aluminum-alloy-hub-w-us-plug-power-adapter-black-328849#.VxLodHUrLeQ) working with WIFI dongle and keyboard I had to append `dwc_otg.speed=1` in the file `/boot/cmdline.txt`:

    dwc_otg.lpm_enable=0 console=ttyAMA0,115200 console=tty1 root=/dev/mmcblk0p2 rootfstype=ext4 elevator=deadline fsck.repair=yes rootwait quiet loglevel=3 consoleblank=0 **dwc_otg.speed=1**

Then configured WIFI from Raspberry's menu.

After that I installed the experimental Kodi from menu. Basically follow [this](https://github.com/RetroPie/RetroPie-Setup/wiki/KODI). It is important to follow the instructions to have Kodi on the main menu of Emulation Station.

To use my cellphone as a remote control I installed [Yatse](http://yatse.tv/redmine/projects/yatse/wiki/XbmcConfig?utm_source=YatseApp). In this way you have a Chromecast like equipament. Remember to follow Yatse help to change Kodi Web settings.

I have Brazil list of channels on PVR Simple client plug-in on Kodi.

I also bought a Bluetooth and WIFI dongle that I will need to test with the SNES Bluetooth control as well to get my solution working. But up to now using my keyboard and USB hub everything is working fine.

That's all.

<center> =] </center>
