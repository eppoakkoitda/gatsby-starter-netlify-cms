---
templateKey: blog-post
title: 【CocosCreator】physicsを使ってみる
date: 2020-02-04T18:45:10.540Z
description: >-
  CocosCreatorのphysicsを使ってみました。GithubPagesを埋め込んだのでここでデモを試すことができます。
featuredpost: true
featuredimage: /img/noimage.svg
tags:
  - CocosCreator
---

# デモ

---

<div class="youtube">
<iframe width="560" height="315" src="https://eppoakkoitda.github.io/testCocosCreator/" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

[Github](https://eppoakkoitda.github.io/testCocosCreator/)

白い丸をドラッグすると移動させることができます。

# CocosCreator

---

HTML5ゲームを作成する上で最も簡単だと思われるゲームエンジンです。推しです。

[詳細はこちら](https://eppo.netlify.com/blog/2020-01-23-%E3%80%90cocos-creator%E3%80%91web-html5-%E3%82%B2%E3%83%BC%E3%83%A0%E9%96%8B%E7%99%BA%E3%81%AB%E6%9C%80%E9%81%A9%E3%81%AA%E3%82%B2%E3%83%BC%E3%83%A0%E3%82%A8%E3%83%B3%E3%82%B8%E3%83%B3/)

# シーン

---

Wall, Pack, Malletを配置。

PhysicsColliderComponentをアタッチ。

各種パラメーターを調整。

Malletのタグを１とした。

# Pack

---

▼Pack.ts

```ts
const {ccclass, property} = cc._decorator;

@ccclass
export default class Pack extends cc.Component {

    @property(cc.RigidBody)
    rb: cc.RigidBody = null; // 自身をアタッチする

    start(){
        this.rb.applyForceToCenter(cc.v2(1000000, 1000000), true);
    }

    onEnable() {
        // cc.director.getCollisionManager().enabled = true;
        // cc.director.getCollisionManager().enabledDebugDraw = true;
        cc.director.getPhysicsManager().enabled = true;
    }

    onBeginContact ( // コライダーが触れ始めた時の処理
        contact: cc.PhysicsContact, // 接触時の情報
        selfCollider: cc.PhysicsCollider, // 自分（プレイヤー）
        otherCollider: cc.PhysicsCollider) { // 接触した相手

        if(otherCollider.tag == 1){
            let vec = contact.getWorldManifold().normal;
            selfCollider.body.applyForceToCenter( vec.scale(cc.v2(1000000, 1000000)), true);
        }
        
    }
}
```

# Mallet

---

▼Mallet.ts
```ts
const {ccclass, property} = cc._decorator;

@ccclass
export default class Mallet extends cc.Component {
    onLoad(){
        let canvas = cc.find("Canvas"); // ルートノード
        canvas.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        canvas.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        canvas.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    }

    onEnable() {
        cc.director.getPhysicsManager().enabled = true;
        
    }

    onTouchStart(event){
        cc.log("start");        
    }

    onTouchMove(event: cc.Touch){
        cc.log("move");
        let touchPos = event.getDelta();
        this.node.x += touchPos.x;
        this.node.y += touchPos.y;
    }

    onTouchEnd(event){
        cc.log("end");
    }

}
```
