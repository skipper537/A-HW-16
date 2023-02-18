import React, {Component} from 'react';
import './publication.css'
import ANAKIN_IMG from "../../persons/Anakin.webp";
import COMENTS_IMG from "../../Components/Coments.png"
import DOWNLOAD_IMG from "../../Components/Download.png"
import HEART_IMG from "../../Components/Heart.png"
import REPOST_IMG from "../../Components/Repost.png"

function Publication  ({data}) {

    const {id, author, content, image, date, coments, reposts, likes, downloads} = data
    const {name, photo, nickname} = author
    console.log()
        return (
            <div>
                <div className="post">
                    <div className="post__body">
                        <img className = 'user__img' src={photo} alt="ANAKIN_IMG"/>
                        <div className="post__item">
                            <div className="user__info">
                                <div className="user__name">{name}</div>
                                <div className="user__nickname">{nickname}</div>
                                <div className="post__date">{date}</div>
                            </div>
                            <div className="post__content">{content}</div>
                            <img className = 'content__img' src={image} alt="RAY_IMG"/>
                        </div>
                        
                    </div>
                    <div className="post__bottom">
                                <div>{coments}<img src={COMENTS_IMG}></img></div>
                                <div>{reposts}<img src={REPOST_IMG}></img></div>
                                <div>{likes}<img src={HEART_IMG}></img></div>
                                <div>{downloads}<img src={DOWNLOAD_IMG}></img></div>
                        </div>

                </div>

            </div>
        );

}

export default Publication;