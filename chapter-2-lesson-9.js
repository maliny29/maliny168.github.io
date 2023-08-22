var title = {"korean":"9/ -부터 -까지","khmer":"ចាប់ពី...រហូតដល់"};

document.querySelector("#lesson-9 .grammer-title").innerHTML=`<h2>${title.korean}</h2><h5>${title.khmer}</h5>`;

var subtitle = "របៀបប្រើប្រាស់";

var content = "បរិវាស័ព្ទនេះ បង្ហាញអំពីទំហំ ឬ រយៈពេលនៃព្រឹត្តិការណ៍មួយដែលបានកើតឡើង។ជាភាសាខ្មែរមានន័យថា តាំងពី / ចាប់ពី...ដល់ / រហូតដល់.. ។ជាទូទៅ គេប្រើ -에서 -까지 ជាមួយនឹងទីកន្លែង ហើយ គេប្រើ -부터 -까지 ជាមួយនឹងពេលវេលា។";

var table = [
            {"kr":"집에서 학교까지 버스로 20 분쯤 걸려요.","kh":"ពីផ្ទះទៅសាលាចំណាយពេលប្រហែល២០នាទីដោយឡានក្រុង។","kr1":"점심시간은 오후 1 시부터 2 시까지 입니다.","kh1":"អាហារថ្ងៃត្រង់គឺចាប់ពីម៉ោង១ ដល់ម៉ោង២រសៀល។"},
            {"kr":"한국에서 일본까지 배로 갈 수 있어요.","kh":"ពីកូរ៉េទៅជប៉ុន យើងអាចទៅដោយទូកបាន។","kr1":"월요일부터 금요일까지 일해요.","kh1":"ខ្ញុំធ្វើការពីថ្ងៃច័ន្ទដល់ថ្ងៃសុក្រ។"},
            {"kr":"여기애서 저기까지 몇 미터예요?<br> (여기부터 저기까지)","kh":"ពីកន្លែងនេះ​ ទីកន្លែងនោះប៉ុន្មានម៉ែត្រ?","kr1":"7 월부터 8 월까지 방학이에요.<br> (7 월에서 8 월까지)","kh1":"វិស្សមកាលគឺពីខែកក្កដា ដល់ ខែសីហា។"},
            ];
    
document.querySelector('#lesson-9 .subtitle').innerHTML=`<h3>${subtitle}</h3>`;

document.querySelector('#lesson-9 .content').innerHTML=`<b>${content}</b>`;

var get_table =`<tr class="text-center">
            <th>ទីកន្លែង에서 ទីកន្លែង까지</th>
            <th>ពេលវេលា부터 ពេលវេលា까지</th>
        </tr>`;

table.forEach((e)=>{
            get_table +=`<tr class="text-center">
                        <td>${e["kr"]}<br>${e["kh"]}</td>
                        <td>${e["kr1"]}<br>${e["kh1"]}</td>
                    </tr>`;
            });
document.querySelector("#lesson-9 .table").innerHTML=`<table class="table table-bordered border-3 bg-info">${get_table}</table>`;