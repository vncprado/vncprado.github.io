---
layout: post
title: "Dynamixel package system installation"
date: "2016-11-11 12:53:09 -0500"
---

For some reason the Dynamixel installation for ROS Indigo give me some (annoying) errors when I try to use the `joint_trajectory_action`, even when I get the trajectory working on the motors. So I performed an installation from [this github repo](https://github.com/arebgun/dynamixel_motor).

You can just clone the repo in your project's workspace `src` folder as a package and compile, but I wanted to have a system installation (at `/opt/ros`) in order to have one solution for all future projects.

First you need to create a catkin workspace for Dynamixel, organize the folders to get it compiling with `catkin_make`.
After that, go to the workspace:

    $ cd dynamixel_ws

You need permissions to install it on `/opt/ros`:

    # sudo su

And the environment variables:

    # source devel/setup.bash

So you can perform the installation:

    # catkin_make -DCMAKE_INSTALL_PREFIX=/opt/ros/indigo install

After that you have a system installation for your dynamixel pkg.

All the best!

Source:

<http://wiki.ros.org/catkin/commands/catkin_make>
