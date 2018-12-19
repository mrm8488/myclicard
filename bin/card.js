#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
var chalk = require("chalk");
var boxen = require("boxen");

// Define options for Boxen
let options = {
  padding: 1,
  margin: 1,
  borderStyle: "round"
};
// Text + chalk definitions
let data = {
  name: chalk.white("Manuel Romero /"),
  handle: chalk.cyan("mrm8488"),
  work: chalk.white("Senior Software Engineer"),
  twitter: chalk.cyan("https://twitter.com/mrm8488"),
  github: chalk.cyan("https://github.com/mrm8488"),
  linkedin: chalk.cyan("https://www.linkedin.com/in/manuel-romero-cs/"),
  web: chalk.cyan("https://mrm8488.github.io"),
  npx: chalk.white("npx manuelromero"),
  labelWork: chalk.white.bold("      Work:"),
  labelTwitter: chalk.white.bold("   Twitter:"),
  labelGitHub: chalk.white.bold("    GitHub:"),
  labelLinkedIn: chalk.white.bold("  LinkedIn:"),
  labelWeb: chalk.white.bold("       Web:"),
  labelCard: chalk.white.bold("      Card:")
};

// Actual strings we're going to output
var newline = "\n";
var heading = `${data.name} ${data.handle}`;
var working = `${data.labelWork}  ${data.work}`;
var twittering = `${data.labelTwitter}  ${data.twitter}`;
var githubing = `${data.labelGitHub}  ${data.github}`;
var linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
var webing = `${data.labelWeb}  ${data.web}`;
var carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
let output =
  heading +
  newline +
  newline +
  working +
  newline +
  twittering +
  newline +
  githubing +
  newline +
  linkedining +
  newline +
  webing +
  newline +
  newline +
  carding;

console.log(chalk.green(boxen(output, options)));
