import { notification, Icon } from 'antd'
import React from 'react'
const SuccessRegisterNotification = (message) => {
  notification.open({
    message: 'Register Successfully',
    description: message,
    icon: <Icon type="check-circle" style={{ color: '#69c0ff' }} />,
  });
};
const FailedRegisterNotification = (message) => {
  notification.open({
    message: 'Register Failed',
    description: message,
    icon: <Icon type="close-circle" style={{ color: '#cf1322' }} />,
  });
};
export { FailedRegisterNotification, SuccessRegisterNotification }
