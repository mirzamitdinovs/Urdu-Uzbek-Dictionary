import React from 'react';
//import

const FindInUzbek = (setRows, searchKey = '', limit = 100) => {
  db.transaction((tx) => {
    let query = '';

    if (searchKey.length == 0) {
      setRows([]);
      return;

      query =
        'SELECT `id`, `urdu`, `translate` FROM dict order by length(`urdu`), `urdu` limit ' +
        limit;
    } else {
      if (searchKey.length == 1) {
        query =
          "\
                SELECT `id`, `urdu`, `translate`, `uzbek`, ? as `searchKey` \
                FROM dict \
                WHERE `uzbek` LIKE ?||'%' \
                order by \
                    case \
                        when `uzbek` like `searchKey` then 0 \
                        when `uzbek` like `searchKey` || ' %' or `uzbek` like `searchKey` || ',%' or `uzbek` like `searchKey` || ';%' then 1 \
                        when `uzbek` like '% ' || `searchKey` then 2 \
                        when `uzbek` like '% ' || `searchKey` || ',%' or `uzbek` like '% ' || `searchKey` || ';%' then 2 \
                        when `uzbek` like '% ' || `searchKey` || ' %' then 4 \
                        when `uzbek` like '%,' || `searchKey` || ' %' or `uzbek` like '%;' || `searchKey` || ' %' then 5 \
                        when `uzbek` like `searchKey` || '%' then 6 \
                        when `uzbek` like '%' || `searchKey` || ' %' then 7 \
                        when `uzbek` like '%' || `searchKey` || '%' then 8 \
                        end, \
                    length(`uzbek`), \
                    length(`translate`), \
                    `urdu` \
                ";
      } else if (searchKey.length > 1) {
        query =
          "\
                SELECT `id`, `urdu`, `translate`, `uzbek`, ? as `searchKey` \
                FROM dict \
                WHERE `uzbek` LIKE '%'||?||'%' \
                order by \
                    case \
                        when `uzbek` like `searchKey` then 0 \
                        when `uzbek` like `searchKey` || ';%' then 2 \
                        when `uzbek` like `searchKey` || ' ;%' then 3 \
                        when `uzbek` like '1 ' || `searchKey` || ';%' then 4 \
                        when `uzbek` like '1 ' || `searchKey` || ' ;%' then 5 \
                        when `uzbek` like '1' || `searchKey` || ';%' then 6 \
                        when `uzbek` like '1' || `searchKey` || ' ;%' then 7 \
                        when `uzbek` like `searchKey` || ' %' or `uzbek` like `searchKey` || ',%' or `uzbek` like `searchKey` || ';%' then 8 \
                        when `uzbek` like '% ' || `searchKey` then 9 \
                        when `uzbek` like '% ' || `searchKey` || ',%' or `uzbek` like '% ' || `searchKey` || ';%' then 10 \
                        when `uzbek` like '% ' || `searchKey` || ' %' then 11 \
                        when `uzbek` like '%,' || `searchKey` || ' %' or `uzbek` like '%;' || `searchKey` || ' %' then 12 \
                        when `uzbek` like `searchKey` || '%' then 13 \
                        when `uzbek` like '%' || `searchKey` || ' %' then 14 \
                        when `uzbek` like '%' || `searchKey` || '%' then 15 \
                        end, \
                    length(`uzbek`), \
                    length(`translate`), \
                    `urdu` \
                ";
      }
    }

    tx.executeSql(
      query,
      [searchKey, searchKey],
      (tx, results) => {
        let rows = [];
        for (let i = 0; i < results.rows.length; i++) {
          rows.push(results.rows.item(i));
        }

        setRows(rows);
      },
      function (err) {
        console.log('error');
        console.error(JSON.stringify(err));
      },
    );
  });
};

export default FindInUzbek;
