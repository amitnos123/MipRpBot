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
Json file to hold information about the character.
### <u>Json Structure</u>
The key is the character's name. The value holds a JSON which hold:
* The value of belong is the person's username which the character belong's to.
* The value of stats is a JSON which each key is the name of the stat and the value is the value of the stat.
* The value of statuses is a JSON which each key is the name of the status and the value is the value of the status.
* The value of inventory is a JSON which each key is a serial number and the value is item's value.
<pre>
{
    "chracterName": {
        "belong": "username",
        "stats": {
            "stat1": "how much",
            "stat": "how much"
        },
        "statuses": {
            "status1": "how much",
            "status2": "how much"
        },
        "inventory": {
            "1": "item1",
            "2": "item2"
        }
    }
}
</pre>

#### For Example
<pre>
{
    "Bob": {
        "belong": "Alice",
        "stats": {
            "str": "12",
            "dex": "17"
        },
        "statuses": {
            "drunk": "how much drunk",
            "sleepy": "how much sleepy"
        },
        "inventory": {
            "1": "sword",
            "2": "shield",
            "3": "robot cat",
        }
    }
}
</pre>

## ITEMS
### <u>Description</u>
Json file, which save all the items definitions which are made.
### <u>Json Structure</u>
The key is the item's name. </br>
The value is an object with the property description. Description holds the item's description.
#### For Example
<pre>
{
    "item_name": {
        "description": "description"
    }
}
</pre>

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

## CRAFTING_RECIPES
### <u>Description</u>
Json to keep the crafting recipies for users. </br>
Some items may be used more then one. For example a knife, a tool to use in craft that you need, and you keep after finishing the crafting.
### <u>Json Structure</u>
The key is the item's name which will be crafted. </br>
The value is a JSON with keys that are the names of the ingredients. There is also a extra key which is description, it for adding extra information as text to the crafting. </br>
Each ingredient hold a JSON which have 2 keys:
* quantity - How much you need to craft the item.
* keep - If you are going to keep the ingredient after crafting.
<pre>
{
    "crafted_item_name": {
        "ingredient_name_1": {
            "quantity": "number",
            "keep": "keep after craft"
        },
        "ingredient_name_2": {
            "quantity": "number",
            "keep": "keep after craft"
        },
        "description": "text text"
    }
}
</pre>
#### For Example
<pre>
{
    "Optimus Prime": {
        "Metal arm": {
            "quantity": "2",
            "keep": "false"
        },
        "Metal Leg": {
            "quantity": "2",
            "keep": "false"
        },
        "Metal head": {
            "quantity": "1",
            "keep": "false"
        },
        "Metal Torso": {
            "quantity": "1",
            "keep": "false"
        },
        "Spark": {
            "quantity": "1",
            "keep": "false"
        },
        "description": "Crafting Optimus Prime"
    }
}
</pre>