// pages/login/login.js
var url=" ";
var nickName=" ";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    code:" ",
    userData:{},
    token:" "
  },
  handleGetUserInfo(){
    var that = this;
    wx.showModal({
      title: "提示",
      content: "是否允许获取微信昵称和头像？",
      success(res) {
        if (res.confirm) {
          wx.getUserProfile({
            desc: "用于完善用户资料", // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
            success: (res) => {
              that.setData({
                userInfo: res.userInfo
              });
              url=res.userInfo.avatarUrl;
              nickName=res.userInfo.name;
              wx.setStorageSync("userInfo", res.userInfo);
              wx.navigateBack({
                delta: 1,
              });
            },
            fail: function (err) {
              console.log(err);
            },
          });
        }
      },
    });
    wx.login({
      success: function(res) {
        if (res.code) {  //wx.login获取code。
          console.log(res.code);
          that.setData({
            code: res.code
          });
          //发起网络请求
         /* wx.request({
          url: 'https://orall.top/fruit/api/getinfo/login',
          method:'POST',
          //向后端发送的数据
            data: {
              code: res.code,
              avatarUrl:url,
              name:nickName
                 //将code发送到后台服务器。
            },
            header: { 
                  "Content-Type": "application/x-www-form-urlencoded" //POST方式是这个
          },
          success(res){
            console.log(res.data)
            that.setData({
              userData: res.data
            });
            wx.setStorageSync("token", res.data.data.token);
          }
          })*/
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})