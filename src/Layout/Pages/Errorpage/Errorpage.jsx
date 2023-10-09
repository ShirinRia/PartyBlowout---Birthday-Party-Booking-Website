import React from 'react';

const Errorpage = () => {
    return (
        <div  style={{backgroundImage: 'url(https://point.moxcreative.com/beeparty/wp-content/uploads/sites/10/2022/05/bg_header.png)'}}>
            <div className="hero min-h-screen" >
                <h3 className='text-[400px]'>
                        404
                </h3>
  <div className="hero-overlay bg-white bg-opacity-80"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="md:max-w-xl">
      <h1 className="mb-5 text-7xl font-bold text-[#FEBF05]">Page not found</h1>
      <p className="mb-5 text-lg font-medium text-slate-800">The page you are looking for no longer exists. Perhaps you can return back to the site’s homepage and see if you can find what you are looking for.</p>
      <button className="btn bg-[#FEBF05] border-none px-8 text-xl text-white font-medium">Back Home</button>
    </div>
  </div>
</div>
        </div>

        
    );
};

export default Errorpage;