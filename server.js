const express = require("express");
const cors = require("cors");
const app = express();
const {Builder, Options,  By, Key, until} = require('selenium-webdriver');

app.use(cors());
app.use(express.json());

app.get("/claim/:id", (req, res) => {
  claimBurrito(req.params.id).then(
    setTimeout(() => {  res.send("API CALL DONE!"); }, 1000)
  )
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});

async function claimBurrito(id) {
  let suffix = Math.floor(Math.random() * 9999999999999999)
  let email = ""
  if (id==0) {
    email = "martin.mouly+"+suffix.toString()+"@edu.devinci.fr"
  }
  if (id==1) {
    email = "pierre.gueveneux+"+suffix.toString()+"@edu.devinci.fr"
  }
  if (id==2) {
    email = "axel.battut+"+suffix.toString()+"@edu.devinci.fr"
  }
  if (id==3) {
    email = "souhail.ait-lahcen+"+suffix.toString()+"@edu.devinci.fr"
  }
  if (id==4) {
    email = "etienne.bories+"+suffix.toString()+"@edu.devinci.fr"
  }
  if (id==5) {
    email = "sofiane.rahali+"+suffix.toString()+"@edu.devinci.fr"
  }
  if (id==6) {
    email = "wim.poignon+"+suffix.toString()+"@edu.devinci.fr"
  }
  console.log(email)

  let driver = await new Builder().forBrowser('firefox').build()
  try {
    await driver.get("https://chipotefr.fbmta.com/members/UpdateProfile.aspx?Action=Subscribe&_Theme=30064771402&InputSource=krank");
    await driver.findElement(By.id('ctl00_PageContent_MemberProfileControl_CustomField_FirstName_0')).sendKeys('prenom');
    await driver.findElement(By.id('ctl00_PageContent_MemberProfileControl_CustomField_LastName_0')).sendKeys('nom');
    await driver.findElement(By.id('ctl00_PageContent_MemberProfileControl_CustomField_EmailAddress_0')).sendKeys(email);
    //await driver.findElement(By.id('ctl00_PageContent_MemberProfileControl_CustomField_EmailAddress_1')).sendKeys(email, Key.RETURN);
  } finally {
    //await driver.quit();
  }
}


