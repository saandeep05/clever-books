import React, { useState } from 'react';
import BlogSlider from './BlogSlider';

function Blog() {
    const content = [
        {
            title: '',
            description: '',
            imageSrc: ''
        },
        {
            title: '',
            description: '',
            imageSrc: ''
        },
        {
            title: '',
            description: '',
            imageSrc: ''
        },
        {
            title: '',
            description: '',
            imageSrc: ''
        }
    ];
    const [contentId, setContentId] = useState(0);

    const previousContentId = () => {
        setContentId((contentId - 1) % content.length);
    }

    const nextContentId = () => {
        setContentId((contentId + 1) % content.length);
    }

    return (
        <div className='cta'>
            <div className='main-line'>
                <h1>Get Clever Books and get...</h1>
            </div>
            <span>
                <button onClick={previousContentId}>{'<'}</button>
                <BlogSlider id={contentId} content={content}/>
                <button onClick={nextContentId}>{'>'}</button>
            </span>
        </div>
    );
}

export default Blog;
