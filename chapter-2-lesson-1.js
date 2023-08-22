var title = {"korean":"1/ -이/가","khmer":"បរិវាស័ព្ទប្រធាន"};

document.querySelector('#lesson-1 .grammer-title').innerHTML=`<h2>${title.korean}</h2><h5>${title.khmer}</h5>`;

var subtitle = {"st1":"របៀបបង្កើតទំរង់","st2":"របៀបប្រើប្រាស់"};

document.querySelector('#lesson-1 .subtitle').innerHTML=`<h3>${subtitle.st1}</h3>`;
document.querySelector('#lesson-1 .subtitle-1').innerHTML=`<h3>${subtitle.st2}</h3>`;

var table = [
            {"n1":"사과가(ផ្លែប៉ោម)","n2":"과일이(ផ្លែឈើ)"},
            {"n1":"포도가(ទំពាំងបាយជូរ)","n2":"책상이(តុ)"},
            {"n1":"과자가(នំ)","n2":"공책이(សៀវភៅសរសេរ)"},
            {"n1":"가수가(អ្នកចម្រៀង)","n2":"음악이(តន្រ្តី)"},
            ];

var get_table =`<tr class="text-center">
                    <th>នាមដែលបញ្ចប់ដោយស្រៈ</th>
                    <th>នាមដែលបញ្ចប់ដោយព្យព្ជានៈ</th>
                </tr>`;
    
table.forEach((e)=>{
    get_table +=`<tr class="text-center">
                    <td>${e["n1"]}</td>
                    <td>${e["n2"]}</td>
                </tr>`;
})

document.querySelector("#lesson-1 .table").innerHTML=`<table class="table table-bordered border-3 bg-info">${get_table}</table>`;

var content = "បរិវាស័ព្ទ -이/가 គឺជាបរិវាស័ព្ទប្រធានសំរាប់ដាក់ក្រោយនាម ដើម្បីបញ្ជាក់ថា នាមនោះគឺជាប្រធាននៃប្រយោគ។នាមដែលបញ្ចប់ដោយស្រៈ គេប្រើ -가 ហើយនាមដែលបញ្ចប់ដោយព្យព្ជានៈគេប្រើ -이 ។";

document.querySelector("#lesson-1 .content").innerHTML=`<p>${content}</p>`;

var senten = [
                {"num":"1/ ","korean":"포도가 맛있어요.","khmer":"ផ្លែទំពាំងបាយជូរឆ្ងាញ់។"},
                {"num":"2/ ","korean":"옷이 너무 비싸요.","khmer":"អាវថ្លៃណាស់។"},
                {"num":"3/ ","korean":"캄보디아 바다가 아름다워요.","khmer":"សមុទ្រស្រុកខ្មែរស្អាត។"},
                {"num":"> ","korean":"누가 음식을 준비했어요?","khmer":"អ្នកណារៀបចំម្ហូបនេះ?"},
                {"num":"> ","korean":"제가 음식을 준비했어요.","khmer":"ខ្ញុំ(ជាអ្នកដែល)បានរៀបចំម្ហូបនេះ។"},
                {"num":"> ","korean":"옛날에 한 남자가 살았어요. 그 남자는 아이들이 두 명 있었어요.","khmer":"កាលពីយូរលង់ មានបុរសម្នាក់រស់នៅ។គាត់មានកូនពីរនាក់។"},
            ];

var sub_senten = senten.slice(0,3);
var get_senten = "";
sub_senten.forEach((e)=>{
    get_senten += `<b>${e.num}</b>${e.korean}<br>${e.khmer}<br>`;
})

document.querySelector('#lesson-1 .senten').innerHTML=`${get_senten}`;

var sub_senten_1 = senten.slice(3,5);
var get_senten_1 = "";
sub_senten_1.forEach((e)=>{
    get_senten_1 += `<b>${e.num}</b>${e.korean}<br>${e.khmer}<br>`;
})

document.querySelector('#lesson-1 .senten-1').innerHTML=`${get_senten_1}`;

var sub_senten_2 = senten.slice(5,6);
var get_senten_2 = "";
sub_senten_2.forEach((e)=>{
    get_senten_2 += `<b>${e.num}</b>${e.korean}<br>${e.khmer}<br>`;
})

document.querySelector('#lesson-1 .senten-2').innerHTML=`${get_senten_2}`;

var note = [
            {"note":"ចំណាំ៖"},
            {"num":"Ⅰ/ ","note":"គេប្រើទំរង់ -이/가 ដើម្បីបញ្ជាប់បន្ថែមពិសេសទៅលើប្រធាន"},
            {"num":"Ⅱ/ ","note":"គេប្រើ -이/가 ដើម្បីប្រាប់ពីពត៌មានថ្មីដែលមាននៅក្នុងប្រយោគ"},
            ];

document.querySelector("#lesson-1 .note").innerHTML=`<b>${note[0]["note"]}</b><br><b>${note[1]["num"]}</b>${note[1]["note"]}`;
document.querySelector("#lesson-1 .note-1").innerHTML=`<b>${note[2]["num"]}</b>${note[2]["note"]}`;