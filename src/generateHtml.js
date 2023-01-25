// Template for generating the code for main html (index.html) before appending
const generateHtml = (
`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <link rel="stylesheet" href="./Assets/style.css" />
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
  <script src="../index.js"></script> 

  <title>Team Portfolios</title>
</head>
  
<body>
<!-- Image and text -->
<nav class="navbar navbar-dark bg-dark">
  <a class="navbar-brand" href="#">
    <img src="./Assets/logo.png" width="90" height="90" class="d-inline-block align-top" alt="">
  </a>
  <p class="logo">myTeam</p>
</nav>
  
<div class="deck">

<!--Employee cards will begin to append below -->

`);

module.exports = generateHtml;