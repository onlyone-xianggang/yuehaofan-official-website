
// 接口列表
export default {
  homBanner: '/app-api/robo/banner/page', // 首页轮播
  userLogin: { // 登录部分 /app-api/member/auth/weixin-mini-app-login
    weixin: '/app-api/member/auth/weixin-mini-app-login', // 微信登录
	phoneM: '/app-api/member/auth/login', // 手机密码登录
	phoneY: '/app-api/member/auth/sms-login', // 手机短信登录
	getPhoneCode: '/app-api/member/auth/send-sms-code', // 获取手机验证码
	getUserInfo: '/app-api/member/user/get', // 获取用户信息
	modifyInfo: '/app-api/member/user/update' // 修改个人信息
  },
  AIlawyer: {
	questions: '/app-api/legalmind/ai-service-rating/create',
	evaluate: '/app-api/legalmind/ai-summary/comment',
  },
  AILegalAdvice: {
    QAndA: '/app-api/legalmind/ai-summary/stream',
	newChat: '/app-api/legalmind/ai-summary/clearHistory',
	ClearRecord: '/app-api/legalmind/category/last',
	problemList: '/law/ai/legalmind/category',
	QAndAEvaluate: '/app-api/legalmind/ai-summary/comment',
	answerInformationFlow: '/app-api/legalmind/ai-summary/stream',
  },
  area: {
    areaList: '/app-api/system/area/tree' // 地区级联菜单
  },
  productionInfo: {
	upImg: '/app-api/infra/file/upload', // 图片上传地址
  },
  admin: { // 管理员查看类
    // 整机产品
    createProductInfo: '/admin-api/robo/product-info/create', // 创建整机产品信息
	updateProductInfo: '/admin-api/robo/product-info/update', // 更新/修改信息
	productInfoList: '/admin-api/robo/product-info/page', // 整机产品信息列表
	productInfo: '/admin-api/robo/product-info/get', // 整机产品信息详情
	deleteProductInfo: '/admin-api/robo/product-info/delete', // 删除产品信息
	// 品牌商
	createBrandaInfo: '/admin-api/robo/brand-info/create', // 创建品牌商信息
	brandInfoList: '/admin-api/robo/brand-info/page', // 品牌商信息列表
	brandInfo: '/admin-api/robo/brand-info/get', // 品牌商信息
	deleteBrandInfo: '/admin-api/robo/brand-info/delete', // 删除品牌商信息
	updateBrandInfo: '/admin-api/robo/brand-info/update', // 更新品牌商信息
  },
  merchantUser: { // 商家用户查看类
    // 整机产品
    createProductInfo: '/app-api/robo/product-info/mine/create', // 创建整机产品信息
	updateProductInfo: '/app-api/robo/product-info/mine/update', // 更新/修改信息
	productInfoList: '/app-api/robo/product-info/mine/page', // 整机产品信息列表
	productInfo: '/app-api/robo/product-info/mine/get', // 整机产品信息详情
	deleteProductInfo: '/app-api/robo/product-info/mine/delete', // 删除产品信息
	// 品牌商
	createBrandaInfo: '/app-api/robo/brand-info/mine/create', // 创建品牌商信息
	brandInfoList: '/app-api/robo/brand-info/mine/page', // 品牌商信息列表
	brandInfo: '/app-api/robo/brand-info/mine/get', // 品牌商信息
	deleteBrandInfo: '/app-api/robo/brand-info/mine/delete', // 删除品牌商信息
	updateBrandInfo: '/app-api/robo/brand-info/mine/update', // 更新品牌商信息
	// 零部件
	createPartsInfo: '/app-api/robo/component-info/mine/create', // 创建零部件信息
	partsInfoList: '/app-api/robo/component-info/mine/page', // 零部件信息列表
	partsInfo: '/app-api/robo/component-info/mine/get', // 零部件信息
	deletePartsInfo: '/app-api/robo/component-info/mine/delete', // 删除零部件信息
	updatePartsInfo: '/app-api/robo/component-info/mine/update', // 更新零部件信息
	// 这里开始是社区信息列表
	knowledgePlanet: { // 知识星球
	  create: '/app-api/robo/knowledge-planet/mine/create', // 创建知识星球信息
	  infoList: '/app-api/robo/knowledge-planet/mine/page', // 获取知识星球信息列表
	  info: '/app-api/robo/knowledge-planet/mine/get', // 获取知识星球详情信息
	  update: '/app-api/robo/knowledge-planet/mine/update', // 更新知识星球信息
	  delete: '/app-api/robo/knowledge-planet/mine/delete', // 删除知识星球信息
	},
	course: { // 课程
	  create: '/app-api/robo/course/mine/create', // 创建课程信息
	  infoList: '/app-api/robo/course/mine/page', // 获取课程信息列表
	  info: '/app-api/robo/course/mine/get', // 获取课程详情信息
	  update: '/app-api/robo/course/mine/update', // 更新课程信息
	  delete: '/app-api/robo/course/mine/delete', // 删除课程信息
	},
	live: { // 直播
	  create: '/app-api/robo/live/mine/create', // 创建直播信息
	  infoList: '/app-api/robo/live/mine/page', // 获取直播信息列表
	  info: '/app-api/robo/live/mine/get', // 获取直播详情信息
	  update: '/app-api/robo/live/mine/update', // 更新直播信息
	  delete: '/app-api/robo/live/mine/delete', // 删除直播信息
	},
	association: { // 社群
	  create: '/app-api/robo/community/mine/create', // 创建社群信息
	  infoList: '/app-api/robo/community/mine/page', // 获取社群信息列表
	  info: '/app-api/robo/community/mine/get', // 获取社群详情信息
	  update: '/app-api/robo/community/mine/update', // 更新社群信息
	  delete: '/app-api/robo/community/mine/delete', // 删除社群信息
	},
	activity: { // 活动
	  create: '/app-api/robo/activity/mine/create', // 创建活动信息
	  infoList: '/app-api/robo/activity/mine/page', // 获取活动信息列表
	  info: '/app-api/robo/activity/mine/get', // 获取活动详情信息
	  update: '/app-api/robo/activity/mine/update', // 更新活动信息
	  delete: '/app-api/robo/activity/mine/delete', // 删除活动信息
	},
	// 这里开始是服务类目
	projectFinancing: { // 项目融资
	  create: '/app-api/robo/project-financing/mine/create', // 创建项目融资信息
	  infoList: '/app-api/robo/project-financing/mine/page', // 获取项目融资信息列表
	  info: '/app-api/robo/project-financing/mine/get', // 获取项目融资需求信息
	  update: '/app-api/robo/project-financing/mine/update', // 更新项目融资信息
	  delete: '/app-api/robo/project-financing/mine/delete', // 删除项目融资信息
	}, 
	productCustomization: { // 产品定制
	  create: '/app-api/robo/product-customization/mine/create', // 创建产品定制信息
	  infoList: '/app-api/robo/product-customization/mine/page', // 获取产品定制信息列表
	  info: '/app-api/robo/product-customization/mine/get', // 获取产品定制需求信息
	  update: '/app-api/robo/product-customization/mine/update', // 更新产品定制信息
	  delete: '/app-api/robo/product-customization/mine/delete', // 删除产品定制信息
	}, 
	systemScheme: { // 系统方案
	  create: '/app-api/robo/system-solution/mine/create', // 创建系统方案信息
	  infoList: '/app-api/robo/system-solution/mine/page', // 获取系统方案信息列表
	  info: '/app-api/robo/system-solution/mine/get', // 获取系统方案信息
	  update: '/app-api/robo/system-solution/mine/update', // 更新系统方案信息
	  delete: '/app-api/robo/system-solution/mine/delete', // 删除系统方案信息
	}, 
	productOEM: { // 产品代工
	  create: '/app-api/robo/product-manufacturing/mine/create', // 创建产品代工信息
	  infoList: '/app-api/robo/product-manufacturing/mine/page', // 获取产品代工信息列表
	  info: '/app-api/robo/product-manufacturing/mine/get', // 获取产品代工信息
	  update: '/app-api/robo/product-manufacturing/mine/update', // 更新产品代工信息
	  delete: '/app-api/robo/product-manufacturing/mine/delete', // 删除产品代工信息
	}, 
	hire: { // 招聘
	  create: '/app-api/robo/job-recruitment/mine/create', // 创建招聘信息
	  infoList: '/app-api/robo/job-recruitment/mine/page', // 获取招聘信息列表
	  info: '/app-api/robo/job-recruitment/mine/get', // 获取招聘信息
	  update: '/app-api/robo/job-recruitment/mine/update', // 更新招聘信息
	  delete: '/app-api/robo/job-recruitment/mine/delete', // 删除招聘信息
	}, 
	industryResearchReport: { // 行业研报
	  create: '/app-api/robo/industry-report/mine/create', // 创建行业研报信息
	  infoList: '/app-api/robo/industry-report/mine/page', // 获取行业研报信息列表
	  info: '/app-api/robo/industry-report/mine/get', // 获取行业研报信息
	  update: '/app-api/robo/industry-report/mine/update', // 更新行业研报信息
	  delete: '/app-api/robo/industry-report/mine/delete', // 删除行业研报信息
	}, 
	industryConsulting: { // 产业咨询
	  create: '/app-api/robo/industry-consulting/mine/create', // 创建产业咨询信息
	  infoList: '/app-api/robo/industry-consulting/mine/page', // 获取产业咨询信息列表
	  info: '/app-api/robo/industry-consulting/mine/get', // 获取产业咨询信息
	  update: '/app-api/robo/industry-consulting/mine/update', // 更新产业咨询信息
	  delete: '/app-api/robo/industry-consulting/mine/delete', // 删除产业咨询信息
	}, 
	afterSales: { // 售后
	  create: '/app-api/robo/after-sales-service/mine/create', // 创建售后信息
	  infoList: '/app-api/robo/after-sales-service/mine/page', // 获取售后信息列表
	  info: '/app-api/robo/after-sales-service/mine/get', // 获取售后信息
	  update: '/app-api/robo/after-sales-service/mine/update', // 更新售后信息
	  delete: '/app-api/robo/after-sales-service/mine/delete', // 删除售后信息
	}, 
	maintenance: { // 维保
	  create: '/app-api/robo/maintenance-service/mine/create', // 创建维保信息
	  infoList: '/app-api/robo/maintenance-service/mine/page', // 获取维保信息列表
	  info: '/app-api/robo/maintenance-service/mine/get', // 获取维保信息
	  update: '/app-api/robo/maintenance-service/mine/update', // 更新维保信息
	  delete: '/app-api/robo/maintenance-service/mine/delete', // 删除维保信息
	}, 
	customerService: { // 客服
	  create: '/app-api/robo/customer-service/mine/create', // 创建客服信息
	  infoList: '/app-api/robo/customer-service/mine/page', // 获取客服信息列表
	  info: '/app-api/robo/customer-service/mine/get', // 获取客服信息
	  update: '/app-api/robo/customer-service/mine/update', // 更新客服信息
	  delete: '/app-api/robo/customer-service/mine/delete', // 删除客服信息
	}, 
	dataTraining: { // 数据训练
	  create: '/app-api/robo/data-training/mine/create', // 创建数据训练信息
	  infoList: '/app-api/robo/data-training/mine/page', // 获取数据训练信息列表
	  info: '/app-api/robo/data-training/mine/get', // 获取数据训练信息
	  update: '/app-api/robo/data-training/mine/update', // 更新数据训练信息
	  delete: '/app-api/robo/data-training/mine/delete', // 删除数据训练信息
	}
  },
  ordinaryUser: { // 普通用户查看类
    // 整机产品
	productInfoList: '/app-api/robo/brand-info/page', // 整机产品信息列表
	productInfo: '/app-api/robo/brand-info/get', // 整机产品信息详情
	// 品牌商
	brandInfoList: '/app-api/robo/brand-info/page', // 品牌商信息列表
	brandInfo: '/app-api/robo/brand-info/get', // 品牌商信息
	// 零部件
	partsInfoList: '/app-api/robo/component-info/page', // 零部件信息列表
	partsInfo: '/app-api/robo/component-info/get', // 零部件信息
	// 社群导航
	communityNav: '/app-api/robo/community-nav/list', // 社群导航列表
	knowledgePlanet: { // 知识星球
	  infoList: '/app-api/robo/knowledge-planet/page', // 获取知识星球信息列表
	  info: '/app-api/robo/knowledge-planet/get', // 获取知识星球详情信息
	},
	course: { // 课程
	  infoList: '/app-api/robo/course/page', // 获取课程信息列表
	  info: '/app-api/robo/course/get', // 获取课程详情信息
	},
	live: { // 直播
	  infoList: '/app-api/robo/live/page', // 获取直播信息列表
	  info: '/app-api/robo/live/get', // 获取直播详情信息
	},
	association: { // 社群
	  infoList: '/app-api/robo/community/page', // 获取社群信息列表
	  info: '/app-api/robo/community/get', // 获取社群详情信息
	},
	activity: { // 活动
	  infoList: '/app-api/robo/activity/page', // 获取活动信息列表
	  info: '/app-api/robo/activity/get', // 获取活动详情信息
	},
	// 这里开始是项目服务
	projectFinancing: { // 项目融资
	  infoList: '/app-api/robo/project-financing/page', // 获取项目融资信息列表
	  info: '/app-api/robo/project-financing/get', // 获取项目融资需求信息
	}, 
	productCustomization: { // 产品定制
	  infoList: '/app-api/robo/product-customization/page', // 获取产品定制信息列表
	  info: '/app-api/robo/product-customization/get', // 获取产品定制需求信息
	}, 
	systemScheme: { // 系统方案
	  infoList: '/app-api/robo/system-solution/page', // 获取系统方案信息列表
	  info: '/app-api/robo/system-solution/get', // 获取系统方案信息
	}, 
	productOEM: { // 产品代工
	  infoList: '/app-api/robo/product-manufacturing/page', // 获取产品代工信息列表
	  info: '/app-api/robo/product-manufacturing/get', // 获取产品代工信息
	}, 
	hire: { // 招聘
	  infoList: '/app-api/robo/job-recruitment/page', // 获取招聘信息列表
	  info: '/app-api/robo/job-recruitment/get', // 获取招聘信息
	}, 
	industryResearchReport: { // 行业研报
	  infoList: '/app-api/robo/industry-report/page', // 获取行业研报信息列表
	  info: '/app-api/robo/industry-report/get', // 获取行业研报信息
	}, 
	industryConsulting: { // 产业咨询
	  infoList: '/app-api/robo/industry-consulting/page', // 获取产业咨询信息列表
	  info: '/app-api/robo/industry-consulting/get', // 获取产业咨询信息
	}, 
	afterSales: { // 售后
	  infoList: '/app-api/robo/after-sales-service/page', // 获取售后信息列表
	  info: '/app-api/robo/after-sales-service/get', // 获取售后信息
	}, 
	maintenance: { // 维保
	  infoList: '/app-api/robo/maintenance-service/page', // 获取维保信息列表
	  info: '/app-api/robo/maintenance-service/get', // 获取维保信息
	}, 
	customerService: { // 客服
	  infoList: '/app-api/robo/customer-service/page', // 获取客服信息列表
	  info: '/app-api/robo/customer-service/get', // 获取客服信息
	}, 
	dataTraining: { // 数据训练
	  infoList: '/app-api/robo/data-training/page', // 获取数据训练信息列表
	  info: '/app-api/robo/data-training/get', // 获取数据训练信息
	}
  },
}
