---
templateKey: blog-post
title: GatsbyJs と Netlify でブログをつくる
date: 2019-11-01T15:00:00.000Z
description: Gatsby と Netlify を用いたブログ作成方法を簡単にまとめました。
featuredpost: true
featuredimage: /img/noimage.svg
tags:
  - Gatsby Netlify
---
# GatsbyJs とは？

GatbyJsとは、Reactを使った静的サイトジェネレータのことです。

静的サイトジェネレーターは他にもHUGO、Hexo、Jekyllなどがありますが、GatsbyJsの大きな特徴は、リソースデータの取得にGraphQLを使っている点とReactを使っている点です。

# Netlifyとは？

静的サイトのホスティングサービスです。

GitHub / GitLab / Bitbucket のリポジトリと連携することができ、リポジトリを更新すると自動でデプロイしてくれます。

# つくる

- - -

Netlify CMSというものがあります。これはWeb上でMarkdownの記述ができ、そのまま更新ができるというものです。今回はそれを使用するテンプレートを使います。

[netlifycms.org/docs/start-with-a-template/](https://www.netlifycms.org/docs/start-with-a-template/)
