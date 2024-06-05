import React from 'react';

function BlogSlider({id, content}) {
    return (
        <div className='blog-slider'>
            <span>
                <img src={content[id].imageSrc} alt='' />
                <div>
                    <h2>{content[id].title}</h2>
                    <h4>{content[id].description}</h4>
                </div>
            </span>
        </div>
    );
}

export default BlogSlider;
