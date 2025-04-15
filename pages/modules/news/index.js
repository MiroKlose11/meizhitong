Page({
  data: {
    statusBarHeight: 20, // 状态栏高度，默认值
    moduleId: null,      // 模块ID
    moduleName: '',      // 模块名称
    moduleIcon: '',      // 模块图标
    
    // 文章列表
    articles: [
      {
        id: 1,
        title: '玻尿酸注射的解剖动作方法（注射技巧、配比、注意事项等）',
        date: '2023-04-13',
        image: 'https://img.freepik.com/free-photo/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept_74952-1523.jpg',
        desc: '本文详细讲解玻尿酸注射的解剖层次、注射技巧与操作方法'
      },
      {
        id: 2,
        title: '肉毒素注射后常见不良反应及科学应对建议',
        date: '2023-04-12',
        image: 'https://img.freepik.com/free-photo/woman-getting-face-mask-beauty-salon_23-2148872713.jpg',
        desc: '肉毒素注射后可能出现的不良反应及应对措施'
      },
      {
        id: 3,
        title: '肉毒素注射动态部位的精准层次与布点策略',
        date: '2023-04-11',
        image: 'https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg',
        desc: '肉毒素注射在面部动态区域的精准布点与层次控制'
      },
      {
        id: 4,
        title: '肉毒素缩小鼻翼、上提鼻尖、治疗露龈笑注射攻略',
        date: '2023-04-10',
        image: 'https://img.freepik.com/free-photo/close-up-portrait-young-woman-isolated-pink_155003-42072.jpg',
        desc: '肉毒素在鼻部周围区域的三大经典应用详解'
      }
    ]
  },

  onLoad: function(options) {
    // 获取状态栏高度
    try {
      const systemInfo = wx.getSystemInfoSync();
      this.setData({
        statusBarHeight: systemInfo.statusBarHeight
      });
    } catch (e) {
      console.error('获取系统信息失败', e);
    }
    
    // 获取页面参数
    if (options) {
      this.setData({
        moduleId: options.id || null,
        moduleName: options.name || '医美资讯'
      });
      
      // 设置页面标题
      wx.setNavigationBarTitle({
        title: this.data.moduleName
      });
      
      // 根据模块ID设置对应的图标
      this.setModuleIcon(options.id);
    }
  },
  
  // 设置模块图标
  setModuleIcon: function(id) {
    const iconMap = {
      '1': 'https://img.icons8.com/color/96/news.png',
      '2': 'https://img.icons8.com/color/96/university.png',
      '3': 'https://img.icons8.com/color/96/student-male.png',
      '4': 'https://img.icons8.com/color/96/hospital-3.png',
      '5': 'https://img.icons8.com/color/96/teacher.png',
      '6': 'https://img.icons8.com/color/96/briefcase.png',
      '7': 'https://img.icons8.com/color/96/open-book.png',
      '8': 'https://img.icons8.com/color/96/certificate.png',
      '9': 'https://img.icons8.com/color/96/student-center.png',
      '10': 'https://img.icons8.com/color/96/meeting.png'
    };
    
    this.setData({
      moduleIcon: iconMap[id] || 'https://img.icons8.com/color/96/module.png'
    });
  },
  
  // 返回上一页
  navigateBack: function() {
    wx.navigateBack({
      delta: 1
    });
  },
  
  // 跳转到文章详情页
  navigateToArticle: function(e) {
    const articleId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/article/detail?id=' + articleId,
      success: function() {
        console.log('跳转到文章详情页成功');
      },
      fail: function(error) {
        console.error('跳转到文章详情页失败', error);
        wx.showToast({
          title: '跳转失败',
          icon: 'none'
        });
      }
    });
  }
}) 