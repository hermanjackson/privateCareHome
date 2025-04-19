


import image12 from "../front/images1/school8.png"
import image13 from "../front/images1/school10.jpg"
import image15 from "../front/images1/school9.png"


const  getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
		
			
			
			allServices:[
				
				{
					id:2,
					label:"Java",
					description:"fullstack java course teaching frontend and backend ",
					image:image12
				},
				{
					id:3,
					label:"FullStack",
					description:" fullstack programming course teaching frontend and backend ",
					image:image13
				},
				
				{
					id:5,
					label:"Online",
					description:" fully online move at your pace ",
					image:image15
				},
				
 
 
 
				
			],
		
			
			
	
			
		},
		actions: {
	
		}
	};
};

export default getState;