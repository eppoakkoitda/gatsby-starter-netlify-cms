---
templateKey: blog-post
title: 【Cocos Creator】Web(HTML5)ゲーム開発に最適なゲームエンジン
date: 2020-01-23T08:45:10.540Z
description: >-
  CocosCreatorの紹介？です。筆者自身があまりCocosCreatorを使っていないので詳しいことは書けませんが(ｵｲ
  独断と偏見により好き勝手書きました。ようするに、CocosCreator凄いぞ！　ってことです。
featuredpost: true
featuredimage: /img/cocoscreator.jpg
tags:
  - CocosCreator
---
# 主張

---

Webゲーム開発に最適なのはcocoscreatorだと思います。
特にUnity経験者に向いています。

# なぜcocoscreatorなのか？

---

HTML5ゲームエンジンといえばいくつかあります。

* PlayCanvas
* Phaser
* CocosCreator
* BabylonJS

いずれも有名ですが、どれがディファクト開発環境かと聞かれて、即答できる人は少ないと思います。
そこで今回は"とっつきやすさ"で比較していきたいと思います。

|       | CocosCreator | PlayCanvas | Phaser | BabylonJS |
| ----- | ------------ | ---------- | ------ | --------- |
| 費用    | 〇            | △          | 〇      | 〇         |
| 学習コスト | 〇            | 〇          | △      | ×         |
| 3D    | △            | 〇          | ×      | 〇         |
| GUI   | 〇            | 〇          | 〇      | 〇         |

<br>独断と偏見により各種ゲームエンジンの特徴を表にまとめました。

BabylonJSはNode.jsを立ち上げたりEditorの癖が強かったりして学習コストが高いです。

Phaserは3D表現ができません。逆に2Dならばかなり強いです。

PlayCanvasもかなり良さげですが……公式の公開場所にPublishせずにダウンロードしようとすると費用がかかります。

そして、CocosCreatorですが……最大の特徴はEditorがUnityをパクっているので非常に使いやすいという点です。
そう、Unityライクにゲームをつくることができます。無料で。
はい、UnityユーザーはCocosCreatorを使うしかありませんね！

一応不安材料も書いておきます。Cocosはオープンソースあるあるなんですが開発の方向性が迷子です。
なので急に仕様が変わっていままでのが使えない！　なんてこともありえます。
実際にCocosStudioの開発が止まりましたしね……。

# エディタの紹介

---

![a](/img/cocoscreator.jpg "a")

<br>
こちらがCocosCreatorのメイン画面になります。

（キャプチャミスって「あ」が表示されてしまった。まあいいか……）


なぜだが凄い親近感がわくUIをしています。
Nodeをシーンに配置しコンポーネントをアタッチしていくことでゲームを制作することができます。
スクリプトを書いてコンポーネントしてアタッチすることもでき、JavaScriptとTypeScriptに対応しています。
はい。まんまUnityです。

# おわりに

---

Unityユーザーは使ってみる価値があります。
現状UnityではHTML5(Mobile)対応させるのは難しいですが、CocosCreatorならUnityライクにHTML5ゲームを開発することが可能です。
ぜひ、使ってみてはいかがでしょうか！

[公式サイト](https://www.cocos.com/en/)

P.S. ちなみにGodot Enginenなるものを最近見つけまして……案外良さげなんですよね。
