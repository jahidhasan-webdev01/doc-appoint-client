import {
    ChevronDown,
} from "@gravity-ui/icons";
import { Accordion } from "@heroui/react";
import SectionTitle from "../ui/SectionTitle";

export default function FAQ() {
    const items = [
        {
            title: "How can I book a doctor appointment?",
            content:
                "You can easily book an appointment by selecting your preferred doctor, choosing an available schedule, and confirming your booking online.",
        },
        {
            title: "Do I need an account to book appointments?",
            content:
                "Yes, you need to create an account and log in to manage your appointments and access personalized healthcare services.",
        },
        {
            title: "Are the doctors verified?",
            content:
                "Yes, all doctors available on DocAppoint are verified and experienced professionals from different medical specialties.",
        },
        {
            title: "Can I cancel or reschedule my appointment?",
            content:
                "Yes, you can cancel or reschedule your appointment from your dashboard before the scheduled consultation time.",
        },
        {
            title: "Is my personal information secure?",
            content:
                "Absolutely. We use secure technologies and data protection practices to keep your personal and medical information safe.",
        },
        {
            title: "How can I contact support?",
            content:
                "You can contact our support team through email, phone, or the contact form available on our website.",
        },
    ];

    return (
        <div className="py-10">
            <SectionTitle title="FAQ" />
            <Accordion className="mt-5">
                {items.map((item, index) => (
                    <Accordion.Item key={index}>
                        <Accordion.Heading>
                            <Accordion.Trigger>
                                {item.title}
                                <Accordion.Indicator>
                                    <ChevronDown />
                                </Accordion.Indicator>
                            </Accordion.Trigger>
                        </Accordion.Heading>
                        <Accordion.Panel>
                            <Accordion.Body>{item.content}</Accordion.Body>
                        </Accordion.Panel>
                    </Accordion.Item>
                ))}
            </Accordion>
        </div>
    );
}