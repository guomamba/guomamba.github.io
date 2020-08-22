$("#image_left").click(function(){
    alert("clicked!")
});
$("#image_right").click(function(){
    //todo
});
$.ajax({
    type: 'GET',
    url: 'https://www.fastmock.site/mock/cc0127486cffdd267c3b52d02ae3907f/mysite/banner',
    data: '',
    dataType: 'JSON',
    success: function (res) {
        var banners = res.banners;
        var arr = new Array()
        for(var i=0;i<banners.length;i++){
            arr.push(banners[i].imageUrl)
        }
        for (var index = 0; index < arr.length+1; index++) {
            $("#banner_image"+index).attr("src",arr[index]);  
            $("#banner_image"+index).click(function(){
                location.href='http://www.baidu.com'
            })             
        }
    },
    error: function () {
        alert("网络连接失败！")
    }
});
$.ajax("json/Article.json",{
    data: {},
    dataType: 'json',
    type: 'get',
    async: 'false',
    success: function(data){			
        var item = data.item;   
        var titleList = new Array()
        var authorList = new Array()
        var digestList = new Array()
        var imageList = new Array()
        var timeList = new Array()
        for (let index = 0; index < item.length; index++) {
            titleList.push(item[index].content.news_item[0].title)
            authorList.push(item[index].content.news_item[0].author)
            digestList.push(item[index].content.news_item[0].digest)
            imageList.push(item[index].content.news_item[0].thumb_url.replace("http","https"))
            timeList.push(item[index].update_time)    
            $("#article_image"+index).attr("src",imageList[index]);          
            $("#article_title"+index).text(titleList[index]);
            if(digestList[index]==''){
                $("#article_digest"+index).text("什么都没有")
            }
            else{
                $("#article_digest"+index).text(digestList[index])
            }
            $("#article_author"+index).text(authorList[index])
        }
    }
})
function timestampTotime(timestamp,type=0) {
    var time = new Date(timestamp*1000)
    var year = time.getFullYear()
    var month = time.getMonth() + 1
    var date = time.getDate()
    var hour = time.getHours()
    var minute = time.getMinutes()
    var second = time.getSeconds()
    month = month < 10 ? "0" + month : month;
    date = date < 10 ? "0" + date : date;
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
    var arr = [
        year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second,
        year + "年" + month + "月" + date + " " + hour + ":" + minute + ":" + second,
        year + "年" + month + "月" + date + "日",
        hour + ":" + minute + ":" + second,     
        year + "-" + month + "-" + date
    ]
    return arr[type]
}