import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { DetailNewItem } from "../../components/News/detailNew";
import { PostRequestHooks } from "../../components/News/postDataAPI";
import { PutRequestHooks } from "../../components/News/putDataApi";


export type IUser = {
  id: string,
  name: string,
  body: string;
  email: string
}

function NewsPage() {

  const [items, setItems] = useState<IUser[]>([]);
  const [pageCount, setpageCount] = useState<number>(0);
  const [userHandle, setUserHandle] = useState<IUser | null>();
  const [detail, setDetail] = useState<IUser | null>();

  let limit = 12;
  //  xử lý logic render data to ui 
  useEffect(() => {
    const getComments = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/comments?_page=1&_limit=${limit}`
      );
      const data = await res.json();
      const total: any = res.headers.get("x-total-count");
      setpageCount(Math.ceil(total / limit));
      setItems(data);
    };

    getComments();
  }, [limit]);

  const fetchComments = async (currentPage: any) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=${limit}`
    );
    const data = await res.json();
    return data;
  };

  const handlePageClick = async (data: any) => {
    console.log(data.selected);
    let currentPage = data.selected + 1;
    const commentsFormServer = await fetchComments(currentPage);
    setItems(commentsFormServer);
  };

  // logic search
  const Search = (key: any) => {
    console.log(key);
    fetch("https://jsonplaceholder.typicode.com/comments?q=" + key)
      .then((data) => {
        data.json().then((resp) => {
          console.warn("resp:", resp)
          setItems(resp)
        })
      })
  }
  // logic delete item api 
  const handleRemove = (itemId: any) => async () => {
    console.log(itemId)
    async function deletePost() {
      try {
        await fetch('https://jsonplaceholder.typicode.com/comments/' + `${itemId}`, { method: 'DELETE' });
        const newList = [...items];
        setItems(newList.filter(item => item.id != itemId));
      } catch (error) {
        console.log(error);
      }

    }
    await deletePost();
  };

  return (
    <div className="container">
      <div className="row m-2 text-info">
        <form className="d-flex m-3 p-3">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search Item"
            aria-label="Search"
            onChange={(event) => Search(event.target.value)}
          />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
          {!detail ? null : <PostRequestHooks/> }

          {/* <PostRequestHooks/> */}

        {/* Modal form */}
        {userHandle && <PutRequestHooks data={userHandle} setData={setUserHandle} />} 
        {/* End Modal */}

        {/* Detail Item */}
        {detail && <DetailNewItem data={detail} setDataDetail={setDetail} />} 
        {/* End Detail */}

        {items.map((item: any) => {
          return (
            <div className="card" style={{ width: '18rem' }} key={item.id}>
              <img src="https://vcdn-vnexpress.vnecdn.net/2021/07/07/Aventador-Ultimae-Coupe-1-3961-1625659942.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-dark ">Title: {item.name}</h5>
                <p className="card-text text-danger"> Email: {item.email}</p>
                <p className="card-text"> Content: {item.body}</p>
                <a href='#'
                  className="btn btn-outline-warning m-2"
                  onClick={() => setUserHandle(item)}
                  data-bs-toggle="modal" data-bs-target="#exampleModal"
                >Update</a>
                <a href='#' className="btn btn-outline-danger m-2" onClick={handleRemove(`${item.id}`)}>Remove</a>
                <a href='#'
                  className="btn btn-outline-primary m-2"
                  onClick={() => setDetail(item)}
                  data-bs-toggle="modal" data-bs-target="#exampleModal"
                >Detail</a>
              </div>
            </div>
          );
        })}
      </div>

      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
}

export default NewsPage;