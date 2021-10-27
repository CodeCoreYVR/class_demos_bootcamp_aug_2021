// select the 2nd button
$('#button-2');
// select all anchor tags inside of li tags
$('li a');
// count the number of blue circles
$('.blue.circle').length;

// Demo: Attributes, Classes and Removal

// Change the href of all links on the page
$('a').attr('href', 'http://nyan.cat');
// Change all blue shapes to red shapes
$('.blue')
    .removeClass('blue')
    .addClass('red');

// Exercise: Practice
$('a').attr('class', 'highlight');
$('.circle')
    .removeClass('circle')
    .addClass('diamond');

$('#green-container, #purple-container')
    .find('.shape')
    .remove();
$('#green-container .shape, #purple-container .shape').remove();
$('#green-container, #purple-container').empty();

// 1.
$('#reset').html();
// 2.
$('a').map((index, element) => {
    console.log($(element).html())
});
// 3.
$('#reset').html('Launch Doggos');


// Exercise: Practice
// 1. Change all tds to the content 'yass'
$('td').html('yass');
// 2. Select parent of all td tags
$('td').parent();


// Demo: Creating nodes
// 1. Create a small blue diamond with $
const newElement = $('<div class="small blue diamond shape"></div>')
// 2. Append small blue diamonds to all containers
$(".container").append(newElement)
// 3. prepend a new link to the list of links
$('ul').prepend('<li><a href="http://google.com">New Li</a></li>')

// Exercise: Practice
// 1. Create a div with container class
const container = $('<div class="container"></div>');
// 2. prepend it to the first section tag in the body
$('section').first().prepend(container);
// 3. append a small black circle to the container
container.append("<div class='small black circle'></div>")


// This is the jQuery version of DOMContentLoaded
$(document).ready(() => {
    $('.blue.circle').on('mouseenter', event => {
        console.log('Blue Circle: Go Away!');
    })
    $(".blue.circle").on('mouseleave', event => {
        console.log('Blue Circle: Good Bye');
    })
    $("#button-1").on("click", event => {
        $('.shape').remove();
    })
    $("#button-2").on('click', event => {
        // $("#button-2").attr('disabled', 'true')
        $(event.currentTarget).attr('disabled', 'true');
    })
    $("#button-3").on('click', event => {
        // $(event.currentTarget).html('Button 3 was clicked')
        $("#button-message").html('Button 3 was clicked')
    })
    $("tr").on('mouseenter', event => {
        $(event.currentTarget).addClass("highlight")
    })
    $("tr").on("mouseleave", event => {
        $(event.currentTarget).removeClass("highlight")
    })
})

