$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/Feature/Testcase.feature");
formatter.feature({
  "line": 2,
  "name": "DemoBlaze Website",
  "description": "",
  "id": "demoblaze-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@DemoBlaze_Feature"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "To check that the application showing error if invalid details are given and by using alert handling popup message is captured or not",
  "description": "",
  "id": "demoblaze-website;to-check-that-the-application-showing-error-if-invalid-details-are-given-and-by-using-alert-handling-popup-message-is-captured-or-not",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@tc01_demoblazeloginusingexcel"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "the user launched the chromebrowser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the user open the Demoblaze website",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user will enter the username password using excel",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "handling the popup message by using assert",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_stepdefinition.the_user_launched_the_chromebrowser()"
});
formatter.result({
  "duration": 14143570775,
  "status": "passed"
});
formatter.match({
  "location": "Login_stepdefinition.the_user_open_the_Demoblaze_website()"
});
formatter.result({
  "duration": 5906473343,
  "status": "passed"
});
formatter.match({
  "location": "Login_stepdefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 75604346,
  "status": "passed"
});
formatter.match({
  "location": "Login_stepdefinition.user_will_enter_the_username_password_using_excel()"
});
formatter.result({
  "duration": 232558186925,
  "status": "passed"
});
formatter.match({
  "location": "Login_stepdefinition.handling_the_popup_message_by_using_assert()"
});
formatter.result({
  "duration": 334507,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login and logout",
  "description": "",
  "id": "demoblaze-website;login-and-logout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@tc02_demoblazeloginandlogout"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "user launched the chromebrowser",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "the user opens Demoblazeapplication",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user will click on the loginbutton",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user will enter credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user will logout",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginandLogout_stepdefinition.user_launched_the_chromebrowser()"
});
formatter.result({
  "duration": 80490871306,
  "status": "passed"
});
formatter.match({
  "location": "LoginandLogout_stepdefinition.the_user_opens_Demoblazeapplication()"
});
formatter.result({
  "duration": 29734222546,
  "status": "passed"
});
formatter.match({
  "location": "LoginandLogout_stepdefinition.user_will_click_on_the_loginbutton()"
});
formatter.result({
  "duration": 2661412588,
  "status": "passed"
});
formatter.match({
  "location": "LoginandLogout_stepdefinition.user_will_enter_credentials()"
});
formatter.result({
  "duration": 4395776219,
  "status": "passed"
});
formatter.match({
  "location": "LoginandLogout_stepdefinition.user_will_logout()"
});
formatter.result({
  "duration": 12929363201,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Updating the cart with more than one product and printing the price in the console window",
  "description": "",
  "id": "demoblaze-website;updating-the-cart-with-more-than-one-product-and-printing-the-price-in-the-console-window",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@tc03_demoblazeupdatecart"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "user launches the chromebrowser",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "the user opened the demoblaze website",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user will add multiple products and will display price on console window",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "user will tahe the screenshot of the addedproducts.",
  "keyword": "And "
});
formatter.match({
  "location": "Update_stepdefinition.user_launches_the_chromebrowser()"
});
formatter.result({
  "duration": 60140119319,
  "status": "passed"
});
formatter.match({
  "location": "Update_stepdefinition.the_user_opened_the_demoblaze_website()"
});
formatter.result({
  "duration": 30235374264,
  "status": "passed"
});
formatter.match({
  "location": "Update_stepdefinition.user_will_add_multiple_products_and_will_display_price_on_console_window()"
});
formatter.result({
  "duration": 72086079887,
  "status": "passed"
});
formatter.match({
  "location": "Update_stepdefinition.user_will_tahe_the_screenshot_of_the_addedproducts()"
});
formatter.result({
  "duration": 189440,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Clicking on phones and adding to the cart and place he order.",
  "description": "",
  "id": "demoblaze-website;clicking-on-phones-and-adding-to-the-cart-and-place-he-order.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@tc04_demoblazeplacetheorder"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "user launches ChromeBrowser",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "the user open demoBlaze",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "user will add the product and place the order",
  "keyword": "Then "
});
formatter.match({
  "location": "Placeorderstepdefinition.user_launches_ChromeBrowser()"
});
formatter.result({
  "duration": 59963688318,
  "status": "passed"
});
formatter.match({
  "location": "Placeorderstepdefinition.the_user_open_demoBlaze()"
});
formatter.result({
  "duration": 56407301362,
  "status": "passed"
});
formatter.match({
  "location": "Placeorderstepdefinition.user_will_add_the_product_and_place_the_order()"
});
formatter.result({
  "duration": 205235687154,
  "status": "passed"
});
});