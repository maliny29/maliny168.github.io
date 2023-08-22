var button = [
    {"name":"1/ -이/가","target":"lesson-1","style":"--i:6;"},
    {"name":"2/ -은/는","target":"lesson-2","style":"--i:7;"},
    {"name":"3/ -을/를","target":"lesson-3","style":"--i:8;"},
    {"name":"4/ -와/과 , N(이)랑 , N 하고","target":"lesson-4","style":"--i:9;"},
    {"name":"5/ -의","target":"lesson-5","style":"--i:10;"},
    {"name":"6/ -에","target":"lesson-6","style":"--i:11;"},
    {"name":"7/ -에서","target":"lesson-7","style":"--i:12;"},
    {"name":"8/ -부터","target":"lesson-8","style":"--i:13;"},
    {"name":"9/ -부터 -까지","target":"lesson-9","style":"--i:14;"},
    {"name":"10/ -에게 / 한테 / 에","target":"lesson-10","style":"--i:14;"},
    {"name":"11/ -도","target":"lesson-11","style":"--i:15;"},
    {"name":"12/ -만","target":"lesson-12","style":"--i:16;"},
    {"name":"13/ -밖에","target":"lesson-13","style":"--i:17;"},
    {"name":"14/ -(으)로","target":"lesson-14","style":"--i:18;"},
    {"name":"15/ -(이)나","target":"lesson-15","style":"--i:19;"},
    {"name":"16/ -쯤","target":"lesson-16","style":"--i:20;"},
    {"name":"17/ -처럼 -같아","target":"lesson-17","style":"--i:21;"},
    {"name":"18/ -보다","target":"lesson-18","style":"--i:22;"},
    {"name":"19/ -마다","target":"lesson-19","style":"--i:23;"},
    {"name":"20/ -만에","target":"lesson-20","style":"--i:24;"},
    {"name":"21/ -(으)ㄴ지","target":"lesson-21","style":"--i:25;"},
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