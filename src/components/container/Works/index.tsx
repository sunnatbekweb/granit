export const Works = () => {
	return (
		<section className="py-15 md:py-[120px]">
			<div className="container">
				<h2 className="font-bold text-3xl md:text-4xl text-center mb-[30px] md:mb-[60px]">
					Наши работы
				</h2>
				<p className="text-sm md:text-base text-center">
					Отделка участка, сада, входной группы или любой другой частной
					территории требует большого внимания со стороны владельца, поскольку
					именно эти зоны являются «лицом», а значит и престижем вашего дома или
					коммерческого объекта. Подбор прочного и эстетически презентабельного
					материала для оформления входа, дорожек, пешеходных зон – это уже
					половина успеха отделки. Вторая половина – это, безусловно, грамотная
					укладка, обеспечивающая долговечность покрытия.
				</p>
				<div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 mt-16">
					{[...Array(9)].map((_, index) => (
						<img
							key={index}
							src="/images/works.png"
							alt="work image"
							className="w-full"
						/>
					))}
				</div>
			</div>
		</section>
	)
}
