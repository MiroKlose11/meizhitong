Page({
  data: {
    statusBarHeight: 20, // 状态栏高度，默认值
    articleId: null,
    article: {
      title: '肉毒素缩小鼻翼、上提鼻尖、治疗露龈笑注射攻略',
      author: '花瑶医美',
      date: '2023-04-10',
      coverImage: 'https://img.freepik.com/free-photo/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept_74952-1523.jpg',
      content: `
        <div style="font-size: 32rpx; line-height: 1.8; color: #333;">
          <p>今天我们将聚焦肉毒素在鼻部周围区域的三大经典应用：</p>
          <p style="color: #ff5252; font-weight: bold;">缩小鼻翼、上提鼻尖、治疗露龈笑</p>
          <p>通过分享相关皮肤群体（提上唇露龈肌、鼻中隔下降肌肉、提上唇肌等）的解剖定位与动态机制，结合注射点位，剂量与展效的实操建议，分享肉毒素在鼻部周围区域的适应症和注射操控技巧。</p>
          
          <p style="font-weight: bold; margin-top: 30rpx;">一、肉毒素缩小鼻翼</p>
          <p>鼻翼肥大是东亚人群常见面部特征，通过肉毒素注射鼻翼肌和鼻翼缩肌，可以达到缩小鼻翼宽度的效果。</p>
          <p>注射要点：</p>
          <ul style="padding-left: 30rpx; margin: 20rpx 0;">
            <li>剂量：每侧2-4个单位</li>
            <li>注射深度：皮下浅层</li>
            <li>注意避开血管丰富区域</li>
          </ul>
          
          <p style="font-weight: bold; margin-top: 30rpx;">二、肉毒素上提鼻尖</p>
          <p>通过注射鼻小肌，抑制其下拉鼻尖的作用，使鼻尖自然上翘。</p>
          <p>注射要点：</p>
          <ul style="padding-left: 30rpx; margin: 20rpx 0;">
            <li>剂量：2-4个单位</li>
            <li>位置：鼻小肌（鼻尖下方）</li>
            <li>效果持续时间：3-4个月</li>
          </ul>
          
          <p style="font-weight: bold; margin-top: 30rpx;">三、肉毒素治疗露龈笑</p>
          <p>露龈笑是指微笑时上唇上提过多，露出过多牙龈的情况。通过注射上唇提肌和上唇外侧提肌，可以减少这种情况。</p>
          <p>注射要点：</p>
          <ul style="padding-left: 30rpx; margin: 20rpx 0;">
            <li>剂量：每侧2-3个单位</li>
            <li>位置：鼻翼两侧，嘴角上方</li>
            <li>注意不要过量，避免影响表情自然度</li>
          </ul>
          
          <p style="font-weight: bold; margin-top: 30rpx;">注意事项</p>
          <p>1. 术前详细评估患者面部解剖结构和动态表情</p>
          <p>2. 选择合适剂量，避免过度治疗</p>
          <p>3. 注射后2周内避免按压注射区域</p>
          <p>4. 效果一般在3-7天内逐渐显现</p>
        </div>
      `
    },
    qrCodeImage: 'https://img.icons8.com/ios/250/qr-code.png',
    relatedArticles: [
      {
        id: 1,
        title: '玻尿酸注射的解剖动作方法（注射技巧、配比、注意事项等）',
        date: '2023-04-13',
        image: 'https://img.freepik.com/free-photo/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept_74952-1523.jpg'
      },
      {
        id: 2,
        title: '肉毒素注射后常见不良反应及科学应对建议',
        date: '2023-04-12',
        image: 'https://img.freepik.com/free-photo/woman-getting-face-mask-beauty-salon_23-2148872713.jpg'
      },
      {
        id: 3,
        title: '肉毒素注射动态部位的精准层次与布点策略',
        date: '2023-04-11',
        image: 'https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg'
      },
      {
        id: 4,
        title: '肉毒素缩小鼻翼、上提鼻尖、治疗露龈笑注射攻略',
        date: '2023-04-10',
        image: 'https://img.freepik.com/free-photo/close-up-portrait-young-woman-isolated-pink_155003-42072.jpg'
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
    
    // 获取文章ID
    if (options && options.id) {
      this.setData({
        articleId: options.id
      });
      
      // 加载文章数据（实际项目中应该从服务器获取）
      this.loadArticleData(options.id);
    }
  },
  
  // 加载文章数据
  loadArticleData: function(articleId) {
    // 实际项目中，这里应该是从服务器获取文章数据
    // 这里使用模拟数据
    console.log('加载文章ID:', articleId);
    
    // 文章已在data中预设好了，实际项目中应该通过API获取
  },
  
  // 返回上一页
  navigateBack: function() {
    wx.navigateBack({
      delta: 1
    });
  },
  
  // 跳转到其他文章
  navigateToArticle: function(e) {
    const articleId = e.currentTarget.dataset.id;
    
    // 实际项目中应该跳转到新的文章页面
    // 这里为了演示，直接重新加载当前页面
    wx.redirectTo({
      url: '/pages/article/detail?id=' + articleId
    });
  }
}) 