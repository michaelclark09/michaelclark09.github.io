window.onload = function () {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    console.log("readyState: " + this.readyState);
    console.log("status: " + this.status);
    if (this.readyState == 4 && this.status == 200) {
      populateHTML(this);
    }
  };
  xhttp.open("GET", "data.xml", true);
  xhttp.send();
};

// AI fixed/wrote the below, javascript scares me

function populateHTML(xml) {
  var xmlDoc = xml.responseXML;

  // Education
  var education = xmlDoc.getElementsByTagName("education")[0];
  var degree = education.getElementsByTagName("degree")[0].textContent;
  var university = education.getElementsByTagName("university")[0].textContent;
  var year = education.getElementsByTagName("year")[0].textContent;
  document.getElementById("education").getElementsByTagName("p")[0].innerHTML =
    "Degree: " +
    degree +
    "<br>" +
    "University: " +
    university +
    "<br>" +
    "Year: " +
    year;

  // Work Experience
  var workExperience = xmlDoc.getElementsByTagName("workExperience")[0];
  var jobs = workExperience.getElementsByTagName("job");
  var workExperienceHTML = "";
  for (var i = 0; i < jobs.length; i++) {
    var title = jobs[i].getElementsByTagName("title")[0].textContent;
    var company = jobs[i].getElementsByTagName("company")[0].textContent;
    var year = jobs[i].getElementsByTagName("year")[0].textContent;
    workExperienceHTML +=
      "Title: " +
      title +
      "<br>" +
      "Company: " +
      company +
      "<br>" +
      "Year: " +
      year +
      "<br><br>";
  }
  document
    .getElementById("workExperience")
    .getElementsByTagName("p")[0].innerHTML = workExperienceHTML;

  // Skills
  var skills = xmlDoc.getElementsByTagName("skills")[0];
  var skillElements = skills.getElementsByTagName("skill");
  var skillsHTML = "";
  for (var i = 0; i < skillElements.length; i++) {
    skillsHTML += skillElements[i].textContent + "<br>";
  }
  document.getElementById("skills").getElementsByTagName("p")[0].innerHTML =
    skillsHTML;
}
