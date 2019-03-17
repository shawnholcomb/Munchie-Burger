$(function () {
    $('#submit').on("click", function (event) {
        event.preventDefault();
        var burgerName = $("#new-burger [name=burger]").val().trim()
        var newBurger = {
            burger_name: burgerName.toString()
        };
        $.ajax("/", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("Burger has been added");
                location.reload();
            })
    });

    $(".devour").on("click", function (event) {
        var id = $(this).data("id");
        $.ajax("/" + id, {
            type: "PUT",
            data: id
        }).then(
            function () {
                location.reload();
            }
        );
    });
});