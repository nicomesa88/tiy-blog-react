const React = require('react'),
	ReactDOM = require('react-dom')

const app = function() {

	var AppView = React.createClass({
		render: function() {
			return (
				<div id= "MainContainer">
					<Header />
					<Search />
					<Article />
					<FollowBox />
				</div>
				)
		}
	})

	var Header = React.createClass({
		render: function() {
			return (
				<div className="headerContainer">
					<img id="headerImg" src="http://magentanova.github.io/html-intro-1/images/houston.jpg" />
					<img id="logo1" src="http://magentanova.github.io/html-intro-1/images/ironyardlogo.png" />
					</div>
					)
		}
	})

	var Search = React.createClass({
		render: function() {
			return (
				<div className="searchColum">
					<p id="title">The Iorn Yard | Houston</p>
					<p id="happenings">Happenings and updates from the Iron Yard in Houston</p>
					<p id="input">SEARCH</p>
					<input placeholder="Search Keywords"/>
				</div>
				)
		}
	})

	var Article = React.createClass({
		render: function() {
			return (
				<div className="articleColm">
					<p id="articleTitle">September 22 Starts a New Class of The Iron Yard Houston Students</p>
					<p id="author">By Brian Dorton, Campus Director at <a herf="https://www.theironyard.com">The Iron Yard</a> Houston</p>
					<img id="classRoom" src="http://magentanova.github.io/html-intro-1/images/classroom.jpg" />
					<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
				</div>
				)
		}
	})

	var FollowBox = React.createClass({
		render: function() {
			return (
				<div id="follow">
					<p id="never-miss">Never miss a post!</p>
					<img id="logo" src="http://magentanova.github.io/html-intro-1/images/ironyardlogo.png" />
					<p id="tiyhouston">tiyhouston</p>
					<p id="box-text">The Iron Yard | Houston</p>
					<button>+ Follow</button>
				</div>
				)
		}
	})

	ReactDOM.render(<AppView/>,document.querySelector('.container'))
}

app()