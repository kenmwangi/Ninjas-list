import React from "react"
import Link from 'next/link'
import { useRouter } from "next/router"

// styling
import style from "../styles/404.module.css"


function NotFoundPage() {

    const router = useRouter();
    React.useEffect(() => {
        setTimeout(() =>{
            router.push('/')
        }, 3000)
      
    }, [router])
    
  return (
    <div className={style["not-found"]}>
        <h1>Oooops ....</h1>
        <h2>That page cannot be found</h2>

        <p>Go Back to <Link href="/"><a className={style.btn}>Homepage</a></Link></p>
    </div>
  )
}

export default NotFoundPage