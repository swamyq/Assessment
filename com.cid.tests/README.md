This is a UI Test Automation framework for CID Digital. 


## Tools Used
```
Selenium 3.14.0
Cucumber 1.2.4
TestNG 6.14.3
Selenium Axe-core 2.0
Apache Maven 
Java 
```

## Reporting

maven-cucumber-reporting plugin version 3.13.0 is used to generate the reports. 
Reports are written to /target/cucumber-report-html/cucumber-html-reports directory after a successful run.

To run locally 
## Commands:

## to run on MAC with Chrome
```
mvn clean
mvn verify -DOS=MAC -Dbrowser=chrome
```
## to run on MAC with Firefox
```
mvn clean
mvn verify -DOS=MAC -Dbrowser=firefox
```
## to run on Windows with Chrome
```
mvn clean
mvn verify -DOS=Windows -Dbrowser=chrome
```

## to run on Windows with Firefox
```
mvn clean
mvn verify -DOS=Windows -Dbrowser=firefox
```
