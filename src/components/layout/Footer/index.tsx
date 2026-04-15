import { Facebook } from '../../../assets/Facebook'
import { Instagram } from '../../../assets/Instagram'
import { Telegram } from '../../../assets/Telegram'

export const Footer = () => {
	return (
		<footer>
			<div className="container">
				<div className="pt-16 pb-12 grid grid-cols-1 md:grid-cols-5 gap-5 text-black">
					<div className="flex justify-center md:justify-start">
						<a href={'/'}>
							<img
								src={'/images/logo.png'}
								alt="Footer logo"
							/>
						</a>
					</div>
					<div className="flex justify-center">
						<ul className="flex flex-col gap-6">
							<li className="flex justify-center md:justify-start">
								<a
									href={'#about'}
									className="text-center md:text-left"
								>
									О компании
								</a>
							</li>
							<li className="flex justify-center md:justify-start">
								<a
									href={'#products'}
									className="text-center md:text-left"
								>
									Портфолио
								</a>
							</li>
							<li className="flex justify-center md:justify-start">
								<a
									href={'#contact'}
									className="text-center md:text-left"
								>
									Контакты
								</a>
							</li>
						</ul>
					</div>
					<div className="flex justify-center">
						<ul className="font-medium flex flex-col gap-2">
							<li data-aos="zoom-out">
								<a href="tel:+998976000003">+998 (97) 600-00-03</a>
							</li>
							<li data-aos="zoom-out">
								<a href="tel:+998339000090">+998 (33) 900-00-90</a>
							</li>
						</ul>
					</div>
					<div className="flex justify-center">
						<a
							href="https://yandex.uz/web-maps/-/CLaRe2OF"
							target="_blank"
							data-aos="zoom-out"
							className="text-center md:text-left"
						>
							Ташкентская область, Зангиатинский район, МФУ Найман, ответвление
							улицы Мустакиллик, дом 19
						</a>
					</div>
					<div className="flex justify-center md:justify-end">
						<ul className="flex flex-row md:flex-col xl:flex-row gap-6">
							<li data-aos="zoom-out-left">
								<a
									href="https://facebook.com"
									target="_blank"
									className="footer_social"
								>
									<Facebook />
								</a>
							</li>
							<li data-aos="zoom-out-left">
								<a
									href="https://www.instagram.com/sunnatbekweb"
									target="_blank"
									className="footer_social"
								>
									<Instagram />
								</a>
							</li>
							<li data-aos="zoom-out-left">
								<a
									href="https://t.me/sunnatbek_kadamov"
									target="_blank"
									className="footer_social"
								>
									<Telegram />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="py-5 sm:py-8">
				<div className="container relative flex items-center justify-between">
					<div className="sm:absolute top-1/2 left-1/2 sm:-translate-1/2 text-sm sm:text-base">
						&copy; {new Date().getFullYear()}{' '}
						<a href="mailto:empireofpolymers@gmail.com">ООО "Мастер строй"</a>
					</div>
					{/* <div className="sm:absolute top-1/2 right-0 sm:-translate-y-1/2 text-sm sm:text-base">
						Разработано:{' '}
						<a
							href="https://onesystem.uz"
							target="_blank"
						>
							<strong>onesystem</strong>
						</a>
					</div> */}
				</div>
			</div>
		</footer>
	)
}
