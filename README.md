まずはアプリの作成。
ターミナルを起動し、作成するディレクトリに移動して以下のコマンドを入力する。
「sample-app」の部分はプロジェクト名なのでご自由に。
設定はよしなに。

yarn create next-app sample-app --typescript

? Would you like to use ESLint with this project? › No / Yes
? Would you like to use `src/` directory with this project? › No / Yes
? Would you like to use experimental `app/` directory with this project? … No / Yes
? What import alias would you like configured? › @/\*

p5.js 導入

こちらの記事を参考に導入します。
参考：https://qiita.com/touyoubuntu/items/f1051ad66520a13274a1

作成したプロジェクトを VSCord で開き、ターミナルから以下のコマンドを実行。
yarn add react-p5

個人的にコンポーネントで管理したいので components フォルダを作成し、t5.tsx ファイルを作成する。
簡単な説明をコメントで書いておきます。
src/components/t5.tsx

色については引数が
1 つ：グレースケール　 0 が黒で 255 が白
2 つ：グレースケール + 不透明度
3 つ：RGB 指定
4 つ：RGB + 不透明度

カラーコードでも指定可能
background(“#000000”)

表示の確認をするので以下のファイルを変更。
src/pages/index.tsx

ターミナルで以下のコマンドを入力。
yarn dev

黒い背景の真ん中に黄色い丸が表示されているはずです。

チュートリアル
こちらをやってみた
https://p5js.org/get-started/

調べてみると例を公開していただいている。
https://p5js.org/examples/
http://www.bnn.co.jp/support/generativedesign_p5js/

一つ試してみる。
https://editor.p5js.org/generative-design/sketches/P_2_0_02

このように色々なアニメーションを作ることができる p5.js 君でした。
ですが、ここまで調べておきながら案件で使用されているところを見たことないです。
理由を調べてみましたがはっきりとしてものが出てこなかったですが、js より css とかでアニメーションを実装した方が処理が軽いし学習コストが低いのではないかと憶測しました。

まだあまり調べてませんが、p5.js で作ったアニメーションを CCapture.js というものを使えば gif や png 形式で保存できるみたい…

いつかバックエンドの重い処理を走らせている間とかに、ゲームのロード画面みたいに待ち時間が苦じゃないアニメーションを作ってみたいと思います。
