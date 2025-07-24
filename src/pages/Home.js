import classNames from 'classnames/bind';
import React, { useState, useEffect } from 'react';
import styles from '~/assets/styles/Home.module.scss';
import ParentsFeedback from './ParentsFeedback';

import contactBg from '../assets/image/backgournd3.jpg';
import image from '../assets/image/CodingScratch-Wisera.png';
import icon1 from '../assets/image/icon1.png';
import icon2 from '../assets/image/icon2.png';
import icon3 from '../assets/image/icon3.png';
import icon4 from '../assets/image/icon4.png';
import icon5 from '../assets/image/icon5.png';
import icon6 from '../assets/image/icon6.png';
import icon7 from '../assets/image/icon7.png';
import icon8 from '../assets/image/icon8.png';
import course1 from '../assets/image/course1.png';
import course2 from '../assets/image/course2.png';
import course3 from '../assets/image/course3.png';
import houofcode from '../assets/image/scratch-hourofcode.png';
import blog1 from '../assets/image/blog01.png';
import blog2 from '../assets/image/blog02.png';
import blog3 from '../assets/image/blog03.png';
import blog4 from '../assets/image/blog04.png';
import blog5 from '../assets/image/blog05.png';
import blog6 from '../assets/image/blog06.png';
import blog7 from '../assets/image/blog07.png';
import blog8 from '../assets/image/blog08.png';
import blog9 from '../assets/image/blog09.png';
import blog10 from '../assets/image/blog010.png';
import eduxLogo from '../assets/image/edux-logo.png';
import digitalSkillsLogo from '../assets/image/digitalskills-logo.png';
import quicktipsLogo from '../assets/image/quicktips-logo.png';
import dayhocLogo from '../assets/image/dayhoc-logo.png';
import hourofcodeLogo from '../assets/image/hourofcode-logo.png';

const cx = classNames.bind(styles);

const blogData = [
    { title: 'Làm sao học AI hiệu quả?', image: blog1 },
    { title: 'Dạy trẻ AI từ lớp 1', image: blog2 },
    { title: 'Lập trình game với Scratch', image: blog3 },
    { title: 'Scratch sáng tạo cho trẻ', image: blog4 },
    { title: 'Scratch từ lớp 1', image: blog5 },
    { title: 'Dự án Scratch đơn giản', image: blog6 },
    { title: 'Khóa học Scratch online', image: blog7 },
    { title: 'Phương pháp dạy Scratch', image: blog8 },
    { title: 'Thư viện đề thi Scratch', image: blog9 },
    { title: 'Bài tập Scratch cơ bản', image: blog10 },
];

const features = [
    {
        icon: icon1,
        title: 'Phổ biến nhất',
        desc: 'Scratch là công cụ lập trình trực quan phổ biến nhất thế giới với hơn 90 triệu người dùng',
        borderColor: '#00e676',
    },
    {
        icon: icon2,
        title: 'Kích thích sáng tạo',
        desc: 'Scratch dễ dàng kích thích trí tưởng tượng và sáng tạo của trẻ thông qua các khối lệnh...',
        borderColor: '#ffc400',
    },
    {
        icon: icon3,
        title: 'Dễ học nhất',
        desc: 'Học scratch cực dễ, nhiệm vụ của người học chỉ cần kéo và thả các khối lệnh đúng vị trí',
        borderColor: '#448aff',
    },
    {
        icon: icon4,
        title: 'Tư duy hệ thống',
        desc: 'Scratch giúp trẻ phát triển tư duy logic, tư duy thuật toán một cách hệ thống',
        borderColor: '#ff4081',
    },
    {
        icon: icon5,
        title: 'Định hình ý tưởng',
        desc: 'Học lập trình giúp trẻ dễ dàng nhận ra các ý tưởng và mô tả chúng một cách trực quan',
        borderColor: '#7c4dff',
    },
    {
        icon: icon6,
        title: 'Giải quyết vấn đề',
        desc: 'Scratch giúp trẻ phát triển kỹ năng giải quyết vấn đề bằng máy tính 1 cách dễ dàng',
        borderColor: '#ff6d00',
    },
    {
        icon: icon7,
        title: 'Tư duy phản biện',
        desc: 'Học lập trình giúp trẻ phát triển kỹ năng giao tiếp, kỹ năng trình bày và tư duy phản biện',
        borderColor: '#00bcd4',
    },
    {
        icon: icon8,
        title: 'Làm việc cộng tác',
        desc: 'Học lập trình giúp trẻ phát triển tư duy cộng tác, làm việc nhóm và kỹ năng lãnh đạo.',
        borderColor: '#cddc39',
    },
];

function Home() {
    const [activeIndex, setActiveIndex] = useState(0);
    const nextSlide = () => setActiveIndex((prev) => (prev + 1) % blogData.length);
    const prevSlide = () => setActiveIndex((prev) => (prev - 1 + blogData.length) % blogData.length);
    const goToSlide = (index) => setActiveIndex(index);

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <div className={cx('home')}>
            <div className={cx('content-hero')}>
                <div className={cx('content')}>
                    <h1>Công cụ học lập trình tốt nhất cho trẻ em</h1>
                    <p>
                        Scratch là một ngôn ngữ lập trình trực quan dựa trên việc kéo thả khối lệnh, giúp trẻ em từ 7–16
                        tuổi học lập trình dễ dàng.
                        <br />
                        Học lập trình sớm giúp trẻ phát triển tư duy logic, sáng tạo và kỹ năng giải quyết vấn đề.
                    </p>
                    <a href="/register" target="_blank" className={cx('register-btn')}>
                        ĐĂNG KÝ KHÓA HỌC <span className={cx('arrow')}>▶</span>
                    </a>
                </div>
                <div className={cx('image')}>
                    <img src={image} alt="Coding Scratch Wisera" />
                </div>
            </div>

            <div className={cx('why-section')}>
                <div className={cx('why-left')}>
                    <h2>
                        <span className={cx('why-title')}>
                            Tại sao trẻ em nên
                            <br />
                            học Scratch?
                        </span>
                    </h2>
                    <div className={cx('why-underline')}></div>
                    <p>
                        <b>Scratch</b> là một công cụ hoàn hảo giúp học sinh từ 7 đến 16 tuổi làm quen với khái niệm lập
                        trình. Scratch được nghiên cứu và phát triển bởi nhóm nghiên cứu Lifelong Kindergarten, thuộc
                        trung tâm Media Lab của Viện công nghệ Massachusetts. Hiện nay Scratch là công cụ lập trình trực
                        quan phổ biến nhất thế giới với hơn 103 triệu người dùng và 70 ngôn ngữ khác nhau.
                    </p>
                    <a href="/register" target="_blank" className={cx('register-btn')}>
                        ĐĂNG KÝ KHÓA HỌC <span className={cx('arrow')}>▶</span>
                    </a>
                </div>

                <div className={cx('why-right')}>
                    <div className={cx('grid')}>
                        {features.map((item, index) => (
                            <div
                                key={index}
                                className={cx(`Item${index + 1}`)}
                                style={{ borderLeft: `6px solid ${item.borderColor}` }}
                            >
                                <div className={cx('icon')}>
                                    <img src={item.icon} alt={`Icon ${index + 1}`} />
                                </div>
                                <div>
                                    <b>{item.title}</b>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className={cx('courses-section')}>
                <div className={cx('courses-header')}>
                    <h2>Khóa học nổi bật</h2>
                    <a href="/course" className={cx('view-all-btn')}>
                        Xem tất cả
                    </a>
                </div>

                <div className={cx('courses-list')}>
                    <div className={cx('courses-item')}>
                        <div>
                            <img src={course1} alt="Luyện thi tin học trẻ Scratch" />
                        </div>
                        <div className={cx('courses-info')}>
                            <h3>Luyện thi tin học trẻ Scratch</h3>
                            <p>
                                Giáo viên: Lê Thùy Anh
                                <br />
                                Thời lượng: 20 buổi
                            </p>
                            <a href="/" className={cx('courses-link')}>
                                Xem chi tiết
                            </a>
                        </div>
                    </div>
                    <div className={cx('courses-item')}>
                        <div>
                            <img src={course2} alt="Điều khiển robot với Scratch" />
                        </div>
                        <div className={cx('courses-info')}>
                            <h3>Điều khiển robot với Scratch</h3>
                            <p>
                                Giáo viên: Billy Nguyễn
                                <br />
                                Thời lượng: 25 buổi
                            </p>
                            <a href="/" className={cx('courses-link')}>
                                Xem chi tiết
                            </a>
                        </div>
                    </div>
                    <div className={cx('courses-item')}>
                        <div>
                            <img src={course3} alt="Trí tuệ nhân tạo với Scratch" />
                        </div>
                        <div className={cx('courses-info')}>
                            <h3>Trí tuệ nhân tạo với Scratch</h3>
                            <p>
                                Giáo viên: Billy Nguyễn
                                <br />
                                Thời lượng: 30 buổi
                            </p>
                            <a href="/" className={cx('courses-link')}>
                                Xem chi tiết
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('register-section')}>
                <div className={cx('heroContainer')}>
                    <div className={cx('heroImage')}>
                        <img src={houofcode} alt="Scratch Block Example" />
                    </div>
                    <div className={cx('heroContent')}>
                        <h1>Lập trình scratch dễ như đếm...!</h1>
                        <hr />
                        <p>
                            Scratch được thiết kế giúp cho trẻ em và những người mới bắt đầu tìm hiểu và tiếp cận nhất
                            với bộ môn lập trình. Nhiệm vụ của người học chỉ cần kéo và thả các khối lệnh đúng vị trí...
                            và tận hưởng thành quả của mình...!
                        </p>
                        <a href="/" className={cx('btnYellow')}>
                            BẮT ĐẦU NGAY &nbsp; &gt;
                        </a>
                        <div className={cx('cardsContainer')}>
                            <div className={cx('card')}>
                                <div className={cx('cardHeader')}>
                                    <img src="https://img.icons8.com/color/48/000000/free-shipping.png" alt="Free" />
                                    <b>Đăng ký học thử miễn phí</b>
                                </div>
                                <div className={cx('cardText')}>
                                    Hour Of Code thường xuyên mở các lớp học thử miễn phí, Bấm đăng ký để trải nghiệm
                                </div>
                            </div>
                            <div className={cx('card')}>
                                <div className={cx('cardHeader')}>
                                    <img src="https://img.icons8.com/color/48/000000/approval--v2.png" alt="Register" />
                                    <b>Đăng ký lớp Ôn luyện Tin học trẻ</b>
                                </div>
                                <div className={cx('cardText')}>
                                    Hãy đăng ký ngay khoá học của chúng tôi để bắt đầu hành trình chinh phục các giải
                                    thưởng Tin học trẻ
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('blog-section')}>
                <div className={cx('textContent')}>
                    <h2>Bài viết nổi bật</h2>
                    <p>
                        Hãy cùng khám phá những câu chuyện và các góc nhìn đa chiều qua các bài viết nổi bật của chúng
                        tôi!
                        <br /> Mỗi blog sẽ truyền cảm hứng và mở ra cơ hội giúp các bạn trẻ chinh phục thế giới công
                        nghệ!
                    </p>
                </div>
                <div className={cx('blog-slider')}>
                    <div className={cx('blog-slider-inner')}>
                        <img
                            src={blogData[activeIndex].image}
                            alt={blogData[activeIndex].title}
                            className={cx('blog-slider-img')}
                        />
                        <div className={cx('blog-slider-overlay')}>
                            <h3 className={cx('blog-slider-title')}>{blogData[activeIndex].title}</h3>
                            <div className={cx('blog-slider-dots')}>
                                {blogData.map((_, i) => (
                                    <span
                                        key={i}
                                        onClick={() => goToSlide(i)}
                                        className={cx('blog-slider-dot', { active: i === activeIndex })}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className={cx('blog-slider-btn')}>
                            <button className={cx('prev')} aria-label="prev" onClick={prevSlide}>
                                &#10094;
                            </button>
                            <button className={cx('next')} aria-label="next" onClick={nextSlide}>
                                &#10095;
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <ParentsFeedback />
            </div>
            <div className={cx('contact-section')}>
                <img src={contactBg} alt="Background" className={cx('contact-bg')} />
                <div className={cx('contact-content')}>
                    <div className={cx('contact-stats')}>
                        <div className={cx('stat', 'blue')}>
                            <div className={cx('stat-number')}>+1500</div>
                            <div className={cx('stat-label')}>STUDENTS</div>
                        </div>
                        <div className={cx('stat', 'orange')}>
                            <div className={cx('stat-number')}>30</div>
                            <div className={cx('stat-label')}>FACULTY</div>
                        </div>
                        <div className={cx('stat', 'yellow')}>
                            <div className={cx('stat-number')}>+20</div>
                            <div className={cx('stat-label')}>COURSES</div>
                        </div>
                        <div className={cx('stat', 'green')}>
                            <div className={cx('stat-number')}>+20</div>
                            <div className={cx('stat-label')}>CLUBS</div>
                        </div>
                    </div>
                    <div className={cx('contact-info')}>
                        <h2>Hour Of Code</h2>
                        <div>
                            <b>Website:</b> scratch.hourofcode.vn
                        </div>
                        <div>
                            <b>Telephone:</b> (+84)2422 688 988
                        </div>
                        <div>
                            <b>Email:</b> contact@edux.edu.vn
                        </div>
                        <div>
                            <b>School Hours:</b> M-F: 8am – 8pm
                        </div>
                        <a href="mailto:contact@edux.edu.vn" className={cx('contact-btn')}>
                            Liên hệ ngay
                        </a>
                    </div>
                </div>
            </div>

            <div className={cx('partner-section')}>
                <div className={cx('partner-container')}>
                    <h2 className={cx('partner-title')}>Đối tác và nhà tài trợ</h2>
                    <div className={cx('partner-underline')}></div>
                    <div className={cx('partner-desc')}>
                        Hour Of Code Việt Nam trân trọng cảm ơn sự đồng hành và hợp tác của các tổ chức giáo dục và công
                        nghệ uy tín hàng đầu Việt Nam
                    </div>
                    <div className={cx('partner-logos')}>
                        <img src={eduxLogo} alt="edux" />
                        <img src={digitalSkillsLogo} alt="Digital Skills" />
                        <img src={quicktipsLogo} alt="Quicktips" />
                        <img src={dayhocLogo} alt="Dayhoc" />
                        <img src={hourofcodeLogo} alt="Hour of Code" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
