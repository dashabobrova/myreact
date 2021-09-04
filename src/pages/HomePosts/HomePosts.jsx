import React, { useState, useEffect } from "react";
import { PostList } from "../../components/PostList/PostList";

export const HomePosts = (props) => {
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [data, setData] = useState([]);

    /* async - функция гарантировано вернет промис
    await - заставит интерпретатор JavaScript ждать до тех пор, пока промис не выполнится */
    const getPosts = async () => {
        try {
            setError (null); // когда запускаем новый запрос, обнуляем ошибку
            setLoading(true); // определяем состояние загрузки true

            const data = await fetch('https://jsonplaceholder.typicode.com/posts') // ЗАПРОС

            const posts = await data.json(); // достаем json из запроса

            setData(posts); // запись полученных данных в стэйт

        } catch (e) {
            console.dir(e); // dir - смотреть ошибки, как объекты
            setError (e);
        }

        setLoading(false); // отменяем состояние загрузки
    }

    // useEffect вызовится 1 раз при валидации и вызовет функцию getPosts
    useEffect(() => {
        getPosts();
    }, [])

    return (
        <div>
            <h1>posts</h1>
            <button onClick={getPosts}>reload</button>
            {
                isLoading && <div>is loading: {isLoading}</div>
            }
            {
                error && <div>
                    error: {error.toString()}
                </div>
            }
            <PostList posts={data} />
        </div>
    )
}