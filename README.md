# MipRpBot
Change '.config.json' to 'config.json' and insert your token and prefix of your bot.

***

Structure
-----------
data - have files which keep read and write data for the bot to use<br/>
general_commands - commands which are called in dm and in the server<br/>
log - keep all the log files<br/>
node_modules - libraries<br/>
personal_commands - commands that are only called in dm with the bot<br/>
resources - keep images and a like<br/>
server_commands - commands that are only called in the server<br/>

***

Function Description
--------------------
Wirting the description before the function definition in the following format:<br/>
/// PARAM<br/>
//param1(param1 type) - param1 description<br/>
//param2(param2 type) - param2 description<br/>
//...<br/>
/// Description - function description
<br/><br/>

#### for example:
/// PARAM<br/>
//member(GuildMember) - The guild member which want to use the command<br/>
//id(String) - id of the command<br/>
/// Description - Return true or false for, if the member is allowed to use the command. Used for commands which are called through the server <br/>

***