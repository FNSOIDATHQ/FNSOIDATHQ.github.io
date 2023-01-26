// 当网页向下滑动 20px 出现"返回顶部" 按钮
window.onscroll = function() {scrollFunction()};
 
function scrollFunction() {console.log(121);
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("RTop").style.display = "block";
    } else {
        document.getElementById("RTop").style.display = "none";
    }
}
 
// 点击按钮，返回顶部
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//啊哈，我根本就不想写甚么“JS”脚本，至少现在我讨厌这个东西，即使听说它很好用，实际上也很简单
//理论上，我们还需要一个可以收起的导航目录，而不是像个蠢货一样把目录堆在最开头