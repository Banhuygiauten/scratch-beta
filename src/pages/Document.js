import classNames from 'classnames/bind';
import styles from '~/assets/styles/Document.module.scss';
import React, { useState, useMemo } from 'react';

import img1 from '~/assets/image/dowload01.png';
import img2 from '~/assets/image/dowload02.png';
import img3 from '~/assets/image/dowload03.png';
import img4 from '~/assets/image/dowload04.png';
import img5 from '~/assets/image/dowload05.png';
import img6 from '~/assets/image/dowload06.png';
import img7 from '~/assets/image/dowload07.png';
import img8 from '~/assets/image/dowload08.png';
import img9 from '~/assets/image/dowload09.png';
import img10 from '~/assets/image/dowload10.png';
import img11 from '~/assets/image/dowload11.png';
import img12 from '~/assets/image/dowload12.png';

const cx = classNames.bind(styles);

const documentItem = [
    {
        img: img1,
        title: 'Em học lập trình 2D với Scratch',
        desc: 'Tài liệu này thuộc dự án YouthSpark Digital Inclusion do Vietnet ICT, Microsoft và Bộ GDĐT phối hợp triển khai. Tài liệu được thiết kế theo hướng tổ chức hoạt động…',
        copyright: 'Dự án YouthSpark Digital Inclusion',
        file: 'dowload01.pdf',
    },
    {
        img: img2,
        title: 'Lập trình với Scratch - Hành trình tưởng tượng',
        desc: 'Đây là bộ giáo trình được viết chi tiết, rõ ràng dễ hiểu do thầy Nguyễn Hữu Hưng cùng nhóm tác giả biên soạn và được phát hành miễn phí',
        copyright: 'Phát hành miễn phí',
        file: 'dowload02.pdf',
    },
    {
        img: img3,
        title: 'Lập trình Scratch nâng cao cho học sinh',
        desc: 'Đây là cuốn tài liệu Scratch nâng cao dành cho học sinh đã có kiến thức cơ bản về scratch, tài liệu thuộc chuỗi dự án “Lập trình cùng Dariu Vietnam”.',
        copyright: 'Dự án “Lập trình cùng Dariu Vietnam”',
        file: 'dowload03.pdf',
    },
    {
        img: img4,
        title: 'Tự học lập trình Scratch',
        desc: 'Đây là một trong những tài liệu Scratch tiếng Việt được thầy Bùi Việt Hà viết chi tiết và rất dễ hiểu, phù hợp với các bạn học sinh mới bắt đầu làm quen với lập trình',
        copyright: 'Bùi Việt Hà (phát hành miễn phí)',
        file: 'dowload04.pdf',
    },
    {
        img: img5,
        title: 'Lập trình với Scratch 3.0',
        desc: 'Tài liệu này được viết chi tiết cơ bản và dễ tiếp cận, phù hợp với các bạn mới bắt đầu làm quen. Tài liệu này được chia sẻ bởi trường Tiểu học Lý Tự Trọng.',
        copyright: 'Phát hành miễn phí',
        file: '#',
    },
    {
        img: img6,
        title: 'Lập trình Scratch cơ bản',
        desc: 'Đây là cuốn tài liệu lập trình Scratch cơ bản dành cho những người mới bắt đầu, tài liệu thuộc chuỗi dự án “Lập trình cùng Dariu Vietnam”.',
        copyright: 'Dự án Lập trình cùng Dariu Vietnam',
        file: 'dowload06.pdf',
    },
    {
        img: img7,
        title: 'Tuyển tập 20 bài học Scratch',
        desc: 'Tài liệu bao gồm 20 bài tập về Scratch dành cho cả 3 cấp Tiểu học, THCS và THPT. Tài liệu được biên soạn và hướng dẫn bởi thầy Bùi Việt Hà',
        copyright: 'thầy Bùi Việt Hà (phát hành miễn phí)',
        file: 'dowload07.pdf',
    },
    {
        img: img8,
        title: 'Scratch Programming for Teens',
        desc: 'Đây là cuốn tài liệu bằng tiếng Anh rất chi tiết từ cơ bản đến nâng cao. Tác giả tài liệu này là Jerry Lee Ford, một nhà giáo dục và chuyên gia CNTT',
        copyright: 'Jerry Lee Ford (phát hành miễn phí)',
        file: 'dowload08.pdf',
    },
    {
        img: img9,
        title: 'Lập trình sáng tạo với Scratch',
        desc: 'Đây là cuốn tài liệu được biên dịch từ tiếng Anh bởi Phòng TN AILab, Trường ĐH Khoa học Tự nhiên. Tài liệu dành cho những bạn mới bắt đầu..',
        copyright: 'Phát hành miễn phí',
        file: 'dowload09.pdf',
    },
    {
        img: img10,
        title: 'Learn to Program with Scratch',
        desc: 'Đây là tài liệu Scratch bằng tiếng Anh rất hay. Cuốn sách dành cho bất kỳ ai muốn khám phá khoa học máy tính bắt đầu từ những kiến thức cơ bản',
        copyright: 'Phát hành miễn phí',
        file: 'dowload10.pdf',
    },
    {
        img: img11,
        title: 'Simple coding for total beginners',
        desc: 'Đây là tài liệu Scratch bằng tiếng Anh rất hay. Cuốn sách dành cho bất kỳ ai muốn khám phá khoa học máy tính bắt đầu từ những kiến thức cơ bản',
        copyright: 'Phát hành miễn phí',
        file: 'dowload11.pdf',
    },
    {
        img: img12,
        title: 'Giáo trình Scratch cơ bản',
        desc: 'Đây là tài liệu Scratch dành cho những người mới bắt đầu làm quen với Scratch, tài liệu khá dễ tiếp cận và phù hợp với học sinh tiểu học',
        copyright: 'Phát hành miễn phí',
        file: 'dowload12.pdf',
    },
];
const ITEMS_PER_PAGE = 5;

function Document() {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(documentItem.length / ITEMS_PER_PAGE);

    const currentItems = useMemo(() => {
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        const end = start + ITEMS_PER_PAGE;
        return documentItem.slice(start, end);
    }, [currentPage]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <section className={cx('promo-banner')}>
                    <h2>Kho tài liệu học tập</h2>
                    <p>
                        Nơi chia sẻ các tài liệu học lập trình Scratch từ cơ bản đến nâng cao, được chọn lọc bởi
                        HourOfCode Vietnam.
                    </p>
                </section>

                <div className={cx('dcmt-wrapper')}>
                    <div className={cx('document-grid')}>
                        {currentItems.map((doc, index) => (
                            <div className={cx('document-card')} key={index}>
                                <img src={doc.img} alt={doc.title} />
                                <h3>{doc.title}</h3>
                                <p>{doc.desc}</p>
                                <p>
                                    <strong>Bản quyền:</strong> {doc.copyright}
                                </p>
                                <a href={doc.file} className={cx('download-link')}>
                                    Download tại đây
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* PHÂN TRANG */}
                    <div className={cx('pagination')}>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                className={currentPage === index + 1 ? 'active' : ''}
                                onClick={() => setCurrentPage(index + 1)}
                                key={index}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Document;
