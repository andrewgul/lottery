import styles from './TileGrid.module.css'

const TileGrid: React.FC = ({ children }) => (
    <div className={styles['grid']}>
        {children}
    </div>
)

export default TileGrid
