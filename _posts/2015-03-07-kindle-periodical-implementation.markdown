---
layout: post
title: Kindle Periodical Implementation
date: 2015-03-07 01:10:35.000000000 -05:00
---
Some time ago I started a small project with Kindle. I think it's a really good platform, but it would be more useful with some kind of API. 

While Amazon does not create some type of API to App development, to do a more interesting use your equipment, a solution is to sending files by email. You need to enable your e-mail on Amazon settings to send files to your device. In fact, you send files to Amazon and they send it to your device.

Among supported formats, I found periodical the best. It is well organized and has a cool initial menu. But most news implementations I found for kindle periodical puts all the news in the same section which makes its home menu a mere link to the news.  

With that in mind I made my own implementation, using Kindlegen, software provided by Amazon to generate a journal that receives content in form of a list of subscriptions and generates a .mobi file to be read on kindle =) 

Follow my implementation on [github](https://github.com/vncprado/kindle-periodical)

That's all.	
