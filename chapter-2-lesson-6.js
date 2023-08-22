var title = {"korean":"6/ -에","khmer":"នៅ​ , ឯ"};

document.querySelector("#lesson-6 .grammer-title").innerHTML=`<h2>${title.korean}</h2><h5>${title.khmer}</h5>`;

var subtitle = "របៀបប្រើប្រាស់";

var content = [
                {"num":"Ⅰ ","txt":"បរិវាស័ព្ទ -에 គឺជាបរិវាស័ព្ទទិសដៅ។ គេច្រើនប្រើបរិវាស័ព្ទនេះជាមួយ កិរិយាស័ព្ទទិសដៅ ដែលមានដូចជា 가다 , 오다 , 다니다 , 들아가다 , 도착하다 , 올라가다​ និង 내려가다 ជាដើម។"},
                {"num":"Ⅱ ","txt":"ទំរង់បរិវាស័ព្ទ -에 នេះ ក៏គេប្រើជាមួយកិរិយាស័ព្ទ 있다 និង 없다 ដែរ។ នៅពេលគេប្រើវាជាមួយកិរិយាស័ព្ទនេះ គឺគេចង់សំដៅលើទីតាំងនៃមនុស្ស សត្វ វត្ថុ ឬ ទីកន្លែង។"},
                {"num":"Ⅲ ","txt":"គេប្រើ -에 ជាមួយពេលវេលា ដើម្បីបញ្ជាក់ពីសកម្មភាពអ្វីមួយដែលកើតឡើងក្នុងពេលនោះ។ ន័យរបស់បរិវាស័ព្ទនេះគឺ នៅ ។ គេអាចប្រើបរិវាស័ព្ទនេះជាមួយបរិវាស័ព្ទ -는 ឬ -도 បានដោយប្ដូរជាទំរង់ -에는 ឬ -에도 ។"},
                {"num":"Ⅳ ","txt":"គេប្រើ -에 ជាមួយវចនស័ព្ទ ដើម្បីបញ្ជាក់អំពីចំនួននៃអ្វីមួយ"}
            ];
        
var senten = [
                {"num":"1/ ","korean":"우리 집에 오세요.","khmer":"សូមមកផ្ទះខ្ញុំ។"},
                {"num":"2/ ","korean":"일요일마다 교회에 다녀요.","khmer":"ខ្ញុំទៅព្រះវិហារ រៀងរាល់អាទិត្យ។"},
                {"num":"3/ ","korean":"내일 친구가 우리 집에 옵니다.","khmer":"ថ្ងៃស្អែកមិត្តភក្តិមកផ្ទះខ្ញុំ។"},
                {"num":"1/ ","korean":"소파 위에 강아지가 있어요.","khmer":"មានកូនឆ្កែនៅលើសាឡុង។"},
                {"num":"2/ ","korean":"동생이 어디에 있어요?","khmer":"តើប្អូនអ្នកនៅឯណា?"},
                {"num":"3/ ","korean":"지금 집에 어머니와 동생이 있어요.","khmer":"ឥឡូវ ម៉ាក់ និង ប្អូននៅផ្ទះ។"},
                {"num":"4/ ","korean":"제 가족이 미국에 있어요.","khmer":"គ្រួសាររបស់ខ្ញុំនៅអាមេរិច។"},
                {"num":"5/ ","korean":"컴퓨터가 책상 위에 있어요.","khmer":"កំព្យួទ័រនៅលើតុ។"},
                {"num":"1/ ","korean":"다음 주에 출장 갑니다.","khmer":"អាទិត្យក្រោយ ខ្ញុំទៅបំពេញបេសកកម្មការងារ។"},
                {"num":"2/ ","korean":"낮 12시에 점심을 먹습니다.","khmer":"ខ្ញុំញុំាអាហារថ្ងៃត្រង់ ម៉ោង១២។"},
                {"num":"3/ ","korean":"주말에 친구를 만나요.","khmer":"ខ្ញុំជួបមិត្តភក្តិនៅចុងសប្ដាហ៍។"},
                {"num":"1/ ","korean":"사과 한 개에 얼마예요?","khmer":"តើផ្លែប៉ោម១ថ្លៃប៉ុន្មាន?"},
                {"num":"2/ ","korean":"하루에 2시간 한국말을 공부합니다.","khmer":"ខ្ញុំរៀនភាសាកូរ៉េមួយថ្ងៃ ២ម៉ោង។"},
                {"num":"3/ ","korean":"휴가가 일 년에 며칠이에요?","khmer":"តើមួយឆ្នាំ មានថ្ងៃឈប់សំរាកប៉ុន្មានថ្ងៃ?"},
            ];

var table = [
                {"date":"년/해","ex":"2023년에 , 작년에 , 올해에"},
                {"date":"월/달","ex":"4월에 , 지난 달에 , 이번 달에"},
                {"date":"날","ex":"4월 15일에 , 생일에"},
                {"date":"요일","ex":"월요일에 , 금요일에"},
                {"date":"시간","ex":"한 시에 , 오전에 , 오후에"},
                {"date":"계절","ex":"봄에 , 여름에 , 가을에 , 겨울에"},
            ];

var note = [
            {"note":"- 어제에 친구를 만났어요. ()"},
            {"note":"어제 친구를 만났어요. (ㅇ)"},
            {"note":"ខ្ញុំបានជួបមិត្តភក្តិម្សិលមីញ។"},
            {"note":"언제에 캄보디아에 가요? ()"},
            {"note":"언제 캄보디아에 가요? (ㅇ)"},
            {"note":"ពេលណាអ្នកទៅប្រទេសខ្មែរ?"},
            ];

            document.querySelector('#lesson-6 .subtitle').innerHTML=`<h3>${subtitle}</h3>`;

            document.querySelector("#lesson-6 .content").innerHTML=`<p><b>${content[0]["num"]}${content[0]["txt"]}</b></p>`;

            var sub_senten =senten.slice(0,3);

            var get_senten ="";
            sub_senten.forEach((e)=>{
                get_senten +=  `<b>${e["num"]}</b>${e["korean"]}<br>${e["khmer"]}<br>`;
            })
            
            document.querySelector('#lesson-6 .senten').innerHTML=`${get_senten}`;

            document.querySelector("#lesson-6 .content-1").innerHTML=`<p><b>${content[1]["num"]}${content[1]["txt"]}</b></p>`;
            document.querySelector("#lesson-6 .content-2").innerHTML=`<p><b>${content[2]["num"]}${content[2]["txt"]}</b></p>`;
            document.querySelector("#lesson-6 .content-3").innerHTML=`<p><b>${content[3]["num"]}${content[3]["txt"]}</b></p>`;

            var sub_senten_1 =senten.slice(3,8);

            var get_senten_1 ="";
            sub_senten_1.forEach((e)=>{
                get_senten_1 +=  `<b>${e["num"]}</b>${e["korean"]}<br>${e["khmer"]}<br>`;
            })
            
            document.querySelector('#lesson-6 .senten-1').innerHTML=`${get_senten_1}`;

            var get_table =`<tr class="text-center">
            <th>ប្រភេទ</th>
            <th>ឧទាហរណ៍</th>
        </tr>`;

table.forEach((e)=>{
get_table +=`<tr class="text-center">
            <td>${e["date"]}</td>
            <td>${e["ex"]}</td>
        </tr>`;
});

document.querySelector("#lesson-6 .table").innerHTML=`<table class="table table-bordered border-3 bg-info">${get_table}</table>`;

var sub_senten_2 =senten.slice(8,11);

            var get_senten_2 ="";
            sub_senten_2.forEach((e)=>{
                get_senten_2 +=  `<b>${e["num"]}</b>${e["korean"]}<br>${e["khmer"]}<br>`;
            })
            
            document.querySelector('#lesson-6 .senten-2').innerHTML=`${get_senten_2}`;

            var sub_senten_3 =senten.slice(11,14);

            var get_senten_3 ="";
            sub_senten_3.forEach((e)=>{
                get_senten_3 +=  `<b>${e["num"]}</b>${e["korean"]}<br>${e["khmer"]}<br>`;
            })
            
            document.querySelector('#lesson-6 .senten-3').innerHTML=`${get_senten_3}`;