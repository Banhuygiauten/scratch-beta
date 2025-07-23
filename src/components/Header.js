import { FaSearch } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from '../assets/styles/Header.module.scss';
import logo from '../assets/image/Scratch_logo.svg';

const cx = classNames.bind(styles);

const Header = () => {
    const [shrink, setShrink] = useState(false);
    const handleScroll = () => {
        setShrink(window.scrollY > 40);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <header className={cx('header', { shrink })}>
            <div className={cx('container')}>
                <div className={cx('logo')}>
                    <a href="/">
                        <img src={logo} alt="Scratch Logo" />
                    </a>
                </div>

                <nav className={cx('nav')}>
                    <ul className={cx('nav-list')}>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/course">Khóa học</a>
                        </li>
                        <li>
                            <a href="/document">Kho tài liệu</a>
                        </li>
                        <li>
                            <a href="/solve">Hướng dẫn giải đề</a>
                        </li>
                        <li>
                            <a href="/blog">Blog</a>
                        </li>
                        <li>
                            <a href="/register">Đăng ký học</a>
                        </li>
                        <li>
                            <a href="/contact">Liên hệ</a>
                        </li>
                    </ul>
                </nav>

                <div className={cx('search-btn')}>
                    <FaSearch className={cx('search-icon')} />
                </div>
            </div>
        </header>
    );
};

export default Header;
