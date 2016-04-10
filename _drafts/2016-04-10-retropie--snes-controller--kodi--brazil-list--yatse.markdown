---
layout: post
title: "Retropie + SNES controller + Kodi + Brazil list + Yatse"
date: "2016-04-10 14:06:05 -0400"
---

Retropie 3.5 (for some reason 3.6 doesn't work update)
https://github.com/RetroPie/RetroPie-Setup/releases

gzip -d retropie-v3.5-rpi1.img.gz
dd bs=4M if=retropie-v3.6-rpi1_zero.img of=/dev/mmcblk0

To have my USB hub working with wifi and keyboard
/boot/cmdline.txt
dwc_otg.lpm_enable=0 console=ttyAMA0,115200 console=tty1 root=/dev/mmcblk0p2 rootfstype=ext4 elevator=deadline fsck.repair=yes rootwait quiet loglevel=3 consoleblank=0 **dwc_otg.speed=1**

Configure wifi from menu

Install experimental Kodi from menu
Follow https://github.com/RetroPie/RetroPie-Setup/wiki/KODI

Install Yatse
Put here Yatse confs
Brasil list
