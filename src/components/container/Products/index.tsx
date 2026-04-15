import { ProductCard } from '../../ui/Card'

export const Products = () => {
	return (
		<section className="py-[120px]">
			<div className="container">
				<h2 className="font-bold text-4xl text-center mb-[60px]">
					Топ товаров
				</h2>
				<div className="grid grid-cols-3 gap-[30px] justify-center">
					{[...Array(6)].map((_, index) => (
						<ProductCard key={index} />
					))}
				</div>
			</div>
		</section>
	)
}
