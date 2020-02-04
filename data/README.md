# Files Name Structure
All files will be upper case and for space use _ .

#### for example:
THIS_IS_AN_EXAMPLE

<br/>

***

<br/>

# Files Structures


## AUTHORIZATION
### <u>Description</u>
Json file which save authorization for the commands
### <u>Json Structure</u>
Each command has it's own json, which the key is the command id.</br>
Using id and not the command name, because the command name may change and then will need to update the authorization with it, if the key was the command name.</br>
The inner json has a property 'type' which tell which type of authorization check need to be made.</br>
If it equal to 'role' then the json will have property 'roles' which will be an array which hold all the roles that are authorization to use the command</br>
If it equal to 'settings' then the json will have property 'settings' which will be an array which hold all the settings that are authorization to use the command</br>
</br>
'settings' is something like roles, but in the bot. They are saved inside 'AUTHORIZE_ROLE'</br>
</br>
<u>Type Role</u>
<pre>
"command_id": {
    "type": "role",
    "roles": [
        "role1",
        "role2"
    ]
}
</pre>
<u>Type Settings</u>
<pre>
"command_id": {
    "type": "settings",
    "settings": [
        "setting1",
        "setting2"
    ]
}
</pre>

#### For Example

<pre>
"text1": {
    "type": "role",
    "roles": [
        "roleTest1",
        "roleTest2"
    ]
},
"text2": {
    "type": "settings",
    "settings": [
        "settingTest1",
        "settingTest2"
    ]
}
</pre>

## AUTHORIZE_ROLES
### <u>Description</u>
Json file which save authorization roles for the bot.</br>
Roles which don't need to be defined inside the guild.</br>
Those roles are called settings.
### <u>Json Structure</u>
The key is the setting's name and the value is an array.</br>
The array holds all the usernames for members which belongs to the setting.
<pre>
{
    "setting": [
        "username1",
        "username2",
        "username3"
    ]
}
</pre>
#### For Example
<pre>
{
    "root": [],
    "authRoleMip": [],
    "settingTest1": [
        "Mipster2",
        "Mipster4"
    ],
    "settingTest2": [
        "Mipster3",
        "Mipster"
    ]
}
</pre>

## CHARACTERS
### <u>Description</u>
something something
### <u>Json Structure</u>
something something

## ITEMS
### <u>Description</u>
Json file, which save all the items definitions which are made.
### <u>Json Structure</u>
The key is the item's code. That way, the item's name isn't the key and can change without causing problems.</br>
The value is an object with the properties:
* name - name of the item
* description - description for the item
* quantatiy_allowed - is allowed that quantity be over 1
* type - what type of item is it. Base on the type, there may be more propertiesto the item
#### For Example
<pre>
{
    "item_code": {
        "name": "name"
        "description": "description",
        "quantatiy_allowed": true,
        "type": "resources"
    }
}
</pre>
## ITEMS_TYPES
### <u>Description</u>
something something
### <u>Json Structure</u>
something something

## STATSES
### <u>Description</u>
something something
### <u>Json Structure</u>
something something
## STATUSES
### <u>Description</u>
something something
### <u>Json Structure</u>
something something

## COMMANDS_ID
### <u>Description</u>
Json file which saves the ids of all the commands. Updates manualy.
### <u>Json Structure</u>
They key is the command name and the value is the command id.
<pre>
{
    "command_name": "command_id"
}
</pre>
#### For Example
<pre>
{
    "test_server_command": "text1",
    "test_server_command2": "text2"
}
</pre>

## ACTIONS
### <u>Description</u>
something something
### <u>Json Structure</u>
something something