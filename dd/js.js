var pinyin1 = document.getElementById("pinyin1");
var pinyin2 = document.getElementById("pinyin2");
var pinyin3 = document.getElementById("pinyin3");
var pinyin4 = document.getElementById("pinyin4");

var jeskson1 = document.getElementById("jeskson1");
var jeskson2 = document.getElementById("jeskson2");
var jeskson3 = document.getElementById("jeskson3");
var jeskson4 = document.getElementById("jeskson4");

var dadaEnglish = document.getElementById("dadaEnglish");

var button = document.getElementById("button");
var random = Math.random();

var p1 = [
    "xīn",
    "gōng",
    "dà",
    "wàn",
    "nián",
    "shēn",
    "xīn",
    "gōng"
];

var p2 = [
    "nián",
    "xǐ",
    "jí",
    "shì",
    "nián",
    "tǐ",
    "xiǎng",
    "hè"
];

var p3 = [
    "kuài",
    "fā",
    "dà",
    "rú",
    "yǒu",
    "jiàn",
    "shì",
    "xīn"
];

var p4 = [
    "lè",
    "cái",
    "lì",
    "yì",
    "yú",
    "kāng",
    "chéng",
    "xǐ"
];

var dadasC1 = [
    "新",
    "恭",
    "大",
    "萬",
    "年",
    "身",
    "心",
    "恭"
];

var dadasC2 = [
    "年",
    "喜",
    "吉",
    "事",
    "年",
    "體",
    "想",
    "賀"
];

var dadasC3 = [
    "快",
    "發",
    "大",
    "如",
    "有",
    "健",
    "事",
    "新"
];

var dadasC4 = [
    "樂",
    "財",
    "利",
    "意",
    "餘",
    "康",
    "成",
    "禧"
];
var dadasE = [
    "(新年快乐)",
    "(恭喜你的胜利)",
    "(吉星高照)",
    "(愿一万件事都按你的欲望去做)",
    "(每一年都比你须要的多)",
    "(祝您身体健康)",
    "(愿你心想事成)",
    "(恭贺新禧)"
];
pinyin1.textContent = p1[Math.floor(random * p1.length)];
pinyin2.textContent = p2[Math.floor(random * p2.length)];
pinyin3.textContent = p3[Math.floor(random * p3.length)];
pinyin4.textContent = p4[Math.floor(random * p4.length)];
jeskson1.textContent = dadasC1[Math.floor(random * dadasC1.length)];
jeskson2.textContent = dadasC2[Math.floor(random * dadasC2.length)];
jeskson3.textContent = dadasC3[Math.floor(random * dadasC3.length)];
jeskson4.textContent = dadasC4[Math.floor(random * dadasC4.length)];
dadaEnglish.textContent = dadasE[Math.floor(random * dadasE.length)];
var onClick = function() {
    var random = Math.random();
    pinyin1.textContent = p1[Math.floor(random * p1.length)];
    pinyin2.textContent = p2[Math.floor(random * p2.length)];
    pinyin3.textContent = p3[Math.floor(random * p3.length)];
    pinyin4.textContent = p4[Math.floor(random * p4.length)];
    jeskson1.textContent = dadasC1[Math.floor(random * dadasC1.length)];
    jeskson2.textContent = dadasC2[Math.floor(random * dadasC2.length)];
    jeskson3.textContent = dadasC3[Math.floor(random * dadasC3.length)];
    jeskson4.textContent = dadasC4[Math.floor(random * dadasC4.length)];
    dadaEnglish.textContent = dadasE[Math.floor(random * dadasE.length)];
}

button.addEventListener("click", onClick);


// <!-- 自己写的JS -->
let fu = [
    ['所爱如山海', '烟火伴长鸣'],
    ['快乐有迹可循', '热爱漫无边际'],
    ['可爱人间烟火', '平安喜乐万朵'],
    ['如果所有人都祝你新年快乐', '那我祝你遍历山河觉得人间值得'],
    ['祝我岁岁常欢愉', '祝你年年皆胜意'],
    ['去岁千般皆如意', '今年万事定称心'],
    ['我与旧事归于尽', '新年依旧迎花开'],
    ['良辰吉日时时有', '锦瑟年华岁岁拥'],
    ['诸事顺利', '好事将近', '平安欢喜', '万事如意'],
    ['把酒碰盏', '谢诸君伴', '提笔蕴词', '愿各友康'],
    ['山高有行路', '水深有渡舟', '和气作春妍', '新年胜旧年'],
    ['纵有干古', '横有八荒', '前途似海', '来日方长']
];

var tp = document.querySelector('#tp');
var tp2 = document.querySelector('#tp2')
var left = document.querySelector('#left');
// 随机抽取数组
var num;
num = Math.floor(Math.random() * fu.length);
console.log(num);
// console.log(tp);
// console.log(left);

console.log(tp.style.width);
if (fu[num].length == 2) {
    tp.innerHTML = `${fu[num][0]},`
    tp2.innerHTML = `${fu[num][1]}.`
        // tp.style.width = tp

} else if (fu[num].length == 4) {
    tp.innerHTML = `${fu[num][0]},${fu[num][1]},`
    tp2.innerHTML = `${fu[num][2]},${fu[num][3]}.`

}

function people(name) {
    left.innerHTML = `祝${name}`;


}
people('蛋蛋')