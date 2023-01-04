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
        type: "input",
        name: "name",
        message: "Just Enter gere",
        default: this.appname // Default to current folder name
      },
      {
        type: "input",
        name: "endPoint",
        message: "What is the Endpoint Name for this app"
      },
      {
        type: "input",
        name: "className",
        message: "What is the model class name"
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    console.log(this.props, this.appName);
    this.fs.copyTpl(
      this.templatePath("_views.py"),
      this.destinationPath("_views.py"),
      { className: this.props.className, appName: this.props.name }
    );

    this.fs.copyTpl(
      this.templatePath("_serializers.py"),
      this.destinationPath("serializers.py"),
      { className: this.props.className, appName: this.props.name }
    );

    this.fs.copyTpl(
      this.templatePath("_urls.py"),
      this.destinationPath("urls.py"),
      {
        className: this.props.className,
        appName: this.props.name,
        endPoint: this.props.endPoint
      }
    );
  }
};
