---
layout: post
title: "Sequence images to mp4"
date: "2017-04-02 16:12:31 -0400"
---

I got a sequence of images from my last snowboard trip and want to group them in a mp4 format. Problem is that they don't start from 0 or 1 so I need a scrip line before feed them to ffmpeg.

To reduce size:

    $ mogrify -resize 50% *jpg

To rename test:

    $ rename 's/.+/our $i; sprintf("Y%03d.jpg", 1+$i++)/e' * -vn

To rename in fact remove '-vn'

Now use ffmpeg to generate the mp4 file.

    $ ffmpeg -framerate 2 -i Y%03d.jpg -c:v libx264 -profile:v high -crf 20 -pix_fmt yuv420p output-2-fps.mp4

The files format was something like Y003.jpeg
