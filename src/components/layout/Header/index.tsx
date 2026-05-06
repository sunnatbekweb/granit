import { useState } from 'react'
import { Menu } from '../../../assets/Menu'
import { SecondaryBtn } from '../../ui/Button'
import Drawer from '../../ui/Drawer'

export const Header = () => {
	const [open, setOpen] = useState(false)
	return (
		<header className="py-3">
			<div className="container flex items-center justify-between">
				<a href="/">
					<img
						src="/images/logo.png"
						alt="Logo"
					/>
				</a>
				<ul className="hidden lg:flex items-center gap-x-10">
					<li>
						<a href="#about">О компании</a>
					</li>
					<li>
						<a href="#portfolio">Портфолио</a>
					</li>
					<li>
						<a href="#">Доставка и оплата</a>
					</li>
					<li>
						<a href="#contact">Контакты</a>
					</li>
				</ul>
				<a href="tel:+998770001376">
					<SecondaryBtn />
				</a>
				<button
					onClick={() => setOpen(true)}
					className="lg:hidden cursor-pointer"
				>
					<Menu />
				</button>
				<Drawer
					open={open}
					onClose={() => setOpen(false)}
					position="right"
				>
					<div className="w-full h-full flex justify-center items-center">
						<ul className="flex flex-col items-center gap-12">
							<li>
								<a href="#about">О компании</a>
							</li>
							<li>
								<a href="#portfolio">Портфолио</a>
							</li>
							<li>
								<a href="#">Доставка и оплата</a>
							</li>
							<li>
								<a href="#contact">Контакты</a>
							</li>
							<li>
								<a href="#">
									<SecondaryBtn />
								</a>
							</li>
						</ul>
					</div>
					<h2>Меню</h2>
					<button onClick={() => setOpen(false)}>Закрыть</button>
				</Drawer>
			</div>
		</header>
	)
}
