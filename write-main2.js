var XLSX = require('xlsx');

var ws = XLSX.utils.aoa_to_sheet([
  ["Header 1", "Header 2"]
]);

for (var x = 0 ; x < 10; x++) {
    XLSX.utils.sheet_add_aoa(ws, [
        ["asldkfjasdlkfsdj 2", x],
    ], {origin:-1});
}
var wb = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(wb, ws, "Test2");
XLSX.writeFile(wb, "sheetjs2.xlsx");