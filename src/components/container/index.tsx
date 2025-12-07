import { About } from "./About"
import { AboutProduction } from "./About_production"
import { Catalog } from "./Catalog"
import { Contact } from "./Contact"
import { Hero } from "./Hero"
import { Products } from "./Products"
import { Works } from "./Works"

export const Container = () => {
	return (
		<>
			<Hero />
			<Catalog />
			<About />
			<Products />
			<AboutProduction />
			<Works />
			<Contact />
		</>
	)
}
