import React from 'react'
import "./Post.css"

export default function Post() {
  return (
    <div className='post'>
        <img className='postImg' src="https://joyfoodsunshine.com/wp-content/uploads/2019/10/easy-guacamole-recipe-1.jpg" alt="guacaguaca" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Food</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">The cure for cravingness: Guacamole</span>
            <hr/>
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem quaerat modi amet doloribus non consequatur! Dolore error nobis nemo veniam nulla deserunt quas laborum magnam recusandae, ut explicabo voluptatum asperiores.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem quaerat modi amet doloribus non consequatur! Dolore error nobis nemo veniam nulla deserunt quas laborum magnam recusandae, ut explicabo voluptatum asperiores.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem quaerat modi amet doloribus non consequatur! Dolore error nobis nemo veniam nulla deserunt quas laborum magnam recusandae, ut explicabo voluptatum asperiores.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem quaerat modi amet doloribus non consequatur! Dolore error nobis nemo veniam nulla deserunt quas laborum magnam recusandae, ut explicabo voluptatum asperiores.
            </p>
    </div>
    )
}
