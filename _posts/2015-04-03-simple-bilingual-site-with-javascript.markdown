---
layout: post
title: Simple bilingual site with javascript
date: 2015-04-03 23:14:15.000000000 -04:00
---
The root directory of this domain is redirected to my [resumé](http://viniciusprado.org/cv). It's a simple Html+CSS+Javascript page where I use one [HTML5UP](http://html5up.net/) free template.

I made some changes, but the most interesting is that I made a simple script change the language of the whole site.

Basically, there is two CSS classes (en and pt) which objects (paragraphs, links or titles) for each language will be shown in their version of the site.

One small function to load English as default language if user browser is not in Portuguese:

	function set_initial_lang() {
      	var userLang = navigator.language || navigator.userLanguage;
      	var userLang_lower = userLang.toLowerCase();

      	set_lang(userLang_lower);
	}

One function that gets user language and hides/shows every object that belong to that class.

	function set_lang(userLang) {
		var en_p = document.getElementsByClassName('en');
        var pt_p = document.getElementsByClassName('pt');

      	if (userLang == "pt-br" || userLang == "pt") {
          	for (var i = 0; i < en_p.length; i++) {
              	en_p[i].style.display = 'none';
              	pt_p[i].style.display = 'block';
          	}
      	} else {
          	for (var i = 0; i < en_p.length; i++) {
              	pt_p[i].style.display = 'none';
              	en_p[i].style.display = 'block';
          	}
      	}
		}

Still in time, for this template, I used some `<span>` to get it working inside `<li>` tags.

This CV website is avaible on [github](https://github.com/vncprado/cv2)

That's all =)
