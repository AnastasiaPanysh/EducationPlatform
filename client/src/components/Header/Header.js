import { Link } from "react-router-dom";
import style from './style.module.css'

function Header() {
    return (
        <div className={style.wrapper}>
        <div className={style.content}>

            <h1>Hschool</h1>

            <nav>
                <div className={style.login}>
                    <Link to='/auth'>Login →</Link>
                </div>
                <div className={style.sign}>
                    <Link to='/reg'>Sign Up</Link>
                </div>
            </nav>


        </div>
        </div>
    )
}

export default Header