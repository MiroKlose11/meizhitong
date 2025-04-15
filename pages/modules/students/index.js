Page({
  data: {
    statusBarHeight: 20, // 状态栏高度，默认值
    moduleId: null,      // 模块ID
    moduleName: '',      // 模块名称
    moduleIcon: ''       // 模块图标
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
        moduleName: options.name || '优秀学员'
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
  }
}) 