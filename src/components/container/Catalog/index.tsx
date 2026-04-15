import { CatalogCard } from "../../ui/Card"

export const Catalog = () => {
	return (
		<section className="py-15 md:py-[120px]">
			<div className="container">
				<h2 className="font-bold text-3xl md:text-4xl text-center mb-7.5 md:mb-15">
					Каталог продукции
				</h2>
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-3.75 lg:gap-7.5 justify-center">
					{[...Array(8)].map((_, index) => (
						<CatalogCard key={index} />
					))}
				</div>
			</div>
		</section>
	)
}
