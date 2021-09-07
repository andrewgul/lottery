import styles from './Button.module.css'

interface ButtonProps {
    onClick: () => void
    disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
    onClick,
    disabled,
    children
}) => (
    <button
        type="button"
        className={styles['button']}
        onClick={onClick}
        disabled={disabled}
    >
        {children}
    </button>
)


export default Button
