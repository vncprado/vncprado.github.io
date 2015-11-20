---
layout: post
title: Installing Ubuntu from iso, without DVD or USB key, using a pre-existing grub
date: 2014-06-18 23:00:51.000000000 -04:00
---
This walkthrough is a really piece of gold. I found this purely by curiosity but I realized it is really useful. Even when you don't have any medium to install or upgrade from scratch your ubuntu, with a running grub installation and an ubuntu iso file on your HD you can do this following this steps:

Go to grub menu (if your installation hides it).
`press c` to go to grub's command-line.

Verify presence of grub modules, special attention to (hd0,1):

	grub> ls (hd0,1)/boot/grub/
    grub> ls (hd0,1)/usr/lib/grub/i386-pc/

Setting prefix for modules:

    grub> set prefix=(hd0,1)/boot/grub/
    grub> set prefix=(hd0,1)/usr/lib/grub/i386-pc/
    
Inserting modules:

    grub> insmod linux
    grub> insmod loopback
    grub> insmod iso9660
    grub> insmod fat
    grub> insmod ntfs
    grub> insmod ntfscomp

Verifying installed disks:

    grub> ls
	    (hd0) (hd0,msdos1) ...

Setting loopback file, root path and linux boot options:

	grub> loopback loop (hd0,msdos3)/path/to/iso/ubuntu-14.04-desktop-amd64.iso
    grub> set root=(loop)
    grub> linux /casper/vmlinuz.eti boot=casper iso-scan/filename=/path/to/iso/ubuntu-14.04-desktop-amd64.iso noprompt noeject
    grub> initrd /casper/initrd.lz
    grub> boot

So here you are! A running version of ubuntu iso.

You can use autocomplete in almost all above commands. The autocomplete is somewhat dumb but it's useful to test the directories. But doesn't works when you need to put the iso path in the line `linux /casper/vmlinuz ...`.

Before installing you need to unmount `/isodevice`. So open a terminal and type:

	$ sudo unmount -l -r -f /isodevice

Follow installation instructions as usual.

That's all.
