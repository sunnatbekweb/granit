import { CatalogCard } from "../../ui/Card"

export const Catalog = () => {
	return (
		<section className="py-[120px]">
			<div className="container">
				<h2 className="font-bold text-4xl text-center mb-[60px]">
					Каталог продукции
				</h2>
				<div className="grid grid-cols-4 gap-[30px] justify-center">
					{[...Array(8)].map((_, index) => (
						<CatalogCard key={index} />
					))}
				</div>
			</div>
		</section>
	)
}
