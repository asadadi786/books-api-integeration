import Link from "next/link";
import { API_BASE_URL } from "./../../utils";

const getBookList = async () => {
  const res = await fetch(`${API_BASE_URL}/books`);

  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};

const Home = async () => {
  const books = await getBookList();
  console.log("Home ~ books", books);

  return (
    <div className="container grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8">
      {books?.map((item: any) => (
        <Link href={`/bookDetail/${item.id}`} key={item.id}>
          <div className="item">
            <img src="https://picsum.photos/400/300" alt="" />
            <div>
              <h2>Title: {item.name}</h2>
              <p>Name: {item.type}</p>
              <p className="font-bold">
                Available: {item.available ? "true" : "false"}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;
