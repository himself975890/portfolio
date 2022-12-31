const cursor_follower1 = document.getElementById("cursor1");
const cursor_follower2 = document.getElementById("cursor2");
const cursor_follower3 = document.getElementById("cursor3");
function follow_mouse(e) {
  if (window.screen.width > 768) {
    setTimeout(() => {
      cursor_follower1.style.top = e.pageY - 20 + "px";
      cursor_follower1.style.left = e.pageX - 20 + "px";
    }, 40);
    setTimeout(() => {
      cursor_follower2.style.top = e.pageY - 15 + "px";
      cursor_follower2.style.left = e.pageX - 15 + "px";
    }, 20);
    cursor_follower3.style.top = e.pageY - 10 + "px";
    cursor_follower3.style.left = e.pageX - 10 + "px";
  }
}

document.addEventListener("mousemove", follow_mouse, false);
