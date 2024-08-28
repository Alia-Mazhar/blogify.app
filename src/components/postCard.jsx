import React from 'react';
import { Link } from 'react-router-dom';
import appwriteService from '../appwrite/config';

function postCard({ title, featuredimage, $id }) {
  return (
    <>
    <Link to={`/post/${$id}`}>
      <div className="m-2 pb-2 hover:skew-y-3 transition duration-300 delay-150 shadow-[#A59BED] bg-gradient-to-br from-[#150833] to-[#3D1D7B] text-white rounded-2xl shadow-lg overflow-hidden max-w-sm">
        <img
          src={appwriteService.getFilePreview(featuredimage)}
          alt={title}
          className="w-full object-cover p-2 rounded-2xl"
        />
        <div className="px-4">
          <h2 className="text-xl font-bold my-1">{title}</h2>
          <button
            className="text-[#ffffffe0] rounded-lg mb-2 font-medium"
          >
            Read More  <span className='text-2xl font-bold'>&rarr;</span>
          </button>
        </div>
      </div>
    </Link>
    </>
  );
}

export default postCard;
