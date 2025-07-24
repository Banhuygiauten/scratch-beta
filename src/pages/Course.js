import React, { useEffect, useRef, useState } from 'react';

import styles from '~/assets/styles/Course.module.scss';
import classNames from 'classnames/bind';
import scratchBeginner from 'src/assets/image/scrathbeginner.png';
import scratchAdvanced from 'src/assets/image/scrathadv.png';
import scratchContest from 'src/assets/image/scratch_contest.png';
import scratchRobot from 'src/assets/image/robot.png';
import scratchAI from 'src/assets/image/scrathAI.png';
import scratchExpert from 'src/assets/image/scratchexpert.png';
import scratchftr from 'src/assets/image/scratch-future.png';

const cx = classNames.bind(styles);

const courses = [
    {
        title: 'Scratch Cơ bản (Beginner)',
        teacher: 'Lê Thùy Anh',
        duration: '20 buổi',
        image: scratchBeginner,
        link: 'scratch_beginner.html',
    },
    {
        title: 'Scratch nâng cao (Advanced)',
        teacher: 'Lê Thùy Anh',
        duration: '20 buổi',
        image: scratchAdvanced,
        link: 'scratch_adv.html',
    },
    {
        title: 'Lập trình trò chơi (Expert)',
        teacher: 'Lê Thùy Anh',
        duration: '30 buổi',
        image: scratchExpert,
        link: 'scratch_expert.html',
    },
    {
        title: 'Luyện thi tin học trẻ Scratch',
        teacher: 'Lê Thùy Anh',
        duration: '15 buổi',
        image: scratchContest,
        link: 'scratch_contest.html',
    },
    {
        title: 'Điều khiển robot với Scratch',
        teacher: 'Lê Thùy Anh',
        duration: '10 buổi',
        image: scratchRobot,
        link: 'scratch_robot.html',
    },
    {
        title: 'Trí tuệ nhân tạo với Scratch',
        teacher: 'Lê Thùy Anh',
        duration: '12 buổi',
        image: scratchAI,
        link: 'scratch_ai.html',
    },
];

function Course() {
    const imgRef = useRef(null);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const transformStyle = {
        transform: `translateX(${scrollY * 0.2}px) `,
        transition: 'transform 0.1s linear',
    };

    return (
        <div className={cx('course-container')}>
            <section className={cx('promo-banner')}>
                <div className={cx('promo-content')}>
                    <h2>Lập trình với Scratch... dễ như đếm!</h2>
                    <p>
                        Hour Of Code Việt Nam cung cấp các khóa học lập trình Scratch cho trẻ em chất lượng cao với đội
                        ngũ giáo viên, chuyên gia nhiều năm kinh nghiệm.
                    </p>
                    <a href="/register" className={cx('register-button')}>
                        ĐĂNG KÝ KHÓA HỌC
                    </a>
                </div>
            </section>
            <section className={cx('course-list')}>
                <div className={cx('course-layout')}>
                    <div className={cx('courses')}>
                        {courses.map((course, index) => (
                            <div key={index} className={cx('course-item')}>
                                <img src={course.image} alt={course.title} />
                                <h3>{course.title}</h3>
                                <p>Giáo viên: {course.teacher}</p>
                                <p>Thời lượng: {course.duration}</p>
                                <a href={course.link} className={cx('course-link')}>
                                    Xem chi tiết
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className={cx('course-content')}>
                <div className={cx('course-left')}>
                    <h1>Lập trình Scratch – Mở cửa tương lai</h1>
                    <p>
                        Học lập trình Scratch không chỉ giúp các bạn trẻ phát triển kiến thức, kỹ năng một cách toàn
                        diện mà còn là chìa khóa mở ra cánh cửa tương lai. Hãy bắt đầu hành trình chinh phục những ước
                        mơ với khóa học lập trình Scratch ngay từ sớm để có nền tảng vững chắc cho một tương lai tươi
                        sáng!
                    </p>
                    <a href="/register" className={cx('btn-register')}>
                        Đăng ký ngay
                    </a>
                </div>
                <div className={cx('course-right')}>
                    <img ref={imgRef} src={scratchftr} alt="Scratch" style={transformStyle} />
                </div>
            </section>
        </div>
    );
}

export default Course;
