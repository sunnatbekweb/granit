import { CatalogCard } from "../../ui/Card"
import styles from "./style.module.css"

export const Catalog = () => {
	return (
		<section className={styles.catalog}>
			<div className="container">
				<h2 className={styles.title}>Каталог продукции</h2>
				<div className={styles.grid}>
					{[...Array(8)].map((_, index) => (
						<CatalogCard key={index} />
					))}
				</div>
			</div>
		</section>
	)
}
