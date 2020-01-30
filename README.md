# MipRpBot
Change '.config.json' to 'config.json' and insert your token and prefix of your bot.

***

Structure
-----------
data - have files which keep read and write data for the bot to use

general_commands - commands which are called in dm and in the server

log - keep all the log files

node_modules - libraries

personal_commands - commands that are only called in dm with the bot

resources - keep images and a like

server_commands - commands that are only called in the server

***

Function Description
--------------------
Wirting the description before the function definition in the following format:
/// PARAM
//param1(param1 type) - param1 description 
//param2(param2 type) - param1 description 
/// Description - function description

####for example:
/// PARAM
//member(GuildMember) - The guild member which want to use the command
//id(String) - id of the command
/// Description - Return true or false for, if the member is allowed to use the command. Used for commands which are called through the server 

***