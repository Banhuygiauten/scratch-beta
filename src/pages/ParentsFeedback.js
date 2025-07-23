import React from 'react';
import phuhuynh1 from '../assets/image/phuhuynh1.png';
import phuhuynh2 from '../assets/image/phuhuynh2.png';
import phuhuynh3 from '../assets/image/phuhuynh3.png';

function ParentsFeedback() {
    const feedbacks = [
        {
            name: 'Ms Nguyễn Ngọc Anh',
            image: phuhuynh1,
            borderColor: '#6ec6ff',
            content:
                '“Con gái tôi từng rất nhút nhát, nhưng từ khi học lập trình tại Hour Of Code Việt Nam, con đã trở nên tự tin và sáng tạo hơn. Tôi thực sự hạnh phúc khi thấy con yêu thích học hỏi và phát triển mỗi ngày.”',
        },
        {
            name: 'Mr Lê Đức Trung',
            image: phuhuynh2,
            borderColor: '#ffd600',
            content:
                '“Trước đây, tôi lo lắng con sẽ chỉ sử dụng công nghệ một cách thụ động, nhưng khóa học đã giúp con hiểu cách tạo ra công nghệ. Con giờ có thể tự lập trình những dự án nhỏ và tôi thấy rõ sự tiến bộ trong tư duy của con”',
        },
        {
            name: 'Mr Nguyễn Nam Du',
            image: phuhuynh3,
            borderColor: '#7c4dff',
            content:
                '“Chương trình học tại Hour Of Code Việt Nam rất thú vị và phù hợp với lứa tuổi của con tôi. Không chỉ học lập trình, con còn phát triển kỹ năng giải quyết vấn đề và khả năng làm việc nhóm.”',
        },
    ];

    return (
        <section className="parents-feedback-section" style={{ background: '#f7f7fb', padding: '60px 0' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h2
                    style={{
                        color: '#7c4dff',
                        fontSize: '2.2em',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        marginBottom: '36px',
                    }}
                >
                    Phụ huynh nói gì?
                </h2>
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '32px',
                        justifyContent: 'center',
                    }}
                >
                    {feedbacks.map((item, index) => (
                        <div
                            key={index}
                            style={{
                                background: '#fff',
                                borderRadius: '18px',
                                boxShadow: '0 4px 24px rgba(124, 77, 255, 0.07)',
                                padding: '36px 32px 40px 32px',
                                textAlign: 'center',
                                borderTop: `8px solid ${item.borderColor}`,
                                maxWidth: '350px',
                                flex: '1 1 300px',
                            }}
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                style={{
                                    width: '88px',
                                    height: '88px',
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                    marginBottom: '24px',
                                    border: '3px solid #e3e8fa',
                                }}
                            />
                            <p
                                style={{
                                    fontSize: '1.13em',
                                    color: '#444',
                                    fontStyle: 'italic',
                                    marginBottom: '32px',
                                    lineHeight: '1.7',
                                }}
                            >
                                {item.content}
                            </p>
                            <div
                                style={{
                                    fontWeight: 'bold',
                                    color: '#222',
                                    fontSize: '1.08em',
                                }}
                            >
                                {item.name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ParentsFeedback;
