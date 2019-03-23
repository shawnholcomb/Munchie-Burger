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
        var value;
        $("#burger" + id).hide();
        $("#stars" + id).show();

        $(".star-select").on("click", function () {
            value = this.value;
            $.ajax("/" + value + "/" + id, {
                type: "PUT",
                data: id
            }).then(
                function () {
                    location.reload();
                }
            );
        })
    })

    function renderStars() {
        var elementArr = $(".rate-star").toArray();

        elementArr.forEach(function (value) {
            let rateLength = $(value).attr("value");

            for (let i = 0; i < rateLength; i++) {
                $(value).append("<label>");
            }

        })
    }

    renderStars();

});