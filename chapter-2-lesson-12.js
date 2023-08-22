var title = {"korean":"12/ -만","khmer":"តែ...ទេ , តែ...ប៉ុណ្ណោះ"};

document.querySelector("#lesson-12 .grammer-title").innerHTML=`<h2>${title.korean}</h2><h5>${title.khmer}</h5>`;

var subtitle = "របៀបប្រើប្រាស់";

var content = "គេប្រើ -만 ដើម្បីបញ្ជាក់អំពីអ្វីមួយតែម្យ៉ាង ដែលពាក្យនេះមានន័យជាភាសាខ្មែរថា តែ ឬ តែ...ប៉ុណ្ណោះ ។ គេប្រើ -만 បន្ទាប់ពីនាម។";

var sentence = [
                {"num":"1/ ","kr":"그 식당은 월요일만 쉬어요.","kh":"ភោជនីយដ្ឋាននោះឈប់សំរាកតែថ្ងៃច័ន្ទទេ។"},
                {"num":"2/ ","kr":"그 옷은 백화점에서만 팝니다.","kh":"អាវនោះមានលក់តែនៅផ្សាទំនើបទេ។"},
                {"num":"3/ ","kr":"우리 회사에서 저만 외국 사람입니다.","kh":"នៅក្នុងក្រុមហ៊ុនខ្ញុំ មានតែខ្ញុំទេជាជនជាតិបរទេស។"},
                ];

                document.querySelector('#lesson-12 .subtitle').innerHTML=`<h3>${subtitle}</h3>`;

                document.querySelector('#lesson-12 .content').innerHTML=`<b>${content}</b>`;

                var get_senten ="";
sentence.forEach((e)=>{
    get_senten +=  `<b>${e["num"]}</b>${e["kr"]}<br>${e["kh"]}<br>`;
})

document.querySelector('#lesson-12 .sentence').innerHTML=`${get_senten}`;