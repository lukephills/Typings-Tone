/// <reference path="typings/main.d.ts" />
/// <reference path="react-sparklines.d.ts" />
import * as React from "react";
import {Sparklines, SparklinesLine, SparklinesReferenceLine, SparklinesNormalBand, SparklinesBars, SparklinesSpots} from "react-sparklines";

function use(){
	return (
		<Sparklines data={[5, 10, 5, 20, 8, 15]} limit={5} width={100} height={20} margin={5}>			
		</Sparklines>		
	);
}

function basicSparkline(){
	return (
		<Sparklines data={[5, 10, 5, 20]}>
  			<SparklinesLine color="blue" />
		</Sparklines>
	);
}

function bars(){
	return (
		<Sparklines data={[5, 10, 5, 20]}>
  			<SparklinesBars />
		</Sparklines>
	);
}

function spots(){
	return (
		<Sparklines data={[1,2,3,4]}>
			<div style={{ fill: "none" }}></div>
    		<SparklinesLine style={{ fill: "none" }} />
    		<SparklinesSpots />
		</Sparklines>
	);
}

function referenceLine(){
	return (
		<Sparklines data={[1,2,3,4]}>
    		<SparklinesLine />
    		<SparklinesReferenceLine type="mean" />
		</Sparklines>
	);
}

function normalBand(){
	return (
	<Sparklines data={[1,2,3,4]}>
    	<SparklinesLine style={{ fill: "none" }}/>
    	<SparklinesNormalBand />
	</Sparklines>	
	);
}