let ua = navigator.userAgent.toLowerCase();
    let isAndroid = ua.indexOf("Android") > -1 || ua.indexOf("Adr") > -1;
    let isiOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
     document.write("<a href=\"mqqwpa:\/\/im\/chat?chat_type=wpa&uin=387673116&version=1&src_type=web&web_src=hao.lldyy.net\" target=\"_blank\"><img src=\"http:\/\/wpa.qq.com\/pa?p=13:387673116:13\" border=\"0\" alt=\"有事您Q我\"><\/a>");
     } else if (/(Android)/i.test(navigator.userAgent)) {
     document.write("<a href=\"http:\/\/wpa.qq.com\/msgrd?v=3&uin=387673116&site=qq&menu=yes\" target=\"_blank\"><img src=\"http:\/\/wpa.qq.com\/pa?p=13:387673116:13\" border=\"0\" alt=\"有事您Q我\"><\/a>");
    }else{
     document.write("<a href=\"tencent://message/?uin=387673116&Site=-&Menu=yes\" target=\"_blank\"><img src=\"http:\/\/wpa.qq.com\/pa?p=13:387673116:13\" border=\"0\" alt=\"有事您Q我\"><\/a>");
    }
