import React from 'react';

export default function NewsItem(props) {
    const failImage = "https://miro.medium.com/max/978/1*52_FzWNt0rWi6X-nUF0OBw.png"
        return (
            <>
                <div className="card my-3" style={{ width: "20rem"}}>
                    <div style={{display: "flex",justifyContent: "flex-end",position: "absolute",right: "0"}}>
                        <span className="  badge rounded-pill bg-danger">
                        {props.source}
                        <span className="visually-hidden">unread messages</span>
                    </span></div>
                    <img src={props.imageUrl ? props.imageUrl : failImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                        <p className="card-text"><small className="text-primary">By {props.author ? props.author : "Unknown"} on {new Date(props.date).toUTCString()}</small></p>
                        <a href={props.newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </>
        );
    }