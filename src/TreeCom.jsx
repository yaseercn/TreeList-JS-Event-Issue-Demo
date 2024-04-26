import React from 'react'
import { employees } from './data.js';
import { TreeList } from 'devextreme-react';
import { Column, Editing } from 'devextreme-react/cjs/tree-list.js';
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";

let numberArray = [];

for (let i = 1; i <= 20; i++) {
	numberArray.push(i);
}

const CellComp = React.memo((e) => {
	return (<div>15</div>)
})

const TreeCom = () => {
	return (
		<div>
			<TreeList
				id="employees"
				dataSource={employees}
				rootValue={-1}
				showRowLines={true}
				showBorders={true}
				columnAutoWidth={true}
				keyExpr="ID"
				parentIdExpr="Head_ID"
			>
				{numberArray.map((data, i) => {
					return (
						<Column
							dataField={"Full_Name"}
							caption={`Name-${i}`}
							cellComponent={CellComp}
						/>
					)
				})}
				<Editing
					allowUpdating={true}
					allowAdding={true}
					mode="cell" />
					
			</TreeList>
		</div>
	)
}

export default TreeCom