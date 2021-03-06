import React from 'react'
import { Link } from "react-router-dom";

import { FilterOutlined, SearchOutlined, PlusCircleFilled } from "@ant-design/icons"
import CommunityCard from "../../components/card/community"
import "../index.css"

import SAMPLE_COMMUNITY_POSTS from "../../constants/sampleCommunityPosts"

const Community = () => {

    return (
        <div className="page-background">
            <div className="large-header">
                <h1>Community</h1>
                <SearchOutlined />
                <FilterOutlined />
            </div>
            <div className="content-background">
                <div className="content">
                    {SAMPLE_COMMUNITY_POSTS.map((post) => <><CommunityCard {...post} /><hr /></> )}
                </div>
            </div>
            <Link className="add-button" to="/community/create"><PlusCircleFilled /></Link>
        </div>
    )
}

export default Community
