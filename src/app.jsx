import React, { useEffect, useState } from 'react';

const App = () => {
	const [count, setCount] = useState(0);

	// PER CLICK UPGRADE #1
	const [cookiesPerClick, setCookiesPerClick] = useState(1);
	const [clickUpgradeOneCost, setClickUpgradeOneCost] = useState(10);

	// AUTOCLICK UPGRADE #1
	const [cookiesPerSecond, setCookiesPerSecond] = useState(0);
	const [autoClickUpgradeCost, setAutoClickUpgradeCost] = useState(10);

	// PER CLICK UPGRADE #1
	function upgradeOne() {
		if (count >= clickUpgradeOneCost) {
			setCookiesPerClick(cookiesPerClick + 1);
			setCount(count - clickUpgradeOneCost);
			setClickUpgradeOneCost(clickUpgradeOneCost * 2);
		}
	}

	// AUTOCLICKER #1

	function countCheck() {
		if (count >= autoClickUpgradeCost) {
			setCookiesPerSecond(cookiesPerSecond + 1);
			setCount(count => count - autoClickUpgradeCost);
			setAutoClickUpgradeCost(autoClickUpgradeCost * 2);
		}
	}

	useEffect(() => {
		let interval;
		interval = setInterval(() => {
			setCount(count => count + cookiesPerSecond);
		}, 1000);

		return () => clearInterval(interval);
	}, [cookiesPerSecond]);

	return (
		<div id='mainContainer'>
			<div className='container'>
				<div id='cookiesPerSecond'>
					COOKIES PER SECOND:
					<br /> {cookiesPerSecond}
				</div>
				<div id='cookiesPerClick'>
					COOKIES PER CLICK:
					<br />
					{cookiesPerClick}
				</div>
				<div className='numberOfClicks'>COOKIES: {count}</div>
				<button
					id='cookie'
					onClick={() => setCount(count + cookiesPerClick)}
				>
					COOKIE
				</button>
				<div className='upgrade' onClick={upgradeOne}>
					+1 Cookie Per Click
					<br />
					Cost: {clickUpgradeOneCost} COOKIES
				</div>
				<div className='autoClickUpgrade' onClick={countCheck}>
					+1 Autoclick
					<br />
					Cost: {autoClickUpgradeCost}
				</div>
			</div>
		</div>
	);
};

export default App;
