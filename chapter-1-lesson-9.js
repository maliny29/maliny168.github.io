// JavaScript Document

var title = {"korean":"9/ -고 있다 ①","khmer":"កំពុង"};

document.querySelector('#lesson-9 .grammer-title').innerHTML=`<h2>${title.korean}</h2><h5>${title.khmer}</h5>`;

var subtitle = [
                {"title":"របៀបប្រើប្រាស់","content":"ទំរង់នេះគឺជាទំរង់ដែលប្រើដើម្បីបង្ហាញអំពីសកម្មភាពអី្វមួយកំពុងដំណើរការ ឬ មានសកម្មភាពកំពុងបន្ត។គេប្រើទំរង់នេះជាមួយកិរិយាស័ព្ទសកម្ម។ពេលខ្លះ គេប្រើទំរង់នេះ ក្នុងទំរង់អតីតកាល -고있었어요 ដើម្បីបញ្ជាក់ពីសកម្មភាពកំពុងបន្តណាមួយដែលបានកើតឡើងមិនច្បាស់លាស់ក្នុងអតីតកាល។"},
                {"title":"របៀបបង្កើតទំរង់","num1":"1/ ","txt1":"ត្រូវលុប -다 ចេញពីកិរិយាស័ព្ទដើម","num2":"2/ ","txt2":"បន្ថែម -고 있어요 នៅខាងក្រោយ"},
                ];

document.querySelector('#lesson-9 .subtitle').innerHTML=`<h3>${subtitle[0]["title"]}</h3><p>${subtitle[0]["content"]}</p>`;
document.querySelector('#lesson-9 .subtitle-1').innerHTML=`<h3>${subtitle[1]["title"]}</h3><p><b>${subtitle[1]["num1"]}</b>${subtitle[1]["txt1"]}<br><b>${subtitle[1]["num2"]}</b>${subtitle[1]["txt2"]}</p>`;

var table = [
            {"verb1":"가다","verb2":"-고 있어요","verb3":"가고 있어요","khmer":"(ខ្ញុំ)កំពុងទៅ"},
            {"verb1":"먹다","verb2":"-고 있어요","verb3":"먹고 있어요","khmer":"(ខ្ញុំ)កំពុងញុំា"},
            {"verb1":"듣다","verb2":"-고 있어요","verb3":"듣고 있어요","khmer":"(ខ្ញុំ)កំពុងស្ដាប់"},
            {"verb1":"짓다","verb2":"-고 있어요","verb3":"짓고 있어요","khmer":"(ខ្ញុំ)កំពុងសាងសង់"},
            ];

var get_table =`<tr class="text-center">
                                <th>កិដើម</th>
                                <th>ទំរង់វេយ្យាករណ៍</th>
                                <th></th>
                                <th>អត្ថន័យ</th>
                            </tr>`;
table.forEach((e)=>{
    get_table += `<tr class="text-center">  
                     <td>${e["verb1"]}</td>   
                     <td>${e["verb2"]}</td>   
                     <td>${e["verb3"]}</td>   
                     <td>${e["khmer"]}</td>   
                </tr>`;
})
document.querySelector('#lesson-9 .table').innerHTML= `<table class="table table-bordered border-3 bg-info">${get_table}</table>`;

var senten = [
                {"num":"1/ ","korean":"저는 지금 영화를 보고 있어요.","khmer":"ឥឡូវនេះ​ ខ្ញុំកំពុងមើលកុន។"},
                {"num":"2/ ","korean":"음악을 듣고 있어요.","khmer":"ខ្ញុំកំពុងស្ដាប់តន្រ្ដី។"},
                {"num":"3/ ","korean":"지금 밥을 먹고 있어요.","khmer":"ឥឡូវ​នេះ​ ខ្ញុំកំពុងញុំាបាយ។"},
                {"num":"4/ ","korean":"한국에 살고 있어요.","khmer":"ខ្ញុំកំពុងរស់នៅប្រទេសកូរ៉េ។"},
                {"num":"5/ ","korean":"제 친구는 수영을 하고 있어요.","khmer":"មិត្តភក្តិខ្ញុំកំពុងហែលទឹក។"},
            ];

var get_senten ="";

senten.forEach((e)=>{
    get_senten +=`<b>${e["num"]}</b>${e["korean"]}<br>${e["khmer"]}<br>`;
})

document.querySelector('#lesson-9 .senten').innerHTML=get_senten;
