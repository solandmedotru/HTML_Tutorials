var main = function () {
    "use strict";
    var addCommentFromInputBox = function () {
        var $new_comment;
        if ($(".comment-input input").val() !== "") {
            $new_comment = $("<p>").text($(".comment-input input").val());
            $new_comment.hide();
            $(".comments").append($new_comment);
            $new_comment.fadeIn();
            $(".comment-input input").val("")
        }
    }
    $(".comment-input button.btn.btn-success.btn-xs").on("click", function (event) {
        addCommentFromInputBox()
    })
    $(".comment-input input").on("keypress", function (event) {
        if (event.keyCode === 13) {
            addCommentFromInputBox()
        }
    });

    var toDos = [
        "Закончить писать эту книгу",
        "Вывести Грейси на прогулку в парк",
        "Ответить на электронные письма",
        "Подготовиться к лекции в понедельник",
        "Обновить несколько новых задач",
        "Купить продукты"
    ];

    $('.tabs a').click(function (e) {
        e.preventDefault();
        $(this).tab('show')
    });

    $('.tabs a').toArray().forEach(function (element) {
        $(element).on("click", function () {
            var $element = $(element);
            var $con;
            $(".tabs a").removeClass("active");
            $("main .tab-content ul").empty();
            $element.addClass("active");
            if ($element.parent().is(":nth-child(1)")) {
                $con = $("<ul>");
                toDos.forEach(function (todo) {
                    $con.append($("<li>").text(todo));
                });
                $("main .tab-content").append($con);
            } else if ($element.parent().is(":nth-child(2)")) {
                $con = $("<ul>");
                toDos.forEach(function (todo) {
                    $con.append($("<li>").text(todo));
                });
                $("main .tab-content").append($con);
            } else if ($element.parent().is(":nth-child(3)")) {
                console.log("Щелчок на третьей вкладке!");

            }

        });

    });
};
$(document).ready(main);