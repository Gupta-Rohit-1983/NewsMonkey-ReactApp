import React, { useEffect, useState } from 'react';
import NewItems from './NewsItems.js';
import defaultImage from '../News-Logo.jpg';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const apiKey = "1f1931cfb2d942cfbcca4322f2f7332d";
// apiKey = "d8bc87642c8645c0a3ec4cf3290dbc5b"; 

const News = (props) => {
    const [page, setPage] = useState(1);
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalResults, setTotalResults] = useState(0);


    const capitalizeFirstLetter = (string = "") => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }




    const updateNews = async () => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?category=${props.category || "general"}&apiKey=${apiKey}&page=1&pageSize=9`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(70);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `NewsMonkey - ${capitalizeFirstLetter(props.category || "general")}`;
        updateNews();
        // eslint-disable-next-line
    }, []);

    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?category=${props.category || "general"}&apiKey=${apiKey}&page=${page+1}&pageSize=9`;
        setPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
    }

    return (
        <>
            <h1 className="text-center" style={{ marginTop: '90px', marginBottom: '25px' }}>NewsMonkey - Top Headlines from {capitalizeFirstLetter(props.category || "general")}</h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}>
                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return (
                                <div className="col-md-4 mb-4" key={element.url}>
                                    <NewItems
                                        title={element.title}
                                        imageUrl={element.urlToImage ? element.urlToImage : defaultImage}
                                        description={element.description ? element.description.slice(0, 88) + "..." : "No description available"}
                                        newsUrl={element.url}
                                        date={element.publishedAt}
                                        source={element.source.name}
                                        author={element.author ? element.author : "Unknown"}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    );
}

News.defaultProps = {
    category: "general"
}

News.propTypes = {
    category: PropTypes.string
}

export default News;