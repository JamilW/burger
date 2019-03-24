$(function()    {
    $(".change-consumed").on("click", function(event)   {
        const id = $(this).data("id");
        const newConsumed = $(this).data("newconsumed");

        const newConsumedState = {
            devoured: newConsumed
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newConsumedState
        }).then(() =>   {
            console.log("changed devoured to", newConsumed);
            location.reload();
        });
    });
    $(".btn").on("click", function(event)   {
        event.preventDefault();

        const newBurger =   {
            burger_name: $("#input").val().trim(),
            devoured: $("[burger_name = devoured]:checked").val()
        };
        
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(() => {
            console.log("created new burger");
            location.reload();
        });
    });
    
    $("delete-burger").on("click", function(event)  {
        const id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(() =>   {
            console.log("deleted burger", id);
            location.reload();
        });
    });
});