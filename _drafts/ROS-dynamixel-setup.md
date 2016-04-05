http://wiki.ros.org/dynamixel_controllers/Tutorials

http://wiki.ros.org/dynamixel_controllers/Tutorials/Creating%20a%20joint%20torque%20controller

https://github.com/arebgun/dynamixel_motor/tree/master/dynamixel_driver/scripts

rosrun dynamixel_driver info_dump.py -p /dev/ttyUSB1 10

rosrun dynamixel_driver set_servo_config.py --ccw-angle-limit=1023 -p /dev/ttyUSB1 10
