import React, {FC} from 'react';
import {Categories, Types, Difficulties} from "../../hooks/constraints";

const ConditionBoard: FC<ConditionBoardProps> = ({form, handleConditionChange}) => {
	return (
		<form>
			<label htmlFor="category"> Category: <br/>
				<select id="category" name="category">
					{Categories.map(c => <option key={c.value} value={c.value}>{c.name}</option>)}
				</select>
			</label>
			<fieldset>
				<legend>Type</legend>
				{
					Types.map(t =>
						<div key={t.value}>
							<input type="radio"
										 id={t.value}
										 name="type"
										 value={t.value}
										 onChange={handleConditionChange}
										 checked={form.type === t.value}/>
							<label htmlFor={t.value}>{t.name}</label>
							<br/>
						</div>)
				}
			</fieldset>
			<fieldset>
				<legend>Difficulty</legend>
				{
					Difficulties.map(d => <div key={d.value}>
							<input type="radio"
										 name="difficulty"
										 id={d.value}
										 value={d.value}
										 onChange={handleConditionChange}
										 checked={form.difficulty === d.value}/>
							<label htmlFor={d.value}>{d.name}</label> <br/>
						</div>
					)
				}
			</fieldset>
		</form>
	)
}

export default ConditionBoard;
