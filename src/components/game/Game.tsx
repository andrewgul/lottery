import { useState } from 'react'
import tilesInitial19 from '../../data/tiles-initial-19'
import tilesInitial2 from '../../data/tiles-initial-2'
import TileModel from '../../models/TileModel'
import styles from './Game.module.css'
import TileGrid from '../tile-grid/TileGrid'
import Tile from '../tile/Tile'
import produce from 'immer'

const Game: React.FC = () => {
    const [tiles19, setTiles19] = useState<TileModel[]>(tilesInitial19)
    const [tiles2, setTiles2] = useState<TileModel[]>(tilesInitial2)

    const handleTile19Selection = (selected: boolean, index: number): void => {
        setTiles19(produce(tiles19, (draft: TileModel[]) => {
            draft[index].selected = selected
        }))
    }

    const handleTile2Selection = (selected: boolean, index: number): void => {
        setTiles2(produce(tiles19, (draft: TileModel[]) => {
            draft[index].selected = selected
        }))
    }

    return (
        <div className={styles['wrapper']}>
            <TileGrid>
                {tiles19.map((tile, index) => (
                    <Tile
                        key={tile.value}
                        index={index}
                        tile={tile}
                        onSelect={handleTile19Selection}
                    >{tile.value}</Tile>
                ))}
            </TileGrid>
            <TileGrid>
                {tiles2.map((tile, index) => (
                    <Tile
                        key={tile.value}
                        index={index}
                        tile={tile}
                        onSelect={handleTile2Selection}
                    >{tile.value}</Tile>
                ))}
            </TileGrid>
        </div>
    )
}

export default Game
