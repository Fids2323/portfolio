import {FaGithub, FaLinkedin} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import {BsFillPersonLinesFill, BsTelegram} from "react-icons/bs";

const SocialLinks = () => {
	const links = [
		{
			id: 1,
			child: (
				<>
					LinkedIn <FaLinkedin size={25} />
				</>
			),
			href: "http://linkedin.com",
			style: "rounded-tr-md",
		},
		{
			id: 2,
			child: (
				<>
					GitHub <FaGithub size={25} />
				</>
			),
			href: "https://github.com/Fids2323",
			style: "rounded-tr-md",
		},
		{
			id: 3,
			child: (
				<>
					Telegram <BsTelegram size={25} />
				</>
			),
			href: "https://t.me/Fifd23",
			style: "rounded-tr-md",
		},
		{
			id: 4,
			child: (
				<>
					Mail <HiOutlineMail size={25} />
				</>
			),
			href: "mailto:workfids23@gmail.com",
			style: "rounded-tr-md",
		},
		{
			id: 5,
			child: (
				<>
					Resume <BsFillPersonLinesFill size={25} />
				</>
			),
			href: "/public/resume.pdf",
			style: "rounded-tr-md",
			download: true,
		},
	];

	return (
		<div className="hidden xl:flex flex-col top-[35%] left-0 fixed">
			<ul>
				{links.map(({id, child, href, style, download}) => (
					<li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:rounded-md duration-300 hover:ml-[-10px] " + style}>
						<a href={href} className="flex justify-between items-center w-full text-white" download={download} target="_blank" rel="noreferrer">
							{child}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default SocialLinks;
