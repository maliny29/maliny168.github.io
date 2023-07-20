// JavaScript Document
var button = [
			{"name":"1/ -ㅂ/습니다","target":"lesson-1","style":"--i:6;"},
			{"name":"2/ -아(어,여)요","target":"lesson-2","style":"--i:7;"},
			{"name":"3/ កិរិយាស័ព្ទ 이다","target":"lesson-3","style":"--i:8;"},
			{"name":"4/ កិរិយាស័ព្ទប្រែប្រួល","target":"lesson-4","style":"--i:9;"},
			{"name":"5/ -(으)ㄴ/는/(으)ㄹ","target":"lesson-5","style":"--i:10;"},
			{"name":"6/ កិរិយាស័ព្ទប្រែប្រួល","target":"lesson-6","style":"--i:11;"},
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
					];
document.querySelector('#lesson-4 .note3').innerHTML=`<p><b>${note_lesson_4[0]['number']}</b>${note_lesson_4[0]['text']}</p>`;
			
var p_note_lesson_4 = ["កិរិយាស័ព្ទដែលបញ្ចប់ដោយ ㅂ ហើយជួបនឹងទំរង់កិរិយាស័ព្ទដែលផ្ដើមដោយ						ㅇ",
					  ""];
document.querySelector('#lesson-4 .p-note3').innerHTML=p_note_lesson_4[0];

var b_note_lesson_4 = [
						{"b-1":"1/ ត្រូវលុប -다 ចេញពីកិរិយាស័ព្ទដើម","b-2":"2/ ត្រូវប្ដូរ ㅂ ទៅជា 우"}
						];
document.querySelector('#lesson-4 .b-note3').innerHTML=`${b_note_lesson_4[0]["b-1"]}<br>${b_note_lesson_4[0]["b-2"]}`;

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
				{"korean":"시원한 음료수를 마시고 싶러요.","khmer":"ខ្ញុំចង់ញំុាភេសជ្ជៈត្រជាក់។","number":"①"},
				{"korean":"매운 음식을 싫어해.","khmer":"ខ្ញុំស្អប់អាហារហឹរ។","number":"②"},
				{"korean":"재미없는 영화를 보면 잠이 와.","khmer":"បើខ្ញុំមើលរឿងអត់ល្អមើល ខ្ញុំគេង។","number":"③"},
				{"korean":"재미있는 이야기를 해 주세.","khmer":"សួមនិយាយរឿងកំប្លែងអោយខ្ញុំស្ដាប់។","number":"④"},
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

