var Git = require("nodegit");

var getMostRecentCommit = function(repository) {
      return repository.getBranchCommit("master");
};

var getCommitMessage = function(commit) {
      return commit.message();
};

Git.Clone("https://github.com/nodegit/nodegit", "nodegit")
    .then(getMostRecentCommit)
    .then(getCommitMessage)
    .then(function(message){
        console.log("Message: ", message);
    });
