import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import ReactPlayer from "react-player";
import Modal from "react-responsive-modal";

const CourseDetailsSidebar = () => {
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);


    return (
        <React.Fragment>
            <Modal
                open={open}
                onClose={onCloseModal}
                styles={{
                modal: {
                    maxWidth: "unset",
                    width: "70%",
                    padding: "unset"
                },
                overlay: {
                    background: "rgba(0, 0, 0, 0.5)"
                },
                closeButton: {
                    background: "yellow"
                }
                }}
                center
            >
                <ReactPlayer
                url="https://youtu.be/YRIHdCJqQOg"
                width="100%"
                height="calc(100vh - 200px)"
                />
            </Modal>

            <div className="course-video-widget">
                <div className="course-widget-wrapper mb-30">
                    <div className="course-video-thumb w-img">
                        <img src="assets/img/course/course-video.png" alt="image not found"/>
                        <div className="sidber-video-btn">
                            <span className="popup-video" onClick={onOpenModal}><i className="fas fa-play"></i></span>
                        </div>
                    </div>
                    <div className="course-video-price">
                        <span>$147.00</span>
                    </div>
                    <div className="course-video-body">
                        <ul>
                            <li>
                                <div className="course-vide-icon">
                                    <i className="flaticon-filter"></i>
                                    <span>Level</span>
                                </div>
                                <div className="video-corse-info">
                                    <span>Beginners</span>
                                </div>
                            </li>
                            <li>
                                <div className="course-vide-icon">
                                    <i className="flaticon-computer"></i>
                                    <span>Lectures</span>
                                </div>
                                <div className="video-corse-info">
                                    <span>8 Lectures</span>
                                </div>
                            </li>
                            <li>
                                <div className="course-vide-icon">
                                    <i className="flaticon-clock"></i>
                                    <span>Duration</span>
                                </div>
                                <div className="video-corse-info">
                                    <span>1h 30m 12s</span>
                                </div>
                            </li>
                            <li>
                                <div className="course-vide-icon">
                                    <i className="flaticon-menu-2"></i>
                                    <span>Category</span>
                                </div>
                                <div className="video-corse-info">
                                    <span>Data Science</span>
                                </div>
                            </li>
                            <li>
                                <div className="course-vide-icon">
                                    <i className="flaticon-global"></i>
                                    <span>Laguage</span>
                                </div>
                                <div className="video-corse-info">
                                    <span>English</span>
                                </div>
                            </li>
                            <li>
                                <div className="course-vide-icon">
                                    <i className="flaticon-bookmark-white"></i>
                                    <span>Access</span>
                                </div>
                                <div className="video-corse-info">
                                    <span>Full Lifetime</span>
                                </div>
                            </li>
                            <li>
                                <div className="course-vide-icon">
                                    <i className="flaticon-award"></i>
                                    <span>Certificate</span>
                                </div>
                                <div className="video-corse-info">
                                    <span>Yes </span>
                                </div>
                            </li>
                            <li>
                                <div className="course-vide-icon">
                                    <i className="flaticon-list"></i>
                                    <span>Recourse</span>
                                </div>
                                <div className="video-corse-info">
                                    <span>5 Downloadable Files </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="video-wishlist">
                        <Link href="/cart"><a className="video-cart-btn"><i className="fal fa-shopping-cart"></i>Add to cart</a></Link>
                        <Link href="/wishlist"><a className="video-wishlist-btn"><i className="far fa-heart"></i>Add to Wishlist</a></Link>
                    </div>
                    <div className="course-gift">
                        <div className="course-apply-coupon">
                            <a href="#">Apply Coupon</a>
                        </div>
                        <div className="course-gift-coupon">
                            <a href="#">Gift Courses</a>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default CourseDetailsSidebar;