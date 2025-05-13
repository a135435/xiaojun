const STORAGE_KEY_FOODS = 'foods';
const STORAGE_KEY_TODAY_MEAL = 'todayMealPlan';
const STORAGE_KEY_CATEGORIES = 'foodCategories';
const STORAGE_KEY_PLANNED_MEALS = 'plannedMeals';
const STORAGE_KEY_MEAL_TIMES = 'mealTimes';

// 初始食物数据示例
const initialFoods = [
  {
    id: 1700000000001, // 使用简单的数字ID或时间戳
    name: '番茄炒蛋',
    category: '中餐',
    tags: ['家常菜', '简单'],
    season: ['春', '夏', '秋', '冬'],
    weatherConditions: ['晴', '阴', '雨'],
    mealTime: ['午餐', '晚餐'],
    nutritionInfo: {
      calories: 200,
      protein: 12,
      carbs: 8,
      fat: 14
    }
  },
  {
    id: 1700000000002,
    name: '麻婆豆腐',
    category: '中餐',
    tags: ['川菜', '下饭'],
    season: ['秋', '冬'],
    weatherConditions: ['阴', '雨'],
    mealTime: ['午餐', '晚餐'],
    nutritionInfo: {
      calories: 350,
      protein: 15,
      carbs: 10,
      fat: 25
    }
  },
  {
    id: 1700000000003,
    name: '意式肉酱面',
    category: '西餐',
    tags: ['意面', '经典'],
    season: ['春', '夏', '秋', '冬'],
    weatherConditions: ['晴', '阴'],
    mealTime: ['午餐', '晚餐'],
    nutritionInfo: {
      calories: 450,
      protein: 20,
      carbs: 50,
      fat: 18
    }
  },
  {
    id: 1700000000004,
    name: '蔬菜沙拉',
    category: '轻食',
    tags: ['健康', '素食'],
    season: ['夏', '春'],
    weatherConditions: ['晴'],
    mealTime: ['午餐', '晚餐'],
    nutritionInfo: {
      calories: 150,
      protein: 5,
      carbs: 20,
      fat: 5
    }
  },
  // 早餐 (Category: 其他)
  { id: 1700000000005, name: '豆浆', category: '其他', tags: [], season: [], weatherConditions: [], mealTime: ['早餐'], nutritionInfo: { calories: 100, protein: 8, carbs: 10, fat: 3 } },
  { id: 1700000000006, name: '鸡蛋', category: '其他', tags: [], season: [], weatherConditions: [], mealTime: ['早餐'], nutritionInfo: { calories: 80, protein: 6, carbs: 1, fat: 5 } },
  { id: 1700000000007, name: '奶黄包', category: '其他', tags: [], season: [], weatherConditions: [], mealTime: ['早餐'], nutritionInfo: { calories: 150, protein: 4, carbs: 25, fat: 4 } },
  { id: 1700000000008, name: '玉米', category: '其他', tags: [], season: [], weatherConditions: [], mealTime: ['早餐'], nutritionInfo: { calories: 100, protein: 3, carbs: 22, fat: 1 } },
  { id: 1700000000009, name: '紫苏包', category: '其他', tags: [], season: [], weatherConditions: [], mealTime: ['早餐'], nutritionInfo: { calories: 180, protein: 5, carbs: 30, fat: 5 } },
  { id: 1700000000010, name: '西米露', category: '其他', tags: [], season: [], weatherConditions: [], mealTime: ['早餐'], nutritionInfo: { calories: 100, protein: 0, carbs: 25, fat: 0 } },
  { id: 1700000000011, name: '小笼包', category: '快餐', tags: [], season: [], weatherConditions: [], mealTime: ['早餐'], nutritionInfo: { calories: 150, protein: 0, carbs: 25, fat: 0 } },
  { id: 1700000000012, name: '煎蛋', category: '快餐', tags: [], season: [], weatherConditions: [], mealTime: ['早餐'], nutritionInfo: { calories: 150, protein: 0, carbs: 25, fat: 0 } },
  { id: 1700000000013, name: '煎饺', category: '快餐', tags: [], season: [], weatherConditions: [], mealTime: ['早餐'], nutritionInfo: { calories: 150, protein: 0, carbs: 25, fat: 0 } },
  { id: 1700000000014, name: '二楼河粉', category: '快餐', tags: [], season: [], weatherConditions: [], mealTime: ['早餐'], nutritionInfo: { calories: 150, protein: 0, carbs: 25, fat: 0 } },


  // 中餐 (Category: 中餐)
  { id: 1700000000010, name: '特惠鸡公煲', category: '中餐', tags: [], season: [], weatherConditions: [], mealTime: ['午餐', '晚餐'], nutritionInfo: { calories: 500, protein: 30, carbs: 40, fat: 25 } },
  { id: 1700000000011, name: '柳州螺蛳粉', category: '中餐', tags: [], season: [], weatherConditions: [], mealTime: ['午餐', '晚餐'], nutritionInfo: { calories: 450, protein: 15, carbs: 70, fat: 12 } },
  { id: 1700000000012, name: '石磨肠粉', category: '中餐', tags: [], season: [], weatherConditions: [], mealTime: ['早餐', '午餐'], nutritionInfo: { calories: 300, protein: 10, carbs: 45, fat: 8 } },
  { id: 1700000000013, name: '五谷鱼粉', category: '中餐', tags: [], season: [], weatherConditions: [], mealTime: ['午餐', '晚餐'], nutritionInfo: { calories: 400, protein: 20, carbs: 60, fat: 10 } },
  { id: 1700000000014, name: '玉米饺子', category: '中餐', tags: [], season: [], weatherConditions: [], mealTime: ['午餐', '晚餐'], nutritionInfo: { calories: 380, protein: 18, carbs: 55, fat: 10 } },
  // 快餐 (Category: 快餐)
  { id: 1700000000015, name: '沙县小吃', category: '快餐', tags: [], season: [], weatherConditions: [], mealTime: ['午餐', '晚餐'], nutritionInfo: { calories: 400, protein: 15, carbs: 60, fat: 12 } },
  { id: 1700000000016, name: '香辣小烧牛肉面', category: '快餐', tags: [], season: [], weatherConditions: [], mealTime: ['午餐', '晚餐'], nutritionInfo: { calories: 550, protein: 25, carbs: 70, fat: 18 } },
  { id: 1700000000017, name: '蟹黄拌面', category: '快餐', tags: [], season: [], weatherConditions: [], mealTime: ['午餐', '晚餐'], nutritionInfo: { calories: 500, protein: 20, carbs: 65, fat: 19 } },
  { id: 1700000000018, name: '麻辣烫', category: '快餐', tags: [], season: [], weatherConditions: [], mealTime: ['午餐', '晚餐'], nutritionInfo: { calories: 600, protein: 25, carbs: 50, fat: 35 } },
  // 晚餐 (Category: 中餐)
  { id: 1700000000019, name: '云南过桥米线', category: '中餐', tags: [], season: [], weatherConditions: [], mealTime: ['午餐', '晚餐'], nutritionInfo: { calories: 500, protein: 20, carbs: 80, fat: 10 } },
  { id: 1700000000020, name: '鱼豆腐米线', category: '中餐', tags: [], season: [], weatherConditions: [], mealTime: ['午餐', '晚餐'], nutritionInfo: { calories: 480, protein: 18, carbs: 75, fat: 12 } },
  { id: 1700000000021, name: '肥牛米线', category: '中餐', tags: [], season: [], weatherConditions: [], mealTime: ['午餐', '晚餐'], nutritionInfo: { calories: 550, protein: 25, carbs: 70, fat: 18 } },
  { id: 1700000000022, name: '牛杂面', category: '中餐', tags: [], season: [], weatherConditions: [], mealTime: ['午餐', '晚餐'], nutritionInfo: { calories: 520, protein: 28, carbs: 60, fat: 20 } },
  { id: 1700000000023, name: '羊杂汤', category: '中餐', tags: [], season: [], weatherConditions: [], mealTime: ['午餐', '晚餐'], nutritionInfo: { calories: 400, protein: 30, carbs: 10, fat: 25 } },
  // 下午茶 (Category: 其他)
  { id: 1700000000024, name: '生椰拿铁', category: '其他', tags: [], season: [], weatherConditions: [], mealTime: ['下午茶'], nutritionInfo: { calories: 250, protein: 5, carbs: 30, fat: 12 } },
  { id: 1700000000025, name: '西瓜汁', category: '其他', tags: [], season: [], weatherConditions: [], mealTime: ['下午茶'], nutritionInfo: { calories: 120, protein: 1, carbs: 30, fat: 0 } },
  { id: 1700000000026, name: '轻轻茉莉', category: '其他', tags: [], season: [], weatherConditions: [], mealTime: ['下午茶'], nutritionInfo: { calories: 100, protein: 0, carbs: 25, fat: 0 } },
  { id: 1700000000027, name: '椰汁西米露', category: '其他', tags: [], season: [], weatherConditions: [], mealTime: ['下午茶'], nutritionInfo: { calories: 150, protein: 0, carbs: 25, fat: 0 } },
  { id: 1700000000028, name: '橙C美式', category: '其他', tags: [], season: [], weatherConditions: [], mealTime: ['下午茶'], nutritionInfo: { calories: 150, protein: 0, carbs: 25, fat: 0 } },
  { id: 1700000000029, name: '柠檬茶', category: '其他', tags: [], season: [], weatherConditions: [], mealTime: ['下午茶'], nutritionInfo: { calories: 150, protein: 0, carbs: 25, fat: 0 } },
  { id: 1700000000030, name: '羽衣甘蓝纤体', category: '其他', tags: [], season: [], weatherConditions: [], mealTime: ['下午茶'], nutritionInfo: { calories: 250, protein: 0, carbs: 25, fat: 0 } },


];

// 初始分类数据
const initialCategories = ['中餐', '西餐', '快餐', '日料', '韩餐', '轻食', '其他'];

// 新增：初始餐次数据
const initialMealTimes = ['早餐', '午餐', '下午茶', '晚餐'];

module.exports = {
  STORAGE_KEY_FOODS,
  STORAGE_KEY_TODAY_MEAL,
  STORAGE_KEY_CATEGORIES,
  STORAGE_KEY_PLANNED_MEALS,
  STORAGE_KEY_MEAL_TIMES,
  initialFoods,
  initialCategories,
  initialMealTimes
};