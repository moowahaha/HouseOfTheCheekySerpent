function replaceCrossFit() {
    if (document.body.innerText.match(/cross\s*fit/i)) {
        for (i = 0; i < document.all.length; i++) {
            var child = document.all(i).firstChild;

            if (child && child.data && child.tagName != 'INPUT' && child.tagName != 'TEXTAREA') {
                child.data = child.data.replace(/cross\s*fit/gi, 'House of The Cheeky Serpent');
            }
        }
    }
}

replaceCrossFit();

var timeout;

document.addEventListener('DOMSubtreeModified', function () {
    if (timeout) {
        clearTimeout(timeout);
    }
    timeout = setTimeout(replaceCrossFit, 500);
}, false);
