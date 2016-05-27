---
layout: post
title: Dynamixel Setup Using ROS
date: 2016-04-06
---

The Dynamixel package that is provided by ROS is really useful to control multi-joint manipulators or mobile robots using Dynamixel motors. It's possible to find a nice tutorial [here](http://wiki.ros.org/dynamixel_controllers/Tutorials).

One tutorial about the torque joint controller can be found [here](http://wiki.ros.org/dynamixel_controllers/Tutorials/Creating%20a%20joint%20torque%20controller). The detail is that, in order to get this step-by-step working, you should setup the motor to wheel mode ON. For this, there is some scripts in the [dynamixel package](https://github.com/arebgun/dynamixel_motor/tree/master/dynamixel_driver/scripts). Which you can install from `apt-get` as usual.

Using the package you could run:

    $ rosrun dynamixel_driver info_dump.py -p /dev/ttyUSB0 10

To get some information about your motors, and:

    $rosrun dynamixel_driver set_servo_config.py --ccw-angle-limit=0 -p /dev/ttyUSB0 10

To change your motor (in this case id = 10), to wheel mode on. To change it back make sure you set `--ccw-angle-limit=1023` or the max value your motor supports.

That's all.
