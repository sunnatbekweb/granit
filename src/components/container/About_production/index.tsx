export const AboutProduction = () => {
	return (
		<section className="py-[120px] bg-[#404040]">
			<div className="container">
				<h2 className="font-bold text-4xl text-center text-white mb-20">
					О производстве
				</h2>
				<div className="flex items-center gap-8">
					<div>
						<div className="bg-white w-60 py-2 rounded-4xl mb-14">
							<img src="/images/logo.png" alt="Logo" className="mx-auto" />
						</div>
						<div className="flex flex-col gap-y-8">
							<div className="flex items-center gap-x-8">
								<img src="/icons/crane.svg" alt="crane" />
								<span className="text-xl text-white">
									Доставка и разгрузка плитки краном-манипулятором
								</span>
							</div>
							<div className="flex items-center gap-x-8">
								<img src="/icons/brick_build.svg" alt="brick_build" />
								<span className="text-xl text-white">
									Множество видов тротуарной плитки различной формы и фактуры
								</span>
							</div>
							<div className="flex items-center gap-x-8">
								<img src="/icons/quality.svg" alt="quality" />
								<span className="text-xl text-white">
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
						className="w-3/5 h-auto aspect-video"
					></iframe>
				</div>
			</div>
		</section>
	)
}
