var express = require( 'express' );
var router = express.Router();

require( "node-jsx" ).install({
    harmony: true, 
    extension: ".jsx"
});

var React = require( "react" ),
    App = React.createFactory( require( "../public/js/components/app" ) );

/* GET home page. */
router.get( '/', function( req, res ) {
  var markup = React.renderToString( App() );      

  res.render( 'index', { 
    title: 'Pentagon Tiles',
    markup: markup 
  });
});

module.exports = router;