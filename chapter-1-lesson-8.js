// JavaScript Document

var title = {"korean":"8/ -(으)ㄹ 거예요 ①","khmer":"អនាគតកាល៖(ខ្ញុំ)នឹង"};

var subtitle = [
				{"title":"របៀបប្រើប្រាស់","content":"ទំរង់ -(으)ㄹ 거예요 គឺជាទំរង់អនាគតកាល។គេប្រើទំរង់នេះ ដើម្បីបង្ហាញពីចេតនា របស់នរណាម្នាក់ ក្នុងការចង់ធ្វើអ្វីមួយនាពេលអនាគត។"},
				{"title":"របៀបបង្កើតទំរង់","number1":"1/ ","text1":"លុប 다 ចេញពីកិរិយាស័ព្ទដើម","number2":"2/ ","text2":"បន្ថែម -(으)ㄹ 거예요 នោខាងក្រោយ"}
				];

var note = [
			{"number":"ក/ ","text":"កិរិយាស័ព្ទដែលបញ្ចប់ដោយព្យព្ជានៈ + -을거예요"},
			{"number":"ខ/ ","text":"កិរិយាស័ព្ទដែលបញ្ចប់ដោយស្រៈ + -ㄹ거예요"},
			{"number":"គ/ ","text":"កិរិយាស័ព្ទដែលបញ្ចប់ដោយព្យព្ជានៈ [ㄹ] + -거예요"},
			];

var table = [
			{"verb1":"보다","verb2":"-ㄹ 거예요","verb3":"볼 거예요","khmer":"នឹងមើល"},
			{"verb1":"가다","verb2":"-ㄹ 거예요","verb3":"갈 거예요","khmer":"នឹងទៅ"},
			{"verb1":"주다","verb2":"-ㄹ 거예요","verb3":"줄 거예요","khmer":"នឹងឲ្យ"},
			{"verb1":"그만두다","verb2":"-ㄹ 거예요","verb3":"그만둘 거예요","khmer":"នឹងបឈ្ឈប់"},
			{"verb1":"먹다","verb2":"-(으)ㄹ 거예요","verb3":"먹을 거예요","khmer":"នឹងញុំា"},
			{"verb1":"읽다","verb2":"-(으)ㄹ 거예요","verb3":"읽을 거예요","khmer":"នឹងអាន"},
			{"verb1":"돕다","verb2":"-(으)ㄹ 거예요","verb3":"도울 거예요","khmer":"នឹងជួយ"},
			{"verb1":"듣다","verb2":"-(으)ㄹ 거예요","verb3":"들을 거예요","khmer":"នឹងស្ដាប់"},
			{"verb1":"만들다","verb2":"-거예요","verb3":"만들 거예요","khmer":"នឹងធ្វើ"},
			{"verb1":"울다","verb2":"-거예요","verb3":"울 거예요","khmer":"នឹងយំ"},
			];

var senten = [
			{"number":"1/ ","korean":"다음 주에 미국에 갈 거예요.","khmer":"អាទិត្យក្រោយ ខ្ញុំនឹងទៅប្រទេសអាមេរិច។"},
			{"number":"2/ ","korean":"설날에 고에 갈 거예요.","khmer":"ថ្ងៃចូលឆ្នាំ ខ្ញុំនឹងទៅស្រុកកំណើត។"},
			{"number":"3/ ","korean":"이따가 음악을 들을 거예요.","khmer":"បន្តិចទៀត ខ្ញុំនឹងស្ដាប់ចម្រៀង។"},
			{"number":"4/ ","korean":"오늘 저녁에 돼지고기를 먹을 거예요.","khmer":"ល្ងាចនេះ ខ្ញុំនឹងញុាំសាច់ជ្រូក។"},
			];

document.querySelector('#lesson-8 .grammer-title').innerHTML=`<h2>${title.korean}</h2><h5>${title.khmer}</h5>`;

document.querySelector('#lesson-8 .subtitle').innerHTML=`<h3>${subtitle[0]["title"]}</h3><p>${subtitle[0]["content"]}</p>`;

document.querySelector('#lesson-8 .subtitle-1').innerHTML=`<h3>${subtitle[1]["title"]}</h3><b>${subtitle[1]["number1"]}</b>${subtitle[1]["text1"]}<br><b>${subtitle[1]["number2"]}</b>${subtitle[1]["text2"]}`;

document.querySelector('#lesson-8 .note-1').innerHTML=`<b>${note[0]["number"]}</b>${note[0]["text"]}` ;
	
document.querySelector('#lesson-8 .note-2').innerHTML=`<b>${note[1]["number"]}</b>${note[1]["text"]}`;
	
document.querySelector('#lesson-8 .note-3').innerHTML=`<b>${note[2]["number"]}</b>${note[2]["text"]}`;

var subtable_1 = table.slice(4,8);

var gettable_1 = `<tr class="text-center">
					<th>កិ.ដើម</th>
					<th>ទំរង់វេយ្យាករណ៍</th>
					<th></th>
					<th>អត្ថន័យ</th>
				</tr>`;
subtable_1.forEach((e)=>{
	gettable_1 += `
						<tr class="text-center">
							<td>${e.verb1}</td>
							<td>${e.verb2}</td>
							<td>${e.verb3}</td>
							<td>${e.khmer}</td>
						</tr>
					`;
})
document.querySelector('#lesson-8 .table-1').innerHTML=`<table class="table table-bordered border-3 bg-info">${gettable_1}</table>`;

var subtable_2 = table.slice(0,4);

var gettable_2 = `<tr class="text-center">
					<th>កិ.ដើម</th>
					<th>ទំរង់វេយ្យាករណ៍</th>
					<th></th>
					<th>អត្ថន័យ</th>
				</tr>`;
subtable_2.forEach((e)=>{
	gettable_2 += `
						<tr class="text-center">
							<td>${e.verb1}</td>
							<td>${e.verb2}</td>
							<td>${e.verb3}</td>
							<td>${e.khmer}</td>
						</tr>
					`;
})
document.querySelector('#lesson-8 .table-2').innerHTML=`<table class="table table-bordered border-3 bg-info">${gettable_2}</table>`;

var subtable_3 = table.slice(8,10);

var gettable_3 = `<tr class="text-center">
					<th>កិ.ដើម</th>
					<th>ទំរង់វេយ្យាករណ៍</th>
					<th></th>
					<th>អត្ថន័យ</th>
				</tr>`;
subtable_3.forEach((e)=>{
	gettable_3 += `
						<tr class="text-center">
							<td>${e.verb1}</td>
							<td>${e.verb2}</td>
							<td>${e.verb3}</td>
							<td>${e.khmer}</td>
						</tr>
					`;
})
document.querySelector('#lesson-8 .table-3').innerHTML=`<table class="table table-bordered border-3 bg-info">${gettable_3}</table>`;

var getsenten = "";

senten.forEach((e)=>{
	getsenten +=`<b>${e["number"]}</b>${e["korean"]}<br>${e["khmer"]}<br>`;
})

document.querySelector('#lesson-8 .senten').innerHTML=getsenten;







