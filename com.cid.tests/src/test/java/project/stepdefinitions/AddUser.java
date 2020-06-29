package project.stepdefinitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import envReader.EnvReader;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;
import pageObjects.AddUserPage;

public class AddUser {
    WebDriver driver = Hooks.driver;

    @Given("^I navigate to way_automation$")
    public void i_navigate_to_way_automation() throws Throwable {
        driver.get(EnvReader.getProperty("URL"));
    }

    @When("^I am on User list table Page$")
    public void i_am_on_User_list_table_Page() throws Throwable {
        AddUserPage addUserPage = new AddUserPage(driver);
        addUserPage.assertMainPage();

    }


    @Then("^I validate that user list table$")
    public void i_validate_that_user_list_table() throws Throwable {
        AddUserPage addUserPage = new AddUserPage(driver);
        String expectedTitle = "Add User";
        Assert.assertFalse(expectedTitle.equalsIgnoreCase(driver.getTitle()), "Add User");
        addUserPage.assertMainPage();
    }

    @Then("^I click on Add user icon$")
    public void i_click_on_Add_user_icon() throws Throwable {
        AddUserPage addUserPage = new AddUserPage(driver);
        addUserPage.clickAddUserButton();
    }

    @Then("^I click save button$")
    public void i_click_save_button() throws Throwable {
        AddUserPage addUserPage = new AddUserPage(driver);
        try {
            Thread.sleep(5000);
            addUserPage.clickSaveButton();
        }
        catch (Exception e)
        {
            System.out.println("unable to save");
        }

    }

    @Then("^I enter users details \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
    public void i_enter_users_details(String arg1, String arg2, String arg3, String arg4, String arg5, String arg6, String arg7, String arg8) throws Throwable {
        AddUserPage addUserPage = new AddUserPage(driver);
        addUserPage.assetAddUserPage();
        addUserPage.enterUserDetails(arg1,arg2,arg3,arg4,arg7,arg8);
        addUserPage.companySelection(arg5);
        addUserPage.roleName(arg6);
    }

}
