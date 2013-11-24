var matcher = /\bcross\s*fit\b/gi;

function replaceCrossFit() {
    if (document.body.innerText.match(matcher)) {
        for (i = 0; i < document.all.length; i++) {
            var child = document.all(i).firstChild;

            if (child && child.data && child.tagName != 'INPUT' && child.tagName != 'TEXTAREA') {
                child.data = child.data.replace(matcher, 'House of The Cheeky Serpent');
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
