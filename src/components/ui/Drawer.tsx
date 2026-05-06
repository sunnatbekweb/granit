import { useEffect, useRef, useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import './drawer.css'

const ANIMATION_DURATION = 300

interface Props {
	open: boolean
	onClose: () => void
	position?: 'right' | 'left' | 'top'
	children: ReactNode
}

export default function Drawer({
	open,
	onClose,
	position = 'right',
	children
}: Props) {
	const [mounted, setMounted] = useState(false)
	const [visible, setVisible] = useState(false)
	const panelRef = useRef<HTMLDivElement | null>(null)

	// 1. Управляем монтированием
	useEffect(() => {
		if (open) {
			// eslint-disable-next-line react-hooks/set-state-in-effect
			setMounted(true)
		}
	}, [open])

	// 2. Управляем анимацией
	useEffect(() => {
		if (!mounted) return

		if (open) {
			const id = requestAnimationFrame(() => {
				requestAnimationFrame(() => {
					setVisible(true)
				})
			})

			return () => cancelAnimationFrame(id)
		} else {
			// eslint-disable-next-line react-hooks/set-state-in-effect
			setVisible(false)

			const timeout = setTimeout(() => {
				setMounted(false)
			}, ANIMATION_DURATION)

			return () => clearTimeout(timeout)
		}
	}, [open, mounted])

	// ESC + scroll lock
	useEffect(() => {
		function handleKey(e: KeyboardEvent) {
			if (e.key === 'Escape') onClose()
		}

		if (open) {
			document.addEventListener('keydown', handleKey)
			document.body.style.overflow = 'hidden'
		}

		return () => {
			document.removeEventListener('keydown', handleKey)
			document.body.style.overflow = ''
		}
	}, [open, onClose])

	if (!mounted) return null

	return createPortal(
		<div
			className={`drawer drawer--${position} ${visible ? 'open' : 'closing'}`}
		>
			<div
				className="drawer__overlay"
				onClick={onClose}
			/>

			<aside
				ref={panelRef}
				className="drawer__panel"
			>
				{children}
			</aside>
		</div>,
		document.body
	)
}
