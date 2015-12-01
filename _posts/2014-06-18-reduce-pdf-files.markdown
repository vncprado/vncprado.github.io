---
layout: post
title: Reduce PDF files size
date: 2014-06-18 15:23:15.000000000 -04:00
---
A simple way to reduce a pdf size using ghost script:

	~$ gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/screen -dNOPAUSE -dQUIET -dBATCH -sOutputFile=reduced.pdf input.pdf

Where reduced.pdf is the name of output file and input is the file that you want to reduce. I have no idea either time to find out what the other options do =)

UPDATE 30/11/15:

If the `-dPDFSETTINGS=/screen` setting is too low quality to suit your needs, replace it with `-dPDFSETTINGS=/ebook` for better quality, but slightly larger pdfs. Delete the setting altogether for the high quality default, which you can also explicitly call for with `-dPDFSETTINGS=/prepress` ([source](http://askubuntu.com/a/256449)).

That's all.
