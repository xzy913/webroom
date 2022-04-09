window.onload = function () {
  // 获取kuang
  let kuang = document.getElementById("kuang");
  // 获取所有的page
  // let pageArr = document.getElementsByName("p");
  // 获取导航按钮
  // let lader = document.getElementsByName("lader");
  // 获取outer
  // let outer = document.getElementsByName("outer");
  let index = 0;
  // 获取所有a
  let allA = document.getElementsByName("pagea");
  // 设置默认选中的效果
  allA[index].style.backgroundColor = "black";
  allA[index].style.width = 40 + "px";
  // 点击超链接切换
  for (let i = 0; i < allA.length; i++) {
    allA[i].num = i;
    allA[i].onclick = function () {
      index = this.num;
      kuang.style.left = -1100 * i + "px";

      setA();

      // let move =document.getElementsByName("kuang");
    };
    setInterval(function () {
        // setA()
      let oldValue = parseInt(
        document.defaultView.getComputedStyle(kuang, null).left
      );
    //   console.log(oldValue)
      if (oldValue == -4400) {
        oldValue = 1100;
        
      }
   
      let newValue = oldValue - 220;
    //   allA[index].style.backgroundColor = "black";

      kuang.style.left = newValue + "px";
      setA()
    }, 1000);

  

    
    // };
  }
  // 创建一个方法用来设置选中的a
      function setA(){
          // 遍历所有的a，并将它们的背景颜色设置为灰色
          for(let i=0;i<allA.length;i++){
              allA[i].style.width = "";
              allA[i].style.backgroundColor = "";
              
          }
          // 将选中的a设置为黑色
          allA[index].style.backgroundColor = "black";
          allA[index].style.width = 40+"px";
      }
};
