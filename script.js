$(document).ready(function(){
    //init
    $("ul").on("click", ".fa-trash", function(){
        $(this).parent().remove();
    })

    $('ul').on("click", ".item", function(){
        $(this).toggleClass("completed");
    })

    $(".fa-plus").click( function(){
        add();
    })

    $('input').keyup(function(e){
        if(e.keyCode == 13) {
           add();
        }
    });
})

function add(){
    let text = $(".add-text").val().toUpperCase();
    if (text != '') {
        const struct = '<li><i class="fas fa-trash"></i><span class="item">' + text + '</span></li>';
        $.find("#content").append(struct);
        $(".add-text").val('');
    }
}
