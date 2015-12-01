---
layout: post
title: Simple standalone computer solution for our robot
date: "2015-11-30"
---

In our lab there is a robot for demos in which we've been working a lot since the beginning of this year. I'll explain a little bit about it and show our implementations in some post in the future.

Now I want to talk about our standalone computer solution for this robot: [Raspberry Pi 2](https://www.raspberrypi.org/ ) + [Ubuntu-ARM](https://wiki.ubuntu.com/ARM/RaspberryPi) + [ROS-ARM](http://wiki.ros.org/indigo/Installation/UbuntuARM). Quite simple, right? At this point yes, but I first tried using Raspbian in a Raspberry Pi A+ but its small RAM and limitations, which alone deserves a post, was almost impossible.

I am sure need to try again but without an ROS-ARM repository for Debian things are hard. Using Raspberry 2 with Ubuntu installed, I had an initialization script set up for configuration and launch our robot code. In this way our solution provides a simple way to have the robot work with our code without any huge changes or portabilities. So It's just put a battery and you have the robot running.

That's All!
