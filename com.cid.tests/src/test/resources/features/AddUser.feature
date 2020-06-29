@EndToEnd
Feature: Add User list in webTable

  To verify the functionality Add user icon and user list

  Background:

    Given I navigate to way_automation

  Scenario Outline: Add User List criteria - Acceptance Criteria

      When I am on User list table Page
      Then  I validate that user list table
      And I click on Add user icon
      And I enter users details "<First Name>","<Last Name>","<User Name>","<Password>","<Customer>","<Role>","<E-mail>","<Cell Phone>"
      Then I click save button

    Examples:
    |First Name|Last Name |User Name|Password|Customer|Role|E-mail|Cell Phone|
    | FName1   |   LName1  |  User1|Password1234  |Company AAA|Admin| admin@mail.com| 077711221 |
    | FName2  |   LName2|  User2    |Password1234  |Company BBB| Customer|customer@email.com|0777112234|
