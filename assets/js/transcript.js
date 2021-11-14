var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var query = $('#query_string');
var message = $('#text_message');
var text_string = '';

recognition.continuous = true;
recognition.onresult = function(e) {
    var current = e.resultIndex;
    var transcript = e.results[current][0].transcript;
    text_string += transcript;
    query.val(text_string);
};

recognition.onstart = function() {
    message.text('Voice is now activated, speak into the microphone');
}

// $('#start-button').on('click', function() {
//     if (text_string.length) {
//         text_string += ' ';
//     }
//     recognition.start();
// });
$('#start-button').on('mousedown', function() {
    if (text_string.length) {
        text_string += ' ';
    }
    recognition.start();
}).on('mouseup mouseleave', function() {
    recognition.stop();
    message.text('Voice is now stopped');
});



// $('#stop-button').on('click', function() {
//     recognition.stop();
//     message.text('Voice is now stopped');
// });

query.on('input', function() {
    text_string = $(this).val();
})