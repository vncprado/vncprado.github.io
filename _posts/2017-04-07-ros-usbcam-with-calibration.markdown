---
layout: post
title: "ROS usb_cam with calibration"
date: "2017-04-07 15:54:36 -0400"
---

I'm using ROS `usb_cam` package with small changes in my project. Then I created a `robot_vision` package in my workspace so I could make small changes and maybe get a generic package to use in other projects in the future.

I created a custom launch in `robot_vision` based on:

    $ roscat usb_cam usb_cam-test.launch

So I could use other usb camera (`/dev/video1` default is video0) device then change /dev/video:

    $ roslaunch robot_vision init_camera.launch

After that I erformed a calibration

    $ rosrun camera_calibration cameracalibrator.py --size 7x5 --square 0.028 image:=/usb_cam/image_raw camera:=/usb_cam

Attention to `--size`, count the chessboard intersections, not the squares. Follow the instructions.

Update your launch:

    <param name="camera_info_url" value="file:///$(find robot_vision)/calib.yaml" />
    <param name="camera_name" value="camera" />

To get rectificated images topics:

    $ ROS_NAMESPACE=PS_cam rosrun image_oc image_proc

To check:

    $ rosrun camera_calibration cameracheck.py --size 7x5 monocular:=/camera image:=image_rect

On roslaunch:

    <node name="image_proc" pkg="image_proc" type="image_proc" ns="usb_cam"/>

Sources:

[http://wiki.ros.org/camera_calibration/Tutorials/MonocularCalibration]()

[http://wiki.ros.org/image_proc]()

[http://wiki.ros.org/usb_cam]()

[https://www.artoolworks.com/support/library/images/6/6a/Calibration_chessboard.pdf]()

[http://wiki.ros.org/camera_calibration]()
