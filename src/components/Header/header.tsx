import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
	const [navigationOpen, setNavigationOpen] = useState(false);
	const [stickyMenu, setStickyMenu] = useState(false);

	const menuData = [{ title: 'home', path: "/home" }, { title: 'projects', path: "/projects" }, { title: 'about', path: "/about" }]

	const handleStickyMenu = () => {
		if (window.scrollY >= 80) {
			setStickyMenu(true);
		} else {
			setStickyMenu(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleStickyMenu);
	});

	return (
		<header className={`bg-white fixed top-0 left-0 transition-all ease-out duration-300 z-99999999 w-full ${stickyMenu ? "shadow" : ""}`}>
			<div className="max-w-[1170px] mx-auto px-4 sm:px-7.5 lg:px-0">
				<div
					className={`flex flex-row gap-5 items-end lg:items-center md:justify-between ease-out duration-200 px-2 ${stickyMenu ? "py-4" : "py-6"}`}
				>
					{/* sm:flex-row   sm:  */}
					<div className="px-4 w-full md:w-auto flex justify-between items-center gap-5 sm:gap-10">
						{/*  */}
						<Link className="flex-shrink-0 shadow-md" to="/">
							<img
								src="/images/logos/GvLogo.jpeg"
								alt="Logo"
								width={70}
								height={72}
								className="rounded max-w-[50px] max-h-auto md:w-full md:h-full"
							/>
						</Link>
						<Link className="hidden md:block md:text-md text-blue-600 font-semibold" to="/">
							<h1 className=" ">GV Tech</h1>
						</Link>

						{/* <!-- header top right --> */}
						{/*  lg:  */}
						<div className="w-auto">

							{/* <div className="flex w-full lg:w-auto justify-between items-center gap-5"> */}

							{/* <!-- Hamburger Toggle BTN --> */}
							<button
								id="Toggle"
								aria-label="Toggler"
								className="md:hidden relative w-10 h-10 flex items-center justify-center"
								onClick={() => setNavigationOpen((prev) => !prev)}
							>
								{/* Hamburger Menu (Shown When Closed) */}
								<span className={`relative w-6 h-6 flex flex-col justify-between transition-all duration-300 ${navigationOpen ? "opacity-0" : "opacity-100"}`}>
									<span className="block bg-black h-0.5 w-full rounded-sm transition-all duration-300"></span>
									<span className="block bg-black h-0.5 w-full rounded-sm transition-all duration-300"></span>
									<span className="block bg-black h-0.5 w-full rounded-sm transition-all duration-300"></span>
								</span>

								{/* Close Icon (Shown When Open) */}
								<span className={`absolute w-6 h-6 flex items-center justify-center transition-all duration-300 ${navigationOpen ? "rotate-65 opacity-100" : "opacity-0"}`}>
									<span className="block bg-black h-0.5 w-full absolute rotate-45"></span>
									<span className="block bg-black h-0.5 w-full absolute -rotate-45"></span>
								</span>
							</button>
							{/* //   <!c-- Hamburger Toggle BTN --> */}
						</div>
					</div>
					{/* <div className="max-w-[1170px] 2xl:max-w-[1450px]"> */}

						<div
							className={`w-[288px] bg-white absolute right-4 top-full md:static md:w-[30%]  md:visible ${navigationOpen ? "overflow-y-scroll !h-auto !visible sm:shadow-lg md:border-none border border-gray-3 md:shadow-none max-h-[400px] rounded-md p-5 md:p-0": "lg:h-0 invisible sm:flex items-center justify-between"}`}
						>
							<nav className="w-full ">
								<ul className="flex md:items-center flex-col md:flex-row md:justify-evenly gap-5 md:gap-0 text-orange-500 font-semibold ">
									{menuData.map((menuItem, i) =>
									(
										<li
											key={i}
											className="group relative before:w-0 before:h-[3px] before:bg-blue before:absolute before:left-0 before:top-0 before:rounded-b-[3px] before:ease-out before:duration-200 hover:before:w-full "
										>
											<Link
												to={menuItem.path}
												className={`hover:text-blue-300 font-medium flex ${stickyMenu ? "md:py-4" : "md:py-6"
													}`}
											>
												{menuItem.title}
											</Link>
										</li>
									)
									)}
								</ul>
							</nav>
						</div>
					{/* </div> */}
				</div>

			</div>
		</header>
	)
}