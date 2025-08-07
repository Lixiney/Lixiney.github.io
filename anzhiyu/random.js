var posts=["posts/98d7f58f/","posts/d708c66/","posts/b710732f/","posts/2bf21027/","posts/db284c9b/","posts/5fe44501/","posts/bcdf8f30/","posts/df8caf15/","posts/3b86160f/","posts/483d9cef/","posts/2dff4083/","posts/afe38b32/","posts/83c1bda7/","posts/9f9af3f5/","posts/879a70bf/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };