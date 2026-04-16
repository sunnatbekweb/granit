import { About } from "../sections/about"
import { AboutProduction } from "../sections/about-production"
import { Catalog } from "./catalog"
import { Contact } from "../sections/contact"
import { Hero } from "../sections/hero"
import { Products } from "./products"
import { Works } from "./works"

export const Container = () => {
	return (
		<main>
			<Hero />
			<Catalog />
			<About />
			<Products />
			<AboutProduction />
			<Works />
			<Contact />
		</main>
	)
}
