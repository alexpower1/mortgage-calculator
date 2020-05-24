import React from 'react';

const Header = () => {
	return (
		<nav className="flex flex-wrap items-center justify-between p-4 bg-blue-500">
			<div className="container mx-auto">
				<h1 className="text-xl font-semibold tracking-tight text-white">
					Mortgage Calculator
				</h1>
			</div>
		</nav>
	);
};

export default Header;
