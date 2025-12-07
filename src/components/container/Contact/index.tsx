import { Button } from "../../ui/Button"

export const Contact = () => {
	return (
		<>
			<section
				id="contact"
				className="bg-[#404040] relative py-10 lg:py-20 text-white"
			>
				<div className="container">
					<div className="w-full lg:w-1/2 lg:pr-10">
						<h2 className="text-3xl lg:text-6xl mb-5">Свяжитесь с нами</h2>
						<p className="text-sm lg:text-xl text-[#dbdbdb] mb-10">
							Оставьте свои данные, и мы свяжемся с вами в ближайшее время.
						</p>
						<div className="flex flex-wrap items-center gap-x-10 gap-y-4 text-sm lg:text-xl mb-6">
							<a href="tel:+79261059414">+7 (926) 105-94-14</a>
							<a href="tel:+79104706797">+7 (910) 470-67-97</a>
						</div>
						<form className="flex flex-col gap-y-6">
							<label htmlFor="name" className="flex flex-col gap-y-2">
								<span>Имя</span>
								<input
									type="text"
									name="name"
									id="name"
									placeholder="Введите ваше имя"
									required
									className="px-6 py-4 rounded-3xl bg-[#7e7e7e] focus:outline-[#000000]"
								/>
							</label>
							<label htmlFor="phone" className="flex flex-col gap-y-2">
								<span>Номер телефона</span>
								<input
									type="text"
									name="phone"
									id="phone"
									placeholder="+998 "
									required
									className="px-6 py-4 rounded-3xl bg-[#7e7e7e] focus:outline-[#000000]"
								/>
							</label>
							<label htmlFor="message" className="flex flex-col gap-y-2">
								<span>Сообщение</span>
								<textarea
									name="message"
									id="message"
									placeholder="Введите ваше сообщение"
									required
									className="px-6 py-4 h-[120px] rounded-3xl bg-[#7e7e7e] focus:outline-[#000000]"
								></textarea>
							</label>
							<Button text="Отправить" />
						</form>
					</div>
					<div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full">
						<iframe
							src="https://yandex.uz/map-widget/v1/?bookmarks%5Bpid%5D=work&bookmarks%5Buri%5D=ymapsbm1%3A%2F%2Fpin%3Fll%3D69.203610%252C41.287270&ll=69.205912%2C41.287660&z=16.4"
							className="w-full h-full"
							style={{ border: 0 }}
						></iframe>
					</div>
				</div>
			</section>
			<div className="lg:hidden h-[500px]">
				<iframe
					src="https://yandex.uz/map-widget/v1/?bookmarks%5Bpid%5D=work&bookmarks%5Buri%5D=ymapsbm1%3A%2F%2Fpin%3Fll%3D69.203610%252C41.287270&ll=69.205912%2C41.287660&z=16.4"
					className="w-full h-full"
					style={{ border: 0 }}
				></iframe>
			</div>
		</>
	)
}
