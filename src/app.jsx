import React, { useEffect, useState } from 'react';

const App = () => {
	const [count, setCount] = useState(0);

	// PER CLICK UPGRADE #1
	const [cookiesPerClick, setCookiesPerClick] = useState(1);
	const [clickUpgradeOneCost, setClickUpgradeOneCost] = useState(10);

	// AUTOCLICK UPGRADE #1
	const [cookiesPerSecond, setCookiesPerSecond] = useState(1);
	const [autoClickUpgradeCost, setAutoClickUpgradeCost] = useState(100);
	const [autoClickEnabled, setAutoClickEnabled] = useState(false);

	// PER CLICK UPGRADE #1
	function upgradeOne() {
		if (count >= clickUpgradeOneCost) {
			setCookiesPerClick(cookiesPerClick + 1);
			setCount(count - clickUpgradeOneCost);
			setClickUpgradeOneCost(clickUpgradeOneCost * 2);
		}
	}

	// AUTOCLICKER #1
	console.log('component rendered');
	useEffect(() => {
		let interval;
		if (autoClickEnabled) {
			interval = setInterval(() => {
				setCount(count + 1);
				// setAutoClickEnabled(false);
			}, 1000);
		}
		return () => clearInterval(interval);
	}, [autoClickEnabled]);

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
					UPGRADE #1
					<br />
					Cost: {clickUpgradeOneCost} COOKIES
				</div>
				<div
					className='autoClickUpgrade'
					onClick={() => setAutoClickEnabled(true)}
				>
					AutoClick Upgrade #1
					<br />
					Cost: {autoClickUpgradeCost}
				</div>
			</div>
		</div>
	);
};

export default App;
