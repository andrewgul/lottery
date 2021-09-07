import styles from './TileGrid.module.css'

interface TileGridProps {
    title: string
}

const TileGrid: React.FC<TileGridProps> = ({
    children,
    title
}) => (
    <div className={styles['container']}>
        <div className={styles['header']}>
            <p className={styles['title']}>{title}</p>
        </div>
        <div className={styles['grid']}>
            {children}
        </div>
    </div>
)

export default TileGrid
