import styles from './style.module.css'

interface IButtonProps {
	text: string
}

export const PrimaryBtn = ({ text }: IButtonProps) => {
	return <button className={styles.primary_button}>{text}</button>
}

export const SecondaryBtn = () => {
	return <button className={styles.secondary_button}>Заказать звонок</button>
}
