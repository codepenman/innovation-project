// $(function(){
//     bkLib.onDomLoaded(function() {
//         new nicEditor({
//             maxHeight : 500,
//             fullPanel : true
//         }).panelInstance('area');
//     });
// });

// $(document).on('DOMNodeInserted', function(event)  {
//     $(".nicEdit-main").on("DOMNodeInserted", function() {
//         console.log("Hello....");
//     });
// });

function init() {
    $(document).on('click', '.chat-panel-heading span.icon_minim', function (e) {
        var $this = $(this);

        if (!$this.hasClass('chat-panel-collapsed')) {
            $this.parents('.chat-panel').find('.chat-panel-body').slideUp();
            $this.addClass('chat-panel-collapsed');
            $this.removeClass('glyphicon-minus').addClass('glyphicon-plus');
        } else {
            $this.parents('.chat-panel').find('.chat-panel-body').slideDown();
            $this.removeClass('chat-panel-collapsed');
            $this.removeClass('glyphicon-plus').addClass('glyphicon-minus');
        }
    });

    $('input#chat-input').keypress(function(event)
    {
        if(event.keyCode == 13) {
            console.log("Click on Enter button");
            var $chat_input = $('#chat-input');
            var message = $chat_input.val();
            event.stopPropagation();
            if(message == "") return false;
            socket.emit("chat", message);
            var chat_bot_msg_sent = _.template(document.getElementById('chat-bot-msg-sent-template').innerHTML);
            var html = chat_bot_msg_sent();
            var html2 = $.parseHTML(html)[1];
            $(html2).find('.msg_sent').append($.parseHTML(message));
            $('.msg_container_base').append(html2);
            $chat_input.val('');

            updateScrollBar();
            return false;
        }
    });

    $(document).on('focus', '.chat-panel-footer input.chat_input', function (e) {
        var $this = $(this);
        var $minimum_chat_window = $('#minim_chat_window');

        if ($minimum_chat_window.hasClass('chat-panel-collapsed')) {
            $this.parents('.chat-panel').find('.chat-panel-body').slideDown();
            $minimum_chat_window.removeClass('chat-panel-collapsed');
            $minimum_chat_window.removeClass('glyphicon-plus').addClass('glyphicon-minus');
        }
    });

    var updateScrollBar = function() {
        var height = 0;

        $('.chat-panel-body .base_receive').each(function (i, value) {
            height += parseInt($(this).height());
        });

        $('.chat-panel-body .base_sent').each(function (i, value) {
            height += parseInt($(this).height());
        });

        height += '';

        var $chat_panel_body = $('.chat-panel-body');
        $chat_panel_body.animate({scrollTop: height});
    };

    var createNewConnection = function()    {
        window.socket = io.connect("http://localhost:3000");

        socket.on("chatReceived", function(data)    {
            console.log("Client received" + data);
            if(data.text=="") return;

            var chat_bot_msg_sent = _.template(document.getElementById('chat-bot-msg-receive-template').innerHTML);
            var html = chat_bot_msg_sent();
            var html2 = $.parseHTML(html)[1];
            $(html2).find('.msg_receive').append($.parseHTML(data.text));
            $('.msg_container_base').append(html2);
            if($('#minim_chat_window').hasClass('chat-panel-collapsed'))    {
                $('.chat-bot .chat-panel-heading span.icon_minim').trigger('click');
            }
            updateScrollBar();
        });
    };

    createNewConnection();
}

$(function()    {
    init();
});
