// $(function(){
//     bkLib.onDomLoaded(function() {
//         new nicEditor({
//             maxHeight : 500,
//             fullPanel : true
//         }).panelInstance('area');
//     });
// });

$(document).on('DOMNodeInserted', function(event)  {
    // $( document ).find(".nicEdit-main").droppable({
    //         drop: function( event, ui ) {
    //             event.preventDefault();
    //             //$( document ).trigger( "workInProgress:start" );
    //             console.log("sdfds");
    //         },
    //         over: function( event, ui ) {
    //             event.preventDefault();
    //             console.log("kjsdhf");
    //         },
    //         greedy:true
    //     });

    $(".nicEdit-main").on("DOMNodeInserted", function() {
        console.log("Hello....");
    });
});

$(document).ready(function()    {
    
$('#but').draggable({
                appendTo: '.content', //This is just a higher level DOM element
                revert: true,
                cursor: 'pointer',
                zIndex: 1500, // Make sure draggable drags above everything else
                containment: 'DOM',
                helper: 'clone' //Clone it while dragging (keep original intact)
            });

// $('#but').on("dragcreate", function(event, ui)  {
//     console.log("drag create");
// });
})  ;

function getContent()   {
    alert(nicEditors.findEditor('area').getContent());
}

function dropped(event) {
    console.log("jkhd");   
}