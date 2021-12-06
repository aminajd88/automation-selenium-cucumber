
@authentication
Feature: tester la page connexion 
  ETQ utilisateur je souhaite tester la page connexion 

  @cnx
  Scenario: tester la page connexion -  ORANGE HRM 
    Given je me connecte sur l'application Orange HRM
    When je saisir le UserName
    And je saisie le mot de passe
    And je clique sur le bouton login
    Then je me redirige vers la page Home 
 

  