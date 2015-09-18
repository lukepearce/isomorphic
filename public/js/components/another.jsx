var React = require('react');
var $ = require('jquery');

var APPEARANCES = [
  {title: 'White', range: 'Italian Stone', material: 'Porcelain', finishes: ['Matt', 'Polished', 'Bush Hammered'], image: 'assets/img/appearances/M2-0-60W.jpg'},
  {title: 'Ivory', range: 'Mud', material: 'Porcelain', finishes: ['Matt', 'Polished', 'Bush Hammered'], image: 'assets/img/appearances/M2-0-60A.jpg'},
  {title: 'Beige', range: 'Italian Stone', material: 'Stone', finishes: ['Matt', 'Polished', 'Bush Hammered'], image: 'assets/img/appearances/M2-0-60B.jpg'},
  {title: 'Dark Grey', range: 'Driftwood', material: 'Porcelain', finishes: ['Matt', 'Polished', 'Bush Hammered'], image: 'assets/img/appearances/M2-0-60DG.jpg'},
  {title: 'Grey', range: 'Drift Wood', material: 'Stone', finishes: ['Matt', 'Polished', 'Bush Hammered'], image: 'assets/img/appearances/M2-0-60G.jpg'},
  {title: 'Light Grey', range: 'Italian Stone', material: 'Porcelain', finishes: ['Matt', 'Polished', 'Bush Hammered'], image: 'assets/img/appearances/M2-0-60GH.jpg'},
  {title: 'Light Grey', range: 'Italian Stone', material: 'Ceramic', finishes: ['Matt', 'Polished', 'Bush Hammered'], image: 'assets/img/appearances/M2-0-60GH.jpg'}
];

var Another = React.createClass({
	getInitialState: function() {
		return {
			APPEARANCES: []
		}
	},
	componentWillMount: function() {
		console.log('joy');
	},
	componentDidMount: function() {
		$.getJSON('http://craft-api.dev/api/blog.json', ( data ) => {
			console.log( data.data );
			if ( this.isMounted() ) {
				this.setState({ APPEARANCES: data.data });
			}
		});
	},
	render: function() {
		var appearances = this.state.APPEARANCES;
		var Appearances = appearances.map( function( appearance, index ){
			return (
				<div className="desk-3-12">
	        <div className="m-b">
	          <img src={appearance.image} alt={appearance.title} />
	  				{appearance.title}<br />
	  				{appearance.range}<br />
	  				{appearance.material}<br />
	        </div>
				</div>
			)
		});
		return (
			<div className="row">
				{Appearances}
			</div>
		);
	}

});

module.exports = Another;