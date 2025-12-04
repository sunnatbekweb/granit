import { About } from "./About"
import { Catalog } from "./Catalog"
import { Hero } from "./Hero"
import { Products } from "./Products"

export const Container = () => {
	return (
		<>
			<Hero />
			<Catalog />
			<About />
			<Products />
		</>
	)
}
