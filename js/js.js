$(document).ready(function () {
    $(function () {
        $(window).on("scroll", function () {
            if ($(window).scrollTop() > 30) {
                $(".navbar").addClass("active-header") 
                $(".navbar").removeClass("bg-transparent")               
            } else {
                $(".navbar").removeClass("active-header")
                $(".navbar").addClass("bg-transparent")
            }
        })
    }) 
 })