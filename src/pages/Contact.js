import classNames from 'classnames/bind';
import styles from '~/assets/styles/Contact.module.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Dữ liệu form:', formData);
        alert('Gửi tin nhắn thành công!');

        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: '',
        });
    };

    return (
        <div className={cx('contact-container')}>
            <section className={cx('promo-banner')}>
                <div className={cx('promo-content')}>
                    <h2>Liên hệ với chúng tôi</h2>
                    <p>
                        Hour Of Code Việt Nam tập trung kiến tạo một môi trường học tập trải nghiệm giàu tính nhân văn,
                        thử thách nhằm thúc đẩy mỗi học sinh hình thành và phát triển các phẩm chất và năng lực toàn
                        cầu, để cùng sẵn sàng kiến tạo tương lai trong một thế giới mới.
                    </p>
                </div>
            </section>
            <main className={cx('main-container')}>
                <div className={cx('container')}>
                    <form className={cx('contact-form')} onSubmit={handleSubmit}>
                        <h1>Send us a message</h1>
                        <div className={cx('input')}>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={cx('input')}>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <textarea
                            name="message"
                            placeholder="Message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <div className={cx('submit')}>
                            <button type="submit">GỬI TIN NHẮN</button>
                        </div>
                    </form>

                    <div className={cx('footerInfo')}>
                        <div>
                            <h2 className={cx('heading')}>Thông tin</h2>
                            <div className={cx('infoItem')}>
                                <b>Add:</b> Tầng 7, Charmvit Tower, Số 117
                                <br />
                                Trần Duy Hưng, Cầu Giấy, Hà Nội
                            </div>
                            <div className={cx('infoItem')}>
                                <b>Email:</b>{' '}
                                <a href="mailto:tuyensinh@hourofcode.vn" className={cx('emailLink')}>
                                    tuyensinh@hourofcode.vn
                                </a>
                            </div>
                            <div className={cx('infoItem')}>
                                <b>Điện thoại:</b> 02422688988
                            </div>
                        </div>
                        <div className={cx('socialIcons')}>
                            <a href="/" className={cx('iconLink')}>
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="/" className={cx('iconLink')}>
                                <i className="fab fa-x-twitter"></i>
                            </a>
                            <a href="/" className={cx('iconLink')}>
                                <i className="fab fa-google-plus-g"></i>
                            </a>
                            <a href="/" className={cx('iconLink')}>
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="/" className={cx('iconLink')}>
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Contact;
