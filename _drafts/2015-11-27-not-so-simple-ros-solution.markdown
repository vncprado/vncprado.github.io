---
layout: post
title: Not so simple ROS Solution
date: "2015-11-29"
---

In our lab there is a robot for demonstrations in which we've been working a lot since the beginning of this year.
I'll explain a little bit about it and show our implementations in some post in the future.

Now I just want to talk about our standalone computer solution: [Raspberry Pi 2](https://www.raspberrypi.org/
) + [Ubuntu](https://wiki.ubuntu.com/ARM/RaspberryPi) + [ROS](http://wiki.ros.org/indigo/Installation/UbuntuARM) both for ARM.
Quite simple, right? Not really.

I set up an initialization script for configuration and launch our ROS code. In this way our solution provides a simple way to have the robot working with our code without any huge changes or portabilities.

I first tried to use Raspbian in a Raspberry Pi A+ but its small RAM and limitations, which alone deserves a post, made impossible. I sure need to try again but without an arm repository for Debian make things more difficult.
