// study.js
Page({
  data: {
    courses: [
      {
        id: 1,
        title: '医美咨询师核心技能提升',
        teacher: '王教授',
        progress: 30,
        coverUrl: 'https://via.placeholder.com/300x200/1989fa/ffffff?text=医美咨询课程'
      },
      {
        id: 2,
        title: '医疗美容机构运营管理',
        teacher: '李教授',
        progress: 60,
        coverUrl: 'https://via.placeholder.com/300x200/36cfc9/ffffff?text=运营管理'
      },
      {
        id: 3,
        title: '高端医美客户沟通技巧',
        teacher: '张教授',
        progress: 10,
        coverUrl: 'https://via.placeholder.com/300x200/0064d2/ffffff?text=沟通技巧'
      }
    ]
  },

  onLoad: function() {
    wx.setNavigationBarTitle({
      title: '我的学习'
    });
  },

  navToCourseDetail: function(e) {
    const courseId = e.currentTarget.dataset.id;
    wx.showToast({
      title: '课程详情开发中',
      icon: 'none'
    });
  }
}) 