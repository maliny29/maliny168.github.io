var title = {"korean":"10/ -에게/한테/에","khmer":"ដល់/ចំពោះ"};

document.querySelector("#lesson-10 .grammer-title").innerHTML=`<h2>${title.korean}</h2><h5>${title.khmer}</h5>`;

var subtitle = "របៀបប្រើប្រាស់";

var content = "គេប្រើ -에게/한테 ជាមួយនាមសត្វ​ ឬ មនុស្សដែលរងអំពើ។ នៅក្នុងការនិយាយគេប្រើ -한테 ច្រើនជាងប្រើ -에게 ។ -에게 / 한테 អាចប្រើបានជាមួយតែនឹងមនុស្ស ឬ សត្វប៉ុណ្ណោះ។ ក្នុងករណីចង់ប្រើជាមួយវត្ថុ រុក្ខជាតិ ឬ ទីកន្លែង ត្រូវប្រើ -에 ។";

var table = [
            {"kr":"개에게 물을 줘요.","kh":"ខ្ញុំឲ្យទឹកឆ្កែ។","kr1":"나무에 물을 줘요.","kh1":"ខ្ញុំស្រោចទឹកផ្កា។"},
            {"kr":"친구에게 소포를 보내요.","kh":"ខ្ញុំបញ្ជូនរបស់ឲ្យមិត្តភក្តិ។","kr1":"중국에 소포를 보내요.","kh1":"ខ្ញុំបញ្ជូនរបស់ទៅប្រទេសចិន។"},
            {"kr":"선생님한테 물어봐요.","kh":"ខ្ញុំសួរគ្រូបង្រៀន។","kr1":"회사에 물어봐요.","kh1":"ខ្ញុំសួរទៅក្រុមហ៊ុន។"},
            {"kr":"친구한테 전화해요.","kh":"ខ្ញុំទូរស័ព្ទទៅមិត្តភក្តិ។","kr1":"사무실에 전화해요.","kh1":"ខ្ញុំទូរស័ព្ទទៅការិយាល័យ។"},
            ];

var sentence = [
                {"num":"1/ ","kr":"날마다 여자친구한테 편지를 씁니다.","kh":"ខ្ញុំសរសេរសំបុត្រផ្ញើរទៅមិត្តស្រីខ្ញុំរាល់ថ្ងៃ។"},
                {"num":"2/ ","kr":"사장님이 저한테 월급을 줍니다.","kh":"ថៅកែបើកប្រាក់ខែឲ្យខ្ញុំ។"}
                ];

                document.querySelector('#lesson-10 .subtitle').innerHTML=`<h3>${subtitle}</h3>`;                 

                document.querySelector("#lesson-10 .content").innerHTML=`<p><b>${content}</b></p>`;
var get_table =`<tr class="text-center">
            <th>-에게/한테</th>
            <th>-에</th>
        </tr>`;

table.forEach((e)=>{
            get_table +=`<tr class="text-center">
                        <td>${e["kr"]}<br>${e["kh"]}</td>
                        <td>${e["kr1"]}<br>${e["kh1"]}</td>
                    </tr>`;
            });
document.querySelector("#lesson-10 .table").innerHTML=`<table class="table table-bordered border-3 bg-info">${get_table}</table>`;

var get_sentence ="";
sentence.forEach((e)=>{
    get_sentence +=  `<b>${e["num"]}</b>${e["kr"]}<br>${e["kh"]}<br>`;
})

document.querySelector('#lesson-10 .sentence').innerHTML=`${get_sentence}`;