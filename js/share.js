var share = document.querySelector("#share");
var sharables = document.querySelectorAll("#sharables");
var socialMediaIcons = document.querySelectorAll(".sharable");
var close = document.querySelector("#closeit");

function open() {

  TweenLite.to(sharables,0,{css:{display:"block"}});
  TweenLite.fromTo(sharables,1,{css:{opacity:"0.00000001"}},{css:{opacity:"1"}})
  TweenLite.fromTo(sharables,1,{css:{top:"100%"}},{css:{top:"0px"}});

  var fb = document.querySelector('#facebookIcon');
  var twitter = document.querySelector('#twitterIcon');
  var instagram = document.querySelector('#instagramIcon');
  var pinterest = document.querySelector('#pinterestIcon');

  var fbEmbedPost = document.querySelector('#fbEmbedPost');
  var fbFill = document.querySelector('.fbFill');

    TweenLite.fromTo(fbEmbedPost,1,{css:{paddingTop:"100%"}},{css:{paddingTop:"2%"}});
    TweenLite.fromTo(fbEmbedPost,1,{css:{opacity:"0.0000001"}},{css:{opacity:"1"}})
    TweenLite.to(fbEmbedPost,0,{css:{display:"block"}});
    TweenLite.to(fbFill,0.5,{css:{fill:"#ed1c24"}});

    fb.classList.add('activeIcon');

  fb.addEventListener("click",facebookClick,false);
  twitter.addEventListener("click",twitterClick,false);
  instagram.addEventListener("click",instagramClick,false);
  pinterest.addEventListener("click",pinterestClick,false);
}

function closed() {

  var fb = document.querySelector('#facebookIcon');
  var twitter = document.querySelector('#twitterIcon');
  var fbFill = document.querySelector('.fbFill');
  var twitterFill = document.querySelector('.twitterFill');
  var section = document.querySelector(".sharablesSection");

  var pinterestFill = document.querySelector('.pinterestFill');
  var instagramFill = document.querySelectorAll('.instagramFill');

  var fbEmbedPost = document.querySelector('#fbEmbedPost');
  var twitterEmbedPost = document.querySelector('#twitterEmbedPost');
  var pinterestEmbedPost = document.querySelector('#pinterestEmbedPost');
  var instagramEmbedPost = document.querySelector('#instagramEmbedPost');


    TweenLite.to(fbFill,0.5,{css:{fill:"#FFFFFF"}});
    TweenLite.to(twitterFill,0.5,{css:{fill:"#FFFFFF"}});
    TweenLite.to(pinterestFill,0.5,{css:{fill:"#FFFFFF"}});
    TweenLite.to(instagramFill,0.5,{css:{fill:"#FFFFFF"}});

    TweenLite.fromTo(fbEmbedPost,1,{css:{paddingTop:"2%"}},{css:{paddingTop:"100%"}});
    TweenLite.fromTo(fbEmbedPost,1,{css:{opacity:"1"}},{css:{opacity:"0"}})
    TweenLite.to(fbEmbedPost,0,{css:{display:"none"}});

    TweenLite.fromTo(twitterEmbedPost,1,{css:{paddingTop:"2%"}},{css:{paddingTop:"100%"}});
    TweenLite.fromTo(twitterEmbedPost,1,{css:{opacity:"1"}},{css:{opacity:"0"}})
    TweenLite.to(twitterEmbedPost,0,{css:{display:"none"}});

    TweenLite.fromTo(pinterestEmbedPost,1,{css:{paddingTop:"2%"}},{css:{paddingTop:"100%"}});
    TweenLite.fromTo(pinterestEmbedPost,1,{css:{opacity:"1"}},{css:{opacity:"0"}})
    TweenLite.to(pinterestEmbedPost,0,{css:{display:"none"}});

    TweenLite.fromTo(instagramEmbedPost,1,{css:{paddingTop:"2%"}},{css:{paddingTop:"100%"}});
    TweenLite.fromTo(instagramEmbedPost,1,{css:{opacity:"1"}},{css:{opacity:"0"}})
    TweenLite.to(instagramEmbedPost,0,{css:{display:"none"}});

  TweenLite.fromTo(sharables,1,{css:{opacity:"1"}},{css:{opacity:"0"}})
  TweenLite.fromTo(sharables,1,{css:{top:"0px"}},{css:{top:"100%"}});
}

function facebookClick(){
  //console.log('facebook');

  var fb = document.querySelector('#facebookIcon');
  var twitter = document.querySelector('#twitterIcon');
  var instagram = document.querySelector('#instagramIcon');
  var pinterest = document.querySelector('#pinterestIcon');

  var fbFill = document.querySelector('.fbFill');
  var twitterFill = document.querySelector('.twitterFill');
  var pinterestFill = document.querySelector('.pinterestFill');
  var instagramFill = document.querySelectorAll('.instagramFill');

  var fbEmbedPost = document.querySelector('#fbEmbedPost');

  if(fb.classList.contains('activeIcon')){
    //console.log('already activated');
  }else{
    fb.classList.add('activeIcon');
    twitter.classList.remove('activeIcon');
    pinterest.classList.remove('activeIcon');
    instagram.classList.remove('activeIcon');

    TweenLite.to(pinterestFill,0.5,{css:{fill:"#FFFFFF"}});
    TweenLite.to(twitterFill,0.5,{css:{fill:"#FFFFFF"}});
    TweenLite.to(instagramFill,0.5,{css:{fill:"#FFFFFF"}});


    TweenLite.fromTo(fbEmbedPost,1,{css:{paddingTop:"100%"}},{css:{paddingTop:"2%"}});
    TweenLite.fromTo(fbEmbedPost,1,{css:{opacity:"0.0000001"}},{css:{opacity:"1"}})
    TweenLite.to(fbEmbedPost,0,{css:{display:"block"}});
    TweenLite.to(fbFill,0.5,{css:{fill:"#ed1c24"}});

    TweenLite.to(twitterEmbedPost,0.1,{css:{opacity:"0",display:"none"}});
    TweenLite.to(instagramEmbedPost,0.1,{css:{opacity:"0",display:"none"}});
    TweenLite.to(pinterestEmbedPost,0.1,{css:{opacity:"0",display:"none"}});
  }

}

function twitterClick(){
  //console.log('twitter');

  var fb = document.querySelector('#facebookIcon');
  var twitter = document.querySelector('#twitterIcon');
  var instagram = document.querySelector('#instagramIcon');
  var pinterest = document.querySelector('#pinterestIcon');

  var fbFill = document.querySelector('.fbFill');
  var twitterFill = document.querySelector('.twitterFill');
  var pinterestFill = document.querySelector('.pinterestFill');
  var instagramFill = document.querySelectorAll('.instagramFill');

  var fbEmbedPost = document.querySelector('#fbEmbedPost');
  var twitterEmbedPost = document.querySelector('#twitterEmbedPost');
  var pinterestEmbedPost = document.querySelector('#pinterestEmbedPost');
  var instagramEmbedPost = document.querySelector('#instagramEmbedPost');

  if(twitter.classList.contains('activeIcon')){
    //console.log('already activated');
  }else{
    twitter.classList.add('activeIcon');
    fb.classList.remove('activeIcon');
    instagram.classList.remove('activeIcon');
    pinterest.classList.remove('activeIcon');

    TweenLite.to(pinterestFill,0.5,{css:{fill:"#FFFFFF"}});
    TweenLite.to(fbFill,0.5,{css:{fill:"#FFFFFF"}});
    TweenLite.to(instagramFill,0.5,{css:{fill:"#FFFFFF"}});

    TweenLite.fromTo(twitterEmbedPost,1,{css:{paddingTop:"100%"}},{css:{paddingTop:"0%"}});
    TweenLite.fromTo(twitterEmbedPost,1,{css:{opacity:"0.0000001"}},{css:{opacity:"1"}})
    TweenLite.to(twitterEmbedPost,0,{css:{display:"block"}});
    TweenLite.to(twitterFill,0.5,{css:{fill:"#ed1c24"}});

    TweenLite.to(fbEmbedPost,0.1,{css:{opacity:"0",display:"none"}});
    TweenLite.to(instagramEmbedPost,0.1,{css:{opacity:"0",display:"none"}});
    TweenLite.to(pinterestEmbedPost,0.1,{css:{opacity:"0",display:"none"}});    
  }

}

function instagramClick(){
  //console.log('instagram');

  var fb = document.querySelector('#facebookIcon');
  var twitter = document.querySelector('#twitterIcon');
  var instagram = document.querySelector('#instagramIcon');
  var pinterest = document.querySelector('#pinterestIcon');

  var fbFill = document.querySelector('.fbFill');
  var twitterFill = document.querySelector('.twitterFill');
  var pinterestFill = document.querySelector('.pinterestFill');
  var instagramFill = document.querySelectorAll('.instagramFill');

  var fbEmbedPost = document.querySelector('#fbEmbedPost');
  var twitterEmbedPost = document.querySelector('#twitterEmbedPost');
  var pinterestEmbedPost = document.querySelector('#pinterestEmbedPost');
  var instagramEmbedPost = document.querySelector('#instagramEmbedPost');

  if(instagram.classList.contains('activeIcon')){
    //console.log('already activated');
  }else{

    twitter.classList.remove('activeIcon');
    fb.classList.remove('activeIcon');
    instagram.classList.add('activeIcon');
    pinterest.classList.remove('activeIcon');

    TweenLite.to(pinterestFill,0.5,{css:{fill:"#FFFFFF"}});
    TweenLite.to(fbFill,0.5,{css:{fill:"#FFFFFF"}});
    TweenLite.to(twitterFill,0.5,{css:{fill:"#FFFFFF"}});
    TweenLite.to(instagramFill,0.5,{css:{fill:"#ed1c24"}});

    TweenLite.fromTo(instagramEmbedPost,1,{css:{paddingTop:"100%"}},{css:{paddingTop:"2%"}});
    TweenLite.fromTo(instagramEmbedPost,1,{css:{opacity:"0.0000001"}},{css:{opacity:"1"}})
    TweenLite.to(instagramEmbedPost,0,{css:{display:"block"}});

    TweenLite.to(fbEmbedPost,0.1,{css:{opacity:"0",display:"none"}});
    TweenLite.to(twitterEmbedPost,0.1,{css:{opacity:"0",display:"none"}});
    TweenLite.to(pinterestEmbedPost,0.1,{css:{opacity:"0",display:"none"}});

  }
}

function pinterestClick(){
  console.log('pinterest');

  var fb = document.querySelector('#facebookIcon');
  var twitter = document.querySelector('#twitterIcon');
  var instagram = document.querySelector('#instagramIcon');
  var pinterest = document.querySelector('#pinterestIcon');

  var fbFill = document.querySelector('.fbFill');
  var twitterFill = document.querySelector('.twitterFill');
  var pinterestFill = document.querySelector('.pinterestFill');
  var instagramFill = document.querySelectorAll('.instagramFill');

  var fbEmbedPost = document.querySelector('#fbEmbedPost');
  var twitterEmbedPost = document.querySelector('#twitterEmbedPost');
  var pinterestEmbedPost = document.querySelector('#pinterestEmbedPost');
  var instagramEmbedPost = document.querySelector('#instagramEmbedPost');

  if(pinterest.classList.contains('activeIcon')){

  }else{

    twitter.classList.remove('activeIcon');
    fb.classList.remove('activeIcon');
    instagram.classList.remove('activeIcon');
    pinterest.classList.add('activeIcon');

    TweenLite.to(pinterestFill,0.5,{css:{fill:"#ed1c24"}});
    TweenLite.to(fbFill,0.5,{css:{fill:"#FFFFFF"}});
    TweenLite.to(twitterFill,0.5,{css:{fill:"#FFFFFF"}});
    TweenLite.to(instagramFill,0.5,{css:{fill:"#FFFFFF"}});

    TweenLite.fromTo(pinterestEmbedPost,1,{css:{paddingTop:"100%"}},{css:{paddingTop:"2%"}});
    TweenLite.fromTo(pinterestEmbedPost,1,{css:{opacity:"0.0000001"}},{css:{opacity:"1"}})
    TweenLite.to(pinterestEmbedPost,0,{css:{display:"block"}});

    TweenLite.to(fbEmbedPost,0.1,{css:{opacity:"0",display:"none"}});
    TweenLite.to(instagramEmbedPost,0.1,{css:{opacity:"0",display:"none"}});
    TweenLite.to(twitterEmbedPost,0.1,{css:{opacity:"0",display:"none"}});

  }

}

share.addEventListener("click", open, false);
close.addEventListener("click", closed, false);