package Com.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/main/resources/Feature/Testcase.feature",
plugin = {"html:target/cucumber-html-report","json:target/cucumber.json","pretty:target/cucumber-pretty.txt","usage:target/cucumber-usage.json","junit:target/cumcumber-results.xml"},
tags= {"@tc01_demoblazeloginusingexcel,@tc02_demoblazeloginandlogout,@tc03_demoblazeupdatecart,@tc04_demoblazeplacetheorder"},
glue= {"steps"}

)
public class DemoBlazeRunner {

}
