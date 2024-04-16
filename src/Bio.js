import React, { useState } from 'react';
import { Avatar, Typography, Divider, Button, Modal, Image, notification } from 'antd';
import { FacebookOutlined, QrcodeOutlined, SendOutlined, CopyOutlined } from '@ant-design/icons';
import { message } from 'antd';

const { Title, Paragraph } = Typography;

// Function to copy text to clipboard
const copyToClipboard = (text) => {
  const el = document.createElement('textarea');
  el.value = text;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};
const Bio = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [facebookLoading, setFacebookLoading] = useState(false);
  const [telegramLoading, setTelegramLoading] = useState(false);

  const handleDonateClick = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleDonateDone = () => {
    handleCloseModal();
    notification.info({
      message: 'Lát check mà không thấy ai donate là chết cmm với tao 😡',
      duration: 3,
    });
  };

  const handleFacebookClick = () => {
    setFacebookLoading(true);
    setTimeout(() => {
      setFacebookLoading(false);
      window.location.href = "https://www.facebook.com/huyngudeochiuduoc";
    }, 1000);
  };

  const handleTelegramClick = () => {
    setTelegramLoading(true);
    setTimeout(() => {
      setTelegramLoading(false);
      window.location.href = "https://t.me/pham_gia_huy";
    }, 1000);
  };
  const handleCopyAccountNumber = () => {
    const accountNumber = '00998995799999'; // Thay bằng số tài khoản thực tế
    copyToClipboard(accountNumber);
    message.success('Sao chép thành công');
  };

  return (
    <div className='container'>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Protest+Strike&display=swap');
          .name {
            font-family: 'Protest Strike', sans-serif;
          }
        `}
      </style>
      <Avatar size={128} src="/images/avatar.jpg" />
      <Title className="name" level={2} style={{ color: '#1890ff' }}>Phạm Gia Huy</Title>
      <Paragraph style={{ color: '#555' }}>
        Huy đang đóiii
      </Paragraph>
      <Divider />
      <Button type="primary" icon={<QrcodeOutlined />} onClick={handleDonateClick} style={{ backgroundColor: '#1890ff', borderColor: '#1890ff' }}>
        Donate
      </Button>
      <Divider />
      <Paragraph style={{ color: '#555' }}>
        Liên hệ
      </Paragraph>
      <Button type="default" onClick={handleFacebookClick} style={{ borderColor: '#3b5998', backgroundColor: '#3b5998' }} loading={facebookLoading}>
        <FacebookOutlined style={{ fontSize: '24px', color: '#fff' }} />
      </Button>
      <Button type="default" onClick={handleTelegramClick} style={{ marginLeft: '10px', borderColor: '#0088cc', backgroundColor: '#0088cc' }} loading={telegramLoading}>
        <SendOutlined style={{ fontSize: '24px', color: '#fff' }} />
      </Button>
      <Modal
        title="Bố thí cho Huy"
        visible={modalVisible}
        onCancel={handleCloseModal}
        footer={[
          <Button key="done" type="primary" onClick={handleDonateDone} style={{ backgroundColor: '#1890ff', borderColor: '#1890ff' }}>
            Đã donate
          </Button>,
        ]}
      >
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Image width={200} src="/images/qr.png" />
        </div>
        <div style={{ marginTop: '15px', textAlign: 'center' }}>
        <p><strong>Số tài khoản:</strong> 00998995799999 <CopyOutlined onClick={handleCopyAccountNumber} style={{ cursor: 'pointer' }} /></p>
        <p><strong>Chủ tài khoản:</strong> PHAM GIA HUY</p>
        <p><strong>Ngân hàng:</strong> MB bank</p>
      </div>
      </Modal>
    </div>
  );
};

export default Bio;
