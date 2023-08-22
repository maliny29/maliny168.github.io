var title = {"korean":"4/ -와/과 , N(이)랑 , N하고","khmer":"និង , ហើយនិង"};

document.querySelector("#lesson-4 .grammer-title").innerHTML=`<h2>${title.korean}</h2><h5>${title.khmer}</h5>`;

var subtitle = {"st1":"របៀបបង្កើតទំរង់","st2":"របៀបប្រើប្រាស់"};

var table = [
    {"n1":"의자와 책상이 있습니다.","kh1":"មានកៅអី និង តុ។","n2":"신문과 잦지를 봅니다.","kh2":"ខ្ញុំមើលកាសែត និង ទស្សនារត្តី។"},
    {"n1":"엄마랑 아빠는 회사에 가요.","kh1":"ម៉ាក់និងប៉ាទៅក្រុមហ៊ុន។","n2":"동생이랑 저는 아이스크림을 좋아해요.","kh2":"ខ្ញុំនិងប្អូនខ្ញុំចូលចិត្តការ៉េម។"},
    {"n1":"불고기하고 비빔밥을 먹어요.","kh1":"ខ្ញុំញុំាប៊ូលកូហ្គី និង ប៊ីប៊ឹមប៉ាប់។","n2":"옷하고 운동화를 살 거예요.","kh2":"ខ្ញុំនឹងទិញអាវ និង ស្បែកជើងកីឡា។"},
    ];

var content = {"num1":"Ⅰ ","txt1":"បរិវាស័ព្ទទាំងនេះ គឺគេប្រើដើម្បីភ្ជាប់នាម និង នាមដែលមានចំនួនពីរ ឬ ច្រើន។ គេច្រើនប្រើបរិវាស័ព្ទ -와/과 នៅក្នុងអត្ថបទ ពេលធ្វើបទបង្ហាញ ឬ ពេលថ្លែងសន្ទរកថា។​ ចំណែក -(이)랑 និង -하고 វិញ គេច្រើនប្រើនៅក្នុងការសន្ទនាធម្មតា។ នាមដែលបញ្ចប់ដោយព្យព្ជានៈ គេប្រើ -과 ឬ -이랑 ចំណែកឯនាមដែលបញ្ចប់ដោយស្រៈ គេប្រើ -와 ឬ​ -랑 ។ រីឯ -하고 វិញ អាចប្រើជាមួយនាមដែលបញ្ចប់ដោយព្យព្ចានៈក៏បាននាមដែលបញ្ចប់ដោយស្រៈក៏បាន។","num2":"Ⅱ​ ","txt2":"ប្រើដើម្បីបញ្ជាក់ពីការធ្វើសកម្មភាពជាមួយអ្វីមួយ ឬ ជាមួយនរណាម្នាក់។ គេច្រើនប្រើពាក្យនេះជាមួយពាក្យ 같이 ឬ 함께 ហើយអត្ថន័យរបស់វាគឺ ជាមួយ ឬ ជាមួយនឹង​ ។","txt3":"ចំណាំ៖","num4":"1/ ","txt4":"យើងអាចប្រើ [-(이)랑] និង [-하고] ជំនួសបរិវាស័ព្ទដែលបញ្ជាក់ពីវត្ថុ ជាមួយនឹង នាមដែលនៅក្រោយគេបាន តែយើងមិនអាចប្រើ [-와/과] ជាមួយនឹងនាមដែលនៅក្រោយបានទេ។","num5":"2/ ","txt5":"យើងមិនអាចប្រើ [-(이)랑],[-와/과] និង [-하고] ក្នុងប្រយោគតែមួយចំរុះគ្នាបានទេ។"};

var senten =[
                {"num":"① ","korean":"서울에는 지하철과 버스와 택시가 많습니다.","khmer":"នៅទីក្រុងសេអ៊ូលមានរថភ្លើងក្រោមដី ឡានក្រុង និង តាក់សុីច្រើន។"},
                {"num":"② ","korean":"동대문 시장에서 김밥하고 사과하고 배를 삽니다.","khmer":"ខ្ញុំទិញ គីមប៉ាប់ ផ្លែប៉ោម និង ផ្លែសារី នៅផ្សាដុងឌែមូន។"},
                {"num":"③ ","korean":"서울에는 사람과 건물과 자동차가 많습니다.","khmer":"នៅសេអ៊ូល មានមនុស្ស អគារ និង ឡានច្រើន។"},
                {"num":"① ","korean":"내일 친구하고 같이 영화를 보러 가요.","khmer":"ថ្ងៃស្អែក ខ្ញុំទៅមើលកុនជាមួយមិត្តភក្តិ។"},
                {"num":"② ","korean":"가족과 함께 여행을 가고 싶어요.","khmer":"ខ្ញុំចង់ធ្វើដំណើរកំសាន្តជាមួយគ្រួសារខ្ញុំ។"},
                {"num":"③ ","korean":"우리 선생님하고 같이 식사할까요?","khmer":"តើអ្នកចង់ញុំាអាហារជាមួយគ្រូរបស់យើងដែរឬទេ?"},
                {"num":"④ ","korean":"친구하고 동대문 시장에 갑니다.","khmer":"ខ្ញុំទៅផ្សាដុងឌែមូនជាមួយមិត្តភក្តិ។"},
            ];

            document.querySelector('#lesson-4 .subtitle').innerHTML=`<h3>${subtitle.st1}</h3>`;
            document.querySelector('#lesson-4 .subtitle-1').innerHTML=`<h3>${subtitle.st2}</h3>`;

var get_table =`<tr class="text-center">
            <th>-와/랑/하고</th>
            <th>-과/랑/하고</th>
        </tr>`;

table.forEach((e)=>{
get_table +=`<tr class="text-center">
            <td>${e["n1"]}<br>${e["kh1"]}</td>
            <td>${e["n2"]}<br>${e["kh2"]}</td>
        </tr>`;
});

document.querySelector("#lesson-4 .table").innerHTML=`<table class="table table-bordered border-3 bg-info">${get_table}</table>`;

document.querySelector("#lesson-4 .content-1").innerHTML=`<p><b>${content.num1}</b>${content.txt1}</p>`;
document.querySelector("#lesson-4 .content-2").innerHTML=`<p><b>${content.num2}</b>${content.txt2}</p>`;
document.querySelector("#lesson-4 .note").innerHTML=`<b>${content.txt3}</b><br><p><b>${content.num4}</b>${content.txt4}</p>`;
document.querySelector("#lesson-4 .content-3").innerHTML=`<p><b>${content.num5}</b>${content.txt5}</p>`;

var sub_senten =senten.slice(0,3);

var get_senten ="";
sub_senten.forEach((e)=>{
    get_senten +=  `<b>${e["num"]}</b>${e["korean"]}<br>${e["khmer"]}<br>`;
})

document.querySelector('#lesson-4 .senten-1').innerHTML=`${get_senten}`;

var sub_senten_1 =senten.slice(3,7);

var get_senten_1 ="";
sub_senten_1.forEach((e)=>{
    get_senten_1 +=  `<b>${e["num"]}</b>${e["korean"]}<br>${e["khmer"]}<br>`;
})

document.querySelector('#lesson-4 .senten-2').innerHTML=`${get_senten_1}`;

var table_1 = [
                {"n1":"바지랑 가방을 샀어요. (ㅇ)","n2":"바지랑 가방랑 사요. (ㅇ)"},
                {"n1":"바지하고 가방을 샀어요. (ㅇ)","n2":"바지하고 가방하고 사요. (ㅇ)"},
                {"n1":"바지와 가방을 샀어요. (ㅇ)","n2":"바지와 가방과 사요. (x)"},
                ];
var get_table_1 ="";
table_1.forEach((e)=>{
    get_table_1 += `<tr class="text-center">
    <td>${e["n1"]}</td>
    <td>${e["n2"]}</td>
</tr>`;
});

document.querySelector("#lesson-4 .table-1").innerHTML=`<table class="table table-bordered border-3 bg-info">${get_table_1}</table>`;
