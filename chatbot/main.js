// These are words/phrases the user could type in

const trigger = [
  ["hi", "hello"],
  ["1"],
  ["101"],
  ["111"],
  ["112"],
  ["113"],
  ["114"],
  ["115"],
  ["102"],
  ["121"],
  ["122"],
  ["123"],
  ["124"],
  ["103"],
  ["131"],
  ["132"],
  ["133"],
  ["134"],
  ["135"],
  ["104"],
  ["141"],
  ["142"],
  ["143"],
  ["144"],
  ["2"],
  ["201"],
  ["202"],
  ["203"],
  ["204"],
  ["205"],
  ["206"],
  ["3"],
  ["301"],
  ["302"],
  ["303"],
  ["304"],
  ["305"],
  ["306"],
  ["4"],
  ["401"],
  ["402"],
  ["403"],
  ["404"],
  ["5"],
  ["501"],
  ["502"],
  ["503"],
  ["504"],
  ["505"],
  ["506"],
  ["507"],
  ["508"],
  ["6"],
  ["601"],
  ["602"],
  ["603"],
  ["604"],
  ["605"],
  ["606"],
];

// These are bot responses, paired in order with the above 'trigger' phrases

const reply = [
  ["Hi,How may I help you? <br>please reply with the numbers to the corresponding questions. <br> 1. General IP Queries? <br> 2. Bitrix24 Issues? <br> 3. Learning path 1? <br> 4. Learning path 2? <br> 5. Learning path 3? <br> 6. Live Project ?"],
  ["General IP Queries<br>please reply with the numbers to the corresponding questions. <br>101.Internship/IP Related Queries? <br> 102.Appointment/Joining Letter Related Queries? <br>103.Quiz Related Queries <br>104.Clock-In Related Queries"],
  ["Internship/IP Related Queries? <br>please reply with the numbers to the corresponding questions. <br> 111.What isIP? <br> 112.How is IP? <br> 113.When does the LP1/ LP2/ LP3 begin dates and deadline/ end date?<br>114.What are the company policies for IP interns?<br>115.Can we visit the office?"],
  ["111.What isIP? <br>A) Watch the below video <br> <a href='https://www.youtube.com/watch?time_continue=142&v=OnKfrQrEOrk&feature=emb_logo'> URL: https://www.youtube.com/watch?time_continue=142&v=OnKfrQrEOrk&feature=emb_logo </a>"],
  ["112.How is IP? <br>A) Watch the below video <br> <a href='https://www.youtube.com/watch?v=Hs9npUUIg4I&feature=emb_logo'> URL: https://www.youtube.com/watch?v=Hs9npUUIg4I&feature=emb_logo </a>"],
  ["113.When does the LP1/ LP2/ LP3 begin dates and deadline/ end date?<br>A) The dates to begin the learning paths (LP) are:<br>LP1 - 01/03/2020 <br>LP2 - 18/03/2020 <br>LP3 - 02/04/2020 <br>All learning Paths (LP) are expected to be completed by the interns before the first   week of June as Live Projects will begin in that time frame."],
  ["114.What are the company policies for IP interns?<br>A) The company policies will be published on <a href='www.cloudcounselage.co.in/ippolicies'>www.cloudcounselage.co.in/ippolicies</a>"],
  ["115.Can we visit the office? How many times do we have to visit the office for this internship?<br>A) As this is an online internship you do not need to visit the offices in the duration of this internship. You will be requested to visit the Vikhroli office only once; i.e. on your internship convocation day which will be in July 2020. Nevertheless, you can visit our offices with an appointment."],
  ["Appointment/Joining Letter Related Queries? <br> please reply with the numbers to the corresponding questions. <br> 121.I didn't get my appointment letter yet.<br>122.I have got another attachment called ‘noname’ or ‘win.dat’ with my Appointment letter, what should I do about it?<br>123.When will we get a joining letter? <br>124.When will we get an internship completion letter?"],
  ["121.I didn't get my appointment letter yet.<br>A) If you had not attended the live induction and have registered in the pre-recorded session after 4 PM, 31st March. Then you'll get your joining letter by 30th April 2020. If you have otherwise, please a mail to hrsupport@cloudcounselage.in or ping 'Cloud Counselage HR' in B24."],
  ["122.I have got another attachment called ‘noname’ or ‘win.dat’ with my Appointment letter, what should I do about it? Will it cause any harm?<br>A) We have observed that there is such an attachment for a few mailing service providers like Gmail and yahoo, please ignore this attachment. It won’t cause any harm to your system."],
  ["123.When will we get a joining letter? <br> A) Joining letter to all the interns will be provided on or before the 31st of March 2020."],
  ["124.When will we get an internship completion letter?<br> A) This is a three (3) month internship conducted in the month of March, June & July 2020. You will receive your internship experience letter in August during the convocation only if you successfully submit your Live Project."],
  ["Quiz Related Queries<br>please reply with the numbers to the corresponding questions.<br>131.Unable to access the quiz <br>132.How do I access my quiz?<br>133.What do I do after completing the quiz?<br>134.I am not getting results of the training.<br>135.Which Browser I should use?"],
  ["131.Unable to access the quiz <br>A) Please retry after some time in an incognito window"],
  ["132.How do I access my quiz?<br>A) As mentioned in the video: -<br>Step1: Go to lp1 module<br>Step2: Select module<br>Step3: Put token (it will direct you to the home screen if the token is correct)<br>Step4: Again go to lp1 module n select that module<br>Step5: You will get the access by now<br>Step6: Register there (each time for every module)<br>Step7: Give the quiz<br>Step8: Logout"],
  ["133.What do I do after completing the quiz? how to complete the entire lp1<br>A) There are tokens for each training in the task, if this learning path is done, please wait for the next learning path to begin and then please try to finish it. If you are done with LP3 please wait for Live Projects to begin."],
  ["134.I am not getting results of the training.<br>A) They are just for your practice and not for our record, so you don't need the results of LP1 and LP2 training."],
  ["135.Which Browser I should use?<br>A) Google Chrome is recommended."],
  ["Clock-IN  Related Queries<br>please reply with the numbers to the corresponding questions.<br>141.Can we be online after 1 hr in a day?<br>142.Is it necessary to clock-in if I am done with my tasks?<br>143.I forgot to clock in for a few days, will this affect my internship?<br>144.Is it ok to clock-out before an hour is completed if the tasks are completed?"],
  ["141.Can we be online after 1 hr in a day?<br>A) Yes, you can be."],
  ["142.Is it necessary to clock-in if I am done with my tasks?<br>A) Yes, it is mandatory to do, we are trying to include some more tasks due to the current scenarios, but adherence to clock-in/ clock-out policy is utterly important."],
  ["143.I forgot to clock in for a few days, will this affect my internship?<br>A) This could have an adverse effect on your internship, please contact Cloud Counsealge HR and provide a genuine reason to miss clock in/ clock out. Also, please start performing your clock in/ clock out now."],
  ["144.Is it ok to clock-out before an hour is completed if the tasks are completed? Do we need to clock-in and compulsorily complete 7 hours a week even if the tasks are completed?<br>A) If the tasks are completed, there is no need to clock-in and clock-out unnecessarily for hours. However, you should keep a track of all the updates of the internship being posted on the groups."], 
  ["Bitrix issue<br>please reply with the numbers to the corresponding questions.<br>201.I m not able to access my Bitrix24 account?<br>202.What is the job profile?<br>203.How many workgroups will an intern be a part of?<br>204.I am not able to see my tasks.<br>205.What do we do in the work report?<br>206.I am not added into my technology workgroup."],
  ["201.I m not able to access my Bitrix24 account? <br> A) Go to https://cloudcounselage24.bitrix24.com/ On the Login page, In the, ‘Enter the phone number or email’, type in your email id that you have registered with Cloud Counselage and Click ‘Forgot Password’. In case the problem persists, please write a mail to hrsupport@cloudcounselage.in"],
  ["202.What is the job profile? Will we be able to work only in the tech we have chosen for the internship? <br> A) Your job profile is 'Technology - Intern'; if you're in cloud computing technology to update in your LinkedIn or resume, you can write as 'Cloud Computing - Intern'. Yes, you'll only work in the technology you're selected for but you can take the training of other technologies."],
  ["203.How many workgroups will an intern be a part of?/ How many workgroups should I be in?<br>A) Every intern should be a part of 2 workgroups.<br>1.202003-IP<br>This is a general workgroup. Everyone who is enrolled in IP should be a part of this workgroup.<br> 2.202003-IP-Technology<br>This is a technology-specific workgroup. You'll be added to the technology you had enrolled for.<br> For example<br>202003-IP-Python <br> for students who enrolled for python."],
  ["204.I am not able to see my tasks.<br>A) Please remove the default <b>In Progress</b> from your filter of the task section and try."],
  ["205.What do we do in the work report?<br>A) As mentioned in the video, please write what you have done this week and request approval from your supervisor by clicking on <b>send to supervisor</b>."],
  ["206.I am not added into my technology workgroup./ actually there are n no of tokens and every token I entered it is showing user no found or redirecting to the same page<br>A) Please follow the instructions given in the videos or the one in the Bitrix24 mail (these are the same videos share in the task), the tokens are given to you. Ensure that you are putting the right token on the right page."],
  ["learning path 1<br>please reply with the numbers to the corresponding questions.<br>301.Not able to access the LP1 page with my token?<br>302.Do I need to register every time I do different tasks of lp1? <br>303.I am applying my 2nd token that is the LP1 then it shows invalid user but the first token was accepted. What should I do?<br>304.Login issues with training<br>305.I did follow the instructions given in the video, but still, I'm not able to log in for the LP1 task <br>306.Is it necessary to attend LP1 for other domains as well if we want to take its training."],
  ["301.Not able to access the LP1 page with my token/ When I put my token it redirects me to the home page/ Getting error while accessing the page- 'User Not Found'/Website Redirection Issue/Tokens not working. <br> A) Please watch the videos shared with the invite and you should not face any problems in accessing the training. Please follow the protocol shown in the videos"],
  ["302.Do I need to register every time I do different tasks of lp1? <br>A) There are codes in the LP1 assignment, and each time you have to register also, please check your task description."],
  ["303.I am applying my 2nd token that is the LP1 then it shows invalid user but the first token was accepted. What should I do?/ Tokens not working <br>A) For each training of LP1, there are different tokens. Please read the tasks or watch the videos again meticulously. Try accessing it in incognito mode."],
  ["304.Login issues with training/ for every module of LP1/ LP2, do we have to register again for access to the content? <br> A) Yes, you need to register for every module of training. Some of you are facing login issues, we have kept the training visible without login. Even then, to post a comment and give a quiz you'll have to login. In case you face difficulty to do so, please try to perform your quiz or post a comment by using a different browser or incognito mode."],
  ["305.I did follow the instructions given in the video, but still, I'm not able to log in for the LP1 task <br> A) Ensure you're using the right token"],
  ["306.Is it necessary to attend LP1 for other domains as well if we want to take its training. <br> A) LP1 training is common across all the technologies"],
  ["learning path 2 Questions<br>please reply with the numbers to the corresponding questions. <br>401.What happens in LP2?<br>402.Why only this training for LP2?<br>403.The videos of LP2 are taking too much time to load.<br>404.Can I do certification for the training provided in LP2?"],
  ["401.What happens in LP2? What kind of training can we expect? Is it a Basic/Advance level?<br>A) The main focus of LP2 is to provide you with a basic foundation of the technology you're interested in. The training is also handpicked in such a way that they enable you to work on LP3 assignments which interim gives you the beginning to start your study for the selected technology and in no terms is the only/ final training you should look into. Please keep learning after your LP2 is complete, that is the only way to grow in your technology of choice."],
  ["402.Why only this training for LP2?<br>A) They are our training partners and we have handpicked this training to cover a certain topic for you. These training cover from the very basic to intermediate level and is the perfect medium for you to have a starting point."],
  ["403. The videos of LP2 are taking too much time to load.<br>A) We have uploaded the videos of the highest quality and best resolution which has resulted in some videos being over 1 GB as they are of hours in duration. To experience these high definition videos we request you to wait at least 5 minutes or more; depending on "],
  ["404.Can I do certification for the training provided in LP2? <br>A) Yes, Cloud Counselage has purposefully partnered with Edureka so as to enable our interns to get the advantage of the corporate benefits at 'no profit no loss' basis for Cloud Counselage, that we receive from the partnership. Being our interns, you can get huge discounts on the certifications you choose to enrol for through Cloud Counselage and Edureka. In case you want to know more about the discounts offered, please reach out to ‘Cloud Counselage HR’ or write to hrsupport@cloudcounselage.in."],
  ["Learning path 3 Questions <br>please reply with the numbers to the corresponding questions. <br> 501.What happens in LP3? What kind of training can we expect? Is it a Basic/Advance level? <br> 502.What to do after LP3?<br>503.For some reason, I'm unable to download my LP3 assignment problem statement document shared on LP3 page, is there any other way I can get it? <br>504.Where should we share our hacker rank id/ where should we share the link/ anything relate to LP3 assignment submission?<br>505.I have a query with respect to LP3, what should I do and whom should I ask?<br>506.I am stuck in LP3/ Live project with a technical issue, Is there any technical person who can help in this?<br>507.Where do we push the code in LP3?<br>508.Will I get LP3 and Live project of technology other than what I am selected for? "],
  ["501.What happens in LP3? What kind of training can we expect? Is it a Basic/Advance level? <br> A) LP3 will be assignment based and its execution and content vary from technology to technology. This assignment will be like a mini-project for all interns in a particular technology which will be verified by Cloud Counselage Project Managers."],
  ["502.What to do after LP3?<br> A) You'll be given preparatory leave (PL) from April to June after that your Live Projects will be given after the first week of June."],
  ["503.For some reason, I'm unable to download my LP3 assignment problem statement document shared on LP3 page, is there any other way I can get it? <br> A) Since some of you are not able to download, please find the same document in your technology drive in the folder LP3. We have made an announcement in your respective technology workgroup as well, please check."],
  ["504.Where should we share our hacker rank id/ where should we share the link/ anything relate to LP3 assignment submission?<br>A) For now, please concentrate on completing the task. We will ask all the interns to submit their work in the first week of June. Ensure you make it up to the mark till then as there would be no extension given that time."],
  ["505.I have a query with respect to LP3, what should I do and whom should I ask?<br>A) As mentioned in the '202003-IP' workgroup, please ask all queries related to LP3 in your technology workgroup only and tag Jayanth G S  in your message."],
  ["506.I am stuck in LP3/ Live project with a technical issue, Is there any technical person who can help in this?<br>A) As mentorship/ hand-holding is not part of an internship by definition, we would not provide any technical help. Nevertheless, feel free to ask your doubt in your respective workgroup chat/ in the community or Google it :)"],
  ["507.Where do we push the code in LP3?<br>A) Please push you to code in a public repo of your GitHub account if required by your LP3"],
  ["508.Will I get LP3 and Live project of technology other than what I am selected for? <br>A) No, you will receive LP3 and Live Projects of your respective technology."],
  ["Live project Questions <br>please reply with the numbers to the corresponding questions. <br>601.When to submit LP3 Assignment? <br>602.Do we have to submit the work weekly for Live Project? <br>603.Are we free to use any framework of our choice for the front-end? <br>604.Sockets.io is a library and it's used for socket programming so can we use it? <br>605. Does 3rd party dependencies include apis?<br>606. Can I use Dialowflow in nodejs For Creating Bot?"],
  ["601. When To Submit LP3 Assignment? <br> A)Interns has to submit LP3 assignments along with the Live Project in the 7th week."],
  ["602. Do We Have to Submit the work Weekly for live Project? <br> A)No, interns have to submit the final work report in 7th week."],
  ["603. Are we free to use any framework of our choice for the frontend? <br> A)Use any framework built on top of Node.js only."],
  ["604. Socket.io is alibrary and it's used for socket programming so can we use? <br> A)Check if it voilates the guildlines mentioned in the above messages and proceed accordingly."],
  ["605. Does 3rd Party dependies include apis? <br> A)Yes, if the API is not made by you. In other words, if the API interacts with a 3rd party application, please aviod using it for the Live Project."],
  ["606. Can I use Dialowflow in nodejs For Creating Bot? <br> A) Digiflow is NLP based solution and also creates a dependency of GCP, we require a basic chatbot in node js and Digiflow might be overpowered for the same."],
];

// This is a small set of basically random 'catch alls' for anything that the user enters outside of the possible trigger phrases

const alternative = [
  "Try again"
];

// Same purpose as the 'alternative' but an attempt at being culturally relevant ;)

const coronavirus = ["Please stay home"];

document.addEventListener("DOMContentLoaded", () => {
	const inputField = document.getElementById("input")
	inputField.addEventListener("keydown", function(e) {
		if (e.code === "Enter") {
			let input = inputField.value;
			inputField.value = "";
			output(input);
    }
  });
});

function output(input) {
  let product;

  //Transforms whatever the user inputs to lowercase and remove all chars except word characters, space, and digits
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");

  // For example 'tell me a story' becomes 'tell me story'
  // Or 'i feel happy' -> 'happy'
    text = text
    .replace(/ a /g, " ")
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "");

  // Searches for an exact match with the 'trigger' array, if there are none, it goes will check if message contains 'coronavirus,' and if not - random alternative
  if (compare(trigger, reply, text)) {
    product = compare(trigger, reply, text);
  } else if (text.match(/coronavirus/gi)) {
    product = coronavirus[Math.floor(Math.random() * coronavirus.length)];
  } else {
    product = alternative[Math.floor(Math.random() * alternative.length)];
  }

  //update DOM
  addChat(input, product);
}

function compare(triggerArray, replyArray, string) {
  let item;
  for (let x = 0; x < triggerArray.length; x++) {
    for (let y = 0; y < replyArray.length; y++) {
      if (triggerArray[x][y] == string) {
        items = replyArray[x];
        item = items[Math.floor(Math.random() * items.length)];
      }
    }
  }
  return item;
}

function addChat(input, product) {
  const mainDiv = document.getElementById("main");
  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.innerHTML = `<div class="chat friend">
			<div class="user-photo"><img src="img/user.png"></div>
			<p class="chat-message"><span id="bot-response">${input}</span></p>
		</div>`;
  document.getElementById("main1").appendChild(userDiv);

  let botDiv = document.createElement("div");
  botDiv.id = "bot";
  botDiv.innerHTML = ` <div class="chat self">
			<div class="user-photo"><img src="img/bot.png"></div>
			<p class="chat-message"> <span id="bot-response">${product}</span> </p>
		</div>`;
  document.getElementById("main1").appendChild(botDiv);
  speak(product);
}

const synth = window.speechSynthesis;
let voices = synth.getVoices();

function speak(string) {
  let u = new SpeechSynthesisUtterance(string);
  u.text = string;
  u.lang = "en-US";
  u.volume = 1; //0-1 interval
  u.rate = 1;
  u.pitch = 1; //0-2 interval
  synth.speak(u);
  debugger
}
