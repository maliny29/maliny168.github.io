var title = {"korean":"11/ -이/가 아니다","khmer":"មិនមែនជា...ទេ"};

document.querySelector('#lesson-11 .grammer-title').innerHTML=`<h2>${title.korean}</h2><h5>${title.khmer}</h5>`;

var sub_title = {"title":"របៀបប្រើប្រាស់","content":"ទំរង់បដិសេធនៃកិរិយាស័ព្ទ 이다 គឺ -이/가 아니다 ។នាមដែលបញ្ចប់ដោយស្រៈត្រូវប្រើទំរង់ -가 아니다 នាមដែលបញ្ចប់ដោយព្យព្ជានៈត្រូវប្រើទំរង់ -이 아니다។"};

document.querySelector('#lesson-11 .subtitle').innerHTML=`<h3>${sub_title.title}</h3>${sub_title.content}`;

var senten = [
                {"num":"1/ ","korean":"저는 한국 사람이 아닙니다.","khmer":"ខ្ញុំមិនមែន​ ជាជនជាតិ កូរ៉េទេ។"},
                {"num":"2/ ","korean":"그분은 학생이 아닙니다.","khmer":"គាត់​មិនមែន​ ជាសិស្សទេ។"},
                {"num":"3/ ","korean":"이것은 의자가 아닙니다.","khmer":"នេះមិនមែន ជាកៅអីទេ។"},
            ];

var get_senten ="";

senten.forEach((e)=>{
    get_senten += `<b>${e["num"]}</b>${e["korean"]}<br>${e["khmer"]}<br>`;
})

document.querySelector('#lesson-11 .senten').innerHTML=get_senten;
