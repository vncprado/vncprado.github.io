---
layout: post
title: 'C++ #define PRINT'
date: 2014-05-20 21:19:25.000000000 -04:00
---
A simple tip to put a `PRINT` command and save some time with `cout << blablabla << endl;` and this stuff.

	#define PRINT(val) \
			cout << val << endl
	#define PRINTTXT(txt, val) \
			cout << txt << endl << val << endl
