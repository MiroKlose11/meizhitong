// index.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Page({
  data: {
    motto: 'Hello World',
    userInfo: {
      avatarUrl: defaultAvatarUrl,
      nickName: '',
    },
    hasUserInfo: false,
    canIUseGetUserProfile: wx.canIUse('getUserProfile'),
    canIUseNicknameComp: wx.canIUse('input.type.nickname'),
    statusBarHeight: 20, // 状态栏高度，默认值
    // 轮播图数据
    banners: [
      {
        id: 1,
        imageUrl: 'https://img.freepik.com/free-photo/beautiful-asian-woman-bright-office-clothes-posing-isolated-wall_273443-4215.jpg'
      },
      {
        id: 2,
        imageUrl: 'https://img.freepik.com/free-photo/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept_74952-1523.jpg'
      },
      {
        id: 3,
        imageUrl: 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg'
      }
    ],
    
    // 轮播图图标数据
    bannerIcons: [
      {
        icon: 'https://img.icons8.com/color/96/marker.png',
        text: '行程管家'
      },
      {
        icon: 'https://img.icons8.com/color/96/car.png',
        text: '专车接送'
      },
      {
        icon: 'https://img.icons8.com/color/96/translate.png',
        text: '专业翻译'
      },
      {
        icon: 'https://img.icons8.com/color/96/hospital.png',
        text: '名医预约'
      }
    ],
    
    // 十个功能模块数据
    modules: [
      { 
        id: 1, 
        name: '医美资讯', 
        icon: 'https://img.icons8.com/color/96/news.png'
      },
      { 
        id: 2, 
        name: '合作院校', 
        icon: 'https://img.icons8.com/color/96/university.png'
      },
      { 
        id: 3, 
        name: '毕业生', 
        icon: 'https://img.icons8.com/color/96/student-male.png'
      },
      { 
        id: 4, 
        name: '医美机构', 
        icon: 'https://img.icons8.com/color/96/hospital-3.png'
      },
      { 
        id: 5, 
        name: '师资队伍', 
        icon: 'https://img.icons8.com/color/96/teacher.png'
      },
      { 
        id: 6, 
        name: '医美岗位', 
        icon: 'https://img.icons8.com/color/96/briefcase.png'
      },
      { 
        id: 7, 
        name: '课程开设', 
        icon: 'https://img.icons8.com/color/96/open-book.png'
      },
      { 
        id: 8, 
        name: '认证证书', 
        icon: 'https://img.icons8.com/color/96/certificate.png'
      },
      { 
        id: 9, 
        name: '优秀学员', 
        icon: 'https://img.icons8.com/color/96/student-center.png'
      },
      { 
        id: 10, 
        name: '人才交流', 
        icon: 'https://img.icons8.com/color/96/meeting.png'
      }
    ],
    
    // 精选内容数据
    articles: [
      {
        id: 1,
        title: '如何准备赴韩整形之旅',
        description: '详细的准备清单和注意事项，让您的韩国整形之旅安心无忧',
        imageUrl: 'https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg',
        viewCount: '2.3W+'
      },
      {
        id: 2,
        title: '整形前必读：如何选择靠谱医院',
        description: '专业医美顾问分享如何辨别医院资质及口碑评价方法',
        imageUrl: 'https://img.freepik.com/free-photo/woman-getting-face-mask-beauty-salon_23-2148872713.jpg',
        viewCount: '1.8W+'
      },
      {
        id: 3,
        title: '韩国整形恢复期食谱大全',
        description: '专为整形术后恢复期定制的营养食谱，加速恢复的同时兼顾美味',
        imageUrl: 'https://img.freepik.com/free-photo/flat-lay-batch-cooking-composition_23-2148765597.jpg',
        viewCount: '3.5W+'
      }
    ]
  },
  
  onLoad: function() {
    // 获取状态栏高度
    try {
      const systemInfo = wx.getSystemInfoSync();
      this.setData({
        statusBarHeight: systemInfo.statusBarHeight
      });
      // 动态设置状态栏高度
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#00a0e9'
      });
    } catch (e) {
      // 如果失败，使用默认高度
      console.error('获取系统信息失败', e);
    }
  },
  
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onChooseAvatar(e) {
    const { avatarUrl } = e.detail
    const { nickName } = this.data.userInfo
    this.setData({
      "userInfo.avatarUrl": avatarUrl,
      hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
    })
  },
  onInputChange(e) {
    const nickName = e.detail.value
    const { avatarUrl } = this.data.userInfo
    this.setData({
      "userInfo.nickName": nickName,
      hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
    })
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  // 轮播图点击事件
  navigateToBanner: function(e) {
    const bannerId = e.currentTarget.dataset.id;
    console.log('点击了轮播图', bannerId);
    // 暂时不跳转，仅记录点击
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    });
  },
  // 功能模块点击事件
  navigateToModule: function(e) {
    const moduleId = e.currentTarget.dataset.id;
    const module = this.data.modules.find(item => item.id === moduleId);
    console.log('点击了模块', module.name);
    
    // 暂时不跳转，仅记录点击
    wx.showToast({
      title: `${module.name}功能开发中`,
      icon: 'none'
    });
  },
  // 精选内容点击事件
  navigateToDetail: function(e) {
    const articleId = e.currentTarget.dataset.id;
    const article = this.data.articles.find(item => item.id === articleId);
    console.log('点击了文章', article.title);
    
    // 暂时不跳转，仅记录点击
    wx.showToast({
      title: '内容详情开发中',
      icon: 'none'
    });
  }
})
