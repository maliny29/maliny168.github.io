// JavaScript Document

var title = [
			{"korean":"6/ ទំរង់អតីតកាល-았(었,였)어요","khmer":"បាន"}
			
			];
 
var subtitle = [
				{"title":"របៀបប្រើប្រាស់","content":"របៀបបង្កើតទំរង់អតីតកាល ក៏ដូចជាការបង្កើតទំរង់បច្ចុប្បន្នកាលដែរ ដោយគ្រាន់តែ បន្ថែម -ㅆ어요 ក្រោយទំរង់ -아(어,여) ប៉ុណ្ណោះ។ គេប្រើទំរង់នេះ ដើម្បីពិពណ៌នាបែបទូទៅពីសកម្មភាព អ្វីមួយដែលបានកើតឡើងក្នុងអតីតកាល។"},
				{"title":"របៀបបង្កើតទំរង់","number1":"1/ ","text1":"លុប -다 ចេញពីកិរិយាស័ព្ទដើម","number2":"2/ ","text2":"បន្ថែម -았(었,였)어요 នៅខាងក្រោយ"}
				];

var note = [
			{"number":"ក/ ","text":"កិរិយាស័ព្ទដែលបញ្ចប់ដោយស្រៈ ㅗ និង ㅏ + -았어요 "},
			{"number":"ខ/ ","text":"កិរិយាស័ព្ទដែលបញ្ចប់ដោយស្រៈ ㅜ ㅓ ㅡ ㅣ ឬស្រៈផ្សំ + -었어"},
			{"number":"គ/ ","text":"កិរិយាស័ព្ទដែលបញ្ចប់ដោយ 하다 + -였어요"},
			
			];

var table = [
			{"verb1":"앉다","verb2":"-았어요","verb3":"앉았어요","khmer":"(ខ្ញុំ)បានអង្គុយ"},
			{"verb1":"받다","verb2":"-았어요","verb3":"받았어요","khmer":"(ខ្ញុំ)បានទទួល"},
			{"verb1":"가다","verb2":"-았어요","verb3":"갔어요","khmer":"(ខ្ញុំ)បានទៅ"},
			{"verb1":"읽다","verb2":"-었어요","verb3":"읽었어요","khmer":"(ខ្ញុំ)បានអាន"},
			{"verb1":"보내다","verb2":"-었어요","verb3":"보냈어요","khmer":"(ខ្ញុំ)បានផ្ញើរ"},
			{"verb1":"배우다","verb2":"-었어요","verb3":"배웠어요","khmer":"(ខ្ញុំ)បានរៀន"},
			{"verb1":"마시다","verb2":"-었어요","verb3":"마섰어요","khmer":"(ខ្ញុំ)បានផឹក"},
			{"verb1":"말하다","verb2":"-였어요","verb3":"말했어요","khmer":"(ខ្ញុំ)បាននិយាយ"},
			{"verb1":"공부하다","verb2":"-였어요","verb3":"공부했어요","khmer":"(ខ្ញុំ)បានរៀន"},
			{"verb1":"전화하","verb2":"-였어요","verb3":"전화했어요","khmer":"(ខ្ញុំ)បានទូរស័ព្ទ"},
			];

var senten = [
				{"number":"① ","korean":"음악을 들었어요.","khmer":"ខ្ញុំបានស្ដាប់តន្រី្ដ។"},
				{"number":"② ","korean":"어제 한국 음식을 먹었어요.","khmer":"ម្សិលមិញខ្ញុំបានញាំុអាហារកូរ៉េ។"},
				{"number":"③ ","korean":"어제는 날씨가 좋았어요.","khmer":"ម្សិលមិញ អាកាសធាតុល្អ។"},
				{"number":"④ ","korean":"우리는 열심히 일했어요.","khmer":"ពួកយើង(បាន)ខំប្រឹងធ្វើការណាស់។"},
			];

document.querySelector('#lesson-6 .grammer-title').innerHTML=`<h2>${title[0]["korean"]}</h2><h5>${title[0]["khmer"]}</h5>`;

document.querySelector('#lesson-6 .subtitle').innerHTML=`<h3>${subtitle[0]["title"]}</h3><p>${subtitle[0]["content"]}</p>`;

document.querySelector('#lesson-6 .subtitle-1').innerHTML=`<h3>${subtitle[1]["title"]}</h3><b>${subtitle[1]["number1"]}</b>${subtitle[1]["text1"]}<br><b>${subtitle[1]["number2"]}</b>${subtitle[1]["text2"]}`;

document.querySelector('#lesson-6 .note-1').innerHTML=`<b>${note[0]["number"]}</b>${note[0]["text"]}`; 

document.querySelector('#lesson-6 .note-2').innerHTML=`<b>${note[1]["number"]}</b>${note[1]["text"]}`; 

document.querySelector('#lesson-6 .note-3').innerHTML=`<b>${note[2]["number"]}</b>${note[2]["text"]}`; 

var getsenten = "";
senten.forEach((e)=>{
			   getsenten += `<p><b>${e["number"]}</b>${e["korean"]}<br>${e["khmer"]}<br></p>`
			   })
document.querySelector('#lesson-6 .senten').innerHTML=getsenten;

	const subtable = table.slice(0,3);
	var gettable = `
					<tr class="text-center">
						<th>កិ.ដើម</th>
						<th>ទំរង់វេយ្យាករណ៍</th>
						<th></th>
						<th>អត្ថន័យ</th>
					</tr>`
				;

subtable.forEach((e)=>{
				 gettable += `<tr class="text-center">
								<td>${e.verb1}</td>
								<td>${e.verb2}</td>
								<td>${e.verb3}</td>
								<td>${e.khmer}</td>
							</tr>`;
				 })
document.querySelector('#lesson-6 .table-1').innerHTML=`<table class="table table-bordered border-3 bg-info">${gettable}</table>`; 


	const subtable1 = table.slice(3,7);
	var gettable1 = `
					<tr class="text-center">
						<th>កិ.ដើម</th>
						<th>ទំរង់វេយ្យាករណ៍</th>
						<th></th>
						<th>អត្ថន័យ</th>
					</tr>`
				;

subtable1.forEach((e)=>{
				 gettable1 += `<tr class="text-center">
								<td>${e.verb1}</td>
								<td>${e.verb2}</td>
								<td>${e.verb3}</td>
								<td>${e.khmer}</td>
							</tr>`;
				 })
document.querySelector('#lesson-6 .table-2').innerHTML=`<table class="table table-bordered border-3 bg-info">${gettable1}</table>`; 

const subtable2 = table.slice(7,10);
	var gettable2 = `
					<tr class="text-center">
						<th>កិ.ដើម</th>
						<th>ទំរង់វេយ្យាករណ៍</th>
						<th></th>
						<th>អត្ថន័យ</th>
					</tr>`
				;

subtable2.forEach((e)=>{
				 gettable2 += `<tr class="text-center">
								<td>${e.verb1}</td>
								<td>${e.verb2}</td>
								<td>${e.verb3}</td>
								<td>${e.khmer}</td>
							</tr>`;
				 })
document.querySelector('#lesson-6 .table-3').innerHTML=`<table class="table table-bordered border-3 bg-info">${gettable2}</table>`; 
