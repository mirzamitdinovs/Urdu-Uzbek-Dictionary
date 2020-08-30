import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';

const RowsCount = () => {
  let [res, setRes] = useState([]);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql('SELECT count(*) as cnt FROM dict', [], (tx, results) => {
        setRes(results.rows.item(0).cnt);
        // console.log(results.rows.item(0))
      });
    });
  });

  return <Text> Lug'atimizda {res} ta qator bor</Text>;
};

export default RowsCount;
