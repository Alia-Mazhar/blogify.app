import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import './glass.css'

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);
    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredimage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="pb-8 bg-gradient-to-br from-[#150833] to-[#3D207F]bg-[#DCF8F2] min-h-screen">
            <Container className="px-0">
                <div className="relative w-full">
                    <img
                        src={appwriteService.getFilePreview(post.featuredimage)}
                        alt={post.title}
                        className="w-full object-cover"
                        style={{ height: 'auto', maxHeight: '400px' }} // Ensure the image is not too tall
                    />
                    <div className="absolute inset-0 bg-[#13072e] opacity-60"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="text-3xl text-white mx-48 font-bold mb-6 text-center">{post.title}</h1>
                    </div>
                </div>
                <div className="max-w-4xl mx-auto">
                    <div className="relative w-full mb-8">
                        {isAuthor && (
                            <div className="absolute right-6 top-6 flex">
                                <Link to={`/edit-post/${post.$id}`}>
                                    <Button bgColor="bg-green-500" className="mr-3">
                                        Edit
                                    </Button>
                                </Link>
                                <Button bgColor="bg-red-500" onClick={deletePost}>
                                    Delete
                                </Button>
                            </div>
                        )}
                        <div className="bg-none p-8">
                            <div className="post-content text-[#dddaf7] leading-relaxed space-y-4">
                                {parse(post.content)}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    ) : null;
}
