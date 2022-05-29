function sendEmails() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const dataRange = sheet.getRange('A2:D2');
  const values = dataRange.getValues();
  const userName = values[0][0];
  const emailAddress = values[0][1];
  const subject = values[0][2];
  const award = values[0][3];

  // メールの本文作成
  const message = `${userName} さん、こんにちは
  N予備校です。
  
  コンテストの結果は見事 ${award} に選ばれました。`;

  const myEmail = Session.getActiveUser().getEmail();

  MailApp.sendEmail(emailAddress, subject, message, { cc: myEmail });
}

function sendMultiemails() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const startRow = 2; // データの行数のはじまり
  const numRows = 2; // 送付先データの数
  const dataRange = sheet.getRange(startRow, 1, numRows, 4);
  const values = dataRange.getValues();

  for (const i in values) {
    const userName = values[i][0];
    const emailAddress = values[i][1];
    const subject = values[i][2];
    const award = values[i][3];

    // メールの本文作成
    const message = `${userName} さん、こんにちは
    N予備校です。
    
    コンテストの結果は見事 ${award} に選ばれました。`;

    const myEmail = Session.getActiveUser().getEmail();

    MailApp.sendEmail(emailAddress, subject, message, { cc: myEmail });
  }
}
