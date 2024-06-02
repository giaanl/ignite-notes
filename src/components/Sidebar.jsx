import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react'


export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1716396502668-26f0087e1c7d?q=40&w=735&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <div className={styles.profile}>
                <img className={styles.avatar} src="https://media.licdn.com/dms/image/C4D03AQEU4fXv1dfp1Q/profile-displayphoto-shrink_200_200/0/1630865311729?e=1723075200&v=beta&t=a1slhDaQS6Q9XhbfenJIWmlvmIdlVRbii223Rzet2D8"/>
                <strong>Gianluca Paschoalotti</strong>
                <span>Web developer assistant</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}