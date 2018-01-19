// pages/catagory/catagory.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allBoxshow:true,//全部分类
    typeBoxshow: true,//地区分类
    localBoxshow:true,//类别分类
    typeData:"全部"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  clickChangeTap:function(event){
      var index=event.target.dataset.idx;
      switch(index){
        //全部分类
         case "1":
         this.setData({
           allBoxshow:!this.data.allBoxshow
         })
         break;
        //地区分类
        case "2":
          this.setData({
            typeBoxshow: !this.data.typeBoxshow
          })
         break;
        //类别分类
        case "3":
          this.setData({
            localBoxshow: !this.data.localBoxshow
         })
         break;
         default:
           console.log("没有该分类");
      }
  }, 

  selectData:function(event){
     var seletData=event.target.dataset.type;
     console.log("选中的数据：" + seletData);
     this.setData({
       typeData: seletData,

     })
  },
  //seachbox搜索跳转
  searchtap:function(event){
     wx.navigateTo({
       url: '../search/search',
     })
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