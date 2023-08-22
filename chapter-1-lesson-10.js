var title = {"korean":"10/ 안 / -지 않다","khmer":"មិន​ , អត់...ទេ"};

document.querySelector('#lesson-10 .grammer-title').innerHTML=`<h2>${title.korean}</h2><h5>${title.khmer}</h5>`;

var sub_title = [
                    {"title":"របៀបប្រើប្រាស់","content":"ទំរង់បដិសេធក្នុងភាសាកូរ៉េ គឺប្រើដើម្បីបដិសេធសកម្មភាពអ្វីមួយ។គេអាចប្រើបាន​ ២ ទំរង់ផ្សេងពីគា្ន គឺទំរង់ 안 + កិរិយាស័ព្ទ ឬ ទំរង់កិរិយាស័ព្ទ + -지 않아요 ។តែទំរង់ទាំងពីរនេះមានន័យដូចគ្នា។ជាភាសាខ្មែរមានន័យថា អត់/មិន។អាចប្រើជាមួយកិរិយាស័ព្ទសកម្មក៏បាន ប្រើជាមួយកិរិយាស័ព្ទពិពណ៌នាក៏បាន។"},
                    {"title":"របៀបបង្កើតទំរង់វេយ្យាករណ៍","num1":"1/ ","txt1":"안 ប្រើពីមុខកិរិយាស៏ព្ទ៖​ 안 + កិរិយាស័ព្ទ","txt2":"-지 않다 ប្រើក្រោយកិរិយាស័ព្ទ","num2":"2/ ","txt3":"ចំពោះករណីកិរិយាស័ព្ទ 하다 ដែលមិនមែនជាកិរិយាស័ព្ទពីរផ្សំចូលគ្នា គេមិនប្រើ 안 នៅមុខនាមទេ តែគេដាក់នៅពីមុខពាក្យ -하다 វិញ។","txt4":"ប៉ុន្តែ បើកិរិយាស័ព្ទ -하다 នោះជាកិរិយាស័ព្ទផ្សំដោយកិរិយាស័ព្ទពីរចូលគ្នា ត្រូវដាក់ 안 ពីមុខពាក្យនោះទាំងអស់។"},
                ];

document.querySelector('#lesson-10 .subtitle').innerHTML=`<h3>${sub_title[0]["title"]}</h3><p>${sub_title[0]["content"]}</p>`;               

document.querySelector('#lesson-10 .subtitle-1').innerHTML=`<h3>${sub_title[1]["title"]}</h3><b>${sub_title[1]["num1"]}</b>${sub_title[1]["txt1"]}`

document.querySelector('#lesson-10 .subtitle-2').innerHTML=`${sub_title[1]["txt1"]}`;

var note = [
            {"num":"1/ ","txt":"ត្រូវលុប -다 ចេញពីកិរិយាស័ព្ទដើម"},
            {"num":"2/ ","txt":"បន្ថែម -지 않다 នៅខាងក្រោយ"},
            ];

var txt = "";
 
note.forEach((e)=>{
   txt +=`<b>${e["num"]}</b>${e["txt"]}<br>`;
})

document.querySelector('#lesson-10 .note').innerHTML=txt;

var table = [
            {"verb1":"가다","verb2":"-지 않다","verb3":"가지 않다","khmer":"មិនទៅ"},
            {"verb1":"듣다","verb2":"-지 않다","verb3":"듣지 않다","khmer":"មិនស្ដាប់"},
            {"verb1":"짓다","verb2":"-지 않다","verb3":"짓지 않다","khmer":"មិនសាងសង់"},
            {"verb1":"예쁘다","verb2":"-지 않다","verb3":"예쁘지 않다","khmer":"មិនស្អាត"},
            {"verb1":"좋다","verb2":"-지 않다","verb3":"좋지 않다","khmer":"មិនល្អ"},
            ];
var get_table = `<tr class="text-center">
                     <th>កិ.ដើម</th>
                     <th>ទំរង់វេយ្យាករណ៍</th>
                     <th></th>
                     <th>អត្ថន័យ</th>
                  </tr>`;

table.forEach((e)=>{
   get_table +=  `<tr class="text-center">
                     <td>${e["verb1"]}</td>
                     <td>${e["verb2"]}</td>
                     <td>${e["verb3"]}</td>
                     <td>${e["khmer"]}</td>
                  </tr>`
});

document.querySelector('#lesson-10 .table').innerHTML=`<table class="table table-bordered border-3 bg-info">${get_table}</table>`

document.querySelector('#lesson-10 .subtitle-3').innerHTML=`<b>${sub_title[1]["num2"]}</b>${sub_title[1]["txt3"]}`

document.querySelector('#lesson-10 .subtitle-4').innerHTML=`${sub_title[1]["txt4"]}`

var senten = [
               {"num":"1/ ","korean":"방이 안 넓어요.","korean1":"방이 넓지 않아요.","khmer":"បន្ទប់មិនធំទេ។"},
               {"num":"2/ ","korean":"저는 고기를 안 먹어요.","korean1":"저는 고기를 먹지 않아요.","khmer":"ខ្ញុំមិនញុំាសាច់ទេ។"},
               {"num":"3/ ","korean":"오늘 안 춥습니다.","korean1":"오을 춥지 않습니다.","khmer":"ថ្ងៃនេះអត់រងារទេ។"},
               {"num":"4/ ","korean":"닐마다 운동을 안 합니다.","korean1":"날마다 운동을 하지 않습니다.","khmer":"ខ្ញុំមិនហាត់ប្រាណរាល់ថ្ងៃទេ។"},
            ];

var get_senten = "";

senten.forEach((e)=>{
   get_senten += `<b>${e["num"]}</b>${e["korean"]}<br>${e["korean1"]}<br>${e["khmer"]}<br>`;
})

document.querySelector('#lesson-10 .senten').innerHTML=get_senten;