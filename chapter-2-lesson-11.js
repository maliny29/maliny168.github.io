var title = {"korean":"11/ -도","khmer":"ក៏...ដែរ"};

document.querySelector("#lesson-11 .grammer-title").innerHTML=`<h2>${title.korean}</h2><h5>${title.khmer}</h5>`;

var subtitle = "របៀបប្រើប្រាស់";

var content = [
                {"num":"Ⅰ ","txt":"បរិវាស័ព្ទ -도 មានន័យថា ក៏...ដែរ។ គេប្រើ -도 ជំនួសបរិវាស័ព្ទប្រធាន -은/는 ឬ បរិវាស័ព្ទកម្មបទ -을/를 ដោយលុប -은/는 ឬ -을/를 ចេញ។"},
                {"num":"Ⅱ ","txt":"រៀបរាប់អំពីអ្វីមួយដោយពន្យល់បញ្ជាក់លំអិត។"},
                ];

var sentence = [
                {"num":"1/ ","kr":"나는 한국 사람입니다. 그리고 친구도 한국 사람입니다.","kh":"ខ្ញុំជាជនជាតិកូរ់េ។ ហើយមិត្តខ្ញុំក៏ជាជនជាតិកូរ៉េដែរ។"},
                {"num":"2/ ","kr":"아버지는 돈이 많습니다. 그리고 시간도 많습니다.","kh":"ឪពុកខ្ញុំមានលុយច្រើន។ ហើយគាត់ក៏មានពេលវេលាច្រើនដែរ។"},
                {"num":"3/ ","kr":"나는 사과를 좋아합니다. 그리고 수박도 좋아합니다.","kh":"ខ្ញុំចូលចិត្តផ្លែប៉ោម។ ហើយក៏ចូលចិត្តផ្លែឪឡឹកដែរ។"},
                {"num":"4/ ","kr":"나는 공부를 잘합니다. 그리고 운동도 잘합니다.","kh":"ខ្ញុំរៀនពូកែ។ ហើយការហាត់កីឡាក៏ពូកែដែរ។"},
                {"num":"1/ ","kr":"저는 과일을 다 좋아합니다.사과도 좋아하고 ,파인애플도 좋아합니다.","kh":"ខ្ញុំចូលចិត្តផ្លែឈើទាំងអស់។ ផ្លែប៉ោមក៏ខ្ញុំចូលចិត្ត ផ្លែម្នាស់ក៏ខ្ញុំចូលចិត្ត។"},
                {"num":"2/ ","kr":"저는 어다서나 음악을 듣습니다.집에서도 듣습니다.버스에서도 듣습니다.길에서도 듣습니다.","kh":"ខ្ញុំស្ដាប់ចម្រៀងគ្រប់ទីកន្លែងទាំងអស់។ នៅផ្ទះក៏ស្ដាប់ នៅក្នុងឡានក្រុងក៏ស្ដាប់នៅតាមផ្លូវក៏ស្ដាប់។"},
                {"num":"- ","kr":"일본에 친구가 있어요. 그리고 미국에도 친구가 있어요. (ㅇ)<br> 일본에 친구가 있어요. 그리고 미국도 친구가 있어요.(x)","kh":"ខ្ញុំមានមិត្តភក្តិនៅជប៉ុន។ ហើយនៅអាមេរិចក៏ខ្ញុំមានមិត្តភក្តិដែរ។"},
                {"num":"- ","kr":"집에서 공부해요. 그리고 도서관에서도 공부해요. (ㅇ)<br> 집에서 공부해요. 그리고 도서관도 공부해요. (x)","kh":"ខ្ញុំរៀននៅផ្ទះ។ ហើយក៏រៀននៅបណ្ណាល័យដែរ។"},
            ];

var note = "ប៉ុន្តែក្រៅពីបរិវាស័ព្ទប្រធាន ឬ បរិវាស័ព្ទកម្មបទ ទោះបីជួបជាមួយនឹងបរិវាស័ព្ទ -도 ក៏ដោយ ក៏មិនត្រូវលុបចេញដែរ។";

document.querySelector('#lesson-11 .subtitle').innerHTML=`<h3>${subtitle}</h3>`;

document.querySelector('#lesson-11 .content').innerHTML=`<b>${content[0]['num']}${content[0]['txt']}</b>`;
document.querySelector('#lesson-11 .content-1').innerHTML=`<b>${content[1]['num']}${content[1]['txt']}</b>`;

var sub_senten =sentence.slice(0,4);

var get_senten ="";
sub_senten.forEach((e)=>{
    get_senten +=  `<b>${e["num"]}</b>${e["kr"]}<br>${e["kh"]}<br>`;
})

document.querySelector('#lesson-11 .sentence').innerHTML=`${get_senten}`;

var sub_senten_1 =sentence.slice(4,6);

var get_senten_1 ="";
sub_senten_1.forEach((e)=>{
    get_senten_1 +=  `<b>${e["num"]}</b>${e["kr"]}<br>${e["kh"]}<br>`;
})

document.querySelector('#lesson-11 .sentence-1').innerHTML=`${get_senten_1}`;

document.querySelector('#lesson-11 .note').innerHTML=`<p><b>${note}</b></p>`
var sub_senten_2 =sentence.slice(6,8);

var get_senten_2 ="";
sub_senten_2.forEach((e)=>{
    get_senten_2 +=  `<b>${e["num"]}</b>${e["kr"]}<br>${e["kh"]}<br>`;
})

document.querySelector('#lesson-11 .note-sentence').innerHTML=`${get_senten_2}`;