import React from 'react';
import ChartistGraph from 'react-chartist';

interface GraphProps {
	series: number[][];
}

const Graph: React.FunctionComponent<GraphProps> = ({ series }) => {
	const data = {
		labels: series[0],
		series: series,
	};

	const options = {
		axisX: {
			labelInterpolationFnc: function (value: any, index: number) {
				return index % 25 === 0 ? value : null;
			},
		},
	};

	const type = 'Line';

	return (
		<div>
			<ChartistGraph
				className={'ct-octave'}
				data={data}
				options={options}
				type={type}
			/>
		</div>
	);
};

export default Graph;
