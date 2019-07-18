import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid gray;

	#logo {
		padding: 10px 0;
		font-size: 25px;
		font-weight: bold;
	}

	#menu-toggle {
		display: none;
	}

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: stretch;

		div {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		#menu-toggle {
			padding: 4px;
			border-radius: 4px;
			border: 1px solid black;
			display: inline;
			text-decoration: none;

			:hover {
				border-color: gray;
			}
		}
	}
`;

const NavLinkList = styled.ul`
	list-style: none;
	display: flex;

	li {
		padding-right: 20px;
	}

	@media (max-width: 768px) {
		padding-inline-start: 0;
		flex-direction: column;
    display: ${props => (props.toggled ? 'inline' : 'none')};
    
    li{
      padding-top: 5px;
    }
	}
`;

const StyledLink = styled(Link)`
	color: black;
	text-decoration: none;
	font-size: 18px;

	:hover {
		color: gray;
		text-decoration: underline;
	}

`;

class Navbar extends Component {
	state = {
		toggled: false,
	};

	menuToggle = () => {
		const { toggled } = this.state;
		this.setState({ toggled: !toggled });
	};

	resetToggle = () => {
		if (window.innerWidth > 768) {
			this.setState({ toggled: false });
		}
	};

	componentDidMount() {
		window.addEventListener('resize', this.resetToggle);
	}

	render() {
		const { toggled } = this.state;
		return (
			<Nav>
				<div>
					<span id="logo">Navbar</span>
					<div id="menu-toggle">
						<span onClick={this.menuToggle}>Menu</span>
					</div>
				</div>
				<NavLinkList toggled={toggled}>
					<li>
						<StyledLink to="/">Home</StyledLink>
					</li>
					<li>
						<StyledLink to="/about">About</StyledLink>
					</li>
					<li>
						<StyledLink to="/contact">Contact</StyledLink>
					</li>
				</NavLinkList>
			</Nav>
		);
	}
}

export default Navbar;
