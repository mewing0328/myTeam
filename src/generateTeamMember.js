// Template for generating the code to append to main html (index.html)

const generateTeamMember = ({name, role, id, email, addlInfo}) =>
// create and then append a new card to the html file

`
<div class="employee">
  <div class="row">
    <div class="column">
      <div class="card">
        <img src="img1.jpg" alt="Jane" style="width:100%">
        <div class="container">
          <h2>${name}</h2>
          <p class="title">${role}</p>
          <p>${id}</p>
          <p>${email}</p>
          <p>${addlInfo}</p>
          <p><button class="button">Contact</button></p>
        </div>
      </div>
    </div>
  </div>
</div>
`;

module.exports = generateTeamMember;