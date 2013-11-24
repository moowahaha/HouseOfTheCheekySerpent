var matcher = /\bcross\s*fit\b/gi;
var replacement = 'House of the Cheeky Serpent';

function replaceCrossFit() {
    if (document.body.innerText.match(matcher)) {
        for (i = 0; i < document.all.length; i++) {
            var child = document.all(i).firstChild;

            if (
                child &&
                child.data &&
                !child.data.match(replacement) &&
                child.tagName != 'INPUT' &&
                child.tagName != 'TEXTAREA'
            ) {
                child.data = child.data.replace(matcher, replacement);
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
