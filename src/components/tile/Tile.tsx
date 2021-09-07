import TileModel from '../../models/TileModel'
import styles from './Tile.module.css'

interface TileProps {
    index: number
    tile: TileModel
    onSelect: (value: number, index: number) => void
}

const Tile: React.FC<TileProps> = ({
    index,
    tile,
    onSelect
}) => {
    const { value, selected } = tile

    const handleClick = (): void => {
        onSelect(value, index)
    }

    return (
        <div
            className={styles[selected ? 'tile-selected' : 'tile-default']}
            onClick={handleClick}
        >
            <span className={styles['value']}>{value}</span>
        </div>
    )
}

export default Tile
