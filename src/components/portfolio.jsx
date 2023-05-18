import yourMeal from "../assets/portfolio/yourMeal.jpg";
import UnderfloorHeating from "../assets/portfolio/UnderfloorHeating.jpg";
import shop from "../assets/portfolio/shop.jpg";
import siteAnalitic from "../assets/portfolio/siteAnalitic.jpg";
import chik from "../assets/portfolio/chik-chik.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
	const portfolios = [
		{
			id: 1,
			src: reactWeather,
			site: "https://weather-six-xi.vercel.app/",
			github: "https://github.com/Fids2323/weather-app",
		},
		{
			id: 2,
			src: yourMeal,
			site: "https://your-meal.vercel.app/",
			github: "https://github.com/Fids2323/your_meal",
		},
		{
			id: 3,
			src: shop,
			site: "http://45.84.225.33/",
			github: "https://github.com/Fids2323/Shop",
		},
		{
			id: 4,
			src: siteAnalitic,
			site: "https://site-analitic.vercel.app/",
			github: "https://github.com/Fids2323/site-analitic",
		},
		{
			id: 5,
			src: chik,
			site: "https://chik-chik-phi.vercel.app/",
			github: "https://github.com/Fids2323/Chik-chik",
		},
		{
			id: 6,
			src: UnderfloorHeating,
			site: "https://underfloor-heating-bice.vercel.app/",
			github: "https://github.com/Fids2323/Underfloor__heating",
		},
	];

	return (
		<div name="portfolio" className=" bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
			<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
					<p className="py-6">Check out some of my work right here</p>
				</div>

				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
					{portfolios.map(({id, src, site, github}) => (
						<div key={id} className="shadow-md shadow-gray-600 rounded-lg">
							<img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />
							<div className="flex items-center justify-center">
								<a href={site} className="w-1/2 px-6 py-2 m-4 duration-200 hover:scale-105" target="_blank" rel="noreferrer" role="button">
									Demo
								</a>
								<a href={github} className="w-1/2 px-6 py-2 m-4 duration-200 hover:scale-105" target="_blank" rel="noreferrer" role="button">
									Code
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
