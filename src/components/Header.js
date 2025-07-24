import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from '../assets/styles/Header.module.scss';
import logo from '../assets/image/Scratch_logo.svg';

import Search from './Search';

const cx = classNames.bind(styles);

const Header = () => {
    const [shrink, setShrink] = useState(false);
    const [showSearch, setShowSearch] = useState(false); // Thêm state

    const handleScroll = () => {
        setShrink(window.scrollY > 40);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleShowSearch = () => setShowSearch(true);
    const handleHideSearch = () => setShowSearch(false);

    const location = useLocation();

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
                            <a href="/" className={cx({ active: location.pathname === '/' })}>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/course" className={cx({ active: location.pathname === '/course' })}>
                                Khóa học
                            </a>
                        </li>
                        <li>
                            <a href="/document" className={cx({ active: location.pathname === '/document' })}>
                                Kho tài liệu
                            </a>
                        </li>
                        <li>
                            <a href="/solve" className={cx({ active: location.pathname === '/solve' })}>
                                Hướng dẫn giải đề
                            </a>
                        </li>
                        <li>
                            <a href="/blog" className={cx({ active: location.pathname === '/blog' })}>
                                Blog
                            </a>
                        </li>
                        <li>
                            <a href="/register" className={cx({ active: location.pathname === '/register' })}>
                                Đăng ký học
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className={cx({ active: location.pathname === '/contact' })}>
                                Liên hệ
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className={cx('search-btn')} onClick={handleShowSearch}>
                    <FaSearch className="search-icon" />
                </div>

                {showSearch && <Search onClose={handleHideSearch} />}
            </div>
        </header>
    );
};

export default Header;
