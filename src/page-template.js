// creates the team
const generateTeam = team => {

  // Creates the manager html
  const generateManager = manager => {
      return `
      <div class="card col-10 col-md-5 col-lg-4 col-xl-3 manager-card p-3 bg-color-04">
          <div class="card-header text-center border border-dark rounded-0">
              <h2 class="card-name p-3">${manager.getName()}</h2>
          </div>
          <div class="my-3">
              <h3 class="card-role mb-0 color-03"><i class="fas fa-mug-hot border border-dark p-3 me-3 color-01"></i>${manager.getRole()}</h3>
          </div>
          <div class="card-body border border-dark">
              <ul class="list-group">
                  <li class="list-group-item border-dark bg-color-01 color-04">ID: ${manager.getId()}</li>
                  <li class="list-group-item border-dark bg-color-03 color-04">Email: <a class="color-04 manager" href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                  <li class="list-group-item border-dark bg-color-04 color-01">Office number: ${manager.getOfficeNumber()}</li>
              </ul>
          </div>
      </div>
      `;
  };

  // Creates the html for engineers
  const generateEngineer = engineer => {
      return `
      <div class="card col-10 col-md-5 col-lg-4 col-xl-3 engineer-card p-3 bg-color-04">
          <div class="card-header text-center border border-dark rounded-0">
              <h2 class="card-name p-3">${engineer.getName()}</h2>
          </div>
          <div class="my-3">
              <h3 class="card-role mb-0 color-02"><i class="fas fa-glasses border border-dark p-3 me-3 color-01"></i>${engineer.getRole()}</h3>
          </div>
          <div class="card-body border border-dark">
              <ul class="list-group">
                  <li class="list-group-item border-dark bg-color-01 color-04">ID: ${engineer.getId()}</li>
                  <li class="list-group-item border-dark bg-color-02 color-04">Email: <a class="color-04 engineer" href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                  <li class="list-group-item border-dark bg-color-04 color-01">GitHub: <a class="github" href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
              </ul>
          </div>
      </div>
      `;
  };

  // Creates the html for interns
  const generateIntern = intern => {
      return `
      <div class="card col-10 col-md-5 col-lg-4 col-xl-3 intern-card p-3 bg-color-04">
          <div class="card-header text-center border border-dark rounded-0">
              <h2 class="card-name p-3">${intern.getName()}</h2>
          </div>
          <div class="my-3">
              <h3 class="card-role mb-0 color-05"><i class="fas fa-user-graduate border border-dark p-3 me-3 color-01"></i>${intern.getRole()}</h3>
          </div>
          <div class="card-body border border-dark">
              <ul class="list-group">
                  <li class="list-group-item border-dark bg-color-01 color-04">ID: ${intern.getId()}</li>
                  <li class="list-group-item border-dark bg-color-05 color-04">Email: <a class="color-04 intern" href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                  <li class="list-group-item border-dark bg-color-04 color-01">School: ${intern.getSchool()}</li>
              </ul>
          </div>
      </div>
      `;
  };

  const html = [];

  html.push(team
      .filter(employee => employee.getRole() === "Manager")
      .map(manager => generateManager(manager))
  );
  html.push(team
      .filter(employee => employee.getRole() === "Engineer")
      .map(engineer => generateEngineer(engineer))
      .join("")
  );
  html.push(team
      .filter(employee => employee.getRole() === "Intern")
      .map(intern => generateIntern(intern))
      .join("")
  );

  return html.join("");
};

// Exports function to generate entire page
module.exports = team => {

  return `
  <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <title>My Team</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
  <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
  <div class="container-fluid">
      <div class="row">
          <div class="col-12 p-5 mb-3">
              <h1 class="text-center fs-1 color-04">My <strong class="color-03">Team</strong></h1>
          </div>
      </div>
  </div>
  <div class="container">
      <div class="row">
          <div class="team-area col-12 mb-5 d-flex flex-wrap gap-5 justify-content-center">
              ${generateTeam(team)}
          </div>
      </div>
  </div>
</body>
</html>
  `;
};