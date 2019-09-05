
window.onscroll = function () { testFunction() };

var navbar = document.getElementById( "navbar" );
var sticky = navbar.offsetTop;

function testFunction() {
    if ( window.pageYOffset >= sticky ) {
        console.log( "sticky" );
      navbar.classList.add("sticky")
    } else {
        console.log( 'no sticky' );
      navbar.classList.remove("sticky");
    }
  }
