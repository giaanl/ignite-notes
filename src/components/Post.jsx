import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://media.licdn.com/dms/image/C4D03AQEU4fXv1dfp1Q/profile-displayphoto-shrink_200_200/0/1630865311729?e=1723075200&v=beta&t=a1slhDaQS6Q9XhbfenJIWmlvmIdlVRbii223Rzet2D8" />
                    <div className={styles.authorInfo}>
                        <strong>Gianluca Paschoalotti</strong>
                        <span>Web Developer Assistant</span>
                    </div>
                </div>
                <time title="02 de junho as 13:40" datetime="2024-06-02 13:40">Publicado há 1 hora</time>
            </header>
            
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p><a href="">jane.design/doctorcare</a></p>
            </div>
        </article>
    )
}