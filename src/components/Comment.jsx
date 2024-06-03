import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://media.licdn.com/dms/image/C4D03AQEU4fXv1dfp1Q/profile-displayphoto-shrink_200_200/0/1630865311729?e=1723075200&v=beta&t=a1slhDaQS6Q9XhbfenJIWmlvmIdlVRbii223Rzet2D8" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.commentAuthorAndTime}>
                            <strong>Gianluca Paschoalotti</strong>
                            <time title="02 de junho as 19:40" datetime="2024-06-02 19:40">Cerca de 2h atras</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={20}/>
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}