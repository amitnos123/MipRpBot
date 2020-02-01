# MipRpBot

General Notes
-------------
Change '.config.json' to 'config.json' and insert your token and prefix of your bot.

***

Project Structure
-----------------

data -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Have files which keep read and write data for the bot to use<br/>
general_commands -&nbsp;&nbsp;&nbsp;&nbsp;Commands which are called in dm and in the server<br/>
log -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Keep all the log files<br/>
node_modules -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Libraries<br/>
personal_commands -&nbsp;&nbsp;Commands that are only called in dm with the bot<br/>
resources -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Keep images and a like<br/>
server_commands -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Commands that are only called in the server<br/>

***

Naming Structure
----------------

### <u>Camel Case</u>
* Variables

### <u>Snake Case</u>
* Functions
* Class name

***

Function Description
--------------------
Wirting the description before the function definition in the following format([Closure Compiler](https://github.com/google/closure-compiler/wiki/Annotating-JavaScript-for-the-Closure-Compiler) by Google):<br/>
/**<br/>
\* Function Description<br/>
\* @param {type} member - Param Description<br/>
\* @param {type} id - Param Description<br/>
\* .<br/>
\* .<br/>
\* .<br/>
\* @returns {type} - Return Description<br/>
\*/<br/>
<br/>

#### for example:
/**<br/>
\* Return true or false for, if the member is allowed to use the command. Used for commands which are called through DM<br/>
\* @param {GuildMember} member - The guild member which want to use the command<br/>
\* @param {string} id - id of the command<br/>
\* @returns {boolean} - Is the member is allowed to use the command<br/>
\*/<br/>
<br/>
***