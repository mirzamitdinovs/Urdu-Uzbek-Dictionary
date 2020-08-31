import React from 'react';
//import

const FindInUzbek = (setRows, searchKey = 'a', limit = 100) => {
  db.transaction((tx) => {
    let query = '';

    if (searchKey.length == 0) {
      query =
        'SELECT `id`, `urdu`, `translate` FROM dict order by length(`urdu`), `urdu` limit ' +
        limit;
    } else {
      if (searchKey.length == 1) {
        query =
          "\
                SELECT `id`, `urdu`, `translate`, `uzbek`, ? as `searchey` \
                FROM dict \
                WHERE `uzbek` LIKE ?||'%' \
                order by \
                    case \
                        when `uzbek` like `searchey` then 0 \
                        when `uzbek` like `searchey` || ' %' or `uzbek` like `searchey` || ',%' or `uzbek` like `searchey` || ';%' then 1 \
                        when `uzbek` like '% ' || `searchey` then 2 \
                        when `uzbek` like '% ' || `searchey` || ',%' or `uzbek` like '% ' || `searchey` || ';%' then 2 \
                        when `uzbek` like '% ' || `searchey` || ' %' then 4 \
                        when `uzbek` like '%,' || `searchey` || ' %' or `uzbek` like '%;' || `searchey` || ' %' then 5 \
                        when `uzbek` like `searchey` || '%' then 6 \
                        when `uzbek` like '%' || `searchey` || ' %' then 7 \
                        when `uzbek` like '%' || `searchey` || '%' then 8 \
                        end, \
                    length(`uzbek`), \
                    length(`translate`), \
                    `urdu` \
                ";
      } else if (searchKey.length > 1) {
        query =
          "\
                SELECT `id`, `urdu`, `translate`, `uzbek`, ? as `searchey` \
                FROM dict \
                WHERE `uzbek` LIKE '%'||?||'%' \
                order by \
                    case \
                        when `uzbek` like `searchey` then 0 \
                        when `uzbek` `searchey` || ';%' then 2 \
                        when `uzbek` `searchey` || ' ;%' then 3 \
                        when `uzbek` like '1 ' || `searchey` || ';%' then 4 \
                        when `uzbek` like '1 ' || `searchey` || ' ;%' then 5 \
                        when `uzbek` like '1' || `searchey` || ';%' then 6 \
                        when `uzbek` like '1' || `searchey` || ' ;%' then 7 \
                        when `uzbek` like `searchey` || ' %' or `uzbek` like `searchey` || ',%' or `uzbek` like `searchey` || ';%' then 8 \
                        when `uzbek` like '% ' || `searchey` then 9 \
                        when `uzbek` like '% ' || `searchey` || ',%' or `uzbek` like '% ' || `searchey` || ';%' then 10 \
                        when `uzbek` like '% ' || `searchey` || ' %' then 11 \
                        when `uzbek` like '%,' || `searchey` || ' %' or `uzbek` like '%;' || `searchey` || ' %' then 12 \
                        when `uzbek` like `searchey` || '%' then 13 \
                        when `uzbek` like '%' || `searchey` || ' %' then 14 \
                        when `uzbek` like '%' || `searchey` || '%' then 15 \
                        end, \
                    length(`uzbek`), \
                    length(`translate`), \
                    `urdu` \
                ";
      }
    }

    tx.executeSql(query, [searchKey, searchKey], (tx, results) => {
      const rows = [];
      for (let i = 0; i < results.rows.length; i++) {
        rows.push(results.rows.item(i));
      }

      // console.log(rows.length);
      // console.log(rows);

      setRows(rows);
    });
  });
};

export default FindInUzbek;
