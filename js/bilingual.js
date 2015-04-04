function set_initial_lang() {
    var userLang = navigator.language || navigator.userLanguage;
    var userLang_lower = userLang.toLowerCase();
    
    set_lang(userLang_lower);
}

function set_lang(userLang) {
    var en_p = document.getElementsByClassName('en');
    var pt_p = document.getElementsByClassName('pt');
    
    if (userLang == "pt-br" || userLang == "pt") {
        for (var i = 0; i < en_p.length; i++) {
            en_p[i].style.display = 'none';
            pt_p[i].style.display = 'initial';
        }
    } else {
        for (var i = 0; i < en_p.length; i++) {
            pt_p[i].style.display = 'none';
            en_p[i].style.display = 'initial';
        }
    }
}
// pt

// enEnglish
// en-usEnglish (United States)
// en-gbEnglish (United Kingdom)
// en-auEnglish (Australia)
// en-caEnglish (Canada)
// en-nzEnglish (New Zealand)
// en-ieEnglish (Ireland)
// en-zaEnglish (South Africa)
// en-jmEnglish (Jamaica)
// enEnglish (Caribbean)
// en-bzEnglish (Belize)
// en-tt