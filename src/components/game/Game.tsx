import { Fragment, useState, useMemo } from 'react'
import tilesInitial19 from '../../data/tiles-initial-19'
import tilesInitial2 from '../../data/tiles-initial-2'
import TileModel from '../../models/TileModel'
import styles from './Game.module.css'
import TileGrid from '../tile-grid/TileGrid'
import Tile from '../tile/Tile'
import produce from 'immer'
import Button from '../button/Button'
import gameResultInitial from '../../data/game-result-initial'
import GameResultModel from '../../models/GameResultModel'
import GameManager from '../../helpers/GameManager'
import Result from '../result/Result'

const Game: React.FC = () => {
    const [tiles19, setTiles19] = useState<TileModel[]>(tilesInitial19)
    const [tiles2, setTiles2] = useState<TileModel[]>(tilesInitial2)
    const [gameResult, setGameResult] = useState<GameResultModel>(gameResultInitial)

    const tiles19selected = useMemo(() => (
        tiles19.filter((tile) => (tile.selected)).length
    ), [tiles19])

    const tiles2selected = useMemo(() => (
        tiles2.filter((tile) => (tile.selected)).length
    ), [tiles2])

    const canSubmit = useMemo(() => (
        (tiles19selected === 8) && (tiles2selected === 1)
    ), [tiles19selected, tiles2selected])

    const handleTile19Selection = (selected: boolean, index: number): void => {
        if (selected && tiles19selected >= 8) return

        setTiles19(produce(tiles19, (draft: TileModel[]) => {
            draft[index].selected = selected
        }))
    }

    const handleTile2Selection = (selected: boolean, index: number): void => {
        if (selected && tiles2selected >= 1) return

        setTiles2(produce(tiles2, (draft: TileModel[]) => {
            draft[index].selected = selected
        }))
    }

    const play = (): void => {
        const arr8 = tiles19
            .filter((tile) => (tile.selected))
            .map((tile) => (tile.value))

        const arr1 = tiles2
            .filter((tile) => (tile.selected))
            .map((tile) => (tile.value))

        const newGameResult = new GameManager(arr8, arr1).init()
        setGameResult(newGameResult)
    }

    const resetGame = (): void => {
        setTiles19(tilesInitial19)
        setTiles2(tilesInitial2)
        setGameResult(gameResultInitial)
    }

    return (
        <div className={styles['wrapper']}>
            <div className={styles['container']}>
                <div className={styles['title']}>
                    Билет
                </div>
                {!gameResult.finished ? (
                    <Fragment>
                        <TileGrid title="Поле 1">
                            {tiles19.map((tile, index) => (
                                <Tile
                                    key={tile.value}
                                    index={index}
                                    tile={tile}
                                    onSelect={handleTile19Selection}
                                >{tile.value}</Tile>
                            ))}
                        </TileGrid>
                        <TileGrid title="Поле 2">
                            {tiles2.map((tile, index) => (
                                <Tile
                                    key={tile.value}
                                    index={index}
                                    tile={tile}
                                    onSelect={handleTile2Selection}
                                >{tile.value}</Tile>
                            ))}
                        </TileGrid>
                        <div className={styles['button-wrapper']}>
                            <Button onClick={play} disabled={!canSubmit}>
                                Показать результат
                            </Button>
                        </div>
                    </Fragment>
                ) : (
                    <Result
                        result={gameResult}
                        onReset={resetGame}
                    />
                )}
            </div>
        </div>
    )
}

export default Game
