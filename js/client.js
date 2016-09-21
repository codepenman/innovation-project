var data = JSON.parse(document.getElementById('data-bundle').innerHTML);
var MODEL = require('racer').createModel(data);
window.MODEL = MODEL

// model.at() scopes all model operations underneath a particular path
model = MODEL.at('_page.room');

var pad = $('.nicEdit-main');

var isOwnEvent = false;

function renderForm(value) {
    var form = $.parseHTML(value);
    $(".nicEdit-main")[0].innerHTML = form[0].innerHTML;
    isOwnEvent = true;
}

model.on('change', function(value, previous, passed) {

    console.log("Passed: ");
    console.log(passed);

    if (!passed.$remote || !value) return;
    if (!passed.$type) {
        renderForm(value || '');
        return;
    }
    //Update the view on model change
    renderForm(value);
});

function onDOMModification() {
    var value = $(".nicEdit-main")[0].innerHTML;
    var previous = "";
    if(model.get() != "")   {
        previous = ($.parseHTML(model.get())[0]).innerHTML || '';
    }
    if (value !== previous)  {
        model.set($(".nicEdit-main")[0].outerHTML);
    }
}

$('#editor-container')[0].addEventListener('DOMSubtreeModified', function () {
    if(isOwnEvent)  {
        isOwnEvent = false;
        return;
    }
    console.log("Hello.... racer-client");
    setTimeout(onDOMModification, 0);
}, false);
//
// $(document).on('DOMNodeInserted', function(event)  {
//
//     $(".nicEdit-main").on("DOMNodeInserted", function() {
//         console.log("Hello.... racer-client");
//         setTimeout(onInput, 0);
//     });
// });

// Create an op which converts previous -> value.
//
// This function should be called every time the text element is changed.
// Because changes are always localized, the diffing is quite easy.
//
// This algorithm is O(N), but I suspect you could speed it up somehow using
// regular expressions.
function applyChange(model, previous, value) {
    if (previous === value) return;
    var start = 0;
    while (previous.charAt(start) == value.charAt(start)) {
        start++;
    }
    var end = 0;
    while (
    previous.charAt(previous.length - 1 - end) === value.charAt(value.length - 1 - end) &&
    end + start < previous.length &&
    end + start < value.length
        ) {
        end++;
    }

    if (previous.length !== start + end) {
        var howMany = previous.length - start - end;
        model.stringRemove(start, howMany);
    }
    if (value.length !== start + end) {
        var inserted = value.slice(start, value.length - end);
        model.stringInsert(start, inserted);
    }
}