const { defineConfig } = require("cypress");

const path = require('path');
const XLSX = require('xlsx');


module.exports = defineConfig({
  watchForFileChanges:false,
  //viewportHeight:375,
  //viewportWidth:812,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      on('task', {
        readExcelFile(filePath) {
          const absolutePath = path.resolve(__dirname, 'cypress/fixtures', filePath);
          const workbook = XLSX.readFile(absolutePath);
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const data = XLSX.utils.sheet_to_json(worksheet);
          return data;
        }
      });
    },
  },
});
