var title = {"korean":"7/ -에서","khmer":"នៅ(ឯ)"};

document.querySelector("#lesson-7 .grammer-title").innerHTML=`<h2>${title.korean}</h2><h5>${title.khmer}</h5>`;

var subtitle = "របៀបប្រើប្រាស់";

var content = [
                {"num":"Ⅰ ","txt":"បរិវាស័ព្ទ -에서 មានន័យថា នៅឯ គេប្រើបរិវាស័ព្ទនេះជាមួយនាមទីកន្លែង ដើម្បីបញ្ជាក់ថា មានសកម្មភាពអ្វីមួយកំពុងកើតឡើងនៅទីនោះ។ ជាទូទៅ គេប្រើកិរិយាស័ព្ទសកម្មជាមួយបរិវាស័ព្ទ -에서 នេះ។"},
                {"num":"Ⅱ ","txt":"គេប្រើ -에서 ដើម្បីបញ្ជាក់ពីចំណុចចាប់ផ្ដើមចាកចេញ ឬ ការចេញដំណើរ។ ក្នុងទំរង់នេះ ជាភាសាខ្មែរ -에서​ មានន័យថា ពី ។"},
                {"num":"Ⅲ ","txt":"បរិវាស័ព្ទ​ -에서 ពេលខ្លះក៏មានមុខងារជាប្រធាននៃប្រយោគដែរ។"},
                ];

var sentence = [
                {"num":"1/ ","kr":"도서관에서 공부를 합니다.","kh":"ខ្ញុំរៀននៅបណ្ណាល័យ។"},
                {"num":"2/ ","kr":"어디에서 한국 말을 배웁니다.","kh":"តើអ្នករៀនភាសាកូរ៉េនៅឯណា?"},
                {"num":"3/ ","kr":"우체국에서 편지를 보내요.","kh":"ខ្ញុំផ្ញើរសំបុត្រនៅប្រៃសណីយ៍"},
                {"num":"4/ ","kr":"커피숍에서 커피를 마셔요.","kh":"ខ្ញុំញុំាកាហ្វេនៅហាងកាហ្វេ។"},
                {"num":"5/ ","kr":"헬스클럽에서 운동해요.","kh":"ខ្ញុំហាត់ប្រាណនៅក្លឹបហាត់កីឡា។"},
                {"num":"1/ ","kr":"버스는 서울에서 출발합니다.","kh":"ឡានក្រុងចេញដំណើរពីទីក្រុងសេអ៊ូល។"},
                {"num":"2/ ","kr":"그 사람은 어제 섬에서 떠났어요.","kh":"គាត់ចាកចេញពីកោះកាលពីម្សិលមិញ។"},
                {"num":"1/ ","kr":"우리 회사에서 직원들에게 휴가를 줍니다.","kh":"ក្រុមហ៊ុនយើងខ្ញុំបានឲ្យថ្ងៃឈប់សំរាកដល់បុគ្គលិក។"},
                {"num":"2/ ","kr":"정부에서 외국인 근로자를 도와줍니다.","kh":"រដ្ឋាភិបាលជួយ ដល់ពលករបរទេស។"},
                ];
            
var note = "ប្រៀបធៀប [-에 Vs -에서]";
            

var table =[{"n1":"គេប្រើ​ -에 ដើម្បើបញ្ជាក់ពីអ្វីមួយដែលមាននៅកន្លែងណាមួយ។<br>시청역은 서울에 있어요.<br>គេប្រើ -에 ជាមួយនឹងកិរិយាស័ព្ទទិសដៅដែលគ្មានសកម្មភាពនៅក្នុងទៅតាំងនោះទេ។","n2":"គេប្រើ -에서 ជាមួយកិរិយាស័ព្ទសកម្មដើម្បីបញ្ជាក់ពីសកម្មភាពមួយកើតឡើងនៅកន្លែងនោះ។<br>학교에서 공부를 합니다.<br>ខ្ញុំរៀននៅសាលារៀន។"}];

document.querySelector('#lesson-7 .subtitle').innerHTML=`<h3>${subtitle}</h3>`;            

document.querySelector("#lesson-7 .content").innerHTML=`<p><b>${content[0]["num"]}${content[0]["txt"]}</b></p>`;
document.querySelector("#lesson-7 .content-1").innerHTML=`<p><b>${content[1]["num"]}${content[1]["txt"]}</b></p>`;
document.querySelector("#lesson-7 .content-2").innerHTML=`<p><b>${content[2]["num"]}${content[2]["txt"]}</b></p>`;

var sub_sentence =sentence.slice(0,5);

var get_sentence ="";
sub_sentence.forEach((e)=>{
    get_sentence +=  `<b>${e["num"]}</b>${e["kr"]}<br>${e["kh"]}<br>`;
})

document.querySelector('#lesson-7 .sentence').innerHTML=`${get_sentence}`;

var sub_sentence_1 =sentence.slice(5,7);

var get_sentence_1 ="";
sub_sentence_1.forEach((e)=>{
    get_sentence_1 +=  `<b>${e["num"]}</b>${e["kr"]}<br>${e["kh"]}<br>`;
})

document.querySelector('#lesson-7 .sentence-1').innerHTML=`${get_sentence_1}`;

var sub_sentence_2 =sentence.slice(7,9);

var get_sentence_2 ="";
sub_sentence_2.forEach((e)=>{
    get_sentence_2 +=  `<b>${e["num"]}</b>${e["kr"]}<br>${e["kh"]}<br>`;
})

document.querySelector('#lesson-7 .sentence-2').innerHTML=`${get_sentence_2}`;

document.querySelector('#lesson-7 .note').innerHTML=`<h3 class="text-center">${note}</h3>`;

var get_table =`<tr class="text-center">
            <th>-에</th>
            <th>-에서</th>
        </tr>`;

table.forEach((e)=>{
            get_table +=`<tr class="text-center">
                        <td>${e.n1}</td>
                        <td>${e.n2}</td>
                    </tr>`;
            });
document.querySelector("#lesson-7 .table").innerHTML=`<table class="table table-bordered border-3 bg-info">${get_table}</table>`;