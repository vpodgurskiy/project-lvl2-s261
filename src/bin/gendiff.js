#!/usr/bin/env node
import commander from 'commander';
import genDiff from '..';
import { version, description } from '../../package.json';

const program = commander;

program
  .version(`${version}`, '-v, --version')
  .arguments('<firstConfig> <secondConfig>')
  .description(`${description}`)
  .option('-f, --format [type]', 'Output format')
  .action((firstConfig, secondConfig) => genDiff(firstConfig, secondConfig));

program.parse(process.argv);
