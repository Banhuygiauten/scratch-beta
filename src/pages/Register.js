import classNames from 'classnames/bind';
import styles from '~/assets/styles/Register.module.scss';
import { useState } from 'react';
import Header from '~/components/Header';

import khoahocAI from 'src/assets/image/Khoa-hoc-AI-for-Kid.gif';
import logo from 'src/assets/image/logocodescarth.png';

const cx = classNames.bind(styles);

const provinces = ['Hà Nội', 'Hồ Chí Minh', 'Đà Nẵng', 'Hải Phòng', 'Cần Thơ', 'Khác'];

const courses = [
    'Scratch Cơ bản (Beginner)',
    'Scratch nâng cao (Advanced)',
    'Lập trình trò chơi giáo dục (Expert)',
    'Luyện thi tin học trẻ Scratch',
    'Trí tuệ nhân tạo với Scratch',
    'Điều khiển robot với Scratch',
];

const Register = () => {
    const [form, setForm] = useState({
        studentName: '',
        birthYear: '',
        parentName: '',
        phone: '',
        email: '',
        courseOptions: [],
        facebookLink: '',
        province: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleCheckboxChange = (value) => {
        setForm((prev) => {
            const isSelected = prev.courseOptions.includes(value);
            return {
                ...prev,
                courseOptions: isSelected
                    ? prev.courseOptions.filter((v) => v !== value)
                    : [...prev.courseOptions, value],
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { studentName, birthYear, parentName, phone, email, courseOptions, province, facebookLink } = form;

        const nameRegex = /^[a-zA-ZÀ-ỹ\s']{3,}$/u;
        const birthYearRegex = /^\d{4}$/;
        const phoneRegex = /^(0|\+84)(\d{9})$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const fbLinkRegex = /^(https?:\/\/)?(www\.)?facebook\.com\/[A-Za-z0-9._-]+\/?$/;

        if (!studentName || !birthYear || !parentName || !phone || !email || !courseOptions.length || !province) {
            alert('Vui lòng điền đầy đủ các trường bắt buộc');
            return;
        }

        if (!nameRegex.test(studentName.trim())) {
            alert('Họ tên học viên không hợp lệ. Chỉ được dùng chữ cái và khoảng trắng, tối thiểu 3 ký tự');
            return;
        }

        if (!nameRegex.test(parentName.trim())) {
            alert('Họ tên bố/mẹ không hợp lệ. Chỉ được dùng chữ cái và khoảng trắng, tối thiểu 3 ký tự');
            return;
        }

        if (!birthYearRegex.test(birthYear) || parseInt(birthYear) < 2000 || parseInt(birthYear) > 2019) {
            alert('Vui lòng nhập năm sinh hợp lệ (từ 2000 đến 2019)');
            return;
        }

        if (!phoneRegex.test(phone)) {
            alert('Số điện thoại không hợp lệ. Ví dụ: 0987654321 hoặc +84987654321');
            return;
        }

        if (!emailRegex.test(email)) {
            alert('Email không hợp lệ');
            return;
        }

        if (facebookLink && !fbLinkRegex.test(facebookLink)) {
            alert('Link Facebook không hợp lệ. Ví dụ: https://facebook.com/tennguoidung');
            return;
        }

        setSubmitted(true);
        console.log('Gửi thành công:', form);
    };

    return (
        <div>
            <Header />
            <div className={cx('register-main')}>
                <div className={cx('register-form-col')}>
                    <div className={cx('form-container')}>
                        <div className={cx('form-title')}>ĐĂNG KÝ HỌC LẬP TRÌNH SCRATCH</div>
                        <div className={cx('form-desc')}>
                            Học lập trình Scratch không chỉ giúp các bạn trẻ phát triển kiến thức, kỹ năng một cách toàn
                            diện mà còn là chìa khóa mở ra cánh cửa tương lai...
                        </div>
                        <form id="registerForm" onSubmit={handleSubmit}>
                            <div className={cx('form-group')}>
                                <label>
                                    1. Họ và tên học viên <span className={cx('required')}>*</span>
                                </label>
                                <input
                                    type="text"
                                    name="studentName"
                                    value={form.studentName}
                                    onChange={(e) => setForm({ ...form, studentName: e.target.value })}
                                    required
                                    placeholder="Nhập câu trả lời của bạn"
                                />
                            </div>
                            <div className={cx('form-group')}>
                                <label>
                                    2. Năm sinh <span className={cx('required')}>*</span>
                                </label>
                                <input
                                    type="text"
                                    name="birthYear"
                                    value={form.birthYear}
                                    onChange={(e) => setForm({ ...form, birthYear: e.target.value })}
                                    required
                                    placeholder="Nhập câu trả lời của bạn"
                                />
                            </div>
                            <div className={cx('form-group')}>
                                <label>
                                    3. Họ tên bố mẹ <span className={cx('required')}>*</span>
                                </label>
                                <input
                                    type="text"
                                    name="parentName"
                                    value={form.parentName}
                                    onChange={(e) => setForm({ ...form, parentName: e.target.value })}
                                    required
                                    placeholder="Nhập câu trả lời của bạn"
                                />
                            </div>
                            <div className={cx('form-group')}>
                                <label>
                                    4. Số điện thoại liên hệ <span className={cx('required')}>*</span>
                                </label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={form.phone}
                                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                    required
                                    placeholder="Nhập câu trả lời của bạn"
                                />
                            </div>
                            <div className={cx('form-group')}>
                                <label>
                                    5. Địa chỉ Email <span className={cx('required')}>*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    required
                                    placeholder="Nhập câu trả lời của bạn"
                                />
                            </div>
                            <div className={cx('form-group')}>
                                <label>
                                    6. Bạn muốn đăng ký khóa học Scratch nào? <span className={cx('required')}>*</span>
                                </label>
                                <div className={cx('checkbox-group')}>
                                    {courses.map((course) => (
                                        <label key={course}>
                                            <input
                                                type="checkbox"
                                                checked={form.courseOptions.includes(course)}
                                                onChange={() => handleCheckboxChange(course)}
                                            />
                                            {course}
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <div className={cx('form-group')}>
                                <label>7. Link facebook của bố mẹ</label>
                                <input
                                    type="text"
                                    name="facebookLink"
                                    value={form.facebookLink}
                                    onChange={(e) => setForm({ ...form, facebookLink: e.target.value })}
                                    placeholder="Nhập câu trả lời của bạn"
                                />
                            </div>
                            <div className={cx('form-group')}>
                                <label>
                                    8. Tỉnh thành đang sinh sống <span className={cx('required')}>*</span>
                                </label>
                                <select
                                    value={form.province}
                                    onChange={(e) => setForm({ ...form, province: e.target.value })}
                                    required
                                >
                                    <option value="">Chọn câu trả lời của bạn</option>
                                    {provinces.map((province) => (
                                        <option key={province} value={province}>
                                            {province}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <button type="submit" className={cx('form-submit')}>
                                Gửi
                            </button>
                            {submitted && <p className={cx('success-message')}>Đăng ký thành công!</p>}

                            <div className={cx('form-note')}>
                                Không bao giờ gửi mật khẩu của bạn.{' '}
                                <a href="/" style={{ color: '#7c4dff', textDecoration: 'underline' }}>
                                    Báo cáo lạm dụng
                                </a>
                            </div>
                        </form>
                        <div className={cx('form-footer')}>
                            <img
                                src="https://forms.office.com/cdn/images/microsoft365logo_v1.png"
                                alt="Microsoft 365"
                                height="32"
                            />
                            Nội dung này được tạo bởi chủ sở hữu của biểu mẫu...
                        </div>
                    </div>
                </div>

                <div className={cx('register-aside-col')}>
                    <div className={cx('register-aside-box', 'custom-aside-box')}>
                        <img src={logo} alt="CODE" className={cx('aside-logo')} />
                        <div className={cx('aside-title')}>Trung tâm đào tạo lập trình cho trẻ em</div>
                        <div className={cx('aside-desc')}>
                            Chào mừng bạn đến với trung tâm đào tạo lập trình Scratch Hour Of Code...
                        </div>
                    </div>

                    <div className={cx('register-aside-imgbox', 'custom-aside-imgbox')}>
                        <div className={cx('aside-img-caption', 'custom-caption')}>Khóa học</div>
                        <div className={cx('ai-for-kids-box')}>
                            <img src={khoahocAI} alt="Khóa học AI for Kid" className={cx('ai-for-kids-img')} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
