// alert
let food = "チョコレート";
const area = "北海道";

// alert(food);
// alert(area);

// 算術演算子
let add = 10 + 5;
let sub = 20 - 5;

// alert(add);
// alert(sub);

// 値の取得

let fish = document.getElementById("fishName");

console.log(fish);
// alert(fish.textContent);

// valueの取得
let textValue = document.getElementById("textBox1");
let getText = textValue.value;

// alert(getText);

// styleの適用
let styleTask = document.getElementById("styleTask");

styleTask.style.backgroundColor = "green";
styleTask.style.color = "white";

// イベントの活用
// オンクリック
function btn() {
  let textBox2 = document.getElementById("textBox2");
  let textBox2Value = textBox2.value;

  styleTask.textContent = textBox2Value;
}

// イベントリスナー
let getBtn = document.getElementById("getBtn2");

getBtn.addEventListener("click", (e) => {
  let textBox2 = document.getElementById("textBox2");
  let textBox2Value = textBox2.value;

  styleTask.textContent = textBox2Value;
});

// 属性値の変更

let getBtn3 = document.getElementById("getBtn3");

getBtn3.addEventListener("click", () => {
  let zokuseiTask = document.getElementById("zokuseiTask");
  //  zokuseiTask.setAttribute("class", "backColor");
  zokuseiTask.classList.add("backColor");
});

// 関数
function tashizan(Numbers1, Numbers2) {
  let num = Numbers1 + Numbers2;
  return num;
}
console.log(tashizan(10, 4));
// alert(tashizan(10, 4));

let getBtn4 = document.getElementById("getBtn4");

getBtn4.addEventListener("click", () => {
  let textBox3 = document.getElementById("textBox3");
  let textBox3Value = textBox3.value;

  // if文
  if (textBox3Value.length >= 10) {
    alert("文字数が多すぎます");
  } else if (textBox3Value.length >= 6) {
    alert("適正な文字数です");
  } else if (textBox3Value.length <= 5) {
    alert("文字が少なすぎます");
  }
});

// 三項演算子
let getBtn5 = document.getElementById("getBtn5");

getBtn5.addEventListener("click", () => {
  let textBox5 = document.getElementById("textBox5");
  let textBox5Value = textBox5.value;
  let fishPrice = document.getElementById("fishPrice");

  // if (textBox5Value === "カクレクマノミ") {
  //   fishPrice.textContent = "1200円";
  // } else if (textBox5Value === "ナンヨウハギ") {
  //   fishPrice.textContent = "6900円";
  // } else {
  //   fishPrice.textContent = "その他のお魚です";
  // }

  let hantei = textBox5Value === "カクレクマノミ" ? "1200円" : "";
  let hantei2 = textBox5Value === "ナンヨウハギ" ? "6900円" : "";
  console.log(hantei);
  console.log(hantei2);
});

// boolean

// 配列
let getBtn6 = document.getElementById("getBtn6");

getBtn6.addEventListener("click", () => {
  let textBox6 = document.getElementById("textBox6");
  let textBox6Value = textBox6.value;
  let tripText = document.getElementById("tripText");
  let array = ["北海道", "シンガポール", "絶景スポット"];

  if (array.includes(textBox6Value)) {
    tripText.textContent = textBox6Value;
  }
});

// for文
let food2 = ["バナナ", "チョコレート", "唐揚げ", "ハンバーグ", "しめ鯖"];
// alert(food2.length);

let foodText = document.getElementById("foodText");
let ul = document.createElement("ul");

for (let i = 0; i < food2.length; i++) {
  let li = document.createElement("li");
  li.textContent = food2[i];
  ul.appendChild(li);
}
foodText.appendChild(ul);

// 日時
let getBtn7 = document.getElementById("getBtn7");

getBtn7.addEventListener("click", () => {
  let textBox7 = document.getElementById("textBox7");
  let textBox7Value = textBox7.value;

  // 入力された日付をDateオブジェクトに変換
  let date = new Date(textBox7Value);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  let formattedDate = `${year}年${month}月${day}日`;

  let dayText = document.getElementById("dayText");

  dayText.textContent = formattedDate;
});

// 100日後の日付を表示
let dayslaterText = document.getElementById("dayslaterText");

let date = new Date();
date.setDate(date.getDate() + 100);
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();

dayslaterText.textContent = `${year}年${month}月${day}日`;

// オブジェクト
let objText = document.getElementById("objText");
let ul2 = document.createElement("ul");

let items = [
  { id: 1, name: "千葉翔", age: 35 },
  { id: 2, name: "田中太郎", age: 31 },
  { id: 3, name: "柴田詩織", age: 22 },
];

for (let i = 0; i < items.length; i++) {
  let li2 = document.createElement("li");
  li2.textContent = `id:${items[i].id}　name:${items[i].name}　age:${items[i].age}`;
  ul2.appendChild(li2);
}
objText.appendChild(ul2);
