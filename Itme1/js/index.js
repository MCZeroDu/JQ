$(function(){
    //光标进入
    $(".inner .userName,.inner .userPass,.inner .userYan").focus(function(){
        $(this).siblings('span').show();
    });
    //失去光标
    $(".inner .userName,.inner .userPass,.inner .userYan").blur(function(){
        $(this).siblings('span').hide();
    });
    //添加输入框输入事件 隐藏 span
    $(".inner .userName,.inner .userPass,.inner .userYan").bind('input propertychang',function(){
        if ($(this).val()=='') {
            $(this).siblings('span').show();
        } else {
            $(this).siblings('span').hide();
        }
    }); 
    $.ajax({
        url : "https://api.apishop.net/common/verify/getSimpleVerifyImage",
        type : "get",
        data:{
            apiKey : "9KguC2e16bc8e41e7814e2fee70291c039507f39ca0673f",
            codeType : "2"
        },
        success:function(res){
            // console.log(res);
            var a = JSON.parse(res).result;
            console.log(a);
            $(".yanimg").attr("src",a.fileName);
             //如果 某一个输入框等于空的时候  就显示 请输入
        $('.btn_div .btn').click(function() {
            if ($(".p1 .userName").val() ==='' && $('.p2 .userPass').val()==='' && $('.p3 .userYan').val()==='') {
                $(".p1 .TiZ,.p2 .TiZ,.p3 .TiZ").show();
            }else if (YanZheng.User($('.p1 .userName').val()) == false) {
                $(".p1 .TiZ").html('您输入的账号有误!').show();
            }else if ($('.p3 .userYan').val() !== a.verifyCode) {
                $(".p3 .TiZ").html('您输入的验证码有误!').show();
            }else{
                location.href = "inde.html"; 
            }
        })
        },
        async : true
    });
 $("#yy").click(function(){
      $.ajax({
        url : "https://api.apishop.net/common/verify/getSimpleVerifyImage",
        type : "get",
        data:{
            apiKey : "9KguC2e16bc8e41e7814e2fee70291c039507f39ca0673f",
            codeType : "2"
        },
        success:function(res){
            var a = JSON.parse(res).result;
            $(".yanimg").attr("src",a.fileName);
            //如果 某一个输入框等于空的时候  就显示 请输入
        },
        async : true
    });
 })
});
//对象存储 正则表达式
	var YanZheng = {
		User : function(zh){
            //国内 13、15、18开头的手机号正则表达式,可根据目前国内收集号扩展前两位开头号码）
			var us = (/[1-9][0-9]{4,11}/.test(zh));
			return us;
		},
		Pass : function(pa){
            //以字母开头，长度在6~18之间，只能包含字母、数字和下划线
			var pas = (/^[a-zA-Z]\w{5,17}$/.test(pa));
			return pas;
        }
	}
