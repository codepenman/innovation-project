var data = JSON.parse(document.getElementById('data-bundle').innerHTML);
var MODEL = require('racer').createModel(data);
window.MODEL = MODEL

// model.at() scopes all model operations underneath a particular path
model = MODEL.at('_page.room');

function renderForm(value) {
    var node = document.getElementsByClassName('nicEdit-main')[0];
    while(node.hasChildNodes()) {
        node.removeChild(node.lastChild);
    }
    var clauses = value.clauses;
    var content = value.content;

    for(var i = 0; i < clauses.length; i++)    {
        // if(value.hasOwnProperty(clause))    {
            $(".nicEdit-main").append($.parseHTML(content[clauses[i]])).append("<br>");
        // }
    }
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

$('#editor-container').on('onClauseAddition', function(event, data) {
    console.log("Hello.... racer-client");
    var clauses = [];
    var content = {};
    $('.Clause').each(function(index, element)    {
        var id = element.getAttribute('id');
        clauses.push(id);
        content[id] = element.outerHTML;
    });
    model.set({
        "clauses" : clauses,
        "content" : content
    });
    console.log("Model: ");
    console.log(model.get());
    // var action = "Clause " + id + " is added.";
    // socket.emit('chat', action);
    $.ajax({
        type: "POST",
        data: JSON.stringify({
            clause_number : data.id,
            socketId : socket.id,
            model : model.get()
        }),
        contentType: 'application/json',
        url: "http://localhost:3000/home/clauseAdded",
        success: function(response) {
            //DO nothing on Success
        }
    });
});