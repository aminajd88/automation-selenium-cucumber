$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("authentication/Authentication.feature");
formatter.feature({
  "line": 3,
  "name": "tester la page connexion",
  "description": "ETQ utilisateur je souhaite tester la page connexion",
  "id": "tester-la-page-connexion",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@authentication"
    }
  ]
});
formatter.before({
  "duration": 5259941500,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "tester la page connexion -  ORANGE HRM",
  "description": "",
  "id": "tester-la-page-connexion;tester-la-page-connexion----orange-hrm",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@cnx"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "je me connecte sur l\u0027application Orange HRM",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "je saisir le UserName",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "je saisie le mot de passe",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "je clique sur le bouton login",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "je me redirige vers la page Home",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 2091004200,
  "status": "passed"
});
});