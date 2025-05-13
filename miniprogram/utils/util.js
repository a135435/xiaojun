// util.js

/**
 * 格式化时间
 * @param {Date} date 日期对象
 * @param {String} format 格式化模板，如 'YYYY-MM-DD HH:mm:ss'
 */
const formatTime = (date, format = 'YYYY-MM-DD HH:mm:ss') => {
  if (!date) return '';
  
  if (typeof date === 'string') {
    date = new Date(date.replace(/-/g, '/'));
  }
  
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return format
    .replace('YYYY', year)
    .replace('MM', month.toString().padStart(2, '0'))
    .replace('DD', day.toString().padStart(2, '0'))
    .replace('HH', hour.toString().padStart(2, '0'))
    .replace('mm', minute.toString().padStart(2, '0'))
    .replace('ss', second.toString().padStart(2, '0'));
}

/**
 * 获取当前季节
 */
const getCurrentSeason = () => {
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

/**
 * 根据天气映射图标名称
 * @param {String} weather 天气描述
 */
const mapWeatherToIcon = (weather) => {
  const weatherMap = {
    '晴朗': 'sunny',
    '晴': 'sunny',
    '多云': 'cloudy',
    '阴天': 'overcast',
    '小雨': 'light-rain',
    '中雨': 'light-rain',
    '大雨': 'heavy-rain',
    '暴雨': 'heavy-rain',
    '雷雨': 'thunder',
    '雪': 'snow',
    '雾霾': 'haze'
  };
  
  return weatherMap[weather] || 'sunny';
}

/**
 * 随机生成一个整数
 * @param {Number} min 最小值（包含）
 * @param {Number} max 最大值（包含）
 */
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * 计算营养值的百分比（相对于推荐摄入量）
 * @param {Number} value 营养值
 * @param {Number} recommended 推荐摄入量
 */
const calculateNutritionPercent = (value, recommended) => {
  if (!value || !recommended) return 0;
  return Math.min(100, (value / recommended) * 100);
}

/**
 * 生成营养建议
 * @param {Object} nutrition 营养信息对象
 */
const generateNutritionAdvice = (nutrition) => {
  let advice = '均衡的一日三餐应该包含适量的蛋白质、碳水化合物和脂肪。';
  
  // 推荐摄入量
  const recommendedCalories = 2000; // 每日推荐热量
  const recommendedProtein = 60; // 每日推荐蛋白质(g)
  const recommendedCarbs = 250; // 每日推荐碳水(g)
  const recommendedFat = 70; // 每日推荐脂肪(g)
  
  if (nutrition.calories < recommendedCalories * 0.7) {
    advice += '热量摄入偏低，可以适当增加食物量。';
  } else if (nutrition.calories > recommendedCalories * 1.2) {
    advice += '热量摄入偏高，建议减少高热量食物。';
  }
  
  if (nutrition.protein < recommendedProtein * 0.7) {
    advice += '蛋白质摄入不足，建议增加肉类、蛋、奶、豆制品等。';
  }
  
  if (nutrition.carbs < recommendedCarbs * 0.7) {
    advice += '碳水化合物摄入不足，可以适当增加米饭、面食等。';
  } else if (nutrition.carbs > recommendedCarbs * 1.2) {
    advice += '碳水化合物摄入偏高，建议减少主食摄入。';
  }
  
  if (nutrition.fat > recommendedFat * 1.2) {
    advice += '脂肪摄入偏高，建议减少油炸、油腻食物。';
  }
  
  return advice;
}

/**
 * 检查对象是否为空
 * @param {Object} obj 要检查的对象
 */
const isEmptyObject = (obj) => {
  return obj === null || obj === undefined || Object.keys(obj).length === 0;
}

/**
 * 深拷贝对象
 * @param {Object} obj 要拷贝的对象
 */
const deepClone = (obj) => {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }
  
  if (obj instanceof Array) {
    return obj.map(item => deepClone(item));
  }
  
  if (obj instanceof Object) {
    const copy = {};
    Object.keys(obj).forEach(key => {
      copy[key] = deepClone(obj[key]);
    });
    return copy;
  }
  
  return obj;
}

// 新增：获取 YYYY-MM-DD 格式的今日日期字符串
const getTodayDateString = () => {
  return formatTime(new Date(), 'YYYY-MM-DD');
}

module.exports = {
  formatTime,
  getCurrentSeason,
  mapWeatherToIcon,
  getRandomInt,
  calculateNutritionPercent,
  generateNutritionAdvice,
  isEmptyObject,
  deepClone,
  getTodayDateString // 导出新函数
}