import style from './Header.module.css';

const Header = () => {

    return (
        <header className={style['header-main']}>
            <span>My to do list</span>
        </header>
    )
}

export default Header