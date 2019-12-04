<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
<html>

  <head>

    <xsl:apply-templates select="/html/head/*" />
    <style>
*{
    margin: 0px;
    padding: 0px;
}

body{
    color: white;
    line-height: 1.2;
    background-color: #1f1813;
}

a{
    text-decoration: none;
    color: #909090;
}

a:hover {
  text-decoration: none;
  color: #d1ab6b;
}

.wrapper{
    width: 100%;
    height: 60px;
    position: relative;
    top: 0%;
    overflow: hidden;
}

.navbar{
    width: 100%;
    padding: 2px;
    position: absolute ;
    top: 0px;
    transition: all 0.4s;
    text-align: center;
    z-index: 0;
}

li{
    font-family: Verdana;
    list-style-type: none;
    display: inline-block;
    padding: 20px 15px;
    font-size: 13px;
    cursor: pointer;
    color: #909090;
}

li:hover{
    color: #d1ab6b;
}

.active{
    color: white;
}
    .container{
    display: flex;
    flex-wrap: wrap;
}
     .container > #image-container{
    flex: 1;
    padding: 15px;
}

.wrapper{
    position: absolute;
}

img{
    width: 350px;
    height: 350px;
}

.container{
    margin-top: 15em;
    display: flex;
    flex-wrap: wrap;
    margin-left: 25em;
    margin-right: 25em;
}

#image-container{
    flex: 1;
    margin-bottom: 35px;
}
    </style>
  </head>

  <body>
     <div class="wrapper">   <!-- to keep nav bar from displaying scrollbar -->
        <div id="navbar" class="navbar">

        <ul>
          <li><a href="../src/index.html" >HOME</a></li>
          <li><a href="../src/portfolio.html" >PORTFOLIO</a></li>
          <li class="active" href="#">GALLERY</li>
          <li><a href="../src/contact.html">CONTACT</a></li>
        </ul>
      </div>
    </div>

    

    <div class="container">
    <xsl:for-each select="gallery/image">
        <div id="image-container" ><img src="{src}" width="{width}" height="{height}"></div> 
    </xsl:for-each>
   </div>
  </body>

</html>

</xsl:template>
</xsl:stylesheet>