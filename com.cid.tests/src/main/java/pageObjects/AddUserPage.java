package pageObjects;

import junit.framework.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.Select;

import java.util.List;

public class AddUserPage extends BasePage {

    public AddUserPage(WebDriver driver) {
        super(driver);
    }

    @FindBy(how = How.XPATH, using = "//button[@class='btn btn-link pull-right']")
    private WebElement addUserLocator;

    @FindBy(how = How.XPATH, using = "//input[@name='FirstName']")
    private WebElement firstNameLocator;

    @FindBy(how = How.XPATH, using = "//input[@name='LastName']")
    private WebElement lastNameLocator;

    @FindBy(how = How.XPATH, using = "//input[@name='UserName']")
    private WebElement userNameLocator;

    @FindBy(how = How.XPATH, using = "//input[@name='Password']")
    private WebElement passwordLocator;

    @FindBy(how = How.XPATH, using = "//select[@name='RoleId']")
    private WebElement roleSelectorLocator;

    @FindBy(how = How.XPATH, using = "//input[@name='Email']")
    private WebElement EmailLocator;

    @FindBy(how = How.XPATH, using = "//input[@name='Mobilephone']")
    private WebElement cellNumberLocator;


    @FindBy(how = How.XPATH, using = "//input[@type='radio'][contains(following-sibling::text(), 'Company AAA')]")
    private WebElement companyAAARadioButton;

    @FindBy(how = How.XPATH, using = "//input[@type='radio'][contains(following-sibling::text(), 'Company BBB')]")
    private WebElement companyBBBRadioButton;


    @FindBy(how = How.XPATH, using = "//button[@class='btn btn-success']")
    private WebElement clickSaveButtonLocator;


    @FindBy(how = How.XPATH, using = "//button[@class='btn btn-danger']")
    private WebElement clickCloseButtonLocator;

    @FindBy(how = How.XPATH, using = "//h3[@class='ng-binding']")
    private WebElement addUserHeaderLocator;





    public void clickAddUserButton()
    {
        addUserLocator.click();
    }

    public void enterFirstName(String firstName)
    {
        firstNameLocator.sendKeys(firstName);

    }
    public void enterLastName(String lastName)
    {
        lastNameLocator.sendKeys(lastName);

    }
    public void enterUserName(String lastName)
    {
        userNameLocator.sendKeys(lastName);

    }

    public void clickCompanyAAARadioBtn()
    {
        companyAAARadioButton.click();
    }

    public void clickCompanyBBBRadioBtn()
    {
        companyBBBRadioButton.click();
    }

    public void clickCustomer(String customer)
    {

        companyAAARadioButton.click();
    }


    public void enterUserDetails(String firstName,String lastName,String userName,String password,String Email,String cellNumber)
    {
        firstNameLocator.sendKeys(firstName);
        lastNameLocator.sendKeys(lastName);
        userNameLocator.sendKeys(userName);
        passwordLocator.sendKeys(password);
        EmailLocator.sendKeys(Email);
        cellNumberLocator.sendKeys(cellNumber);

    }

    public void clickCloseButton()
    {
        clickCloseButtonLocator.click();
    }

    public void clickSaveButton()
    {
        clickSaveButtonLocator.click();
    }



    public void assertMainPage() {
        WebElement webElement = driver.findElement(By.xpath("//table[@class='smart-table table table-striped']/thead/tr[" + 3 + "]/th[1]"));
        String actual=webElement.getText();
        System.out.println("you are on the main page"+actual);
        Assert.assertEquals(actual, "First Name");
    }

    public void assetAddUserPage() {
        WebElement addUserAssert=driver.findElement(By.xpath("//div[@class='modal-header']"));
        String string=addUserAssert.getText();
        System.out.println("You are on the UserPage"+ string);
        Assert.assertEquals(string,"Add User");
    }



    public void companySelection(String companyName) {
        if(companyName.equalsIgnoreCase("Company AAA")){
            companyAAARadioButton.click();
        }else {
            companyBBBRadioButton.click();
        }
    }

    public void roleName(String role) {
        Select select = new Select(roleSelectorLocator);
        List<WebElement> list = select.getOptions();
        for (int i = 0; i < list.size(); i++) {
            String str1 = list.get(i).getText();
            if (str1.equalsIgnoreCase(role)) {
                select.selectByVisibleText(role);
            }
        }


    }
}
