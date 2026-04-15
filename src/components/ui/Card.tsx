export const CatalogCard = () => {
	return (
		<div className="w-full bg-white pt-8 lg:pt-16 px-4 lg:px-8 pb-4 lg:pb-8 rounded-3xl shadow-lg">
			<img
				src="/images/catalog_image.png"
				alt="Catalog image"
				className="h-15 lg:h-[120px] object-contain mb-12 mx-auto"
			/>
			<span className="font-bold lg:text-xl text-center block">
				Прессованная плитка
			</span>
		</div>
	)
}

export const ProductCard = () => {
	return (
		<div className="w-full flex rounded-3xl bg-white shadow-lg overflow-hidden">
			<div className="w-full px-6 py-5">
				<div className="mb-6">
					<img
						src="/images/product_image.png"
						alt="Product"
					/>
				</div>
				<div>
					<strong className="block mb-3">Шестигранник 250x220x70</strong>
					<div className="flex flex-col gap-y-1">
						<span>Размер: 250x220x70мм</span>
						<span>Количество: 21 шт/кв.м</span>
						<span>Цвета в наличии: 8</span>
					</div>
				</div>
			</div>
			<div className="relative p-5 bg-[#404040] text-white">
				{[...Array(4)].map((_, index) => (
					<div key={index}>
						<b className="block">Серый</b>
						<span className="block text-nowrap">470 руб кв/м</span>
						<br />
					</div>
				))}
				<button className="w-16 h-16 bg-[#e05100] rounded-tl-4xl absolute bottom-0 right-0 text-2xl cursor-pointer">
					+
				</button>
			</div>
		</div>
	)
}
