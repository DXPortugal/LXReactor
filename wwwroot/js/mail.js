function ContactUs() {
    location.replace('mailto:thejourney@microsoft.com?subject=[Pop-Up Reactor]&body=Hey,%0D%0A%0D%0AI have a question for you guys: %0D%0A');
}

var links = document.getElementsByClassName('contactus');
let linksArr = Array.from(links);
linksArr.forEach(function(element) {
    element.addEventListener("click", ContactUs);
});