// This is dumb but using JS to add target=_blank for all external sites
// https://code.luasoftware.com/tutorials/hugo/how-to-create-link-with-target-blanks-in-hugo-markdown/
//var content = document.getElementByClassName("resume-wrapper");
//var links = content.getElementsByTagName("a");
var links = document.links;

for (var i = 0, linksLength = links.length; i < linksLength; i++) {
   if (links[i].hostname != window.location.hostname) {
       console.log(links[i]);
      links[i].target = '_blank';
   }
}
