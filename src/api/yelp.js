import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.yelp.com/v3/businesses',
	headers:{
		Authorization: 'Bearer OUMAig6AoyW7DEIJohuoTbMD-fymuwofsRBg5wBPZoXpqMh81mMLz5qVAPO9_lZzRoZ1_21YXEuLqNujByBm9EIi8WYNZSoykrnPthE42WgR6SEFWWNzTr_3xUp1XXYx'
	}
});
