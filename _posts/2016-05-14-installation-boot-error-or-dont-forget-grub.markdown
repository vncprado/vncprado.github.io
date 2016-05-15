---
layout: post
title: "Installation boot error (or don't forget GRUB)"
date: "2016-05-14 20:31:32 -0400"
---

Last week I updated my lab laptop to Ubuntu 16.04 even with lots of problems reported up to now I have no problems, with one simple exception.
I choose to do a fresh install. To make a dist-upgrade I would need to wait the 16.04.1 release. There's some workarounds but laziness dominates.
During the installation I got an Grub error, a fatal error that crashes the install wizard. But I had the feeling that everything was fine but the grub.
During the reboot in USB drive Grub you can type `c` to get a terminal. So you just need to type:

    linux (hd0,msdos)/boot/grub/vmlinuz<TAB><TAB> root=/dev/sda1
    initrd (hd0,msdos)/boot/initrd.gz
    boot

The auto-complete works so just `<TAB><TAB>` and you get list of partitions and files to complete. You just need to be sure about your root partition.
After boot the installed Ubuntu, you can run boot-repair to fix your boot installation.

That's all!

<center> =] </center>
