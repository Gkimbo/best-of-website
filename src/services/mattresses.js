import image1 from "../images/mattresses/tuft&needle-mattress.jpeg";
import image2 from "../images/mattresses/Linenspa 8 Inch.jpeg";
import image3 from "../images/mattresses/Casper Mattress.jpeg";
import image4 from "../images/mattresses/Cool-Gel Mattress.jpeg";
import image5 from "../images/mattresses/Happsy-Organic-Mattress.jpeg";
import image6 from "../images/mattresses/Zinus - Green Mattress.jpeg";

export const mattressReviews = [
	{
		id: 1,
		title: "BEST OVERALL MATTRESS ON AMAZON",
		pick: 1,
		name: "Tuft & Needle - Legacy Original",
		descriptionShort: {
			par1: " King Mattress, Medium-Firm Feel, Cooling, Pressure Relief, CertiPUR-US, 100-Night Trial.",
			par2: "",
			par3: "",
			par4: "",
		},

		image: image1,
		link: "https://amzn.to/48a0wTb",
		price: "1,395.00",
		pros: [
			"Under $1,000",
			"Good motion isolation",
			"Comfortable and firm support",
		],
		cons: ["Lacks edge support"],
	},
	{
		id: 2,
		pick: 2,
		title: "BEST VALUE MATTRESS ON AMAZON",
		name: "Linenspa - 8 Inch Memory Foam and Spring Hybrid",
		descriptionShort: {
			par1: "Medium Firm Feel - Bed in a Box - Quality Comfort and Adaptive Support - Breathable - Cooling - Guest and Kids Bedroom - Queen Size",
			par2: "",
			par3: "",
			par4: "",
		},

		image: image2,
		link: "https://amzn.to/41l1UiW",
		price: "249.99",
		pros: [
			"Under $250",
			"High ratings from Amazon reviews",
			"Great for kids or guest room",
		],
		cons: ["Shorter profile", "6ft adult had feet hang over the edge"],
	},
	{
		id: 3,
		pick: 3,
		title: "BEST BOXED MATTRESS ON AMAZON",
		name: "Casper - Original Mattress",
		descriptionShort: {
			par1: "Casper is a pioneer in the bedding industry, revolutionizing the way we shop for mattresses online with its famous 'mattress-in-a-box' design.",
			par2: "Its original mattress is one of the most popular among our survey panelists and features several unique layers of memory foam that are ergonomically designed to promote spinal alignment with cradling support",
			par3: "While the brand now offers several styles at different price points, this mattress remains its most popular product for good reasons",
			par4: "",
		},

		image: image3,
		link: "https://amzn.to/41iX9Xl",
		price: "1,036.00",
		pros: [
			"High scores for comfort and sleep quality from users",
			"Maintains its shape over time",
			"Arrives in a box",
		],
		cons: ["Mattress retains heat", "The box it arrives in is VERY heavy"],
	},
	{
		id: 4,
		pick: 4,
		title: "BEST COOLING MATTRESS ON AMAZON",
		name: "Classic Brands - Cool Gel",
		descriptionShort: {
			par1: "Cool Gel Infused Memory Foam: Refreshing gel particles are infused into the high-density memory foam for a more comfortable sleeping surface which has a faster recovery factor than conventional memory foam.",
			par2: "",
			par3: "",
			par4: "",
		},
		image: image4,
		link: "https://amzn.to/41mKQcv",
		price: "259.98",
		pros: [
			"Priced under $300",
			"Gel-infused memory foam to pull away heat",
			"Open-cell foam structure for breathability",
			"The cooling feature actually works",
		],
		cons: [
			"Sheets slide off easily",
			"Smaller than a normal queen mattress",
			"The pillows are VERY hard",
		],
	},
	{
		id: 5,
		pick: 5,
		title: "BEST ORGANIC MATTRESS ON AMAZON",
		name: "Happsy - Organic Mattress",
		descriptionShort: {
			par1: "Organic Mattress: Sleep safe knowing your mattress passes all government flammability requirements and still 100% GOTS certified and maintains UL/GREENGUARD certifications for low chemical emissions.",
			par2: "Best of Both Worlds: This organic hybrid mattress relieves pressure points thanks to the organic latex and supports with encased coils that cradle your unique body.",
			par3: "Firm Support: It is recommended that most sleep on a firm mattress for best comfort, making the Happsy Organic Mattress universally comfortable. Sleep Healthy: Your good night's sleep starts with only the best materials. Organic cotton, organic wool, organic latex, sugarcane PLA, with a glue-less encased steel coil innerspring.",
			par4: "  Made in USA: Happsy makes all our mattresses right here in the USA from domestic and imported components and are shipped to you rolled and ready for relaxation",
		},
		image: image5,
		link: "https://amzn.to/46XDAVq",
		price: "1,399.00",
		pros: [
			"Made with commitment to quality and the environment",
			"Healthier than petroleum based mattresses",
			"100% Certified Organic",
		],
		cons: [
			"Topper costs extra",
			"Mattress is hard for side sleepers",
			"It has a smell to it that lasts a few weeks",
		],
	},
	{
		id: 6,
		pick: 6,
		title: "MOST POPULAR MATTRESS ON AMAZON",
		name: "ZINUS - 12 Inch Green Tea Memory Foam Mattress",
		descriptionShort: {
			par1: "THE RIGHT COMBINATION - Refreshing green tea and moisture-absorbing charcoal infused into three layers of top-notch foam. This mattress cradles every curve—alleviating those points of tension and allowing your body to recover as you rest.",
			par2: "PATENTED CUSTOM CONTOUR SUPPORT - No more waking up feeling like you've been swallowed by your mattress. Zinus' patented Custom Contour technology is expertly layered in our high-quality memory foam to our super-dense base foam for ultimate support. ",
			par3: "AFFORDABLE REST, CERTIFIED QUALITY - Experience the luxury of high-quality CertiPUR-certified foams without breaking the bank. This fiberglass-free mattress offers unparalleled value and is developed for quality, durability and ultimate comfort.",
			par4: "EXPERTLY PACKAGED - Our technology allows this mattress to be efficiently compressed into one box that’s easily shipped and maneuvered into the bedroom; simply unbox, unroll and this mattress does the rest, expanding to its original shape within 72 hours.",
		},
		image: image6,
		link: "https://amzn.to/4amgYRq",
		price: "335.99",
		pros: ["Comfortable, cushioning memory foam", "Less Than $400"],
		cons: [
			"Lacks Edge Support",
			"Some reviewers say its Not long lasting, while others say its been great for years",
			"Foam smell lasts a while",
		],
	},
];
