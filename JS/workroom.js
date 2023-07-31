// window.onload = function () {
// 获取kuang
let kuang = document.getElementById("kuang");
let btn = document.getElementsByName("pagea");
// 设置默认选中的效果
let index = 0;
btn[index].style.backgroundColor = "black";
btn[index].style.width = 40 + "px";
//点击btn切换
for (let i = 0; i < btn.length; i++) {
  btn[i].index = i;
  btn[i].onclick = function () {
    index = this.index;
    kuang.style.transform = "translateX(-" + 800 * index + "px)";
    // 遍历所有的btn，并将它们的背景颜色设置为灰色
    for (let n = 0; n < btn.length; n++) {
      btn[n].style.width = "";
      btn[n].style.backgroundColor = "";
    }
    // 将选中的btn设置为黑色
    btn[index].style.width = 40 + "px";
    btn[index].style.backgroundColor = "black";
  };
}
// 自动轮播
setInterval(function () {
  let lateX = Number(kuang.style.transform.replace(/[^\d]/g, " "));
  let i = lateX / 800 + 1;
  console.log(i);
  if (i > 4) i = 0;
  kuang.style.transform = "translateX(-" + 800 * i++ + "px)";
  // console.log(kuang.style.transform);
  // 遍历所有的btn，并将它们的背景颜色设置为灰色
  for (var k = 0; k < btn.length; k++) {
    btn[k].style.width = "";
    btn[k].style.backgroundColor = "";
  }
  // 将选中的btn设置为黑色
  btn[i - 1].style.width = 40 + "px";
  btn[i - 1].style.backgroundColor = "black";
}, 2000);

// 查看图片
// 获取弹窗
var modal = document.getElementById("myModal");

// 获取图片插入到弹窗 - 使用 "alt" 属性作为文本部分的内容
var img = document.getElementById("myImg");
var img2 = document.getElementById("myImg2");
var modalImg = document.getElementById("img01");
var Src = img.src;
var captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};
img2.onclick = function () {
  modal.style.display = "block";
  modalImg.src = Src;
  captionText.innerHTML = this.alt;
};
// 获取 <span> 元素，设置关闭按钮
var span = document.getElementsByClassName("close")[0];

// 当点击 (x), 关闭弹窗
span.onclick = function () {
  modal.style.display = "none";
};
