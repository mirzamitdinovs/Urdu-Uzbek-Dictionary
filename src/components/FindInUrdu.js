import React from 'react';
//import

const FindInUrdu = (setRows, searchKey = '', limit = 100) => {
  db.transaction((tx) => {
    let query = '';

    if (searchKey.length == 0) {
      query =
        'SELECT `id`, `urdu`,`uzbek`, `translate`, `pronunciation`, `abbreviation` FROM dict order by length(`urdu`), `urdu` limit ' +
        limit;
    } else {
      if (searchKey.length == 1) {
        query =
          "SELECT `id`, `urdu`, `uzbek`, `translate`, `pronunciation`, `abbreviation` FROM dict WHERE `urdu` LIKE ?||'%' order by length(`urdu`), `urdu` limit " +
          limit;
      } else if (searchKey.length > 1) {
        query =
          "SELECT `id`, `urdu`, `uzbek`, `translate`, `pronunciation`, `abbreviation` FROM dict WHERE `urdu` LIKE '%'||?||'%' order by length(`urdu`), `urdu` limit " +
          limit;
      }
    }

    tx.executeSql(query, [searchKey], (tx, results) => {
      const rows = [];
      for (let i = 0; i < results.rows.length; i++) {
        rows.push(results.rows.item(i));
      }

      setRows(rows);
    });
  });
};

export default FindInUrdu;
