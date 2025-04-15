// my.js
Page({
  data: {
    userInfo: {
      avatar: 'https://via.placeholder.com/100/1989fa/ffffff?text=头像',
      name: '医美学员',
      level: '专业级',
      points: 1580
    },
    menuItems: [
      { id: 1, icon: '../../images/order.png', name: '我的订单', badge: 0 },
      { id: 2, icon: '../../images/collect.png', name: '我的收藏', badge: 5 },
      { id: 3, icon: '../../images/coupon.png', name: '我的优惠券', badge: 2 },
      { id: 4, icon: '../../images/history.png', name: '学习记录', badge: 0 },
      { id: 5, icon: '../../images/cert.png', name: '我的证书', badge: 0 },
      { id: 6, icon: '../../images/feedback.png', name: '意见反馈', badge: 0 },
      { id: 7, icon: '../../images/setting.png', name: '设置', badge: 0 }
    ]
  },

  onLoad: function() {
    wx.setNavigationBarTitle({
      title: '个人中心'
    });
  },

  navigateToMenu: function(e) {
    const menuId = e.currentTarget.dataset.id;
    const menu = this.data.menuItems.find(item => item.id === menuId);
    wx.showToast({
      title: `${menu.name}功能开发中`,
      icon: 'none'
    });
  }
}) 