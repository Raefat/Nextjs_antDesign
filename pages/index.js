import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button, Space, DatePicker, Card } from 'antd';
import { SaveFilled } from '@ant-design/icons';

export default function Home() {
  const onChange = () => {}
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div style={{ padding: 100 }}>
          <Space direction="horizontal">
            <Button type="primary" color='red'>Primary Button</Button>
            <Button type="ghost">Ghost Button</Button>
            <DatePicker onChange={onChange} />
             <i style={{color:'#f23333',fontSize:'3em'}}><SaveFilled color='green' /></i> 
          </Space>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
