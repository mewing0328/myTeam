// Template for generating the code to append to main html (index.html)

const generateManager = ({name, role, id, email, addlInfo}) =>
// create and then append a new card to the html file
`
<div class="card text-center" style="width: 15rem;">
  <img class="card-img-top" src="../Assets/managerIcon.png" alt="Card image cap">
  <div class="card-body">
    <h3 class="card-title" style="color: red">${name}</h3>
    <h5 class="card-title" style="color: red">${role}</h5>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID | ${id}</li>
      <li class="list-group-item">Office Number | ${addlInfo}</li>
    </ul>
    <a href='mailto:${email}' class="btn btn-danger"><p class="emailMe" style="color:antiquewhite">Email Me!</p></a>
  </div>
</div>
`;
module.exports = generateManager;