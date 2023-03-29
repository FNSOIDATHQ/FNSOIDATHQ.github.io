// 当网页向下滑动 20px 出现"返回顶部" 按钮
window.onscroll = function() {scrollFunction()};
 
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("RTop").style.display = "block";
        document.getElementsByClassName("float_left")[0].style.display = "flex";
    } else {
        document.getElementById("RTop").style.display = "none";
        document.getElementsByClassName("float_left")[0].style.display = "none";
    }
}

function nav_control(){
    if($('.nav_float').is(":visible")){
        $('.divide_nav').hide();
        $('.nav_float').hide();
        $('.nav_button').css('border-top-right-radius','10px');
        $('.nav_button').css('border-bottom-right-radius','10px');
        $('.nav_button').css('max-width','50px');
        $('.nav_button').text('目录');
    }
    else{
        $('.divide_nav').show();
        $('.nav_float').show();
        $('.nav_button').css('border-top-right-radius','0px');
        $('.nav_button').css('border-bottom-right-radius','0px');
        $('.nav_button').css('max-width','20px');
        $('.nav_button').text('收起');
    }
}
 
// 点击按钮，返回顶部
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//啊哈，我根本就不想写甚么“JS”脚本，至少现在我讨厌这个东西，即使听说它很好用，实际上也很简单
//好，现在有了一个简单的导航目录 =)