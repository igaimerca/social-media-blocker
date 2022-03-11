//URLs to block
let blockedUrls = [
    {
        link: "twitter.com",
    },
    {
        link: "facebook.com",
    },
    {
        link: "instagram.com",
    },
    {
        link: "linkedin.com",
    },
    {
        link: "web.whatsapp.com",
    },
    {
        link: "reddit.com",
    },
    {
        link: "pinterest.com",
    },
    {
        link: "mail.google.com"
    },
    {
        link: "youtube.com"
    }
];

blockedUrls.forEach((element) => {
    if (window.location.origin.includes(element.link)) {
        setTimeout(() => {
            document.getElementsByTagName("body")[0].innerHTML =
                '<div><img src="https://cdn.pixabay.com/photo/2015/05/01/20/45/turn-749026_960_720.png" style="margin: 0px auto; height: 100vh; display: flex;"></div>';
        }, 300000);
    }
});
