
var movies = [
  {
  	id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    img: 'http://via.placeholder.com/350x150'
  },
  {
  	id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    img: 'http://via.placeholder.com/350x150'
  },
  {
    id: 3,
    title: 'Gladiator',
    desc: 'film o gladiatorze, który zabił cesarza',
    img: 'http://via.placeholder.com/350x150'
  },
  {
    id: 4,
    title: 'Star Wars: Powrót Jedi',
    desc: 'jeden z filmów sagi Star Wars',
    img: 'http://via.placeholder.com/350x150'
  }
];


var Movie = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired
	},
	render: function(){
		return (React.createElement('li', {},
			React.createElement(MovieTitle, {title: this.props.movie.title}),
			React.createElement(MovieDescription, {desc: this.props.movie.desc}),
      		React.createElement(MovieImage, {img: this.props.movie.img})
      	));
	}
});

var MovieTitle = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired
	},
	render: function(){
		return React.createElement('h2', {}, this.props.title);
	}
});

var MovieDescription = React.createClass({
	propTypes: {
		desc: React.PropTypes.string.isRequired
	},
	render: function(){
		return React.createElement('p', {}, this.props.desc);
	}
});

var MovieImage = React.createClass({
	propTypes: {
		img: React.PropTypes.string.isRequired
	},
	render: function(){
		return React.createElement('img', {src: this.props.img});
	}
});

var moviesElements = movies.map(function(movie) {
    return (React.createElement(Movie, {key:movie.id, movie: movie})
    )
});

var MovieList = React.createClass({
    render: function() {
        return (React.createElement('ul', {}, moviesElements))
    }
});

var element = React.createElement('div', {}, 
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement(MovieList, {})
);   

ReactDOM.render(element, document.getElementById('app'));