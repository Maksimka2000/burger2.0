//--------------------------------------------- define browser and device 
var isMobile = {
   // all devices with touchScreens 
   Android: function () {
      return navigator.userAgent.match(/Android/i); //
   },
   iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
   },
   BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
   },
   OperaMini: function () {
      return navigator.userAgent.match(/Opera Mini/i);
   },
   InternerExplorerMobile: function () {
      return navigator.userAgent.match(/IEMobile/i);
   },
   WindowsPhone: function () {
      return navigator.userAgent.match(/Windows Phone/i);
   },
   TabletOS: function () {
      return navigator.userAgent.match(/Tablet OS/i);
   },
   touchScreen: function () {
      return (
         isMobile.Android() ||
         isMobile.iOS() ||
         isMobile.BlackBerry() ||
         isMobile.OperaMini() ||
         isMobile.InternerExplorerMobile() ||
         isMobile.WindowsPhone() ||
         isMobile.TabletOS()
      );
   },
};
var isPC = {
   // operation system of pc devices
   WindowsPC: function () {
      return navigator.userAgent.match(/Wiondws NT/i);
   },
   Macintosh: function () {
      return navigator.userAgent.match(/Macintosh/i);
   },
   Linux: function () {
      return navigator.userAgent.match(/Linux/i);
   },
   Pc: function () {
      return (
         isPC.WindowsPC() ||
         isPC.Macintosh() ||
         isPC.Linux()
      );
   }
};
var isBrowse = {
   // operation system of pc devices
   Chrome: function () {
      return navigator.userAgent.match(/Chrome/i);
   },
   Firefox: function () {
      return navigator.userAgent.match(/Firefox/i);
   },
   Safari: function () {
      return navigator.userAgent.match(/Safari/i);
   },
   Opera: function () {
      return navigator.userAgent.match(/Opera/i);
   },
   IE: function () {
      return navigator.userAgent.match(/MSIE/i);
   },
   Edge: function () {
      return navigator.userAgent.match(/Edge/i);
   },

};

if (isBrowse.Firefox()) {
   document.body.classList.add('_Firefox');
} else if (isBrowse.Chrome()) {
   document.body.classList.add('_Chrome');
} else if (isBrowse.Safari()) {
   document.body.classList.add('_Safari');
} else if (isBrowse.Opera()) {
   document.body.classList.add('_Opera');
} else if (isBrowse.IE()) {
   document.body.classList.add('_IE');
} else if (isBrowse.Edge()) {
   document.body.classList.add('_Edge');
} else {
   document.body.classList.add('_unknown');
}

if (isMobile.touchScreen()) {
   document.body.classList.add('_touch');
} else if (isPC.Pc()) {
   document.body.classList.add('_pc');
} else {
   document.body.classList.add('_undefine');
}
//--------------------------------------------- define browser and device