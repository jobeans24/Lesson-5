// Assemble: Create/select DOM elements
let rootEl = $('#root');

// TODO: Starting from the root element, `rootEl`, make all the background color for each box white.
rootEl.find('.box').css('background-color', 'white');


// TODO: Starting from `rootEl`, create the jQuery statement that will add "O" to block the "X" from winning
rootEl.find('.box').eq(0).text('O');

