var title = {"korean":"2/ -은/는","khmer":"បរិវាស័ព្ទប្រធាន"};

document.querySelector('#lesson-2 .grammer-title').innerHTML=`<h2>${title.korean}</h2><h5>${title.khmer}</h5>`

var subtitle = {"st1":"របៀបបង្កើតទំរង់","st2":"របៀបប្រើប្រាស់"};

var table = [
    {"n1":"나는","n2":"당신은"},
    {"n1":"학교는","n2":"교실은"},
    {"n1":"사과는","n2":"과일은"},
    ];

    var note = [
        {"num":"Ⅰ/ ","note":"បរិវាស័ព្ទ -은/는 គឺជាបរិវាស័ព្ទប្រធានដូចបរិវាស័ព្ទ -이/가 ដែរ។ នាមទាំងឡាយណាដែលបញ្ចប់ដោយស្រៈ គេប្រើ -는 ហើយនាមទាំងឡាយណាដែលបញ្ចប់ដោយព្យព្ជានៈ គេប្រើ​ -은 ។"},
        {"num":"Ⅱ/ ","note":"គេប្រើបរិវាស័ព្ទ -은/는 ក្នុងប្រយោគខាងក្រោយ(ប្រយោគទី២)ដើម្បីសង្កត់ន័យបញ្ជាក់បន្ថែមឲ្យកាន់តែច្បាស់អំពីអ្វីដែរបាននិយាយរួចក្នុងប្រយោគខាងមុខ។"},
        {"num":"Ⅲ/ ","note":"គេប្រើ -은/는 សំរាប់ពិពណ៌នាអំពីលក្ខណៈផ្ទុយគ្នា ឬ ខុសគ្នានៃប្រយោគខាងមុខ និង ប្រយោគខាងក្រោយ។"},
        ];

        var senten = [
            {"num":"1/ ","korean":"저는 캄보디아 사람입니다.","khmer":"ខ្ញូំជាជនជាតិខ្មែរ។"},
            {"num":"2/ ","korean":"제 직업은 학생입니다.","khmer":"មុខរបររបស់ខ្ញុំគឺសិស្ស។"},
            {"num":"3/ ","korean":"서울은 아주 복잡합니다.","khmer":"ទីក្រុងសេអ៊ូលរញ៉េរញ៉ៃណាស់(មានឡាន ឬ មនុស្សច្រើន)។"},
            {"num":"4/ ","korean":"제 취미는 독서입니다.","khmer":"ចំណង់ចំណូលចិត្តរបស់ខ្ញូំ គឺការអានសៀវភៅ។"},
            {"num":"5/ ","korean":"내일은 일하지 않습니다.","khmer":"ថ្ងៃស្អែក ខ្ញុំអត់ធ្វើការទេ។"},
            {"num":"1/ ","korean":"저는 내일 요코 씨를 만나요.요코 씨는 일본에서 왔어요.","khmer":"ថ្ងៃស្អែកខ្ញុំជួបយ៉ូកូ។យ៉ូកូគាត់មកពីប្រទេសជប៉ុន។"},
            {"num":"2/ ","korean":"저는 작년에 뉴욕에 갔었어요.뉴욕은 정말 아름다웠어요.","khmer":"កាលពីឆ្នាំមុនខ្ញុំបានទៅទីក្រុងញ៉ូវយ់ក។ទីក្រុងញ៉ូវយ៉កពិតជាស្អាតខ្លាំងណាស់។"},
            {"num":"1/ ","korean":"에릭은 미국 사람이에요.그렇지만 준호는 한국 사람이에요.","khmer":"អេរិកជាជនជាតិអាមេរិក។ប៉ុន្តែ ជូនហូជាជនជាតិកូរ់េ។"},
            {"num":"2/ ","korean":"저는 축구는 줗아해요.그렇지만 배구는 좋아하지 않아요.","khmer":"ខ្ញុំចូលចិត្តបាល់ទាត់ ប៉ុន្តែ ខ្ញុំមិនចូលចិត្តបាល់ទះទេ។"},
        ];      
        
document.querySelector('#lesson-2 .subtitle').innerHTML=`<h3>${subtitle.st1}</h3>`;
document.querySelector('#lesson-2 .subtitle-1').innerHTML=`<h3>${subtitle.st2}</h3>`;

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

document.querySelector("#lesson-2 .table").innerHTML=`<table class="table table-bordered border-3 bg-info">${get_table}</table>`;

document.querySelector("#lesson-2 .note").innerHTML=`<b>${note[0]["num"]}${note[0]["note"]}</b>`;
document.querySelector("#lesson-2 .note-1").innerHTML=`<b>${note[1]["num"]}${note[1]["note"]}</b>`;
document.querySelector("#lesson-2 .note-2").innerHTML=`<b>${note[2]["num"]}${note[2]["note"]}</b>`;

var sub_senten = senten.slice(0,5);
var get_senten = "";
sub_senten.forEach((e)=>{
    get_senten += `<b>${e.num}</b>${e.korean}<br>${e.khmer}<br>`;
})

document.querySelector('#lesson-2 .senten').innerHTML=`${get_senten}`;

var sub_senten_1 = senten.slice(5,7);
var get_senten_1 = "";
sub_senten_1.forEach((e)=>{
    get_senten_1 += `<b>${e.num}</b>${e.korean}<br>${e.khmer}<br>`;
})

document.querySelector('#lesson-2 .senten-1').innerHTML=`${get_senten_1}`;

var sub_senten_2 = senten.slice(7,9);
var get_senten_2 = "";
sub_senten_2.forEach((e)=>{
    get_senten_2 += `<b>${e.num}</b>${e.korean}<br>${e.khmer}<br>`;
})

document.querySelector('#lesson-2 .senten-2').innerHTML=`${get_senten_2}`;