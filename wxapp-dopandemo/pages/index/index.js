
var postData = require('../../data/posts-data.js');
//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrl:"",
    movie_rank:""
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var imgUrl ="https://api.douban.com/v2/movie/in_theaters";//轮播数据
    postData.http(imgUrl,this.getSwiperdata);
    
    var hotMovies ="https://api.douban.com/v2/movie/top250";//电影排行
    postData.http(hotMovies,this.getRankdata);

  },
  getSwiperdata:function(data){
    var img=[];  
    for (var idx in data.subjects){ 
      if(idx<3)  {
        var imgitem = data.subjects[idx].images.large;
        img.push(imgitem);  
      }   
    }  
    this.setData({
      imgUrl:img
    })
  },
  getRankdata:function(data){
     var  rankMovies=[];
      
     for(var idx in data.subjects){
       var img = data.subjects[idx].images.small;
       var title = data.subjects[idx].title;
       var tag = data.subjects[idx].genres;
       var id = data.subjects[idx].id;
      
       var temp={
         img:img,
         title:title,
         tag:tag,
         id:id
       }
       rankMovies.push(temp);
     }
     this.setData({
       movie_rank: rankMovies
     })
  },
  onShowdetail:function(event){
    var index = event.currentTarget.dataset.idx;
    console.log("当前id"+index);
    wx.navigateTo({
      url: '../detail/detail?id='+index,
    })
  },

  getUserInfo: function(e){
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  
})
