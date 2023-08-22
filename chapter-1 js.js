// JavaScript Document
var button = [
			{"name":"1/ -ㅂ/습니다","target":"lesson-1","style":"--i:6;"},
			{"name":"2/ -아(어,여)요","target":"lesson-2","style":"--i:7;"},
			{"name":"3/ កិរិយាស័ព្ទ 이다","target":"lesson-3","style":"--i:8;"},
			{"name":"4/ កិរិយាស័ព្ទប្រែប្រួល","target":"lesson-4","style":"--i:9;"},
			{"name":"5/ -(으)ㄴ/는/(으)ㄹ","target":"lesson-5","style":"--i:10;"},
			{"name":"6/ -았(었,였)어요","target":"lesson-6","style":"--i:11;"},
			{"name":"7/ -았(었,였)었어요","target":"lesson-7","style":"--i:12;"},
			{"name":"8/ -(으)ㄹ 거예요 ①","target":"lesson-8","style":"--i:13;"},
			{"name":"9/ -고 있다 ①","target":"lesson-9","style":"--i:14;"},
			{"name":"10/ 안 / -지 않다","target":"lesson-10","style":"--i:14;"},
			{"name":"11/ -이/가 아니다","target":"lesson-11","style":"--i:15;"},
			{"name":"12/ 못 / -지 못해요","target":"lesson-12","style":"--i:16;"},
			];
function getButton(){
	var txt="";
	button.forEach((e)=>{
		txt +=`
			<button class="open" data-target="${e["target"]}" style="${e["style"]}">${e["name"]}</button>
			`
	});
	document.querySelector('.nav-menu').innerHTML=txt;
}
getButton();


//-------Lesson-4--------//
var note_lesson_4 = [
					{"number":"3/ ","text":"កិរិយាស័ព្ទប្រែប្រួលដែលបញ្ចប់ដោយព្យព្ជានៈㅂ"},
					{"number":"4/ ","text":"កិរិយាស័ព្ទប្រែប្រួលដែលបញ្ចប់ដោយព្យព្ជានៈㄷ"},
					{"number":"5/ ","text":"កិរិយាស័ព្ទប្រែប្រួលដែលបញ្ចប់ដោយព្យព្ជានៈㅅ"},
					{"number":"6/ ","text":"កិរិយាស័ព្ទប្រែប្រួលដែលបញ្ចប់ដោយព្យព្ជានៈㅎ"},
					];
document.querySelector('#lesson-4 .note3').innerHTML=`<p><b>${note_lesson_4[0]['number']}</b>${note_lesson_4[0]['text']}</p>`;

document.querySelector('#lesson-4 .note4').innerHTML=`<p><b>${note_lesson_4[1]['number']}</b>${note_lesson_4[1]['text']}</p>`;

document.querySelector('#lesson-4 .note5').innerHTML=`<p><b>${note_lesson_4[2]['number']}</b>${note_lesson_4[2]['text']}</p>`;

document.querySelector('#lesson-4 .note6').innerHTML=`<p><b>${note_lesson_4[3]['number']}</b>${note_lesson_4[3]['text']}</p>`;
			
//------P_note-------//
var p_note_lesson_4 = ["កិរិយាស័ព្ទដែលបញ្ចប់ដោយ ㅂ ហើយជួបនឹងទំរង់កិរិយាស័ព្ទដែលផ្ដើមដោយ												ㅇ",
					   
					  "លើកលែងពាក្យ 돕다 និង 곱다 គឺនៅពេលពាក្យទាំងពីរនេះជួបទំរង់ដូចជា -아(어,여)요 ត្រូវប្ដូរពី ㅂ មក 오 វិញ។",
					   
					  "ប៉ុន្តែ កិរិយាស័ព្ទខ្លះមិនមែនជាកិរិយាស័ព្ទប្រែប្រួលទេ ដូច្នេះហើយ ទោះបីជាវាជួបនឹង ទំរង់ដែលចាប់ផ្ដើមដោយ ㅇ ក៏ដោយ ក៏មិនប្រែប្រួលដែល។",
					   
					  "កិរិយាស័ព្ទទាំងឡាយណាដែលបញ្ចប់ដោយ ㄷ ហើយជួបនឹងទំរង់កិរិយាស័ព្ឬដែលផ្ដើមដោយ ㅇ ។",
					   
					  "ប៉ុន្តែ កិរិយាស័ព្ទខ្លះមិនមែនជាកិរិយាស័ព្ទប្រែប្រួលទេ ដូច្នេះ ទោះបីជាជួបនឹងទំរង់ដែលផ្ដើមដោយ ㅇ ក៏៏ដោយ ក៏មិនប្រែប្រួលដែរ។",
					   
					   "កិរិយាស័ព្ទទាំងឡាយណាដែលបញ្ចប់ដោយ ㅅ ហើយជួបនឹងទំរង់កិរិយាស័ព្ទដែលផ្ដើមដោយ ㅇ ត្រូវលុប ㅅ ចេញ ហើយបន្ថែមដោយ -아요 ឬ -어요 ។",
					   
					  {"number":"ក/ ","text":"កិរិយាស័ព្ទទាំងឡាយណាដែលបញ្ចប់ដោយ ㅎ ហើយជួបនឹងទំរង់កិរិយាស័ព្ទដែលផ្ដើមដោយ ㅇ ត្រូវលុប ㅎ ចេញ ហើយប្ដូរស្រៈទៅជា -애요។"},
					   
					  {"number":"ខ/","text":" ជួបទំរង់ដែលចាប់ផ្ដើមដោយ (으)ㄴ/는 (으)ㄹ"},
					   
					  {"number":"គ/ ","text":"ជួបទំរង់ដែលចាប់ផ្ដើមដោយ (으)ㅅ (-세요 / 십시오)"},
					  ""];
document.querySelector('#lesson-4 .p-note3').innerHTML=p_note_lesson_4[0];

document.querySelector('#lesson-4 .p-note3-1').innerHTML=p_note_lesson_4[1];

document.querySelector('#lesson-4 .p-note3-2').innerHTML=p_note_lesson_4[2];

document.querySelector('#lesson-4 .p-note4').innerHTML=p_note_lesson_4[3];

document.querySelector('#lesson-4 .p-note4-1').innerHTML=p_note_lesson_4[2];

document.querySelector('#lesson-4 .p-note5').innerHTML=p_note_lesson_4[5];

document.querySelector('#lesson-4 .p-note5-1').innerHTML=p_note_lesson_4[2];

document.querySelector('#lesson-4 .p-note6').innerHTML=`<i>${p_note_lesson_4[6]["number"]}</i>${p_note_lesson_4[6]["text"]}`;

document.querySelector('#lesson-4 .p-note6-1').innerHTML=`<i>${p_note_lesson_4[7]["number"]}</i>${p_note_lesson_4[7]["text"]}`;

document.querySelector('#lesson-4 .p-note6-2').innerHTML=`<i>${p_note_lesson_4[8]["number"]}</i>${p_note_lesson_4[8]["text"]}`;

document.querySelector('#lesson-4 .p-note6-3').innerHTML=p_note_lesson_4[2];


//------P_note end-------//

//-----b_note--------//
var b_note_lesson_4 = [
						{"b-1":"1/ ត្រូវលុប -다 ចេញពីកិរិយាស័ព្ទដើម","b-2":"2/ ត្រូវប្ដូរ ㅂ ទៅជា 우"},
						{"b-1":"1/ ត្រូវលុប -다 ចេញពីកិរិយាស័ព្ទដើម","b-2":"2/ ត្រូវប្ដូរ ㄷ ទៅជា ㄹ"},
						{"b-1":"1/ ត្រូវលុប -다 ចេញពីកិរិយាស័ព្ទដើម","b-2":"2/ ត្រូវលុប ㅅ ចេញ","b-3":"3/ បន្ថែមដោយ -아요 ឬ -어요 នៅចុងប្រយោគ"},
						{"b-1":"1/ ត្រូវលុប -다 ចេញពីកិរិយាស័ព្ទដើម","b-2":"2/ លុប ㅎ ចេញ ហើយប្ដូរស្រៈទៅជា -애요"},
						{"b-1":"1/ ត្រូវលុប -다 ចេញពីកិរិយាស័ព្ទដើម","b-2":"2/ លុប ㅎ ចេញ ហើយបូកទំរង់បន្ថែមខាងក្រោយ"},
						];
document.querySelector('#lesson-4 .b-note3').innerHTML=`${b_note_lesson_4[0]["b-1"]}<br>${b_note_lesson_4[0]["b-2"]}`;

document.querySelector('#lesson-4 .b-note4').innerHTML=`${b_note_lesson_4[1]["b-1"]}<br>${b_note_lesson_4[1]["b-2"]}`;

document.querySelector('#lesson-4 .b-note5').innerHTML=`${b_note_lesson_4[2]["b-1"]}<br>${b_note_lesson_4[2]["b-2"]}<br>${b_note_lesson_4[2]["b-3"]}`;

document.querySelector('#lesson-4 .b-note6').innerHTML=`${b_note_lesson_4[3]["b-1"]}<br>${b_note_lesson_4[3]["b-2"]}`;

document.querySelector('#lesson-4 .b-note6-1').innerHTML=`${b_note_lesson_4[4]["b-1"]}<br>${b_note_lesson_4[4]["b-2"]}`;

document.querySelector('#lesson-4 .b-note6-2').innerHTML=`${b_note_lesson_4[4]["b-1"]}<br>${b_note_lesson_4[4]["b-2"]}`;


//-----b_note end--------//

//-------table-------//
var table_l_4 = [
				{"verb1":"반갑다","verb2":"반가우 + -어요","verb3":"반가워요","khmer":"រីករាយដែលបានជួប"},
				{"verb1":"춥다","verb2":"추우 + -어요","verb3":"추워요","khmer":"ត្រជាក់"},
				//-----------------//
				{"verb1":"돕다","verb2":"도오 + -아요","verb3":"도와요","khmer":"ជួយ"},
				{"verb1":"곱다","verb2":"고오 + -아요","verb3":"고와요","khmer":"ល្អ(ឥរិយាបទ)"},
				//-----------------//
				{"verb1":"입다","verb2":"입 + -어요","verb3":"입어요","khmer":"ពាក់"},
				{"verb1":"넓다","verb2":"넓 + -어요","verb3":"넓어요","khmer":"ទូលាយ"},
				{"verb1":"씹다","verb2":"씹 + -어요","verb3":"씹어요","khmer":"ទំពារ"},
				{"verb1":"뽑다","verb2":"뽑 + -아요","verb3":"뽑아요","khmer":"ជ្រើសរើស"},
				{"verb1":"접다","verb2":"접 + -어요","verb3":"접어요","khmer":"បត់(ក្រដាស)"},
				{"verb1":"좁다","verb2":"좁 + -아요","verb3":"좁아요","khmer":"ចង្អៀត"},
				//------------------//
				{"verb1":"걷다","verb2":"걷 + -어요","verb3":"걸어요","khmer":"ដើរ"},
				{"verb1":"듣다","verb2":"듣 + -어요","verb3":"들어요","khmer":"ស្ដាប់"},
				{"verb1":"깨닫다","verb2":"깨닫 + -아요","verb3":"깨달아요","khmer":"ភ្ញាក់រលឹក"},
				//------------------//
				{"verb1":"받다","verb2":"받 + =아요","verb3":"받아요","khmer":"ទទួល"},
				{"verb1":"얻다","verb2":"얻 + -어요","verb3":"얻어요","khmer":"ទទួល"},
				{"verb1":"묻다","verb2":"묻 + -어요","verb3":"묻어요","khmer":"កប់"},
				{"verb1":"믿다","verb2":"믿 + -어요","verb3":"믿어요","khmer":"ជឿ"},
				{"verb1":"쏟다","verb2":"쏟 + -아요","verb3":"쏟어요","khmer":"ចាក់(ទឹក)"},
				{"verb1":"닫다","verb2":"닫 + -아요","verb3":"닫아요","khmer":"បិទ"},
				//------------------//
				{"verb1":"낫다","verb2":"낫 + -아요","verb3":"나아요","khmer":"ប្រសើរ , ជា"},
				{"verb1":"긋다","verb2":"긋 + -어요","verb3":"그어요","khmer":"គូសបន្ទាត់"},
				{"verb1":"짓다","verb2":"짓 + -어요","verb3":"지어요","khmer":"សាងសង់"},
				//------------------//
				{"verb1":"벗다","verb2":"벗 + -어요","verb3":"빗어요","khmer":"ដោះ(អាវ)"},
				{"verb1":"웃다","verb2":"웃 + -어요","verb3":"웃어요","khmer":"សើច"},
				{"verb1":"씻다","verb2":"씻 + -어요","verb3":"씻어요","khmer":"លាង"},
				{"verb1":"빗다","verb2":"빗 + -어요","verb3":"빗어요","khmer":"សិត"},
				{"verb1":"빼앗다","verb2":"빼앗 + -아요","verb3":"빼앗아요","khmer":"ដកយក"},
				//------------------//
				{"verb1":"이렇다","verb2":"이러 + -애요","verb3":"이래요","khmer":"យ៉ាងនេះ"},
				{"verb1":"어떻다","verb2":"어떠 + -애요","verb3":"어때요","khmer":"យ៉ាងម៉េច"},
				{"verb1":"그렇다","verb2":"그러 + -애요","verb3":"그래요","khmer":"ប្រាកដ"},
				{"verb1":"파랗다","verb2":"파라 + -애요","verb3":"파래요","khmer":"ពណ៌ខៀវ"},
				//------------------//
				{"verb1":"이렇다","verb2":"이러 + -(으)ㄴ","verb3":"이런","khmer":"យ៉ាងនេះ"},
				{"verb1":"어떻다","verb2":"어떠 + -(으)ㄹ","verb3":"어떨","khmer":"យ៉ាងម៉េច"},
				{"verb1":"그렇다","verb2":"그러 + -(으)ㄴ","verb3":"그런","khmer":"ប្រាកដ"},
				//------------------//
				{"verb1":"이렇다","verb2":"이러 + -세요","verb3":"이러세요","khmer":"យ៉ាងនេះ"},
				{"verb1":"어떻다","verb2":"어떠 + -세요","verb3":"어떠세요","khmer":"យ៉ាងម៉េច"},
				{"verb1":"그렇다","verb2":"그러 + -세요","verb3":"그러세요","khmer":"ប្រាកដ"},
				//------------------//
				{"verb1":"넣다","verb2":"넣 + -어요","verb3":"넣어요","khmer":"ដាក់ក្នុង"},
				{"verb1":"놓다","verb2":"놓 + -아요","verb3":"놓아요","khmer":"ដាក់លើ"},
				{"verb1":"쌓다","verb2":"쌓 + -아요","verb3":"쌓아요","khmer":"ដាក់គរ"}
				];
function gettable_l_4(){
	const subtable_3=table_l_4.slice(0,2);
	var txt_4=`<tr class="text-center">
						<th>កិ.ដើម</th>
						<th>ទំរង់វេយ្យាករណ៍</th>
						<th></th>
						<th>អត្ថន័យ</th>
					</tr>`;
	subtable_3.forEach((e)=>{
					  txt_4 += `<tr class="text-center">
						<td>${e.verb1}</td>
						<td>${e.verb2}</td>
						<td>${e.verb3}</td>
						<td>${e.khmer}</td>
					</tr>`
					  })
		document.querySelector('#lesson-4 .table-3').innerHTML=`<table class="table table-bordered border-3 bg-info">${txt_4}</table>`;
	
	var table_3_1 = `<tr class="text-center">
						<th>កិ.ដើម</th>
						<th>ទំរង់វេយ្យាករណ៍</th>
						<th></th>
						<th>អត្ថន័យ</th>
					</tr>`;
	
	const subtable_3_1=table_l_4.slice(2,4);
	
	subtable_3_1.forEach((e)=>{
					   table_3_1 +=`<tr class="text-center">
						<td>${e.verb1}</td>
						<td>${e.verb2}</td>
						<td>${e.verb3}</td>
						<td>${e.khmer}</td>
					</tr>`
					   })
	document.querySelector('#lesson-4 .table-3-1').innerHTML=`<table class="table table-bordered border-3 bg-info">${table_3_1}</table>`;
	
	var table_3_2 = `<tr class="text-center">
						<th>កិ.ដើម</th>
						<th>ទំរង់វេយ្យាករណ៍</th>
						<th></th>
						<th>អត្ថន័យ</th>
					</tr>`;
	
	const subtable_3_2=table_l_4.slice(4,10);
	
	subtable_3_2.forEach((e)=>{
					   table_3_2 +=`<tr class="text-center">
						<td>${e.verb1}</td>
						<td>${e.verb2}</td>
						<td>${e.verb3}</td>
						<td>${e.khmer}</td>
					</tr>`
					   })
	document.querySelector('#lesson-4 .table-3-2').innerHTML=`<table class="table table-bordered border-3 bg-info">${table_3_2}</table>`;
	
	var table_4 = `<tr class="text-center">
						<th>កិ.ដើម</th>
						<th>ទំរង់វេយ្យាករណ៍</th>
						<th></th>
						<th>អត្ថន័យ</th>
					</tr>`;
	
	const subtable_4=table_l_4.slice(10,13);
	
	subtable_4.forEach((e)=>{
					   table_4 +=`<tr class="text-center">
						<td>${e.verb1}</td>
						<td>${e.verb2}</td>
						<td>${e.verb3}</td>
						<td>${e.khmer}</td>
					</tr>`
					   })
	document.querySelector('#lesson-4 .table-4').innerHTML=`<table class="table table-bordered border-3 bg-info">${table_4}</table>`;
	
	var table_4_1 = `<tr class="text-center">
						<th>កិ.ដើម</th>
						<th>ទំរង់វេយ្យាករណ៍</th>
						<th></th>
						<th>អត្ថន័យ</th>
					</tr>`;
	
	const subtable_4_1=table_l_4.slice(13,19);
	
	subtable_4_1.forEach((e)=>{
					   table_4_1 +=`<tr class="text-center">
						<td>${e.verb1}</td>
						<td>${e.verb2}</td>
						<td>${e.verb3}</td>
						<td>${e.khmer}</td>
					</tr>`
					   })
	document.querySelector('#lesson-4 .table-4-1').innerHTML=`<table class="table table-bordered border-3 bg-info">${table_4_1}</table>`;
	
	var table_5 = `<tr class="text-center">
						<th>កិ.ដើម</th>
						<th>ទំរង់វេយ្យាករណ៍</th>
						<th></th>
						<th>អត្ថន័យ</th>
					</tr>`;
	
	const subtable_5=table_l_4.slice(19,22);
	
	subtable_5.forEach((e)=>{
					   table_5 +=`<tr class="text-center">
						<td>${e.verb1}</td>
						<td>${e.verb2}</td>
						<td>${e.verb3}</td>
						<td>${e.khmer}</td>
					</tr>`
					   })
	document.querySelector('#lesson-4 .table-5').innerHTML=`<table class="table table-bordered border-3 bg-info">${table_5}</table>`;
	
	var table_5_1 = `<tr class="text-center">
						<th>កិ.ដើម</th>
						<th>ទំរង់វេយ្យាករណ៍</th>
						<th></th>
						<th>អត្ថន័យ</th>
					</tr>`;
	
	const subtable_5_1=table_l_4.slice(22,27);
	
	subtable_5_1.forEach((e)=>{
					   table_5_1 +=`<tr class="text-center">
						<td>${e.verb1}</td>
						<td>${e.verb2}</td>
						<td>${e.verb3}</td>
						<td>${e.khmer}</td>
					</tr>`
					   })
	document.querySelector('#lesson-4 .table-5-1').innerHTML=`<table class="table table-bordered border-3 bg-info">${table_5_1}</table>`;
	
	var table_6 = `<tr class="text-center">
						<th>កិ.ដើម</th>
						<th>ទំរង់វេយ្យាករណ៍</th>
						<th></th>
						<th>អត្ថន័យ</th>
					</tr>`;
	
	const subtable_6=table_l_4.slice(27,31);
	
	subtable_6.forEach((e)=>{
					   table_6 +=`<tr class="text-center">
						<td>${e.verb1}</td>
						<td>${e.verb2}</td>
						<td>${e.verb3}</td>
						<td>${e.khmer}</td>
					</tr>`
					   })
	document.querySelector('#lesson-4 .table-6').innerHTML=`<table class="table table-bordered border-3 bg-info">${table_6}</table>`;
	
	var table_6_1= `<tr class="text-center">
						<th>កិ.ដើម</th>
						<th>ទំរង់វេយ្យាករណ៍</th>
						<th></th>
						<th>អត្ថន័យ</th>
					</tr>`;
	
	const subtable_6_1=table_l_4.slice(31,34);
	
	subtable_6_1.forEach((e)=>{
					   table_6_1 +=`<tr class="text-center">
						<td>${e.verb1}</td>
						<td>${e.verb2}</td>
						<td>${e.verb3}</td>
						<td>${e.khmer}</td>
					</tr>`
					   })
	document.querySelector('#lesson-4 .table-6-1').innerHTML=`<table class="table table-bordered border-3 bg-info">${table_6_1}</table>`;
	
	var table_6_2 = `<tr class="text-center">
						<th>កិ.ដើម</th>
						<th>ទំរង់វេយ្យាករណ៍</th>
						<th></th>
						<th>អត្ថន័យ</th>
					</tr>`;
	
	const subtable_6_2=table_l_4.slice(34,37);
	
	subtable_6_2.forEach((e)=>{
					   table_6_2 +=`<tr class="text-center">
						<td>${e.verb1}</td>
						<td>${e.verb2}</td>
						<td>${e.verb3}</td>
						<td>${e.khmer}</td>
					</tr>`
					   })
	document.querySelector('#lesson-4 .table-6-2').innerHTML=`<table class="table table-bordered border-3 bg-info">${table_6_2}</table>`;
	
	var table_6_3 = `<tr class="text-center">
						<th>កិ.ដើម</th>
						<th>ទំរង់វេយ្យាករណ៍</th>
						<th></th>
						<th>អត្ថន័យ</th>
					</tr>`;
	
	const subtable_6_3=table_l_4.slice(37,40);
	
	subtable_6_3.forEach((e)=>{
					   table_6_3 +=`<tr class="text-center">
						<td>${e.verb1}</td>
						<td>${e.verb2}</td>
						<td>${e.verb3}</td>
						<td>${e.khmer}</td>
					</tr>`
					   })
	document.querySelector('#lesson-4 .table-6-3').innerHTML=`<table class="table table-bordered border-3 bg-info">${table_6_3}</table>`;
}
gettable_l_4();

//-------table end-------//

//-------Lesson-4 End-------//
//-------Lesson-5--------//
var table = [
			{"verb1":"បច្ចុប្បន្នកាល","verb2":"는","verb3":"(으)ㄴ","verb4":"인", "verb5":"는"},
			{"verb1":"អនាគតកាល","verb2":"-(으)ㄹ","verb3":"-(으)ㄹ","verb4":"일", "verb5":"을"},
			];
	function gettable(){
		
		
	
		
		var txt=`<tr class="text-center">
						<th>កាល/កិ.</th>
						<th>កិ.សកម្ម</th>
						<th>កិ.ពណ៍នា ឬ កិ.អកម្ម</th>
						<th>កិ.이다</th>
						<th>កិ.있다/앖다</th>
					</tr>
					<tr class="text-center">
						<td>អតីតកាល</td>
						<td>는</th>
						<td colspan="3">-았(었,였)던 (សូមមើលមេរៀនទី ៣១៦)</td>
					</tr>`;
		table.forEach((e)=>{
			txt += `
					<tr class="text-center">
						<td>${e["verb1"]}</td>
						<td>${e["verb2"]}</td>
						<td>${e["verb3"]}</td>
						<td>${e["verb4"]}</td>
						<td>${e["verb5"]}</td>
					</tr>
					`
		});
		document.querySelector('#lesson-5 table').innerHTML=txt;
		
		var note_lesson_5 = [
					{"number":"Ⅰ","text":"  កិរិយាស័ព្ទពិពណ៌នា(បច្ចុប្បន្នកាល)"},
					{"number":"Ⅱ","text":"  បច្ចុប្បន្នកាល"},
					{"number":"Ⅲ","text":"  អតីតកាល"},
					{"number":"Ⅳ","text":"  អនាគតកាល"},
					];
		
		document.querySelector('#lesson-5 .note1').innerHTML=`<b>${note_lesson_5[0]['number']}</b><i>${note_lesson_5[0]['text']}</i>`;
		 
		document.querySelector('#lesson-5 .note2').innerHTML=`<b>${note_lesson_5[1]['number']}</b><i>${note_lesson_5[1]['text']}</i>`;
		
		document.querySelector('#lesson-5 .note3').innerHTML=`<b>${note_lesson_5[2]['number']}</b><i>${note_lesson_5[2]['text']}</i>`;
		
		document.querySelector('#lesson-5 .note4').innerHTML=`<b>${note_lesson_5[3]['number']}</b><i>${note_lesson_5[3]['text']}</i>`;
		var senten1 = [
				{"korean":"시원한 음료수를 마시고 싶어요.","khmer":"ខ្ញុំចង់ញំុាភេសជ្ជៈត្រជាក់។","number":"①"},
				{"korean":"매운 음식을 싫어해요.","khmer":"ខ្ញុំស្អប់អាហារហឹរ។","number":"②"},
				{"korean":"재미없는 영화를 보면 잠이 와요.","khmer":"បើខ្ញុំមើលរឿងអត់ល្អមើល ខ្ញុំគេង។","number":"③"},
				{"korean":"재미있는 이야기를 해 주세요.","khmer":"សួមនិយាយរឿងកំប្លែងអោយខ្ញុំស្ដាប់។","number":"④"},
				{"korean":"작은 가방을 샀어요.","khmer":"ខ្ញុំបានទិញកាបូបតូច។","number":"⑤"},
				];
		var text1="";
		
		var senten2 = [
					{"korean":"요리사는 음식을 만드는 사람입니다.","khmer":"ចុងភៅគឺជាអ្នកធ្វើម្ហូប។","number":"① "},
					{"korean":"제가 좋아하는 음식은 생선요리입니다.","khmer":"ម្ហូបដែលខ្ញុំចូលចិត្ត គឺម្ហូបធ្វើពីសាច់ត្រី។","number":"② "},
					{"korean":"버스를 타고 내리는 곳을 버서 정료장이라고 힙니다.","khmer":"កន្លែងដែលគេជិះ និង ចុះពីឡានក្រុង ហៅថា ចំណតឡានក្រុង។","number":"③ "},
						];
		var text2 ="";
		
		var senten3 = [
					{"korean":"어제 동대문 시장에서 산 옷이 조금 작습니다.","khmer":"អាវដែលខ្ញុំបានទិញនៅផ្សារដុងទែមូនម្សិលមិញ តូចបន្តិច។","number":"① "},
					{"korean":"이 지갑은 작년 생일에 받은 선물입니다.","khmer":"កាបូបដៃនេះ ជាកាដូដែលខ្ញុំបានទទួលក្នុងថ្ងៃខួបកំណើតឆ្នាំមុន។","number":"② "},
					{"korean":"아까 들은 노래를 또 듣습니다.","khmer":"ខ្ញុំស្ដាប់បទចម្រៀងដែលខ្ញុំស្ដាប់មុននេះ ទៀតហើយ។","number":"③ "},
						];
		var text3 ="";
		
		var senten4= [
					{"korean":"여기는 제가 일할 공장입니다.","khmer":"ទីនេះគឺជារោងចក្រដែលខ្ញុំនឹងធ្វើការ។","number":"① "},
					{"korean":"이 옷은 다음 주 졸업식에서 입을 옷이에요.","khmer":"អាវនេះជាអាវដែលខ្ញុំនឹងពាក់ក្នុងពិធីទទួលសញ្ញាប័ត្រអាទិត្យក្រោយ។","number":"② "},
					{"korean":"고향에 있는 가족에게 보낼 선물을 샀어요.","khmer":"ខ្ញុំបានទិញកាដូសម្រាប់ផ្ញើរអោយគ្រួសារនៅស្រុកកំណើត។","number":"③ "},
						];
		var text4 ="";
		
		senten1.forEach((e)=>{
			
			text1 +=`<p><b>${e["number"]}</b>  ${e["korean"]}<br>${e["khmer"]}</p>`
		});
		document.querySelector('.senten1').innerHTML=text1;
		
		senten2.forEach((e)=>{
			text2 +=`<p><b>${e["number"]}</b>${e["korean"]}<br>${e["khmer"]}</p>`
		}); 
		document.querySelector('.senten2').innerHTML=text2;
		
		senten3.forEach((e)=>{
			text3 +=`<p><b>${e["number"]}</b>${e["korean"]}<br>${e["khmer"]}</p>`
		}); 
		document.querySelector('.senten3').innerHTML=text3;
		
		senten4.forEach((e)=>{
			text4 +=`<p><b>${e["number"]}</b>${e["korean"]}<br>${e["khmer"]}</p>`
		}); 
		document.querySelector('.senten4').innerHTML=text4;
	}
	gettable();

	

	
//-----------Lesson-5 End----------//

//-----------lesson-6--------------//


 const open = document.querySelectorAll('.open');

  // Add click event listener to each toggle button
  open.forEach((button) => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      const targetElement = document.getElementById(targetId);

      // Toggle the target element
      targetElement.classList.toggle('active');
		
		button.classList.add('active');
      // Close other elements except the target element
     open.forEach((otherButton) => {
        if (otherButton !== button) {
          const otherTargetId = otherButton.getAttribute('data-target');
          const otherTargetElement = document.getElementById(otherTargetId);

          // Close the other target element
          otherTargetElement.classList.remove('active');
			otherButton.classList.remove('active');
		}
      });
    });
  });

