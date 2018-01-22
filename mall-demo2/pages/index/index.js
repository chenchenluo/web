//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    bannerImgUrl: [
        "../../img/swiper/timeline04.jpg", 
        "../../img/swiper/timeline05.jpg",  
        "../../img/swiper/timeline06.jpg"
        ],
    products: [
        {
        imgUrl: "../../img/product/whyimg04.jpg",
        name: "相机",
        price:"290"
        },
        {
          imgUrl: "../../img/product/whyimg04.jpg",
          name: "相机",
          price: "2900"
        }
    ]       
       
 
  },
   
  onLoad: function () {
     
  },
  getUserInfo: function(e) {
  }
})
