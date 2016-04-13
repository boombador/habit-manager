
var Git = require("nodegit");
var path = require("path");

var pathToRepo = path.resolve(".git");

var getMostRecentCommit = function(repository) {
      return repository.getBranchCommit("master");
};

var getCommitMessage = function(commit) {
      return commit.message();
};

Git.Repository.open(pathToRepo)
.then(getMostRecentCommit)
.then(getCommitMessage)
.then(function(message){
    console.log(message);
});
