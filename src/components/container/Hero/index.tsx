import { PrimaryBtn } from "../../ui/Button"
import styles from "./style.module.css"

export const Hero = () => {
	return (
		<section className={styles.hero}>
			<div className="container">
				<div className={styles.wrapper}>
					<h1>Тротуарная плитка в Волоколамске напрямую от производителя</h1>
					<p>
						Вам нужна качественная и недорогая тротуарная плитка в Волоколамске?
						Мы готовы предложить отличную возможность приобрести современные
						модели с высокими показателями эстетики и механической стойкости
						напрямую от производителя – компании «Мастер Строй».
					</p>
					<PrimaryBtn text="Каталог" />
				</div>
			</div>
		</section>
	)
}
