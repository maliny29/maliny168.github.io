var title = [
			{"korean":"-았(었,였)었어요","khmer":"7/ ទំរង់អតីតកាលបញ្ចប់ជាស្ថាពរ","khmer1":"ធ្លាប់បាន"}
			];

var subtitle = [
			{"title":"របៀបប្រើប្រាស់","content":"ទំរង់នេះ ជាទំរង់អតីតកាលបញ្ចប់ជាស្ថាពរ។ គេប្រើដើម្បីបញ្ជាក់សកម្មភាពណាមួយ ដែលបានបញ្ចប់ជាំស្ថាពរក្នុងអតីតកាល ហើយសកម្មភាពនោះ មិនបន្តមកដល់បច្ចុប្បន្នកាលទៀតទេ។"},
			{"title":"របៀបបង្កើតទំរង់","number1":"1/ ","text1":"លុប -다 ចេញពីកិរិយាស័ព្ទដើម","number2":"2/","text2":"បន្ថែម -았(었,였)었어요 នៅខាងក្រោយ"},
				];

var note = [
			{"number":"ក/","khmer":"កិរិយាស័ព្ទដែលបញ្ចប់ដោយស្រៈ ㅗ និង ㅏ + -았었어요 "},
			{"number":"ខ/","khmer":"កិរិយាស័ព្ទដែលបញ្ចប់ដោយស្រៈ ㅜ ㅓ ㅡ ㅣឬស្រៈផ្សំ + -었었어요"},
			{"number":"គ/","khmer":"កិរិយាស័ព្ទដែលបញ្ចប់ដោយ 하다 + 였었어요"},
			];

var table = [
			{"verb1":"앉다","verb2":"-았었어요","verb3":"앉았었어요","khmer":"(ខ្ញុំ)ធ្លាប់បានអង្គុយ"},
			{"verb1":"받다","verb2":"-았었어요","verb3":"받았었어요","khmer":"(ខ្ញុំ)ធ្លាប់បានទទួល"},
			{"verb1":"가다","verb2":"-았었어요","verb3":"갔었어요","khmer":"(ខ្ញុំ)ធ្លាប់បានទៅ"},
			{"verb1":"읽다","verb2":"-었었어요","verb3":"읽었었어요","khmer":"(ខ្ញុំ)ធ្លាប់បានអាន"},
			{"verb1":"보내다","verb2":"-었었어요","verb3":"보냈었어요","khmer":"(ខ្ញុំ)ធ្លាប់បានបញ្ជូន"},
			{"verb1":"배우다","verb2":"-었었어요","verb3":"배었어요","khmer":"(ខ្ញុំ)ធ្លាប់បានរៀន"},
			{"verb1":"마시다","verb2":"-었었어요","verb3":"마셨었어","khmer":"(ខ្ញុំ)ធ្លាប់បានផឹក"},
			{"verb1":"말하다","verb2":"-였었어요","verb3":"말했었어요","khmer":"(ខ្ញុំ)ធ្លាប់បាននិយាយ"},
			{"verb1":"공부하다","verb2":"-였었어요","verb3":"공부했었어요","khmer":"(ខ្ញុំ)ធ្លាប់បានសិក្សា"},
			{"verb1":"전화하다","verb2":"-였었어요","verb3":"전화했었엉요","khmer":"(ខ្ញុំ)ធ្លាប់បានទូរស័ព្ទ"},
			];

var senten = [
			{"number":"1/ ","korean":"중국에 갔었어요.","khmer":"ខ្ញុំធ្លាប់បានទៅប្រទេសចិន។(ពេលនេះខ្ញុំមិននៅប្រទេសចិនទៀតទេ)"},
			{"number":"2/ ","korean":"아버지가 뚱뚱했었어요.","khmer":"ឪពុកខ្ញុំធ្លាប់ធាត់(ពីមុន)។"},
			{"number":"3/ ","korean":"요즘 바다에 사람이 없어요.여름에는 사람이 많았었어요.","khmer":"សព្វថ្ងៃនៅសមុទ្រអត់មានមនុស្សទេ។កាលពីរដូវក្ដៅ(ធ្លាប់)មានមនុស្សច្រើនណាស់។"},
			{"number":"4/ ","korean":"대기업에서 3년 동안 근무했었어요.","khmer":"ខ្ញុំធ្លាប់បានធ្វើការរយះពេល៣ឆ្នាំនៅក្នុងសហគ្រាសខ្នាតធំ។"},
			{"number":"5/ ","korean":"그 학원에 2 년 전에 다녔었어요.","khmer":"ខ្ញុំធ្លាប់បានរៀននៅសាលាគួរនោះ២ឆ្នាំមុន។"},
				];

document.querySelector('#lesson-7 .grammer-title').innerHTML=`<h2><span style="font-family:'khmer OS Muol Light';font-size:1.5rem">${title[0]["khmer"]}</span>${title[0]["korean"]}</h2><h5>${title[0]['khmer1']}</h5>`;

document.querySelector('#lesson-7 .subtitle').innerHTML=`<h3>${subtitle[0]["title"]}</h3><p>${subtitle[0]["content"]}</p>`;

document.querySelector('#lesson-7 .subtitle-1').innerHTML=`<h3>${subtitle[0]["title"]}</h3><b>${subtitle[1]["number1"]}</b>${subtitle[1]["text1"]}<br><b>${subtitle[1]["number2"]}</b>${subtitle[1]["text2"]}`;

document.querySelector('#lesson-7 .note-1').innerHTML = `<b>${note[0]["number"]}</b>${note[0]["khmer"]}`;

document.querySelector('#lesson-7 .note-2').innerHTML=`<b>${note[1]["number"]}</b>${note[1]["khmer"]}`;

document.querySelector('#lesson-7 .note-3').innerHTML=`<b>${note[2]["number"]}</b>${note[2]["khmer"]}`;

var subtable_1 = table.slice(0,3);

var tbl1=`<tr class="text-center">
		<th>កិ.ដើម</th>
		<th>ទំរង់វេយ្យាករណ៌</th>
		<th></th>
		<th>អត្ថន័យ</th>
		</tr>`;
subtable_1.forEach((e)=>{
	tbl1 +=`<tr class="text-center">
			<td>${e.verb1}</td>
			<td>${e.verb2}</td>
			<td>${e.verb3}</td>
			<td>${e.khmer}</td>
			</tr>`
})

document.querySelector('#lesson-7 .table-1').innerHTML=`<table class="table table-bordered border-3 bg-info">${tbl1}</table>`;

var subtable_2 = table.slice(3,7);

var tbl2=`<tr class="text-center">
		<th>កិ.ដើម</th>
		<th>ទំរង់វេយ្យាករណ៌</th>
		<th></th>
		<th>អត្ថន័យ</th>
		</tr>`;
subtable_2.forEach((e)=>{
	tbl2 +=`<tr class="text-center">
			<td>${e.verb1}</td>
			<td>${e.verb2}</td>
			<td>${e.verb3}</td>
			<td>${e.khmer}</td>
			</tr>`
})

document.querySelector('#lesson-7 .table-2').innerHTML=`<table class="table table-bordered border-3 bg-info">${tbl2}</table>`;

var subtable_3 = table.slice(7,10);

var tbl3=`<tr class="text-center">
		<th>កិ.ដើម</th>
		<th>ទំរង់វេយ្យាករណ៌</th>
		<th></th>
		<th>អត្ថន័យ</th>
		</tr>`;
subtable_3.forEach((e)=>{
	tbl3 +=`<tr class="text-center">
			<td>${e.verb1}</td>
			<td>${e.verb2}</td>
			<td>${e.verb3}</td>
			<td>${e.khmer}</td>
			</tr>`
})

document.querySelector('#lesson-7 .table-3').innerHTML=`<table class="table table-bordered border-3 bg-info">${tbl3}</table>`;

var getsenten = "";

senten.forEach((e)=>{
	getsenten +=`<b>${e["number"]}</b>${e["korean"]}<br>${e["khmer"]}<br>`;
})

document.querySelector('#lesson-7 .senten').innerHTML=getsenten;
