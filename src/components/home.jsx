import avatar from "../assets/heroicon.jpg";
import {MdKeyboardArrowRight} from "react-icons/md";
import {Link} from "react-scroll";

const Home = () => {
	return (
		<div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 ">
			<div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
				<div className="flex flex-col justify-center h-full">
					<h2 className="text-4xl sm:text-7xl font-bold text-white">I'm Frontend Developer</h2>
					<p className="text-gray-300 py-4 max-w-md">
						I have more than a year of experience creating and developing front-end. Currently I love working on web applications using technologies such as: React, JavaScript, Tailwind,
						SCSS and others.
					</p>
					<div>
						<Link
							to="portfolio"
							smooth
							duration={500}
							className="group text-white w-fit flex px-6 py-3 my-2 items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
						>
							Portfolio
							<span className="group-hover:rotate-90 duration-300">
								<MdKeyboardArrowRight size={20} className="ml-1" />
							</span>
						</Link>
					</div>
				</div>
				<div>
					<img src={avatar} alt="avatar" className="rounded-2xl mx-auto w-full md:w-3/4" />
				</div>
			</div>
		</div>
	);
};

export default Home;
