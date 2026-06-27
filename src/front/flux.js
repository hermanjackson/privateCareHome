


import image12 from "../front/images1/hairproducts.png"
import image13 from "../front/images1/frontals.jpg"
import image15 from "../front/images1/wigs.jpg"


const  getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
		
			
			
			allServices:[
				
				{
					id:2,
					label:"hairproducts",
					description:"amazing hair products ",
					image:image12
				},
				{
					id:3,
					label:"frontals",
					description:" luxury frontals ",
					image:image13
				},
				
				{
					id:5,
					label:"wigs",
					description:" luxury wigs ",
					image:image15
				},
				
 
 
 
				
			],
		
			
			
	
			
		},
		actions: {
	
		}
	};
};

export default getState;