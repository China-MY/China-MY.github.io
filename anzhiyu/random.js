var posts=["2024/10/12/前端开发/","2024/10/12/生活日常/","2024/10/12/大学生涯/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };