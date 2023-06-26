import Header from "../../components/Header/Header"
import style from './style.module.css'

function HomePage() {
    return (
        <>
            <Header></Header>

            <div className={style.preview}>
                <div className={style.previewContent}>
                    <p className={style.textPlatform}>E-COURSE PLATFORM</p>
                    <h1>Learning and
                        teaching online,
                        made easy.</h1>
                    <p className={style.textAdditional}>Any subject, in any language, on any device, for all ages!</p>
                    <div className={style.btn} >About platform</div>
                    <div className={style.statictics}>
                        <p className={style.studentsCount}><span className={style.lightning}></span>600 <span>+</span></p>
                        <p className={style.students}>Students</p>
                    </div>
                </div>
                <div className={style.manImg}></div>
            </div>

            <div className={style.learnBlock}>
                <div className={style.learnBlockWidth }>
                    <div className={style.learnImg}></div>
                    <div className={style.learnBlockContent}>
                        <h2>Learn a language in a playful way</h2>
                        <p>Make learning programming languages more fun with mini-games</p>
                        <div className={style.wrapperIcons}>
                            <div className={style.sprint}></div>
                            <div className={style.tasks}></div>
                        </div>

                    </div>
                </div>
            </div>
            <div></div>
            <div></div>

        </>
    )
}

export default HomePage