---
layout: post
title: Using Fuzzylite in Ubuntu/ROS
date: 2016-04-05
permalink: using-fuzzylite-in-ubuntu-ros/
---

In my PhD work we maybe are going to use some Fuzzy controllers, I found out this [Fuzzylite](http://www.fuzzylite.com/) really light and simple to use. Following how I got it working on my environment.

I installed it following [this](http://praghuvamsi.blogspot.ca/2014/02/fuzzylite-installation-on-ubuntu.html) instructions. With a different version cloned from github [repository](https://github.com/fuzzylite/fuzzylite.git).

So I don't need to extract, only `cd` fuzzylite folder inside fuzzylite git repository:

    fuzzylite/:~$ cd fuzzylite

Then CMake, make and make install:

    fuzzylite/fuzzylite:~$ cmake .
    fuzzylite/fuzzylite:~$ make
    fuzzylite/fuzzylite:~$ sudo make install

After that you need to export the installation local

    $ export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/lib

In this way it is possible to link the fuzzylite dynamically, you can use their [example](/misc/example.cpp):

    $ g++ example.cpp -lfuzzylite
    $ ./a.out

On ROS you can utilize the library updating your CMakelists.txt:

    ## Specify libraries to link a library or executable target against
    target_link_libraries(fuzzy_tests_node
      ${catkin_LIBRARIES}
      fuzzylite
    )

Up to now I didn't have any problems and I can use fuzzylite values to read from and update ROS topics.

That's all.
