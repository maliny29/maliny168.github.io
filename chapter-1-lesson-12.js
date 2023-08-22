var title = {"korean":"12/ 못 / -지 못해요","khmer":"មិន(អាច)...ទេ"};

document.querySelector('#lesson-12 .grammer-title').innerHTML=`<h2>${title.korean}</h2><h5>${title.khmer}</h5>`;

var sub_title = [
                    {"title":"របៀបប្រើប្រាស់","content":"ទំរង់បដិសេធ 못 ឬ​ -지 못하다 នេះ ក៏ដូចជាទំរង់ 안/-지 않다 ដែរ ប៉ុន្តែទំរង់នេះអាចប្រើបានតែជាមួយនឹងកិរិយាស័ព្ទសកម្មប៉ុណ្ណោះ យើងមិនអាចប្រើវាជាមួយកិរិយាស័ព្ទពិពណ៌នាបានោឡើយ។ទំរង់នេះបង្ហាញពីការគ្មានលទ្ធភាពនឹងធ្វើសកម្មភាព។"},
                    {"title":"របៀបបង្កើតទំរង់វេយ្យាករណ៍","num1":"1/ ","txt1":"못 ប្រើពីមុខកិរិយាស័ព្ទសកម្ន","num2":"2/ ","txt2":"-지 못하다 ប្រើក្រោយកិរិយាស័ព្ទសកម្ម","txt3":"ចំពោះកិរិយាស័ព្ទ -하다 ដែលមិនមែនជាកិរិយាស័ព្ទពីរផ្សំចូលគ្នា គេមិនប្រើ 못 នៅពីមុខនាមទេ តែត្រូវដាក់នៅមុខពាក្យ -하다 វិញ។"}
                ];

document.querySelector('#lesson-12 .subtitle').innerHTML=`<h3>${sub_title[0]["title"]}</h3>${sub_title[0]["content"]}`;

document.querySelector('#lesson-12 .subtitle-1').innerHTML=`<h3>${sub_title[1]["title"]}</h3><b>${sub_title[1]["num1"]}</b>${sub_title[1]["txt1"]}`;
document.querySelector('#lesson-12 .subtitle-2').innerHTML=`<b>${sub_title[1]["num2"]}</b>${sub_title[1]["txt2"]}`;
document.querySelector('#lesson-12 .subtitle-3').innerHTML=`${sub_title[1]["txt3"]}`;

var senten = [
            {"num":"1/ ","korean":"저는 노래를 못 불러요.저는 노래를 부르지 못해요.","khmer":"ខ្ញូំមិនចេះច្រៀងទេ។"},
            {"num":"2/ ","korean":"날씨가 너무 덥습니다.일 못 합니다.","khmer":"ធាតុអាកាសក្ដៅខ្លាំងណាស់ខ្ញុំមិនអាចធ្វើការបានទេ។"},
            {"num":"3/ ","korean":"매운 음식을 먹지 못해요.","khmer":"ខ្ញុំមិន(អាច)ញុំាម្ហូបហឹរទេ។"},
            {"num":"4/ ","korean":"오토바이를 타지 못해요.","khmer":"ខ្ញុំមិនអាចជិះម៉ូតូបានទេ។"},
            {"num":"5/ ","korean":"이가 아파요.그래서 밥을 먹지 못해요.","khmer":"ខ្ញុំឈឺធ្មេញ។ដូច្នេះហើយ ខ្ញុំមិនអាចញុំាបាយបានទេ។"},
            ];

            var get_senten = "";
            senten.forEach((e)=>{
                get_senten += `<b>${e["num"]}</b>${e["korean"]}<br>${e["khmer"]}<br>`;
            })

            document.querySelector('#lesson-12 .senten').innerHTML=get_senten;