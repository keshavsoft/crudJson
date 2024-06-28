if not exist "src\\FrontEnd\\AllTables"
mkdir "src/FrontEnd/AllTables"
call npm i
call node KCode/Backend.js
call node KCode/Database.js
call npm run build
npm run start