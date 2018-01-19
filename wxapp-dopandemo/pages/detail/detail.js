// pages/detail/detail.js
var WxParse = require('../../wxParse/wxParse.js');
var post = require('../../data/posts-data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie:"",    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var moviesId=options.id;
    this.setData({
      moviesId: moviesId
    })
    console.log("接收到的id"+moviesId);
    var url = "https://api.douban.com/v2/movie/subject/"+ moviesId;
    post.http(url,this.getMoviesdetail);
    
    var isCollect= wx.getStorageSync("colloctValue");//电影是否被收藏（这里应该是有所有电影对象组成的数据）
    if(isCollect){//缓存数据是存在的
      var collectValue = isCollect[moviesId];//根据id找到当前电影的收藏情况
        this.setData({
          collection: collectValue
        })
    }else{
      //本地没有缓存数据
        var isCollect={};
        isCollect[moviesId]=false;
        wx.setStorageSync("colloctValue", isCollect);        
    }

  },

  //分享功能
  shareTap:function(event){
    var list=["分享到朋友圈","分享给好友"]
    wx.showActionSheet({     
      itemList:list,
      itemColor:"#43CD80",
      success:function(res){}
    })
  },
  //收藏功能
  collectTap: function (event) {
    var that=this;   
    wx.getStorage({
      key: "colloctValue",
      success:function(res){
         var col=res.data;
         var colItem = col[that.data.moviesId];//获取到的当前电影的收藏状态

         //改变收藏状态，
         colItem =!colItem;
         col[that.data.moviesId] = colItem;
         that.showToast(col, colItem);        
      }
    });     
  },
  showToast: function (col, colItem){
    wx.setStorageSync("colloctValue", col);//更新缓存的数据  
   this.setData({
     collection: colItem
   })
    wx.showToast({
      title: colItem ? '收藏成功' : '取消收藏',
    })
  },
  getMoviesdetail:function(data){
     console.log("电影详细信息"+data);
     var img = data.images.small;
     var name=data.title;//电影名字
     var tag=data.genres;//电影标签
     var address=data.countries;//国家
     var year=data.year;//年份
     var director=[];//导演
     for (var index in data.directors){
       director.push(data.directors[index].name)
     }
    var summary=data.summary;//简介
    var casts=[];//演员
    for(var i in data.casts){    
      var temp={
        name: data.casts[i].name,
        avatars: data.casts[i].avatars.small,
        alt: data.casts[i].alt
      }
      casts.push(temp)     
    }
    console.log("演员信息" + casts[0].avatars);
    this.setData({
      movie:{
        img:img,
        name:name,
        tag:tag,
        address:address,
        year:year,
        director: director,
        summary:summary,
        casts:casts
      }
        
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