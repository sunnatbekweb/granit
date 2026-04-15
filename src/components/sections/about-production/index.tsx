export const AboutProduction = () => {
	return (
		<section className="py-[120px] bg-[#404040]">
			<div className="container">
				<h2 className="font-bold text-4xl text-center text-white mb-20">
					О производстве
				</h2>
				<div className="flex flex-col md:flex-row items-center gap-8">
					<div>
						<div className="bg-white w-60 mx-auto md:mx-0 py-2 rounded-4xl mb-14">
							<img src="/images/logo.png" alt="Logo" className="mx-auto" />
						</div>
						<div className="flex flex-col lg:flex-col gap-x-5 gap-y-8">
							<div className="flex items-center gap-x-8">
								<img src="/icons/crane.svg" alt="crane" />
								<span className="leading-tight text-sm lg:text-xl text-white">
									Доставка и разгрузка плитки краном-манипулятором
								</span>
							</div>
							<div className="flex items-center gap-x-8">
								<img src="/icons/brick_build.svg" alt="brick_build" />
								<span className="leading-tight text-sm lg:text-xl text-white">
									Множество видов тротуарной плитки различной формы и фактуры
								</span>
							</div>
							<div className="flex items-center gap-x-8">
								<img src="/icons/quality.svg" alt="quality" />
								<span className="leading-tight text-sm lg:text-xl text-white">
									Весь товар сертифицирован! Официальная гарантия!
								</span>
							</div>
						</div>
					</div>
					<iframe
						width="690"
						height="390"
						src="https://www.youtube.com/embed/OGmdc8P5Hgk?si=e6LCd1pvOBgZ7ZZS"
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						className="w-full sm:w-3/4 md:w-3/5 h-auto aspect-video"
					></iframe>
				</div>
			</div>
		</section>
	)
}
