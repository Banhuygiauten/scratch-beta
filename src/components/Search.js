import { useState, useRef, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import classNames from 'classnames/bind';
import styles from '../assets/styles/Search.module.scss';

const cx = classNames.bind(styles);

function Search({ onClose }) {
    const [query, setQuery] = useState('');
    const inputRef = useRef(null);

    // Tự động focus input khi mở search
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim() === '') return;
        setQuery('');
        if (onClose) onClose();
    };

    const handleClose = () => {
        setQuery('');
        if (onClose) onClose();
    };

    return (
        <form className={cx('search-container')} onSubmit={handleSubmit}>
            <input
                ref={inputRef}
                type="text"
                placeholder="Tìm kiếm..."
                className={cx('search-input')}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button type="button" className={cx('exit-btn')} onClick={handleClose}>
                <FaTimes />
            </button>
        </form>
    );
}

export default Search;
