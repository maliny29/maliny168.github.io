var title = {"korean":"5/ -의","khmer":"របស់"};

document.querySelector("#lesson-5 .grammer-title").innerHTML=`<h2>${title.korean}</h2><h5>${title.khmer}</h5>`;

var subtitle = "របៀបប្រើប្រាស់";

var content ="បរិវាស័ព្ទ -의 គឺជាបរិវាស័ព្ទប្រើសម្រាប់បញ្ជាក់ពីកម្មសិទ្ធិ។ ប៉ុន្តែរបៀបប្រើប្រាស់គឺ មានលក្ខណៈបញ្រ្ចាស់ពីភាសាខ្មែរដោយមានទំរង់ សព្វនាម + -의 + នាម ។ នៅក្នុងភាសានិយាយ ភាគច្រើនគេនិយាយដោយមិនប្រើបរិវាស័ព្ទ -의 នេះទេ។";

var senten = [
    {"num":"1/ ","korean":"우리의 선생님 (우리 선생님)","khmer":"គ្រូរបស់ពួកយើង"},
    {"num":"2/ ","korean":"한국의 산은 아름답습니다.","khmer":"ភ្នំនៅកូរ៉េស្អាតណាស់។"},
    {"num":"3/ ","korean":"테극기는 어느 나라의 국기입니까?","khmer":"តើ​ ធែហ្គឹកហ្គី ជាទង់ជាតិរបស់ប្រទេសណា?"},
    {"num":"4/ ","korean":"백화점에서 친구의 선물을 삽니다.","khmer":"ខ្ញុំទិញកាដូសំរាប់មិត្តភក្តិនៅផ្សារទំនើប។"},
];

document.querySelector('#lesson-5 .subtitle').innerHTML=`<h3>${subtitle}</h3>`;

document.querySelector("#lesson-5 .content").innerHTML=`<p>${content}</p>`;

var get_senten = "";
senten.forEach((e)=>{
    get_senten += `<b>${e["num"]}</b>${e["korean"]}<br>${e["khmer"]}<br>`;
})

document.querySelector('#lesson-5 .senten').innerHTML=`${get_senten}`;