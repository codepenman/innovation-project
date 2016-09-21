// function renderForm(value) {
//   var form = $.parseHTML(value);
//   $('#rtc-form')[0].innerHTML = form[0].innerHTML;
// }
//
// model.on('change', function(value, previous, passed) {
//
//   console.log("Passed: ");
//   console.log(passed);
//
//   if (!passed.$remote) return;
//   if (!passed.$type) {
//     renderForm(value || '');
//     return;
//   }
//   //Update the view on model change
//   renderForm(value);
// });
//
// function onDOMModification() {
//   var value = pad.outerHTML;
//   var previous = model.get() || '';
//   if (value !== previous)  {
//     model.set(value);
//   }
// }
//
// $('#rtc-form')[0].addEventListener('DOMSubtreeModified', function () {
//   setTimeout(onDOMModification, 0);
// }, false);

var data = JSON.parse(document.getElementById('data-bundle').innerHTML);
var MODEL = require('racer').createModel(data);
window.MODEL = MODEL

// model.at() scopes all model operations underneath a particular path
model = MODEL.at('_page.room');

var pad = $('.nicEdit-main');

// model.on('change', function(value, previous, passed) {
//     if (!passed.$remote) return;
//     if (!passed.$type) {
//         pad.value = value || '';
//         return;
//     }
//     var transformCursor, newText;
//     if (passed.$type === 'stringInsert') {
//         var index = passed.index;
//         var text = passed.text;
//         transformCursor = function(cursor) {
//             return (index < cursor) ? cursor + text.length : cursor;
//         };
//         newText = previous.slice(0, index) + text + previous.slice(index);
//     } else if (passed.$type === 'stringRemove') {
//         var index = passed.index;
//         var howMany = passed.howMany;
//         transformCursor = function(cursor) {
//             return (index < cursor) ? Math.max(index, cursor - howMany) : cursor;
//         };
//         newText = previous.slice(0, index) + previous.slice(index + howMany);
//     }
//     replaceText(pad, newText, transformCursor);
//     if (pad.value !== model.get()) debugger;
// });
//
// function replaceText(pad, newText, transformCursor) {
//     var start = pad.selectionStart;
//     var end = pad.selectionEnd;
//     var scrollTop = pad.scrollTop;
//     pad.value = newText;
//     if (pad.scrollTop !== scrollTop) {
//         pad.scrollTop = scrollTop;
//     }
//
//     if (document.activeElement === pad) {
//         pad.selectionStart = transformCursor(start);
//         pad.selectionEnd = transformCursor(end);
//     }
// }
//
// function onInput() {
//     // IE and Opera replace \n with \r\n
//     var value = pad.value.replace(/\r\n/g, '\n');
//     var previous = model.get() || '';
//     if (value != previous) applyChange(model, previous, value);
//     if (pad.value !== model.get()) debugger;
// }
//
// pad.addEventListener('input', function() {
//   setTimeout(onInput, 0);
// }, false);
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