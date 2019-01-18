workflow "Build and Test" {
  on = "push"
  resolves = ["Test"]
}

action "Build" {
  uses = "actions/npm@1.0.0"
  args = "install"
}

action "Test" {
  uses = "actions/npm@1.0.0"
  needs = ["Build"]
  args = "test"
}
