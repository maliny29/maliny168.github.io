var title = {"korean":"3/ -을/를","khmer":"បរិវាស័ព្ទកម្មបទ"};

document.querySelector("#lesson-3 .grammer-title").innerHTML=`<h2>${title.korean}</h2><h5>${title.khmer}</h5>`;

var subtitle = {"st1":"របៀបបង្កើតទំរង់","st2":"របៀបប្រើប្រាស់"};

var content = "បរិវាស័ព្ទ -을/를 គឺជាបរិវាស័ព្ទកម្មបទ។គេប្រើបរិវាស័ព្ទនេះក្រោយនាម ដើម្បីបញ្ជាក់ថា នាមនោះជាកម្មបទនៃប្រយោគ។ នាមទាំងឡាយណាដែលបញ្ចប់ដោយស្រៈ គេប្រើ -를 ហើយនាមទាំងឡាយណាដែលបញ្ចប់ដោយព្យព្ជានៈ គេប្រើ -을 ។ ជាទូទៅបរិវាស័ព្ទ -을/를 នេះ គេប្រើតែជាមួយកិរិយាស័ព្ទសកម្មប៉ុណ្ណោះ។"

var table = [
    {"n1":"커피를 마셔요","n2":"물을 마셔요"},
    {"n1":"영화를 봐요","n2":"신문을 봐요"},
    {"n1":"친구를 만나요","n2":"선생님을 만나요"},
    {"n1":"구두를 사요","n2":"옷을 사요"},
    ];

var senten = [
                {"num":"1/ ","korean":"책을 읽습니다.","khmer":"ខ្ញុំអានសៀវភៅ។"},
                {"num":"2/ ","korean":"선생님이 한국말을 가르칩니다.","khmer":"គ្រូបង្រៀន បង្រៀនភាសាកូរ៉េ។"},
                {"num":"3/ ","korean":"어머니가 음식을 만듭니다.","khmer":"ម្ដាយខ្ញុំធ្វើម្ហូប។"},
                {"num":"4/ ","korean":"친구가 피아노를 칩니다.","khmer":"មិត្តភក្តិលេងព្យាណូ។"},
                {"num":"5/ ","korean":"여자친구를 사랑합니다.","khmer":"ខ្ញុំស្រឡាញ់មិត្តស្រីខ្ញុំ។"},
            ];

            document.querySelector('#lesson-3 .subtitle').innerHTML=`<h3>${subtitle.st1}</h3>`;
            document.querySelector('#lesson-3 .subtitle-1').innerHTML=`<h3>${subtitle.st2}</h3>`;

var get_table =`<tr class="text-center">
                    <th>នាមដែលបញ្ចប់ដោយស្រៈ</th>
                    <th>នាមដែលបញ្ចប់ដោយព្យព្ជានៈ</th>
                </tr>`;
    
table.forEach((e)=>{
    get_table +=`<tr class="text-center">
                    <td>${e["n1"]}</td>
                    <td>${e["n2"]}</td>
                </tr>`;
});

document.querySelector("#lesson-3 .table").innerHTML=`<table class="table table-bordered border-3 bg-info">${get_table}</table>`;

document.querySelector("#lesson-3 .content").innerHTML=`<p>${content}</p>`;

var get_senten = "";
senten.forEach((e)=>{
    get_senten += `<b>${e["num"]}</b>${e["korean"]}<br>${e["khmer"]}<br>`;
})

document.querySelector('#lesson-3 .senten').innerHTML=`${get_senten}`;