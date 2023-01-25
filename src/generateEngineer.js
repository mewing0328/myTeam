// Template for generating the code to append to main html (index.html)

const generateEngineer = ({name, role, id, email, addlInfo}) =>
// create and then append a new card to the html file
`
<div class="card text-center" style="width: 15rem;">
<img class="card-img-top" src="./Assets/engineerIcon.png" alt="Card image cap">
<div class="card-body">
  <h4 class="card-title">${name}</h4>
  <h5 class="card-title">${role}</h5>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID | ${id}</li>
    <li class="list-group-item"> <a href="https://github.com/${addlInfo}" target="blank">GitHub | ${addlInfo}</a></li>
  </ul>
  <a href='mailto:${email}' style="color: blue" class="btn btn-primary"><p class="emailMe" style="color:antiquewhite">Email Me!</p></a>
</div>
</div>
`;
module.exports = generateEngineer;