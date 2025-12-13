import { SecondaryBtn } from "../../ui/Button"

export const Header = () => {
	return (
		<header className="py-3">
			<div className="container flex items-center justify-between">
				<a href="/">
					<img src="/images/logo.png" alt="Logo" />
				</a>
				<ul className="flex items-center gap-x-10">
					<li>
						<a href="#">О компании</a>
					</li>
					<li>
						<a href="#">Портфолио</a>
					</li>
					<li>
						<a href="#">Доставка и оплата</a>
					</li>
					<li>
						<a href="#">Контакты</a>
					</li>
					<li>
						<a href="#">
							<SecondaryBtn />
						</a>
					</li>
				</ul>
			</div>
		</header>
	)
}
