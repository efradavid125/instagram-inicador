var webdriver = require('selenium-webdriver'),
    By = webdriver.By;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

 var user = require('./credentials');

driver.get('https://www.instagram.com/?hl=es');
driver.findElement(By.className('_b93kq')).click();
driver.findElement(By.name('username')).sendKeys(user.user);
driver.findElement(By.name('password')).sendKeys(user.passw);
driver.findElement(By.className('_qv64e _gexxb _4tgw8 _njrw0')).click();
