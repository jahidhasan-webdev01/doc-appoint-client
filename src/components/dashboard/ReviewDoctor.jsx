"use client";

import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Button, Modal, Spinner } from "@heroui/react";
import toast from "react-hot-toast";

const ReviewDoctor = ({ doctorName }) => {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const totalStars = 5;

    const handleSubmit = async () => {
        setIsLoading(true);

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/give-rating/${doctorName}`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({ rating: rating }),
            });

            if (res.ok) {
                toast.success("Give review successfully!");
            } else {
                toast.error("Failed to give your review. Please try again.");
            }
        } catch (error) {
            toast.error("An error occurred during giving review.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Modal>
            <Button variant="outline" size="sm">Review</Button>
            <Modal.Backdrop>
                <Modal.Container>
                    <Modal.Dialog>
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Heading>Give rating to {doctorName}</Modal.Heading>
                        </Modal.Header>

                        <Modal.Body>
                            <div className="flex justify-center gap-2 py-4">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        type="button"
                                        onClick={() => setRating(star)}
                                        onMouseEnter={() => setHoverRating(star)}
                                        onMouseLeave={() => setHoverRating(0)}
                                        className="transition-transform hover:scale-110"
                                    >
                                        <FaStar
                                            className={`text-xl transition-colors ${star <= (hoverRating || rating) ? "text-amber-400" : ""
                                                }`}
                                        />
                                    </button>
                                ))}
                            </div>

                            {rating > 0 && (
                                <p className="text-center text-sm">
                                    You selected {rating} out of {totalStars} stars
                                </p>
                            )}
                        </Modal.Body>

                        <Modal.Footer>
                            <Button
                                type="submit"
                                className="w-full"
                                size="sm"
                                onClick={handleSubmit}
                                isDisabled={isLoading || rating === 0}
                            >
                                {isLoading ? (
                                    <div className="flex items-center gap-2">
                                        <Spinner color="current" size="sm" />
                                        <span>Updating...</span>
                                    </div>
                                ) : (
                                    "Give Review"
                                )}
                            </Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default ReviewDoctor;