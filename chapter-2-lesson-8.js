var title = {"korean":"8/ -부터","khmer":"ចាប់ពី , ពី"};

document.querySelector("#lesson-8 .grammer-title").innerHTML=`<h2>${title.korean}</h2><h5>${title.khmer}</h5>`;

var subtitle = "របៀបប្រើប្រាស់";

var content = [
                {"num":"Ⅰ ","txt":"បរិវាស័ព្ទ​ -부터 គឺជាបរិវាស័ព្ទប្រើដើម្បីបញ្ជាក់ពីចំណុចចាប់ផ្ដើមណាមួយ។ គេប្រើ -부터 ជាមួយនាមពេលវេលាដើម្បីបញ្ជាក់ពីម៉ោង ឬ ពេលវេលាដែលចាប់ផ្ដើម។"},
                {"num":"Ⅱ ","txt":"គេប្រើបរិវាស័ព្ទ -부터 ជាមួយនឹងទីកន្លែងដើម្បីបញ្ជាក់ពីចំណុចចាប់ផ្ដើមនៃដំណើរការ ឬ ចំណុចចាប់ផ្ដើមនៃទីតាំងណាមួយ។"},
                {"num":"Ⅲ ","txt":"ប្រើដើម្បីបង្ហាញពីអ្វីដែលត្រូវធ្វើមុនគេ ក្នុងលំដាប់លំដោយនៃការងារជាច្រើនដែលត្រូវធ្វើ ឬ អំពីអ្វីមួយដំបូងគេក្នុងចំណោមវត្ថុជាច្រើន។"},
            ];

var sentence = [
                {"num":"1/ ","kr":"8월 1일부터 세일을 시작합니다.","kh":"គេចាប់ផ្ដើមបញ្ចុះតំលៃចាប់ពីថ្ងៃទី១ ខែសីហាតទៅ។"},
                {"num":"2/ ","kr":"오전 9시부터 오후 6시까지 일합니다.","kh":"ខ្ញុំធ្វើការពីម៉ោង៩ព្រឹក រហូតដល់ម៉ោង ៦ល្ងាច។"},
                {"num":"3/ ","kr":"내일부터 훈련이 시작합니다.","kh":"ការហ្វឹកហ្វឹនចាប់ផ្ដើមពីថ្ងៃស្អែកទៅ។"},
                {"num":"1/ ","kr":"서울부터 부산까지 기차로 몇 시간 걸립니까?.","kh":"តើចំណាយពេលប៉ុន្មានពីសេអ៊ូលទៅប៊ូសានតាមរយៈជើងរថភ្លើង?"},
                {"num":"2/ ","kr":"여기부터 저기까지 뛰어갑니다.","kh":"ខ្ញុំរត់ពីនេះទៅនោះ។"},
                {"num":"1/ ","kr":"한국어 사전은 ㄱ 부터 시작합니다.","kh":"វចនានុក្រមកូរ៉េចាប់ផ្ដើមពីអក្សរ ㄱ មុនគេ។"},
                {"num":"2/ ","kr":"밥을 먹으려면 손부터 씻어요.","kh":"បើចង់ញុំាបាយ ត្រូវលាងដៃជាមុនសិន។"},
                {"num":"3/ ","kr":"물부터 드세요.","kh":"សូមពិសាទឹកមុនសិនទៅ។"},
                ];

document.querySelector('#lesson-8 .subtitle').innerHTML=`<h3>${subtitle}</h3>`;

document.querySelector('#lesson-8 .content').innerHTML=`<b>${content[0]['num']}${content[0]['txt']}</b>`;
document.querySelector('#lesson-8 .content-1').innerHTML=`<b>${content[1]['num']}${content[1]['txt']}</b>`;
document.querySelector('#lesson-8 .content-2').innerHTML=`<b>${content[2]['num']}${content[2]['txt']}</b>`;

var sub_senten =sentence.slice(0,3);

var get_senten ="";
sub_senten.forEach((e)=>{
    get_senten +=  `<b>${e["num"]}</b>${e["kr"]}<br>${e["kh"]}<br>`;
})

document.querySelector('#lesson-8 .sentence').innerHTML=`${get_senten}`;

var sub_senten_1 =sentence.slice(3,5);

var get_senten_1 ="";
sub_senten_1.forEach((e)=>{
    get_senten_1 +=  `<b>${e["num"]}</b>${e["kr"]}<br>${e["kh"]}<br>`;
})

document.querySelector('#lesson-8 .sentence-1').innerHTML=`${get_senten_1}`;

var sub_senten_2 =sentence.slice(5,8);

var get_senten_2 ="";
sub_senten_2.forEach((e)=>{
    get_senten_2 +=  `<b>${e["num"]}</b>${e["kr"]}<br>${e["kh"]}<br>`;
})

document.querySelector('#lesson-8 .sentence-2').innerHTML=`${get_senten_2}`;