var title = {"korean":"13/ -밖에","khmer":"ក្រៅពី , តែ"};

document.querySelector("#lesson-13 .grammer-title").innerHTML=`<h2>${title.korean}</h2><h5>${title.khmer}</h5>`;

var subtitle = "របៀបប្រើប្រាស់";

var content = "បរិវាស័ព្ទ -밖에 គឺជាពាក្យប្រើជាមួយទំរង់បដិសេធ ដូចជាទំរង់ 안(-지 않다) , 못(-지 못하다) , 없다 ឬ 모르다 ជាដើម។​ គេប្រើទំរង់នេះ ដើម្បីបញ្ជាក់ពីការគ្មានលទ្ធភាពចំពោះអ្វីផ្សេងក្រៅពីជំរើសមួយដែលកំពុងមាននោះ។ គេក៏ប្រើពាក្យ -밖에 នេះដើម្បីពិពណ៌នាអំពីស្ថានភាពមួយដែលកើតឡើងដោយមានចំនួនតិចជាងអ្វីដែលបានគិតដែរ។";

var note = [
            {"num":"1_ ","txt":"밖에 없다 : មានតែ...ទេ"},
            {"num":"2_ ","txt":"밖에 + 부정어"},
            ];

var sentence = [
                {"num":"1/ ","kr":"돈이 1,000원밖에 없습니다.","kh":"ខ្ញុំមានលុយតែ១០០០វ៉ុនទេ។"},
                {"num":"2/ ","kr":"아이밨에 없습니다.","kh":"មានតែក្មេងទេ។"},
                {"num":"3/ ","kr":"음식이 조금밖에 없어요.","kh":"មានអាហារតែបន្តិចទេ។"},
                {"num":"1/ ","kr":"한국말을 조금밖에 몰라요.","kh":"ខ្ញុំចេះភាសាកូរ៉េតែបន្តិចទេ។"},
                {"num":"2/ ","kr":"한국에서 한 달 밖에 안 살았어요.","kh":"ខ្ញុំបានរស់នៅប្រទេសកូរ៉េតែ១ខែទេ។"},
                {"num":"3/ ","kr":"학생들이 두 명밖에 안 왔어요.","kh":"មានសិស្សតែ២នាក់ទេដែលបានមក។"},
                {"num":"4/ ","kr":"한국어는 안녕하세요 밖에 몰라요.","kh":"ភាសាកូរ៉េ ខ្ញុំចេះតែពាក្យ 안녕하세요 ទេ។"},
                ];

var note_1 = {"note":"ប្រៀបធៀប [-밖에 Vs -만]","txt":"តាមពិតបរិវាស័ព្ទទាំងពីរនេះមានន៍័យដូចគ្នា។ -만 អាចប្រើបានជាមួយទាំងទំរង់ស្រប និង ទំរង់បដិសេធ តែ -밖에 វិញ អាចប្រើបានតែជាមួយទំរង់បដិសេធទេ។"};

var table = [
            {"n1":"교실에 재준 씨밖에 었어요. (x)","n2":"교실에 재준 씨만 있어요. (ㅇ)"},
            {"n1":"교실에 재준 씨밖에 없어요. (ㅇ)","n2":"교실에 지준 씨만 없어요. (ㅇ)"},
            ];

            document.querySelector('#lesson-13 .subtitle').innerHTML=`<h3>${subtitle}</h3>`;         
            document.querySelector('#lesson-13 .content').innerHTML=`<b>${content}</b>`;
            document.querySelector('#lesson-13 .note').innerHTML=`<b>${note[0]["num"]}${note[0]["txt"]}</b>`;
            document.querySelector('#lesson-13 .note-1').innerHTML=`<b>${note[1]["num"]}${note[1]["txt"]}</b>`;
            var sub_senten =sentence.slice(0,3);

var get_senten ="";
sub_senten.forEach((e)=>{
    get_senten +=  `<b>${e["num"]}</b>${e["kr"]}<br>${e["kh"]}<br>`;
})

document.querySelector('#lesson-13 .sentence').innerHTML=`${get_senten}`;

var sub_senten_1 =sentence.slice(3,7);

var get_senten_1 ="";
sub_senten_1.forEach((e)=>{
    get_senten_1 +=  `<b>${e["num"]}</b>${e["kr"]}<br>${e["kh"]}<br>`;
})

document.querySelector('#lesson-13 .sentence-1').innerHTML=`${get_senten_1}`;
document.querySelector('#lesson-13 .note-2').innerHTML=`<h3 class="text-center">${note_1.note}</h3>`;
document.querySelector('#lesson-13 .content-1').innerHTML=`<b>${note_1.txt}</b>`;
var get_table =`<tr class="text-center">
            <th>-밖에</th>
            <th>-만</th>
        </tr>`;

table.forEach((e)=>{
            get_table +=`<tr class="text-center">
                        <td>${e.n1}</td>
                        <td>${e.n2}</td>
                    </tr>`;
            });
document.querySelector("#lesson-13 .table").innerHTML=`<table class="table table-bordered border-3 bg-info">${get_table}</table>`;