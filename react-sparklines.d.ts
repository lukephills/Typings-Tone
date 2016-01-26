declare module sparkline {
	import React = __React;
	
	export interface ISparklinesProps  {
		data: number[];

		limit?: number;

		width?: number;

		height?: number;

		margin?: number;

		min?: number;

		max?: number;
	}
	
	export class Sparklines extends React.Component<ISparklinesProps,{}>{}
	
	export class SparklinesLine extends React.Component<{color?:string, style?:React.CSSProperties},{}>{}
	
	export class SparklinesReferenceLine extends React.Component<{type:string},{}>{}
	
	export class SparklinesNormalBand extends React.Component<{},{}>{}
	
	export class SparklinesSpots extends React.Component<{},{}>{}
	
	export class SparklinesBars extends React.Component<{},{}>{}
}

export = sparkline;