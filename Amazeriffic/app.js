var main = function () {
    "use strict";
    $(".comment-input button.btn.btn-success.btn-xs").on("click", function (event) {
        var $new_comment = $("<p>").text($(".comment-input input").val());
        $(".comments").append($new_comment);
    });
};
$(document).ready(main);