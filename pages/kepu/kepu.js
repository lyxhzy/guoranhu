// pages/kepu/kepu.js
import { request } from "../../request/index.js"; 
var paraname="page";
var value='1';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    knowledgeList:[
      {
        img:"../../icon/fruit.jpg",
        title:"如何保证营养均衡",
        author:"番茄机"
      },
      {
        img:"../../icon/fruit1.jpg",
        title:"",
        author:"西红柿"
      },
      {
        img:"../../icon/fruit2.jpg",
        title:"如何保证营养均衡",
        author:"水果同学"
      },
      {
        img:"../../icon/fruit3.jpg",
        title:"如何保证营养均衡",
        author:"香菜"
      },
      {
        img:"../../icon/fruit4.jpg",
        title:"如何保证营养均衡",
        author:"不爱吃鱼"
      },
      {
        img:"../../icon/fruit4.jpg",
        title:"白草莓是如何培育出来的？",
        author:"SKG"
      }
    ]

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