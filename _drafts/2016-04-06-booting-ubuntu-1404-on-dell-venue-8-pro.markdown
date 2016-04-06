---
layout: post
title: Booting Ubuntu 14.04 on Dell Venue 8 Pro
---
Boot USB
iso Rufus
efi

grub.cfg ok

	menuentry "MOD Try Ubuntu without installing" {
		set gfxpayload=keep
		linux	/casper/vmlinuz.efi file=/cdrom/preseed/ubuntu.seed boot=casper nomodeset reboot=pci,force
		initrd	/casper/initrd.lz
	}

installation normal
first boot by usb drive

ia32-libs
sudo -i
cd /etc/apt/sources.list.d
echo "deb http://old-releases.ubuntu.com/ubuntu/ raring main restricted universe multiverse" >ia32-libs-raring.list
apt-get update
apt-get install ia32-libs

grub compiling

patch, config (using generic config) and compiling kernel 4.2
sound modules, SoC, atom etc

 chromium os firmware sound, rename 48hz to master
alsa conf

wireless firmware

3D Acceleration: kernel 3.15 + patch

http://forum.tabletpcreview.com/threads/linux-on-dell-venue-8-pro.66575/

http://liliputing.com/2013/10/booting-ubuntu-asus-transformer-book-t100.html

http://www.jfwhome.com/2014/03/07/perfect-ubuntu-or-other-linux-on-the-asus-transformer-book-t100/

http://sturmflut.github.io/linux/ubuntu/2015/02/04/installing-ubuntu-on-baytrail-tablets-version-2/

http://www.cnx-software.com/2015/08/12/ubuntu-14-04-3-desktop-image-for-intel-atom-z3735f-mini-pcs-and-sticks/
