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
        </div>
    );
}

export default Home;
