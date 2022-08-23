import React, { useState } from 'react';

const App = () => {
	// function testClick() {
	// 	console.log('You clicked a div!!');
	// 	numberOfClicks++;
	// 	console.log(numberOfClicks);
	// }

	const [count, setCount] = useState(0);
	const [countPerClick, setCountPerClick] = useState(1);

	function upgradeOne() {
		if (count >= 10 && countPerClick == 1) {
			setCountPerClick(countPerClick + 1);
		}
	}

	return (
		<div>
			<div className='container'>
				<div className='numberOfClicks'>{count}</div>
				<div
					id='clicker'
					onClick={() => setCount(count + countPerClick)}
				>
					Clicker
				</div>
				<div className='upgrade' onClick={upgradeOne}>
					UPGRADE #1
				</div>
			</div>
		</div>
	);
};

export default App;
