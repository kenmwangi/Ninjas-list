import Link from "next/link";
import style from "../../styles/Ninjas.module.css"



export const getStaticProps = async() =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json();

  return{
    props: {
      ninjas: data,
    }
  }
}

function Ninjas(props) {
  return (
    <>
    <h1>All Ninjas</h1>
    {props.ninjas.map(ninja => (
      <Link href={'/ninjas/' + ninja.id} key={ninja.id}>
        <a className={style.single}>
          <h3>{ninja.name}</h3>
        </a>
      </Link>
    ))}
    </>
  )
}

export default Ninjas