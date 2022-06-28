"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the neat ${chalk.red(
          "generator-django-app-rest"
        )} generator!`
      )
    );

    const prompts = [
      {
        type: "prompt",
        name: "name",
        message: "Are you in app folder?"
      },
      {
        type: "input",
        name: "className",
        message: "What it's the model class name"
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    console.log(this.prompt);
    this.fs.copy(
      this.templatePath("_views.py"),
      this.destinationPath("views.py"),
      { className: this.prompt.className, appName: this.appName }
    );

    this.fs.copy(
      this.templatePath("_serializers.py"),
      this.destinationPath("serializers.py"),
      { className: this.prompt.className, appName: this.appName }
    );

    this.fs.copy(
      this.templatePath("_urls.py"),
      this.destinationPath("urls.py"),
      { className: this.prompt.className, appName: this.appName }
    );
  }
};
