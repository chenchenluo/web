function http(url, callBack){
    wx.request({
      url: url,
      method: 'GET',
      header: {
        "Content-Type": "json"
      },
      success: function (res) {
        //console.log(res.data);
        //that.processNewsData(res.data);
        callBack(res.data);
        console.log(res.data);
      }
    })

}
module.exports={
  http:http
  }