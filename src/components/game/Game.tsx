import { useState } from 'react'
import tilesInitial19 from '../../data/tiles-initial-19'
import tilesInitial2 from '../../data/tiles-initial-2'
import TileModel from '../../models/TileModel'
import styles from './Game.module.css'

const Game: React.FC = () => {
    const [tiles19, setTiles19] = useState<TileModel[]>(tilesInitial19)
    const [tiles2, setTiles2] = useState<TileModel[]>(tilesInitial2)

    return (
        <div className={styles['wrapper']}>
            {tiles19.map((tile) => (
                <p key={tile.value}>{tile.value}</p>
            ))}
            {tiles2.map((tile) => (
                <p key={tile.value}>{tile.value}</p>
            ))}
        </div>
    )
}

export default Game
