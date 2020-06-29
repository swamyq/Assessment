$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AddUser.feature");
formatter.feature({
  "line": 2,
  "name": "Add User list in webTable",
  "description": "\nTo verify the functionality Add user icon and user list",
  "id": "add-user-list-in-webtable",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@EndToEnd"
    }
  ]
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Add User List criteria - Acceptance Criteria",
  "description": "",
  "id": "add-user-list-in-webtable;add-user-list-criteria---acceptance-criteria",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "I am on User list table Page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I validate that user list table",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I click on Add user icon",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter users details \"\u003cFirst Name\u003e\",\"\u003cLast Name\u003e\",\"\u003cUser Name\u003e\",\"\u003cPassword\u003e\",\"\u003cCustomer\u003e\",\"\u003cRole\u003e\",\"\u003cE-mail\u003e\",\"\u003cCell Phone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click save button",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "add-user-list-in-webtable;add-user-list-criteria---acceptance-criteria;",
  "rows": [
    {
      "cells": [
        "First Name",
        "Last Name",
        "User Name",
        "Password",
        "Customer",
        "Role",
        "E-mail",
        "Cell Phone"
      ],
      "line": 19,
      "id": "add-user-list-in-webtable;add-user-list-criteria---acceptance-criteria;;1"
    },
    {
      "cells": [
        "FName1",
        "LName1",
        "User1",
        "Password1234",
        "Company AAA",
        "Admin",
        "admin@mail.com",
        "077711221"
      ],
      "line": 20,
      "id": "add-user-list-in-webtable;add-user-list-criteria---acceptance-criteria;;2"
    },
    {
      "cells": [
        "FName2",
        "LName2",
        "User2",
        "Password1234",
        "Company BBB",
        "Customer",
        "customer@email.com",
        "0777112234"
      ],
      "line": 21,
      "id": "add-user-list-in-webtable;add-user-list-criteria---acceptance-criteria;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1937398177,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I navigate to way_automation",
  "keyword": "Given "
});
formatter.match({
  "location": "AddUser.i_navigate_to_way_automation()"
});
formatter.result({
  "duration": 1203166787,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Add User List criteria - Acceptance Criteria",
  "description": "",
  "id": "add-user-list-in-webtable;add-user-list-criteria---acceptance-criteria;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@EndToEnd"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on User list table Page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I validate that user list table",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I click on Add user icon",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter users details \"FName1\",\"LName1\",\"User1\",\"Password1234\",\"Company AAA\",\"Admin\",\"admin@mail.com\",\"077711221\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click save button",
  "keyword": "Then "
});
formatter.match({
  "location": "AddUser.i_am_on_User_list_table_Page()"
});
formatter.result({
  "duration": 42022419,
  "status": "passed"
});
formatter.match({
  "location": "AddUser.i_validate_that_user_list_table()"
});
formatter.result({
  "duration": 21368456,
  "status": "passed"
});
formatter.match({
  "location": "AddUser.i_click_on_Add_user_icon()"
});
formatter.result({
  "duration": 67245221,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FName1",
      "offset": 23
    },
    {
      "val": "LName1",
      "offset": 32
    },
    {
      "val": "User1",
      "offset": 41
    },
    {
      "val": "Password1234",
      "offset": 49
    },
    {
      "val": "Company AAA",
      "offset": 64
    },
    {
      "val": "Admin",
      "offset": 78
    },
    {
      "val": "admin@mail.com",
      "offset": 86
    },
    {
      "val": "077711221",
      "offset": 103
    }
  ],
  "location": "AddUser.i_enter_users_details(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 769544707,
  "status": "passed"
});
formatter.match({
  "location": "AddUser.i_click_save_button()"
});
formatter.result({
  "duration": 5054399862,
  "status": "passed"
});
formatter.after({
  "duration": 76141719,
  "status": "passed"
});
formatter.before({
  "duration": 1405462573,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I navigate to way_automation",
  "keyword": "Given "
});
formatter.match({
  "location": "AddUser.i_navigate_to_way_automation()"
});
formatter.result({
  "duration": 1105150875,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Add User List criteria - Acceptance Criteria",
  "description": "",
  "id": "add-user-list-in-webtable;add-user-list-criteria---acceptance-criteria;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@EndToEnd"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on User list table Page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I validate that user list table",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I click on Add user icon",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter users details \"FName2\",\"LName2\",\"User2\",\"Password1234\",\"Company BBB\",\"Customer\",\"customer@email.com\",\"0777112234\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click save button",
  "keyword": "Then "
});
formatter.match({
  "location": "AddUser.i_am_on_User_list_table_Page()"
});
formatter.result({
  "duration": 24085238,
  "status": "passed"
});
formatter.match({
  "location": "AddUser.i_validate_that_user_list_table()"
});
formatter.result({
  "duration": 19977559,
  "status": "passed"
});
formatter.match({
  "location": "AddUser.i_click_on_Add_user_icon()"
});
formatter.result({
  "duration": 71126143,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FName2",
      "offset": 23
    },
    {
      "val": "LName2",
      "offset": 32
    },
    {
      "val": "User2",
      "offset": 41
    },
    {
      "val": "Password1234",
      "offset": 49
    },
    {
      "val": "Company BBB",
      "offset": 64
    },
    {
      "val": "Customer",
      "offset": 78
    },
    {
      "val": "customer@email.com",
      "offset": 89
    },
    {
      "val": "0777112234",
      "offset": 110
    }
  ],
  "location": "AddUser.i_enter_users_details(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 944999055,
  "status": "passed"
});
formatter.match({
  "location": "AddUser.i_click_save_button()"
});
formatter.result({
  "duration": 5044288979,
  "status": "passed"
});
formatter.after({
  "duration": 86608255,
  "status": "passed"
});
});