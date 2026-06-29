


import image12 from "../front/images1/thirtyday.png"
import image13 from "../front/images1/threetosix.png"
import image15 from "../front/images1/twelvemonths.png"


const  getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
		
			
			
			allServices:[
				
				{
					id:2,
					label:"30 day living",
					description:"plans for 30 days  ",
					image:image12
				},
				{
					id:3,
					label:"3-6 months",
					description:" plans for 3 - 6 months ",
					image:image13
				},
				
				{
					id:5,
					label:"12 plus living arraingements",
					description:" we offer livinf arraingements for twelve plus  ",
					image:image15
				},
				
 
 
 
				
			],
		
			
			
	
			
		},
		actions: {
	
		}
	};
};

export default getState;