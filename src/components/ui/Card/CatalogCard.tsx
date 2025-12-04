export const CatalogCard = () => {
	return (
		<div className="w-full bg-white pt-16 px-8 pb-8 rounded-3xl shadow-lg">
			<img
				src="/images/catalog_image.png"
				alt="Catalog image"
				className="h-[120px] object-contain mb-12 mx-auto"
			/>
			<span className="font-bold text-xl text-center block">Прессованная плитка</span>
		</div>
	)
}
