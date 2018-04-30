$(function(){
    $(".newBurger").on("submit", function(event){
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newBurgerEntry").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function(){
                console.log("success adding a new burger");
                location.reload();
            }
        );
    });
    $(".devour").on("click", function(event){
        event.preventDefault();
        var id = $(this).data("id");
        var isDevoured = {
            devoured: 1
        }
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: isDevoured
        }).then(
            function(){
                console.log("devoured it");
                location.reload();
            }
        )
    })
});