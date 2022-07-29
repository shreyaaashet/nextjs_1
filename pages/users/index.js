import Link from "next/link";

export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return {
        props: { info: data }
    }
}

const UsersList = ({ info }) => {

    return (
        <>
            Here are all the users:
            {info.map(i => (
                //to link each name n id dynamically 

                <Link href={"/users/"+ i.id} key={i.id}>
                    <a ><h3>{i.name}</h3></a>
                </Link>
            ))}
        </>
    );
}

export default UsersList;