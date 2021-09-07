import GameResultModel from '../../models/GameResultModel'
import Button from '../button/Button'
import styles from './Result.module.css'

interface ResultProps {
    result: GameResultModel
    onReset: () => void
}

const Result: React.FC<ResultProps> = ({
    result,
    onReset
}) => {
    const { message } = result

    return (
        <div className={styles['container']}>
            <p className={styles['message']}>{message}</p>
            <div className={styles['button-wrapper']}>
                <Button onClick={onReset}>
                    Сыграть заново
                </Button>
            </div>
        </div>
    )
}

export default Result
