import downArrowIcon2 from '../assets/dashboard-icons/down-arrow-2.svg';
import blackDress from '../assets/images/product-images/black-dress.png';
import cameraLens from '../assets/images/product-images/camera.png';
import arganOil from '../assets/images/product-images/oil.png';
import eauDeParfum from '../assets/images/product-images/perfume.png';

export const recentOrdersData = [
	{
		trackingNo: '#876364',
		productName: 'Camera Lens',
		prodImg: cameraLens,
		price: '$178',
		totalOrder: '325',
		totalAmount: '$1,46,660'
	},
	{
		trackingNo: '#876368',
		productName: 'Black Sleep Dress',
		prodImg: blackDress,
		price: '$14',
		totalOrder: '53',
		totalAmount: '$46,660'
	},
	{
		trackingNo: '#876412',
		productName: 'Argan Oil',
		prodImg: arganOil,
		price: '$21',
		totalOrder: '78',
		totalAmount: '$3,46,676'
	},
	{
		trackingNo: '#876621',
		productName: 'EAU DE Parfum',
		prodImg: eauDeParfum,
		price: '$32',
		totalOrder: '98',
		totalAmount: '$3,46,981'
	}
];

export const orderHeading = [
	{ name: 'Tracking no', icon: downArrowIcon2 },
	{ name: 'Product Name', icon: downArrowIcon2 },
	{ name: 'Price', icon: downArrowIcon2 },
	{ name: 'Total Order', icon: downArrowIcon2 },
	{ name: 'Total Amount' }
];
