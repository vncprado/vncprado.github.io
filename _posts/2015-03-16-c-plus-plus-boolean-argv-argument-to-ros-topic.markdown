---
layout: post
title: C++ boolean argv argument to ROS topic
date: 2015-03-16 10:50:50.000000000 -04:00
---
In our lab, we've been working on an [ROS](http://www.ros.org/) solution to record movements and playback then in a servo-controlled DF-Robot called Dr Robot a.k.a. Pumpkin.

To change a MOSFET status we use this simple and useful snippet to get a boolean variable from the command line in C++, publishing the value as a topic for ROS.

	#include "ros/ros.h"
	#include "std_msgs/Bool.h"

	int main(int argc, char **argv) {
      ros::init(argc, argv, "mosfet_status_publisher");
      ros::NodeHandle n;
      ros::Publisher mosfet_status_pub = n.advertise<std_msgs::Bool>("mosfet_status", 1000);
      ros::Rate loop_rate(10);

      bool status;
      char* status_char;

      if (argc <= 1) {
          status = false;
      } else {
          status_char = argv[1];
          std::stringstream ss;
          ss << status_char;
          ss >> std::boolalpha >> status;
      }

      int count = 0;
      std_msgs::Bool mosfet_status;
      while (ros::ok()) {
          mosfet_status.data = status;
          mosfet_status_pub.publish(mosfet_status);

          ros::spinOnce();
          loop_rate.sleep();
          ++count;
      }
      return 0;
	}


If there isn't arguments, false is the default value published.
That's all.
