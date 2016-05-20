---
layout: post
title: "Retropie + SNES controller + Kodi + Brazil list + Yatse"
date: "2016-04-16 21:52:18 -0400"
---

UPDATE 19/05/16:

I bought an USB dongle WIFI+Bluetooth so I could have internet and bluetooth controllers on my Retropie.
The model is [this](https://www.amazon.ca/dp/B015IJ4P58/ref=pe_386430_193739550_TE_dp_1). The fantasy name is Dragon 150Mbps WIFI with Bluetooth 4.0 USB adapter but its a Realtek chipset.

To get WIFI you need to compile [this driver](https://github.com/lwfinger/rtl8723bu/). To compile it on your Retropie you will need the help of [this guy](http://matthewdippel.blogspot.ca/2016/02/howto-build-rtl8723bu-for-raspbian.html). But basically you will need to get and install linux-headers for Raspbian:

    wget https://www.niksula.hut.fi/~mhiienka/Rpi/linux-headers-rpi/linux-headers-4.1.13%2B_4.1.13%2B-2_armhf.deb
    sudo dpkg –i ./linux-headers-4.1.13+-2_armhf.deb

There is also some changes in the Makefile:

> Hit CTRL+W and type “CONFIG_PLATFORM_I386_PC =” and hit Enter.  Set it to “n”. Add a line below it and type “CONFIG_RASPBIAN = y”.

    ifeq ($(CONFIG_RASPBIAN), y)
    EXTRA_CFLAGS += -DCONFIG_LITTLE_ENDIAN
    EXTRA_CFLAGS += -DCONFIG_IOCTL_CFG80211
    EXTRA_CFLAGS += -DRTW_USE_CFG80211_STA_EVENT # only enable when kernel >= 3.2
    EXTRA_CFLAGS += -DCONFIG_P2P_IPS
    ARCH := arm
    CROSS_COMPILE := arm-linux-gnueabihf-
    KVER := $(shell uname -r)
    KSRC ?= /lib/modules/$(KVER)/build
    MODULE_NAME := 8723bu
    MODDESTDIR := /lib/modules/$(KVER)/kernel/drivers/net/wireless/
    endif

For Bluetooth you'll use [this one](https://github.com/lwfinger/rtl8723au_bt). The [controller](https://www.amazon.ca/dp/B00MB6CNN8/ref=pe_386430_193739550_TE_dp_1) that I bought works with the test branch today. Maybe this will change in the future. The driver documentation says that you should use kernel branch for most recent kernels.

Still need to test without USB 3.0 hub (using only the direct USB port in my raspberry pi).

---

Some side project I'm working with my [Raspberry Pi A+](https://www.raspberrypi.org/products/model-a-plus/) is to transform it in a retro game with Bluetooth control and [Kodi](http://kodi.wiki/view/Main_Page) for IPTV. I've got [Retropie 3.5](https://github.com/RetroPie/RetroPie-Setup/releases) (for some reason 3.6 doesn't update).

To install:

    $ gzip -d retropie-v3.5-rpi1.img.gz
    $ sudo dd bs=4M if=retropie-v3.6-rpi1_zero.img of=/dev/mmcblk0

To get my [USB hub](http://www.dx.com/p/orico-a3h4-4-port-usb-3-0-high-speed-hub-aluminum-alloy-hub-w-us-plug-power-adapter-black-328849#.VxLodHUrLeQ) working with WIFI dongle and keyboard I had to append `dwc_otg.speed=1` in the file `/boot/cmdline.txt`:

    dwc_otg.lpm_enable=0 console=ttyAMA0,115200 console=tty1 root=/dev/mmcblk0p2 rootfstype=ext4 elevator=deadline fsck.repair=yes rootwait quiet loglevel=3 consoleblank=0 **dwc_otg.speed=1**

Then configured WIFI from Raspberry's menu.

After that I installed the experimental Kodi from menu. Basically follow [this](https://github.com/RetroPie/RetroPie-Setup/wiki/KODI). It is important to follow the instructions to have Kodi on the main menu of Emulation Station.

To use my cellphone as a remote control I installed [Yatse](http://yatse.tv/redmine/projects/yatse/wiki/XbmcConfig?utm_source=YatseApp). In this way you have a Chromecast like equipment. Remember to follow Yatse help to change Kodi Web settings.

I have Brazil list of channels on PVR Simple client plug-in on Kodi.

I also bought a Bluetooth and WIFI dongle that I will need to test with the SNES Bluetooth control as well to get my solution working. But up to now using my keyboard and USB hub everything is working fine.

That's all.

<center> =] </center>
