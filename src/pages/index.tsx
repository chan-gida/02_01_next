import Head from "next/head";
import Header from "@/components/Header";
import style from '../styles/style.module.scss'
import Timeline from "@/components/Timeline";
import Post from "@/components/Post";
// import Button from "@/components/Button";
import { useEffect, useState } from "react";

type Post = {
  id: number;
  name: string;
  date: string;
  content: string;
};

//dummyDataがAPIから取得したデータだと想定
const dummyData: Post[] = [
  {
    id: 1,
    name: "山田 太郎",
    date: "2024-02-01",
    content: "今日はReactの勉強をしました！",
  },
  {
    id: 2,
    name: "佐藤 花子",
    date: "2024-02-02",
    content: "新しいプロジェクトが始まりました。",
  },
  {
    id: 3,
    name: "鈴木 一郎",
    date: "2024-02-03",
    content: "Next.jsのSSRを試しています。",
  },
  {
    id: 4,
    name: "田中 桃子",
    date: "2024-02-04",
    content: "UIデザインの改善を行いました。",
  },
  {
    id: 5,
    name: "中村 健",
    date: "2024-02-05",
    content: "TypeScriptの型安全性について学習中。",
  },
];

export default function Home() {
  // useStateを貼り付けてください:hugging:
  const [posts, setPosts] = useState<Post[]>([]);

  // useEffectの処理=画面が表示された直後に１度実行されます:hugging:
  useEffect(() => {
    // ここに書く

    setPosts(dummyData);
    console.log(11111111);
    // ここの下消さない
  }, []);

  // 追加
  console.log(posts, "データ");

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <main className={style.container}>
        <Header />  
        
        <Timeline />

        {/* bgという値にpinkを渡している */}
        {/* 1-textColorを追加 */}
        {/* <Button textColor="white" bg="pink" /> */}

        {/* 表示する時のテクニック */}
        {posts.map((item,index) => (
          <Post
              key={index}
              id={item.id}
              name={item.name}
              date={item.date}
              content={item.content}
            />
        ))}

        {/* <Post
          id={1}
          name="ジーズの母"
          date="2025-02-01"
          content="TypeScriptの勉強中" /> */}
        
        </main>
    </>
  );
}
