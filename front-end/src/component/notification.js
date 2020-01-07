import { notification, Icon } from 'antd'
import React from 'react'

const successLoginNotification = (message) => {
  notification.open({
    message: 'Login successful',
    description: message,
    icon: <Icon type="smile" style={{ color: '#69c0ff' }} />,
  });
};
const failLoginNotification = (message) => {
  notification.open({
    message: 'Login fail',
    description: message,
    icon: <Icon type="smile" rotate={180} style={{ color: '#cf1322' }} />,
  });
};
export { failLoginNotification, successLoginNotification }