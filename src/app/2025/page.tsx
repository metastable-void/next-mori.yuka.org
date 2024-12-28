
import Image from 'next/image';
import './index.css';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "季節のお便りの送付について (通知) - Yuka MORI",
  description: "Personal website for Yuka MORI",
};

export default function Postcard() {
    return <>
        <div className="postcard-wrapper">
            <PostcardInternal recursionCount={0} />
        </div>
    </>
}

function PostcardInternal({ recursionCount = 0 }) {
    if (recursionCount > 10) {
        return <></>;
    }

    return <>
        <div className="postcard" lang="ja">
            <div className="postcard-inner">
                <div className="from">
                    <p>2025年1月1日</p>
                    <p>森 祐佳</p>
                </div>
                <div className="to">
                    <p>各位</p>
                </div>
                <h1>季節のお便りの送付について (通知)</h1>
                <main>
                    <p>従来より一部のみなさまにお送りしていた年末年始の季節のお便りの送付につきましては，2024–2025冬シーズンもお送りすることになりました。なお，コストを鑑み，年賀はがきを使用しております。</p>
                    <p>今年のはがきは以下のようなものです。</p>
                </main>
                <div className="flex">
                    <figure>
                        <figcaption>葉書イメージ</figcaption>
                        <PostcardInternal recursionCount={recursionCount + 1} />
                    </figure>
                    <Image className="qr" src="./qr.svg" width={200} height={200} alt="QRコード" />
                </div>
            </div>
        </div>
    </>
}
