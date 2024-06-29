call if not exist "src\\FrontEnd\\AllTables"
call mkdir "src/FrontEnd/AllTables"
call node KCode/Backend.js
call node KCode/Database.js
call npm run build
npm run start
