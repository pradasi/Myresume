import React from 'react';
import educ from './educ';
import Educational from './Educational';

const Education = () =>{

	return(

			<div className="tc">
				{
					educ.map((user,i) => {
						return (
							<Educational 
								key={i} 
								id={user.id} 
								quali={user.quali} 
								stream={user.stream} 
								name={user.name} 
								uni={user.uni} 
								marks={user.marks} 
								year={user.year}
							/>
						);
					})
				}
			</div>
		
		);

}

export default Education