import { ProductCard } from '../../ui/Card'

export const Products = () => {
	return (
		<section className="py-15 md:py-[120px]">
			<div className="container">
				<h2 className="font-bold text-3xl md:text-4xl text-center mb-[30px] md:mb-[60px]">
					Топ товаров
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[15px] md:gap-[30px] justify-center">
					{[...Array(6)].map((_, index) => (
						<ProductCard key={index} />
					))}
				</div>
			</div>
		</section>
	)
}
