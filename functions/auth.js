const Pusher = require('pusher');

exports.handler = async (event) => {
  // 从环境变量获取 Pusher 配置
  const pusher = new Pusher({
    appId: process.env.PUSHER_APP_ID,
    key: process.env.PUSHER_APP_KEY,
    secret: process.env.PUSHER_APP_SECRET,
    cluster: process.env.PUSHER_CLUSTER,
    useTLS: true
  });

  // 解析请求参数
  const params = new URLSearchParams(event.body);
  const socketId = params.get('socket_id');
  const channelName = params.get('channel_name');

  // 生成 Pusher 认证签名
  const authResponse = pusher.authenticate(socketId, channelName);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*' // 允许跨域
    },
    body: JSON.stringify(authResponse)
  };
};
