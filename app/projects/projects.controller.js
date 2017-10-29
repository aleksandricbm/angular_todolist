export default class ProjectsCtrl{
  constructor($scope, $http){
    $scope.projects = [];
    $scope.tasks = [];

    function getListProjects()
    {
      $http.get('/api/projects')
        .then(function(response){
          $scope.projects = response.data
        });
    }

    $scope.create = function(projname) {
        $http.post
        ('/api/projects', JSON.stringify({ name: projname }))
            .then(function(response) {
              $scope.projects.push (response.data);
            });
      };
    $scope.createTask = function(task, proj) {
        $http.post
        ('/api/tasks', JSON.stringify({ project: proj, name: task }))
            .then(function(response) {
              $scope.projects.push (response.data);
            });
      };
    $scope.getTasksList = function(proj) {
      $http.get('/api/tasks', { params: { project: proj }})
        .then(function(response){
          $scope.tasks = response.data
        });
    };

    getListProjects();
  }
}
