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

function populateHTML(xml) {
  var xmlDoc = xml.responseXML;
  document.getElementById("education").getElementsByTagName("p")[0].innerHTML =
    xmlDoc.getElementsByTagName("education")[0].textContent;
  document
    .getElementById("workExperience")
    .getElementsByTagName("p")[0].innerHTML =
    xmlDoc.getElementsByTagName("workExperience")[0].textContent;
  document.getElementById("skills").getElementsByTagName("p")[0].innerHTML =
    xmlDoc.getElementsByTagName("skills")[0].textContent;
}
