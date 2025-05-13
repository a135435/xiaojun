// app.js
App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        // env 参数决定接下来小程序发起的云开发调用会默认请求到哪个云环境的资源
        // 此处请填入环境 ID, 环境 ID 可打开云控制台查看
        // 如不填则使用默认环境（第一个创建的环境）
        env: 'my-food-app-xxxxx',
        traceUser: true,
      })
    }

    this.globalData = {
      userInfo: null,
      currentSeason: this.getCurrentSeason(),
      currentWeather: '晴',  // 默认天气，后续会通过API获取
      categories: ['中餐', '西餐', '快餐', '日料', '韩餐', '甜点', '饮品', '其他'],
      seasons: ['春季', '夏季', '秋季', '冬季'],
      weatherTypes: ['晴', '多云', '阴', '小雨', '中雨', '大雨', '雷雨', '雪', '雾霾']
    }
  },

  getCurrentSeason() {
    const date = new Date();
    const month = date.getMonth() + 1;
    
    if (month >= 3 && month <= 5) {
      return '春季';
    } else if (month >= 6 && month <= 8) {
      return '夏季';
    } else if (month >= 9 && month <= 11) {
      return '秋季';
    } else {
      return '冬季';
    }
  }
})