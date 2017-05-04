---
layout: post
title: "Images sequence to mp4"
date: "2017-05-04 14:55:00 -0400"
---

I'd got a sequence of images from my last snowboard trip and want to group them in a mp4 format. Problem is that they don't start from 0 or 1 so I need a script line before feeding them to FFmpeg and create a video.

To reduce size:

    $ mogrify -resize 50% *jpg

The files pattern was something like `Y003.jpeg`. To test renaming:

    $ rename 's/.+/our $i; sprintf("Y%03d.jpg", 1+$i++)/e' * -vn

To rename in fact, just remove the `-vn` option.
Now use ffmpeg to generate the mp4 file.

    $ ffmpeg -framerate 2 -i Y%03d.jpg -c:v libx264 -profile:v high -crf 20 -pix_fmt yuv420p output.mp4

Now you should have a `output.mp4` file on your folder.
