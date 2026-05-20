"use client";

import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Button, Modal } from "@heroui/react";

const ReviewDoctor = ({ doctorName }) => {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);

    const totalStars = 5;

    const handleSubmit = () => {
        console.log(`Submitted rating for ${doctorName}: ${rating}`);
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
                            <Button size="sm" onClick={handleSubmit} disabled={rating === 0}>
                                Submit
                            </Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default ReviewDoctor;