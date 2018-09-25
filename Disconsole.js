/*
	Disconsole v1.0 Core. 
	---------------------
	Discord + Console = Disconsole!  |  CUI Discord Bot
	Copyright (c) 2018. PMH Studio / PMH. (kok4575@gmail.com) MIT Licensed.
	
	* Requests Node.js & Discord.js
*/

// API Require
const API = require('discord.js'); // Main API

// Login Require
const token = 'NDkyMjQwMDQxMzU2Mjk2MjAy.DoT-0g.wVc5h1U8jVKSBVYiVlquYcU0_so'; // Set Bot Token
const disc = new API.Client(); // Take a Bot From Main API

disc.login(token); // Login! Go, μBot!

// Start Up....................
disc.on('ready', () => {
	console.log(`Disconsole is Online | Status: ${disc.status} | Guilds: ${disc.guilds.size} | Channels: ${disc.channels.size} | Users: ${disc.users.size} | Start Ping: ${Math.round(disc.pings)}ms`)
	disc.user.setActivity(`>./help.*　　　  　　　　　　　　　　　"`, { type: 'LISTENING' });
});

// Input Check ................
disc.on('message', input => {

	let msgAr = input.content.split(" "); // Check Space
	let i = msgAr[0]; // input Command
	let pars = msgAr.slice(1); // input parameter
	let langAr = input.content.split("\"");
	let li = langAr[0];
	let buffer; // Yes, It's Buffer.

	if (`${input.author.id}` === `${disc.user.id}`) return;
	console.log(`${input.author.username.toString()} (${input.author.id.toString()})> ${input.content.toString()}`); // input Logging


// Commands....................

	if (i === ">./help.*") {
		console.log("Load Command Book...")
		let CommandBook = new API.RichEmbed()
		.setTitle(`Command Book`)
		.setURL("https://github.com/PMHStudio/DiscordDisconsole/")
		.setDescription(`Welcome to Disconsole!`)
		.setColor("#7289DA")
		.addBlankField()
		.addField("Batch File", "```cmd\n>echo Like This```")
		.addField("C Language", "```c\n>printf(\"Like This\");```")
		.addField("C# Language", "```cs\n>Console.WriteLine(\"Like This\");```")
		.addField("C++ Language", "```cpp\nstd::cout << \"Like This\" << std::endl;```")
		.addField("Arduino C Language", "```c\n>Serial.println(\"Like This\");```")
		.addField("D Language", "```d\n>writeln(\"Like This\");```")
		.addField("Lua", "```lua\n>print(\"Like This\");```")
		.addField("Python", "```py\n>print(\"Like This\");```")
		.addField("JavaScript", "```js\n>console.log(\"Like This\");```")
		.addField("Basic", "```basic\n>PRINT \"Like This\"```")
		.addField("Cobol", "```>DISPLAY \"Like This\"```")
		.addField("FORTRAN", "```fortran\n>Print *, \"Like This\"```")
		.addField("Go", "```go\n>fmt.Printf(\"Like This\");```")
		.setFooter("Discord + Console = Disconsole.", disc.user.displayAvatarURL);
		input.channel.send(CommandBook);
	} else

	if (i === ">echo") {
		console.log(`-----------Convert: ${input.id}----------`);
		console.log("Check Language: Batch file, CMD.exe");
		input.channel.send("Language: Batch file, CMD.exe -----------");
		buffer = pars.join(" ").slice(0);
		console.log(`Check String: ${buffer}`);
		console.log("-----------------------------------------------");
		console.log(`${disc.user.username.toString()} (${disc.user.id.toString()})> ${buffer}`);
		input.channel.send(buffer);
	} else

	if (li === ">printf(" || li === ">puts(") {
		console.log(`-----------Convert: ${input.id}----------`);
		console.log("Check Language: C, C++");
		input.channel.send("Language: C, C++ ------------------------");
		let langArr = langAr[1].split("\"");
		buffer = langArr[0];
		console.log(`Check String: ${buffer}`);
		if (!langAr[2]) return input.channel.send("ERROR: Endless! (Disconsole Error Code(DcEC): 5x01)");
		console.log("-----------------------------------------------");
		console.log(`${disc.user.username.toString()} (${disc.user.id.toString()})> ${buffer}`);
		input.channel.send(buffer);
	} else

	if (li === ">print(") {
		console.log(`-----------Convert: ${input.id}----------`);
		console.log("Check Language: C, Lua, Python");
		input.channel.send("Language: C, Lua Python -----------------");
		let langArr = langAr[1].split("\"");
		buffer = langArr[0];
		console.log(`Check String: ${buffer}`);
		if (!langAr[2]) return input.channel.send("ERROR: Endless! (Disconsole Error Code(DcEC): 5x01)");
		console.log("-----------------------------------------------");
		console.log(`${disc.user.username.toString()} (${disc.user.id.toString()})> ${buffer}`);
		input.channel.send(buffer);
	} else

	if (li === ">console.log(" || li === ">document.write(" || li === ">alert(") {
		console.log(`-----------Convert: ${input.id}----------`);
		console.log("Check Language: js");
		input.channel.send("Language: JavaScript --------------------")
		let langArr = langAr[1].split("\"");
		buffer = langArr[0];
		console.log(`Check String: ${buffer}`);
		if (!langAr[2]) return input.channel.send("ERROR: Endless! (Disconsole Error Code(DcEC): 5x01)");
		console.log("-----------------------------------------------");
		console.log(`${disc.user.username.toString()} (${disc.user.id.toString()})> ${buffer}`);
		input.channel.send(buffer);
	} else

	if (li === ">Serial.println(") {
		console.log(`-----------Convert: ${input.id}----------`);
		console.log("Check Language: arduino");
		input.channel.send("Language: Arduino -----------------------");
		let langArr = langAr[1].split("\"");
		buffer = langArr[0];
		console.log(`Check String: ${buffer}`);
		if (!langAr[2]) return input.channel.send("ERROR: Endless! (Disconsole Error Code(DcEC): 5x01)");
		console.log("-----------------------------------------------");
		console.log(`${disc.user.username.toString()} (${disc.user.id.toString()})> ${buffer}`);
		input.channel.send(buffer);
	} else

	if (li === ">PRINT ") {
		console.log(`-----------Convert: ${input.id}----------`);
		console.log("Check Language: basic");
		input.channel.send("Language: Basic -------------------------");
		let langArr = langAr[1].split("\"");
		buffer = langArr[0];
		console.log(`Check String: ${buffer}`);
		console.log("-----------------------------------------------");
		console.log(`${disc.user.username.toString()} (${disc.user.id.toString()})> ${buffer}`);
		input.channel.send(buffer);
	} else

	if (li === ">std::cout << ") {
		console.log(`-----------Convert: ${input.id}----------`);
		console.log("Check Language: C++");
		input.channel.send("Language: C++ ---------------------------");
		let langArr = langAr[1].split("\"");
		buffer = langArr[0];
		console.log(`Check String: ${buffer}`);
		if (!langAr[2]) return input.channel.send("ERROR: Endless! (Disconsole Error Code(DcEC): 5x01)");
		console.log("-----------------------------------------------");
		console.log(`${disc.user.username.toString()} (${disc.user.id.toString()})> ${buffer}`);
		input.channel.send(buffer);
	} else

	if (li === ">Console.WriteLine(") {
		console.log(`-----------Convert: ${input.id}----------`);
		console.log("Check Language: C#");
		input.channel.send("Language: C# ----------------------------");
		let langArr = langAr[1].split("\"");
		buffer = langArr[0];
		console.log(`Check String: ${buffer}`);
		if (!langAr[2]) return input.channel.send("ERROR: Endless! (Disconsole Error Code(DcEC): 5x01)");
		console.log("-----------------------------------------------");
		console.log(`${disc.user.username.toString()} (${disc.user.id.toString()})> ${buffer}`);
		input.channel.send(buffer);
	} else

	if (li === ">DISPLAY") {
		console.log(`-----------Convert: ${input.id}----------`);
		console.log("Check Language: cobol");
		input.channel.send("Language: Cobol -------------------------");
		let langArr = langAr[1].split("\"");
		buffer = langArr[0];
		console.log(`Check String: ${buffer}`);
		console.log("-----------------------------------------------");
		console.log(`${disc.user.username.toString()} (${disc.user.id.toString()})> ${buffer}`);
		input.channel.send(buffer);
	} else

	if (li === ">writeln(") {
		console.log(`-----------Convert: ${input.id}----------`);
		console.log("Check Language: D");
		input.channel.send("Language: D -----------------------------");
		let langArr = langAr[1].split("\"");
		buffer = langArr[0];
		console.log(`Check String: ${buffer}`);
		if (!langAr[2]) return input.channel.send("ERROR: Endless! (Disconsole Error Code(DcEC): 5x01)");
		console.log("-----------------------------------------------");
		console.log(`${disc.user.username.toString()} (${disc.user.id.toString()})> ${buffer}`);
		input.channel.send(buffer);
	} else

	if (li === ">Print *, ") {
		console.log(`-----------Convert: ${input.id}----------`);
		console.log("Check Language: fortran");
		input.channel.send("Language: FORTRAN -----------------------");
		let langArr = langAr[1].split("\"");
		buffer = langArr[0];
		console.log(`Check String: ${buffer}`);
		console.log("-----------------------------------------------");
		console.log(`${disc.user.username.toString()} (${disc.user.id.toString()})> ${buffer}`);
		input.channel.send(buffer);
	} else

	if (li === ">fmt.Printf(") {
		console.log(`-----------Convert: ${input.id}----------`);
		console.log("Check Language: go");
		input.channel.send("Language: Go ----------------------------");
		let langArr = langAr[1].split("\"");
		buffer = langArr[0];
		console.log(`Check String: ${buffer}`);
		if (!langAr[2]) return input.channel.send("ERROR: Endless! (Disconsole Error Code(DcEC): 5x01)");
		console.log("-----------------------------------------------");
		console.log(`${disc.user.username.toString()} (${disc.user.id.toString()})> ${buffer}`);
		input.channel.send(buffer);
	}

// ............................

return;

});
