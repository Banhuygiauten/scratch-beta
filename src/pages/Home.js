import classNames from 'classnames/bind';
import styles from '../assets/styles/Home.module.scss';
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

const cx = classNames.bind(styles);

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
                        <a href="#" className={cx('btnYellow')}>
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
        </div>
    );
}

export default Home;
