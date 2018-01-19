// pages/person/person.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    logo: "../../image/pic1.png",
    address:'',
    tel:"028-909090"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     this.mapCtx=wx.createMapContext('myMap');
  },

 //上传图片
  onchangeLogoTap:function(event){
    var that=this;
     wx.chooseImage({
       count:1,//限制上传图片的个数为1
       sizeType:['original','compressed'],//图片大小
       sourceType:['album','camera'],//相册或者相机
       success: function(res) {
         var temFilePath=res.tempFilePaths;
         console.log("上传的图片地址"+temFilePath);
         //that.upLoadserver(that, temFilePath); //调用上传到服务器方法
         that.upLoadlocal(that,temFilePath);//调用上传到本地方法
       },
     }) 
  },
  //图片上传到服务器
  upLoadserver:function(page,path){
      wx.showToast({
        title:"正在上传",
        icon:"loading"
      }),
      wx.uploadFile({
        url: 'xxx',//开发者服务器(这里由于没有后台支持，暂时没有服务器地址)
        filePath: path[0],//上传的数据是数组
        header:{"Content-Type":"multipart/form-data"},
        name: 'logo',//文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容
        success:function(res){
            if(res.statusCode!=200){//服务器返回的数据
                wx.showToast({
                  title: '上传失败',                  
                  image:"../../image/sad.png"
                })
                return;
            } 
           // var dataImg=res.data;
            page.setData({//上传成功修改显示头像(修改页面data的数据)
              logo: path[0]
            })
        },
        fail:function(e){
          wx.showToast({
            title: '上传失败',          
            image: "../../image/sad.png"
          })
        },
        complete:function(){

        }

      })
  },
  //图片上传到本地
  upLoadlocal: function (page,path){
      page.setData({
        logo: path[0]
      })
      //将图片保存到本地(这里还不是很清楚，暂时放下)
      wx.saveFile({
        tempFilePath: '../../image/',
        success:function(res){
          wx.showToast({
            title: '保存成功',
          })
          console.log(res)
        }
      })
     
  },
//获取地址

getAddressTap:function(event){
  var that=this;
  // wx.getLocation({
  //   success: function(res) {
  //     console.log(res.latitude);
  //      that.setData({
  //        address: res.latitude
  //      })
  //   },
  // }),
  //打开地图选择位置  
  wx.chooseLocation({
    success: function(res) {
      console.log(res.name);
      that.setData({
        address: res.address
      })
    },
  })
    //使用微信内置地图查看（不太清楚）
    
},
//拨打客服热线
call:function(event){
  var phonenumber = this.data.tel;
  wx.makePhoneCall({
    phoneNumber: phonenumber,
    success:function(res){
       console.log("调用成功")
    },
    fail:function(res){
      console.log("调用失败")
    },
    complete:function(res){
      
    }
  })
},
//提交表单
  formSumbit:function(event){
     console.log('form发生了submit事件，携带数据：'+event.detail.value.name)
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