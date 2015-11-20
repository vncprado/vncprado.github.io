---
layout: post
title: Reduce PDF files size
date: 2014-06-18 15:23:15.000000000 -04:00
---
A simple way to reduce a pdf size using ghost script:

	~$ gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/screen -dNOPAUSE -dQUIET -dBATCH -sOutputFile=reduced.pdf input.pdf
    
Where reduced.pdf is the name of output file and input is the file that you want to reduce. I have no idea either time to find out what the other options do =)

That's all.
