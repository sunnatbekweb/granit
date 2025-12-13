import styles from "./style.module.css"

interface IButtonProps {
	text: string
}

const PrimaryBtn = ({ text }: IButtonProps) => {
	return <button className={styles.primary_button}>{text}</button>
}

export { PrimaryBtn }
