// 常量
// 自己给自己发邮件
export default {
    port: 3000,
    notifyTo: "your mail",
    smtp: {
        host: "smtp server of your mail",
        port: 465,
        secure: true,
        auth: {
            user: "your mail",
            pass: "your mail password",
        },
    },
};
