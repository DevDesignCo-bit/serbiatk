// iOS uses an ampersand to separate the SMS body parameter.
const smsLink = document.getElementById('send-sms');
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
if (isIOS) smsLink.href = 'sms:1553&body=KIO';
