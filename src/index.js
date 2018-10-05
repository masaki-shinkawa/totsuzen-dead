#!/usr/bin/env node

class Main {

  constructor() {}

  help() {
    console.log(`Usage: totsuzen-dead KEYWORD`);
  }

  run() {
    if (process.argv.length <= 2) {
      this.help();
      return;
    }

    const str = process.argv.slice(2).join(' ');
    const eaw = require('eastasianwidth');
    const charaLength = Math.ceil(eaw.length(str) / 2);
    const upper = `${[...Array(charaLength)].map(() => '人').join('')}`;
    const bottom = `${[...Array(charaLength)].map(() => '^Y').join('')}`;
    console.log(
`＿人${upper}＿
＞ ${str} ＜
￣Y${bottom}￣`
);
  }
}

const main = new Main();
main.run();

    // `＿人人人人人人＿
    //  ＞ 突然の死 ＜
    //  ￣Y^Y^Y^Y^Y^￣`
    // `＿人人人人＿
    //  ＞ 1234 ＜
    //  ￣Y^Y^YY￣`
