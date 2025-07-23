import classNames from 'classnames/bind';
import styles from '../assets/styles/Footer.module.scss';
import { FaFacebook, FaTwitter, FaInstagram, FaRss } from 'react-icons/fa';

const cx = classNames.bind(styles);
const Footer = () => (
    <footer className={cx('footer')}>
        <div className={cx('container')}>
            <ul>
                <li>
                    <a href="/about">Về Hour Of Code</a>
                </li>
                <li>
                    <a href="/document">Kho tài liệu</a>
                </li>
                <li>
                    <a href="/solve">Ôn luyện, giải đề thi</a>
                </li>
                <li>
                    <a href="/">Thư viện Scratch</a>
                </li>
                <li>
                    <a href="/blog">Bài viết về Scratch</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="/">Hourofcode Vietnam</a>
                </li>
                <li>
                    <a href="/">Thế giới thủ thuật</a>
                </li>
                <li>
                    <a href="/">Cẩm nang dạy học</a>
                </li>
                <li>
                    <a href="/">Kỹ năng số</a>
                </li>
                <li>
                    <a href="/">Phụ huynh Thông thái</a>
                </li>
                <li>
                    <a href="/">HourofAI.edu.vn</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="/blog">Blog/ Tin tức</a>
                </li>
                <li>
                    <a href="/">Sản phẩm học sinh</a>
                </li>
                <li>
                    <a href="/">Kho đề thi</a>
                </li>
                <li>
                    <a href="/solve">Hướng dẫn giải đề</a>
                </li>
                <li>
                    <a href="/register">Đăng ký học</a>
                </li>
                <li>
                    <a href="/contact">Liên hệ</a>
                </li>
            </ul>
        </div>
        <div className={cx('footer-bottom')}>
            <span className={cx('title')}>© 2023 Hour Of Code Vietnam</span>
            <span className={cx('social-icons')}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <FaFacebook className={cx('icon')} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <FaTwitter className={cx('icon')} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FaInstagram className={cx('icon')} />
                </a>
                <a href="https://rss.com" target="_blank" rel="noopener noreferrer" aria-label="RSS">
                    <FaRss className={cx('icon')} />
                </a>
            </span>
        </div>
    </footer>
);

export default Footer;
