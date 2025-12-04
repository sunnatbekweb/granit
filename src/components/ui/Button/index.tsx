import styles from "./style.module.css"

interface IButtonProps {
	text: string
}

export const Button = ({ text }: IButtonProps) => {
	return <button className={styles.button}>{text}</button>
}
