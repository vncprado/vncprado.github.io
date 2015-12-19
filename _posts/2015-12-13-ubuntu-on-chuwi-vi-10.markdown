---
layout: post
title: "Ubuntu on Chuwi Vi 10"
date: "2015-12-13"
---

I'm writing this post to summarize all stuff I've been trying on my Chuwi Vi 10 tablet to work with Ubuntu.

Here is some aspects of it:

| Component     | Specs                           |
|---------------|:-------------------------------:|
| CPU           | Intel Z3736F                    |
| Audio         | Realtek ALC 5642 (byt_rt5640)   |
| MIPI Panel    | Panasonic 19x12                 |
| WIFI          | Realtek RGN RTL8723BS           |
| Rear camera   | Lite-On 13P2BA829               |
| Front camera  | Lite-On 13P2BA829               |
| Bluetooth     | Realtek RGN RTL8723BS           |
| Charger       | X-Powers integrated (AXP288)    |
| Fuel Gauge    | X-Powers integrated (AXP288)    |
| ALS Sensor    | Capella CM32181                 |
| Gyro Sensor   | Bosch BMG 160                   |
| Accel/Compass | Bosch BMC 150                   |
| Touchscreen   | Silead touch                    |

---

UPDATE (19/12/15):

Intel video acceleration on Ubuntu 15.10 USB drive works out of the box. To test it:

    $ /usr/lib/nux/unity_support_test -p

In Ubuntu 16.04 (which is in testing now but will be LTS) video acceleration do not work all times.

---

To boot I made an Ubuntu 14.04 (I tested 15.10 and it boot too) USB drive with [Rufus](https://rufus.akeo.ie/) on Windows. The boot need to be made with GPT but I didn't have time to have an working USB drive created on Ubuntu yet. After created, I put [bootia32.efi](https://github.com/jfwells/linux-asus-t100ta/blob/master/boot/bootia32.efi) file at `/EFI/boot/` Ubuntu USB drive directory.

If you have no graphics after grub, you can type `e` in grub menu to edit the line starting on `linux	/casper/vmlinuz.efi...`, remove `quite splash` and add `nomodeset reboot=pci,force` in the end.

Using the option `Try Ubuntu` you would be able to install like in any other computer.

After installation, you need to boot from USB drive again and compile Grub inside your installation, to do so you need any USB dongle for WIFI connection. You can find this instructions [here](http://www.jfwhome.com/2014/03/07/perfect-ubuntu-or-other-linux-on-the-asus-transformer-book-t100/). When Grub starts, type `c` to enter command line and type:

    linux (hd2,gpt5)/boot/vmlinuz-3.13-xxxx root=/dev/mmcblk0p5 video=VGA-1:1368x768e reboot=pci,force
    initrd (hd2,gpt5)/boot/initrd-3.13-xxxx
    boot

After booting you need to install some stuff, and clone Grub repository to compile it:

    $ sudo apt-get update && sudo apt-get install git bison libopts25 libselinux1-dev autogen m4 autoconf help2man libopts25-dev flex libfont-freetype-perl automake autotools-dev libfreetype6-dev texinfo ia32_libs build_essential

The package `ia32_libs` maybe a problem because, apparently, it is not anymore on Ubuntu 14.04. To install it try:

    $ sudo -i
    # cd /etc/apt/sources.list.d
    # echo "deb http://old-releases.ubuntu.com/ubuntu/ raring main restricted universe multiverse" >ia32-libs-raring.list
    # apt-get update
    # apt-get install ia32-libs

Then get the Grub source:

    $ git clone git://git.savannah.gnu.org/grub.git

Now build it:

    $ cd grub
    $ ./autogen.sh
    $ ./configure --with-platform=efi --target=i386 --program-prefix=""
    $ make

And install to efi:

    $ cd grub-core
    $ sudo ../grub-install -d . --efi-directory /boot/efi/ --target=i386

This will create a directory, ‘grub’, in your EFI partition.
We want to copy the grubia32.efi from there to the location Ubuntu created during installation:

    $ cd /boot/efi/EFI
    $ sudo cp grub/grubia32.efi ubuntu/grubx64.efi

After this command you should be able to boot directly to your new Ubuntu installation.

I'll (hope to) continue to update this with improvements.
I have a Dell Venue 8 Pro working with some Kernel 4.x which already have better support for Atom processors. So the idea is to have a newer Ubuntu (probably 15.10 which were already released, or a testing version) in order to get at least basic stuff working.

Some other sources:

* <http://techtablets.com/chuwi-vi10/review/>
* <http://forum.xda-developers.com/windows-8-rt/general/chuwi-vi10-dual-boot-win-8-1-android-4-4-t3112954>
