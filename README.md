# useEffect 勉強まとめ

useEffect について勉強したのでそれに関するまとめ

## useEffect1

useState は State の更新時にコンポーネントが再レンタリングされ<br>
関数コンポーネントが最初から実行される。<br><br>
それに対し useEffect はある値が変わったとき<br>
(画面の読み込み時や特定の State 等)に限り処理を実行する。<br>
useEffect の第二引数に[]を設定すると<br>
コンポーネントを表示した初回のみ実行する
