# useEffect 勉強まとめ

useEffect について勉強したのでそれに関するまとめ

## useEffect1

useState は State の更新時にコンポーネントが再レンタリングされ<br>
関数コンポーネントが最初から実行される。<br><br>
それに対し useEffect はある値が変わったとき<br>
(画面の読み込み時や特定の State 等)に限り処理を実行する。<br>
useEffect の第二引数に[]を設定すると<br>
コンポーネントを表示した初回のみ実行する。<br><br>
第二引数に何も設定しないと全ての State に反応して<br>
どの State が変更されても useEffect が実行される。<br>
特定の State のみ反応してほしい時は<br>
第二引数に State の名前を指定する。<br><br>
