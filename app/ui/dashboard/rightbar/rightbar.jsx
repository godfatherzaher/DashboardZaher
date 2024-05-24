import { MdPlayCircleFilled } from "react-icons/md";
import styles from "./rightbar.module.css"
import Image from "next/image";


const Rightbar = () =>{ 
    return(
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.bgContainer}>
                    <Image src="/astronaut.png" alt="" fill className={styles.bg}/>
                </div>
                <div className={styles.texts}>
                    <span className={styles.notification}>🔥 Available Now </span>
                    <h3 className={styles.title}>How to use the new version of the admin dashboard?</h3>
                    <span className={styles.subtitle}>Takes 4 minutes to learn</span>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Nam velit repellat repudiandae explicabo placeat distinctio 
                    </p>
                    <button className={styles.button}>
                        <MdPlayCircleFilled/>
                        Watch
                    </button>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.texts}>
                    <span className={styles.notification}>🔥 Available Now </span>
                    <h3 className={styles.title}>How to use the new version of the admin dashboard?</h3>
                    <span className={styles.subtitle}>Takes 4 minutes to learn</span>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Nam velit repellat repudiandae explicabo placeat distinctio 
                    </p>
                    <button className={styles.button}>
                        <MdPlayCircleFilled/>
                        Watch
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Rightbar;