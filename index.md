---
title: index
---

<head>
<meta charset="UTF-8">
<title>time to open twitter...</title>
<link rel="shortcut icon" href="favicon.ico">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<link rel="stylesheet" href="mastodon.widget.css" />
<script type="text/javascript" src="mastodon.widget.js"></script>
<script>
$(document).ready(function() {
// jQUERY is required!
  var mapi = new MastodonApi({
    target_selector  : '#myTimeline'
    ,instance_uri    : 'https://fosstodon.org/'
    ,access_token    : 'FFUVSu8kWag0mOtWC2_rZ6Hr5OjB4Zk6Ohqs-y1nZvI'
    ,account_id      : '258064'
    // optional parameters
    // ===================
    // - status max
    //,toots_limit     : 5
    // - if you are using font-awesome:
    //,pic_icon        : '<i class="fa fa-picture-o"></i>'
    // or a picture
    //,pic_icon        : '<img src="mypicicon.gif" />'
  });
});

</script>

</head>

<div id="topbar">
<a href="index.html">Home</a> <a href="blogindex.html">Blog</a>  
</div>

<div id="title">

# Welcome Home

</div>

<input id="searchbox" placeholder="type" type="text">

<div id="link-content">

<div id="gen" class="link-container" markdown="1">

### GENERAL

<div class="links">

* <a href="https://twitter.com/">Twitter</a>  
* <a href="https://www.youtube.com/">YouTube</a>  
* <a href="https://www.twitch.tv/colew_picaro">Twitch</a>  
* <a href="https://discordapp.com/channels/@me">Discord</a>  
* <a href="https://www.github.com">GitHub</a>  
* <a href="https://www.gmail.com">Mail</a>  

</div>

</div>

<div id="uni" class="link-container" markdown="1">

### MU

<div class="links">

* <a href="https://my5.millersville.edu">MU</a>  
* <a href="https://millersville.desire2learn.com/d2l/home">D2L</a>  
* <a href="https://cs.millersville.edu/~wkillian">k</a>  
* <a href="https://cs.millersville.edu/~gzoppetti">z</a>  
* <a href="https://autolab.millersville.edu">Autolab</a>  

</div>

</div>

<div id="other" class="link-container" markdown="1">

### BS

<div class="links">

* <a href="https://www.mtggoldfish.com/">Goldfish</a>  
* <a href="https://www.archive.org/">Archive</a>  
* <a href="https://www.cstimer.net/">Timer</a>  
* <a href="https://alpha.wallhaven.cc">Wallhaven</a>  
* <a href="https://lichess.org">Lichess</a>  
* <a href="https://hckrnews.com/">Hckrnews</a>  

</div>

</div>

<div id="multi" class="link-container" markdown="1">

### MULTIS

<div class="links">

* <a href="https://www.reddit.com/user/shoopmywhoopRLB/m/rice/">Rice</a>  
* <a href="https://www.reddit.com/r/chess">Chess</a>  
* <a href="https://www.reddit.com/user/shoopmywhoopRLB/m/dev/">Dev</a>  


</div>

</div>


</div>

<script src="search.js" type="text/javascript"></script>

<div id="myTimeline" class="mastodon-timeline mastodon-timeline-dark"></div>
