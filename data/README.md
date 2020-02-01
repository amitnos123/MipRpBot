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
Json file to save authorization for the commands
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

## AUTHORIZE_ROLE
### <u>Description</u>
something something
### <u>Json Structure</u>
something something

#### For Example

## CHARACTERS
### <u>Description</u>
something something
### <u>Json Structure</u>
something something
## ITEMS
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