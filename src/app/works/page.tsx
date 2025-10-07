
import './index.css';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Works - Yuka MORI",
  description: "Personal website for Yuka MORI",
};

export default function Works() {
    return <>
        <div className="site-main">
          <h2>Works</h2>
          <h3>Generative AI</h3>
          <p>プロンプトだけでなく、独自モデルを学習させたり、AIを利活用したアプリケーションを試作したりしています</p>
          <ul>
            <li>真空ジェネレータ (<a href="https://huggingface.co/spaces/vericava/chat-3">デモ</a>)</li>
            <li><a href="https://wallpaper.menhera.org/">壁紙自動選択AI</a> (画像分類)</li>
          </ul>
        </div>
    </>
}
